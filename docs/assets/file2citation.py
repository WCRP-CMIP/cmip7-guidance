#!/usr/bin/env python
"""
Author: Juliette Lavoie
Date: October 22, 2025
"""
import argparse
import os
from netCDF4 import Dataset
from pyhandle.handleclient import RESTHandleClient
import requests
import re

def main():
    parser = argparse.ArgumentParser(
        description="From CMIP7 file(s) or tracking_id(s) output the right citation."
    )

    parser.add_argument(
        "inputs",
        nargs="+",  
        help="One or more file path(s) or tracking_id(s)."
    )

    parser.add_argument(
        "-o", "--output",
        choices=["text", "bibtex",],
        default="text",
        help="Output format (default: text)"
    )

    parser.add_argument(
        "-a", "--authors",
        choices=["long", "short",],
        default="short",
        help="Author list format for text output (default: short). Long writes all authors, short uses 'et al.'"
    )

    args = parser.parse_args()

    for item in args.inputs:

        if os.path.isfile(item):
            with Dataset(item, "r") as nc:
                if "tracking_id" not in nc.ncattrs():
                    raise ValueError(f"Are you sure this is a CMIP7 file ? No tracking_id found in file {item}")
                tracking_id = getattr(nc, "tracking_id")
        else:
            tracking_id = item
        
        # call the handle client
        client = RESTHandleClient(handle_server_url='http://hdl.handle.net/')

        # get the handle of the associated dataset
        handle_ds=client.get_value_from_handle(tracking_id, 'IS_PART_OF')

        # get version
        version=client.get_value_from_handle(handle_ds, 'VERSION_NUMBER')

        # get doi
        doi=client.get_value_from_handle(handle_ds, 'IS_PART_OF')
        doi=doi.replace('doi:','')

        # get string citation
        if args.output == "text":
            r = requests.get(f"https://api.datacite.org/dois/{doi}")
            data=r.json()['data']['attributes']

            # et al version
            if args.authors == "short":
                # name exception for consortium
                if len(data['creators'])==1:
                    creators= data['creators'][0]['name']
                else:
                    creators= f"{data['creators'][0]['familyName']} et al."
            # everybody version
            elif args.authors == "long":
                creators = "; ".join([c['name'] for c in data['creators']])

            citation= f"{creators} ({data['publicationYear']}): {data['titles'][0]['title']}. Version {version}. {data['publisher']}. https://doi.org/{doi}."
            print(citation)

        # get bibtex
        elif args.output == "bibtex":
            url =  "http://dx.doi.org/" + doi
            headers = {"accept": "application/x-bibtex"}
            r = requests.get(url, headers=headers)
            bib=r.text
            # add version to title
            bib=re.sub(r'title = {(.*?)}', lambda m: f'title = {{{m.group(1)}. Version {version}.}}', bib)

            print(bib)

            
            
            
            #TODO: add extra citations. Dunne et al. (2025)? Activity paper based on experiment ?




if __name__ == "__main__":
    main()