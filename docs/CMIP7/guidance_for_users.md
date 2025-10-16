---
layout: default
title: CMIP7 Guidance for Data Users
---

# CMIP7 Guidance for Data Users

This page is designed to inform data users on key CMIP7 concepts and tools. It is a landing page to redirect them to the proper resources to learn more.


## 1.  Accessing CMIP7 data

CMIP7 model output is available through a distributed data archive developed and operated by the Earth System Grid Federation (ESGF). The data are hosted on a collection of nodes located at modeling centers or data centers across the world.


There are 2 options to access the data:

 1. **MetaGrid** ([LLNL][metagridllnl], [DKRZ][metagriddkrz], [ORNL][metagridornl], [CEDA][metagridceda])

    An easy-to-use website that provides an interface to search and download ESGF data. It provides access through http downloads, wget scripts, OPeNDAP URLs and Globus transfers. The data can be accessed through any of the CMIP7 web interfaces linked above, which enable users to search across the entire distributed archive as if it were all centrally located.

 2. [**ESGpull**][esgpull]

    A python library that allows the user to interface with the ESGF search API. It handles scanning, downloading and updating datasets, files and queries from ESGF.

This page will be updated as other access routes become available.


## 2.  Terms of use, citations and registration requirements

To enable modeling groups and others who support CMIP7 to demonstrate its impact (and secure ongoing funding), you are required to cite and acknowledge those who have made CMIP7 possible. When using CMIP7 data, you must: 

 1. **Acknowledge CMIP7.**

    In the Acknowledgment section, please insert the following text:

    >"We acknowledge the World Climate Research Programme, which, through its Working Group on Coupled Modelling, coordinated and promoted CMIP7. We thank the climate modeling groups for producing and making available their model output, the Earth System Grid Federation (ESGF) for archiving the data and providing access, and the multiple funding agencies who support CMIP7 and ESGF."

 2. **Cite the specific dataset(s) used.**

    Data citations are accessible from the [Citation Search][citesearch] and MetaGrid.
    Note that there are two citation granularities on experiment data and on model/MIP data.

    TODO: verify that there really isn't any way from the file to the citation (and documentation) directly.. 
          Further_info is dead.
          My current understanding is that there is a tracking_id  that is unique to the file (ex. http://hdl.handle.net/hdl:21.14100/c682c920-8175-47ad-8657-9836ff69709d). There is also unique identifier for the dataset (http://hdl.handle.net/hdl:21.14100/0f158e88-925f-3edf-983d-34109aa7269a). But in CMIP7 they will not be linked. I don't see the dataset id in the global attrs. and I don't see either link to a citation. Katharina Berger <berger@dkrz.de> seems to be the person in charge of this.

    Please include a citation in the form of:

        Authors/Data Creators (publication year): Title. Version YYYYMMDD. Earth System Grid Federation. DOI.
        
    e.g. 

        Swart et al. (2019): CCCma CanESM5 model output prepared for CMIP6 ScenarioMIP. Version 20190429. Earth System Grid Federation. https://doi.org/10.22033/ESGF/CMIP6.1317. 

    where ESGF is the data publisher and the DOI points to the data citation landing page. If the latest dataset version included in your study is unknown, use the date of data download instead to characterize the version.
    
 3. **Register your work.**

    Register your work on the [CMIP7 Publication Hub][CMIPpubs]. 
    TODO:do we still want this ?

 <!-- admonition test -->
!!! warning

    Please carefully read and adhere to</span> the [CMIP7 Terms of Use](terms_of_use.md).

??? Note "More info on citations"
    Further information on the data citation concept for CMIP7 is available [here][cmipcite] and described in [Stockhause and Lautenschlager (2017)][Stockhause2017]. Citations can also be search using [DataCite's catalog][datacitecat] and [Google's Dataset Search][gdatasetsearch]. [test](google.com)


## 3. CMIP7 facets and their documentation
TODO: is facets the best word ?

CMIP7 datasets can be identified through a series of facets that represents key attributes of the data. The facets are:

* activity
* institution
* source
* experiment
* variant
* realm
* frequency
* variable
* grid
* version


The values associated with each facets are standardized through the [controlled vocabularies (CV)][cmipCvs]. They are used to search the ESGF database and can be found in the global attributes of the data. This section provides helpful links and gives a bit more information on a few key facets. 


### 3.1.  Source and Variant
* [List of models][sourceIdhtml]
* [Essential Model Documentation (EMD)][emd]

The Essential Model Documentation (EMD) contains high-level description intended to contain information on model formulation that can be easily compared between different models. EMD pages contain links to more in-depth model documentation for each source.

The source facet gives the name of the model and the variant facet represents each member of an ensemble for a given source. It can also be called the “ripf” identifier (“r” for realization, “i” for initialization, “p” for physics, and “f” for forcing).

A useful tool to assess the models is the [Rapid Evaluation Framework (REF)][ref]. It is an assessment of the models participating in the CMIP7 Assessment Fast Track. 

TODO: maybe add a grid section, when https://github.com/WCRP-CMIP/Variable-Registry/issues/111 is decided

### 3.2.  Experiment and Activity
* [List of experiments][experimentIdhtml]
* [List of activities][activityIdJson]
* TODO: Does experiment doc exist for CMIP7 ?

 
The CMIP7 protocol and experiments are described in a [special issue][GMDSpecialIssue] of Geoscientific Model Development with an overview of the design and scientific strategy provided in the lead article of that issue by [Dunne et al. (2025)][dunne2025].

Each model participating in CMIP7 will contribute results from the eight DECK experiments (piControl, AMIP, abrupt4xCO2, 1pctCO2, historical, piClim-Control, piClim-anthro, piClim-4xCO2). These experiments are the only ones directly overseen by the [CMIP Panel][CMIPPanel], and together these constitute the ongoing (slowly evolving) “CMIP” activity. 

In addition to the DECK, each modeling group may choose to contribute to any of the [CMIP7 endorsed MIPs][CMIPEndorsedMips]. The CMIP panel identifies key experiments to be prioritized on different timelines through fast tracks. The first one is the [Assessment Fast Track (AFT)][aft].




### 3.3. Variable
* [List of variables](URL)
* [Branded variable documentation](branded_variable.md)

The variables produced in CMIP7 were recommended by the [CMIP7 Data Request task team][cmipDataRequest]. In CMIP7, the concept of branded variable uniquely identifies each variable. It follows the  template: 

```
<variableRootDD>_<temporalLabelDD>-<verticalLabelDD>-<horizontalLabelDD>-<areaLabelDD>
```




## 4. CMIP7 data format

As in previous phases, all CMIP7 output has been written to netCDF files with one variable stored per file. The data have been “cmorized” (i.e., written in conformance with the [CF-conventions][cfConventionsPage] and all the CMIP standards). There are mandatory [global attributes][GlobalAttrs] to include in each files.


For advanced users who want to understand the data better, the CMIP7 data requirements that were given to modelling centers are defined and discussed in the following documents:

* [Guidance on grid requirements][grid]
* more to come




## 5.  Reporting suspected errors
Information about discovered issues of CMIP7 data is captured by the [Errata Service][ErrataService].

Any CMIP data user can report an error to the appropriate modeling group (see "contact" attribute in the netCDF files), or through the <a href="mailto:esgf-user@llnl.gov">ESGF user mailing list</a>. After a report is received, the corresponding data manager can create a new errata entry.


TODO: contact global attr is gone 


## 7. New to CMIP?

First time using CMIP? Need a bit more help ? Check out the [Entry-Level Documentation][eld] (COMING SOON), put together by the [Fresh Eyes on CMIP][FeoC] group.

You have a more specific question ? Ask it on the [Fresh Eyes Platform][platform]. (You need to register [here][register] first.)



TODO: make pretty with more admonitions. https://squidfunk.github.io/mkdocs-material/reference/admonitions/
TODO: abbreviations ?

###### Document version: 2025-10-08
 <!-- abbreviations -->
 *[CMIP]: Coupled Model Intercomparison Project


 <!-- valid general links -->
[metagridllnl]: https://aims2.llnl.gov/search/
[metagriddkrz]: https://esgf-metagrid.cloud.dkrz.de/search
[metagridornl]: https://esgf-node.ornl.gov/search
[metagridceda]: https://esgf-ui.ceda.ac.uk/search
[esgpull]: https://esgf.github.io/esgf-download/
[citemaws]: https://doi.org/10.5281/zenodo.2621084
[Stockhause2017]: https://doi.org/10.5334/dsj-2017-030
[gdatasetsearch]: https://toolbox.google.com/datasetsearch/
[datacitecat]: https://search.datacite.org/works?query=prefix:10.22033
[CMIPPanel]: https://www.wcrp-climate.org/wgcm-cmip/cmip-panel
[cfConventionsPage]: http://cfconventions.org/
[gov]: https://wcrp-cmip.org/cmip-governance/
[wgcmSite]: https://www.wcrp-climate.org/wgcm-overview
[wip]: https://wcrp-cmip.github.io/WGCM_Infrastructure_Panel
[CMIPEndorsedMips]: https://wcrp-cmip.org/mips/
[platform]: https://github.com/orgs/Fresh-Eyes-on-CMIP/discussions
[register]: https://github.com/Fresh-Eyes-on-CMIP/member-requests/issues/new?template=new_user.yml
[ErrataService]: https://errata.ipsl.fr/static/index.html

 <!-- CMIP7 links -->
[GMDSpecialIssue]: https://gmd.copernicus.org/articles/special_issue1315.html
[dunne2025]: https://gmd.copernicus.org/articles/18/6671/2025/
[Durack2025]:https://journals.ametsoc.org/view/journals/bams/106/8/BAMS-D-25-0119.1.xml
[ref]: https://wcrp-cmip.org/cmip-phases/cmip7/rapid-evaluation-framework/
[aft]: https://wcrp-cmip.org/cmip-phases/cmip7/fast-track/
[cmipCvs]: https://github.com/WCRP-CMIP/CMIP7-CVs
[cmipDataRequest]: https://wcrp-cmip.org/cmip-phases/cmip7/cmip7-data-request/
[FeoC]: https://wcrp-cmip.org/cmip7-task-teams/fresh-eyes-on-cmip/
[GlobalAttrs]: https://zenodo.org/records/17250297
[grid]: https://zenodo.org/records/15697025


#TODO: all the links below need to be changed when the new version arrives
 <!-- valid CMIP6 links -->
[citesearch]: http://bit.ly/CMIP6_Citation_Search   
[CMIPpubs]: https://cmip-publications.llnl.gov/view/CMIP6/
[experimentIdhtml]: https://wcrp-cmip.github.io/CMIP6_CVs/docs/CMIP6_experiment_id.html
[activityIdJson]: https://github.com/WCRP-CMIP/CMIP6_CVs/blob/master/CMIP6_activity_id.json
[sourceIdHtml]: https://wcrp-cmip.github.io/CMIP6_CVs/docs/CMIP6_source_id.html
[cmipcite]: http://cmip6cite.wdc-climate.de

 <!-- unknown links -->
[emd]:  ?
[eld]: ?
