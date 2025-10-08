---
layout: default
title: CMIP7 Guidance for Data Users
---

# CMIP7 Guidance for Data Users

#TODO: table of content

## 1.  Accessing CMIP7 data

CMIP7 model output is available through a distributed data archive developed and operated by the Earth System Grid Federation (ESGF). 


There are X options to access the data:
 1. [MetaGrid][metagrid]

    An easy-to-use website that provides an interface to search and download ESGF data. It provides access through http downloads, wget script, OPENDAP URL and Globus transfers.
    TODO:is there more than one link that works ?
 2. [ESGpull][esgpull]

    A python librairy that allows the user to interface with the ESGF search API. It handles scanning, downloading and updating datasets, files and queries from ESGF.


TODO: maybe add secondary sources  ? I assume CMIP7 will also be on copernicus climate data store and maybe a pangeo cloud ?

 <details>
    <summary>More on access</summary>
    The data are hosted on a collection of nodes located at modeling centers or data centers across the world. The data can be accessed through any of the CMIP7 CoG web interfaces, which enable users to search across the entire distributed archive as if it were all centrally located.
</details>


## 2.  Terms of use, citations and registration requirements

To enable modeling groups and others who support CMIP7 to demonstrate its impact (and secure ongoing funding), you are required to cite and acknowledge those who have made CMIP7 possible. Data references give credit to the data providers and enable the traceability of research findings (see [contribution to the CMIP6 Model Analysis Workshop][citemaws]). When using CMIP7 data, you must: 

 1. Acknowledge CMIP7.

    In the Acknowledgment section, please insert the following text:

    "We acknowledge the World Climate Research Programme, which, through its Working Group on Coupled Modelling, coordinated and promoted CMIP6. We thank the climate modeling groups for producing and making available their model output, the Earth System Grid Federation (ESGF) for archiving the data and providing access, and the multiple funding agencies who support CMIP7 and ESGF."

 2. Cite the specific dataset(s) used.

    Data citations are accessible from the [Citation Search][citesearch], MetaGrid and via the furtherInfoUrl found in the global attributes of the data.
    Note that there are two citation granularities on experiment data and on model/MIP data.

    Please include the data version to the given citation information in form of:

        Authors/Data Creators (publication year): Title. Version YYYYMMDD. Earth System Grid Federation. DOI.
        
    (e.g. Swart et al. (2019): CCCma CanESM5 model output prepared for CMIP6 ScenarioMIP. Version 20190429. Earth System Grid Federation. https://doi.org/10.22033/ESGF/CMIP6.1317. )

    where ESGF is the data publisher and the DOI points to the data citation landing page. If the latest dataset version included in your study is unknown, use the date of data download instead to characterize the version.
    
 3. Register your work.
    Register your work on the [CMIP7 Publication Hub][CMIPpubs]. 
    TODO:do we still want this ?

<span style="color:red;font-weight:bold">Please carefully read and adhere to</span> the [CMIP7 Terms of Use](terms_of_use.md). 

 <details>
    <summary>More info on citation</summary>
    Further information on the data citation concept for CMIP6 is available at [cmip6cite.wdc-climate.de][es-docsCmip] and described in [Stockhause and Lautenschlager (2017)][Stockhause2017]. Citations can also be search using [DataCite's catalog][datacitecat] and [Google's Dataset Search][gdatasetsearch].
</details>

## 3. CMIP7 facets
TODO: is facets the best word ?

TODO: does ES-DOC still exists ? all the links are down..

CMIP7 datasets can be identified through a series of facets that represents key attributes of the data. The facets are:

* activity
* institution
* source (model)
* experiment
* variant (member)
* realm
* frequency
* variable
* grid
* version

TODO: finish the list

The values associated with each facets are standardized through the [controlled vocabularies (CV)][cmipCvs]. This section provides helpful links and gives a bit more information on a few key facets. 


### i.  Experiment
* [List of experiments][experimentIdhtml]
* [Documentation](es-docsExperiments)

 <details>
    <summary>More on Documentation</summary>
    The ES-DOC project has already recorded documentation of the CMIP6 experiments including lists of forcings, model configuration, numerical requirements, information about building the ensembles, links to citations and contact information of the principal investigators as well as text descriptions and information about the rationale behind each experiment.

    Further documentation about CMIP6 experiments will be available from [ES-DOC][es-docsCmip], and the reference controlled vocabularies used to define and identify these experiments are available in a [“json” file][experimentIdJson] and are also rendered in [table form][experimentIdhtml].
</details>
 
The CMIP7 protocol and experiments are described in a [special issue][GMDSpecialIssue] of Geoscientific Model Development with an overview of the design and scientific strategy provided in the lead article of that issue by [Dunne et al. (2025)][dunne2025].

TODO: add a bit about the fasttrack and fix the text below to fit CMIP7

Each model participating in CMIP7 will contribute results from the four DECK experiments (piControl, AMIP, abrupt4xCO2, and 1pctCO2) and the CMIP6 historical simulation. These experiments are the only ones directly overseen by the the [CMIP Panel][CMIPPanel], and together these constitute the ongoing (slowly evolving) “CMIP Activity”. 

In addition to the DECK and historical simulations, each modeling group may choose to contribute to any of the [CMIP6 endorsed MIPs][CMIPEndorsedMips]. See the [GMD Special CMIP6 Issue][GMDSpecialIssue] for descriptions of each MIP and its experiment specifications. The official names of the currently endorsed CMIP6 MIP activities are recorded in a [“json” file][activityIdJson].

When called for by the experiment protocol, [standard forcing data sets][input4mipsHome] (e.g. [Durack2025]) have been used. Any deviation from the standard forcing are supposed to be clearly documented.



### ii. Variable
* [List of variables](URL)

The [CMIP7 Data Request][cmipDataRequest] defines the variables requested from each experiment and specifies the time intervals for which they are supposed to be reported. One option for perusing the lists of variables that should be available from at least some experiments is to display the [excel spreadsheet][variableListXls]. 

TODO: explain branded variables

### iii.  Source
* [List of models][sourceIdhtml]
* [Documentation](es-docsModels)
 <details>
    <summary>More on Model documentation</summary>
Sources (models) will be described on a realm-by-realm basis (i.e. atmosphere, ocean, sea ice, etc.) as well as the top level (coupled model configuration). ES-DOC provides a variety of tools (script-based, text-based, and form-based) for gathering this information from modeling groups, allowing for personal/institutional preference in the way in which documents are created.
</details>

TODO: add more in models

### iv.  Member

In each model output file the “ripf” identifier is used to uniquely distinguish each member of an ensemble, but the differences between members may not always be clearly (or correctly) recorded in the “variant_info” global attribute. ES-DOC will therefore serve as the reference source for understanding differences between ensemble members.
#TODO: hopefully not True in CMIP7?
 As described in more detail elsewhere ([Definition of CMIP6 netCDF global attributes][cmipGlobalAttGoogleDoc] and [ES-DOC for CMIP7][es-docsCmip]), there are 4 indices defining an ensemble member: “r” for realization, “i” for initialization, “p” for physics, and “f” for forcing. Modeling groups will record in ES-DOC the key to interpreting the differences between simulations identified by different indices. In particular for each forcing index, the list of forcing data sets applied in the simulation will be recorded.


## 4. CMIP7 data format

As in previous phases, all CMIP7 output has been written to netCDF files with one variable stored per file. The data have been “cmorized” (i.e., written in conformance with the [CF-conventions][cfConventionsPage] and all the CMIP standards). The CMIP6 data requirements are defined and discussed in the following documents:

* [Definition of CMIP7 netCDF global attributes][cmipGlobalAttGoogleDoc]
* [Reference “controlled vocabularies” (CV’s) for CMIP6][cmip6Cvs]
* [Specifications][cmipGlobalAttGoogleDoc] for file names, directory structures, and CMIP6 Data Reference Syntax (DRS)
* Specifications for output file content, structure, and metadata are available in [draft google doc](https://goo.gl/neswPr).
* [Guidance on grid requirements][cmipGridGoogleDoc]
* [Information on pressure levels][cmipPressureLevelsPdf] requested
* [Guidance on time-averaging][cmipTimeAveragesCog] (with masking)
#TODO: put CMIP7 version of those

Note that in the above, controlled vocabularies (CV’s) play a key role in ensuring uniformity in the description of data sets across all models. For all but variable-specific information, [reference CV’s][cmip6Cvs] are being maintained by PCMDI. These CV’s are relied on in constructing file names and directory structures, and they enable faceted searches of the CMIP6 archive as called for in the [search requirements document][esgfSearchRequirementsGoogleDoc].

As indicated in the [guidance specifications for output grids][cmipGridGoogleDoc], weights will be provided to regrid all output to a few standard grids (e.g., 1x1 degree). All regridding information (weights, lats, lons, etc.) will be stored consistent with a standard format approved by the WIP.

Each CMIP6 model output file includes a global attribute called “further_info_url” which will link to a signpost web page providing simulation/ensemble information, model configuration details, current contact details, data citation details etc. This link is also selectable next to each dataset returned by the CMIP6 CoG search interface. ES-DOC will include documentation of:

TODO: a lot of this section seems a bit more relevant to modellers than users, rework this section

TODO: say something about REF

## 6.  Reporting suspected errors
Information about discovered issues of CMIP7 data is captured by the [ES-DOCs Errata Service][ES-DOCErrataService].
The Errata Service provides the ability to query modifications and/or corrections applied to CMIP6 data in two ways:

* A **[user friendly filtered list of ESGF known issues][errataSearchUIDoc]**.
* A **[search interface that helps retrace a specific dataset/file version history][errataPIDLookupDoc]**.

Any ESGF user can report an error to the appropriate modeling group (see "contact" attribute in the netCDF files), or through the <a href="mailto:esgf-user@llnl.gov">ESGF user mailing list</a>. After a report is received, the corresponding data manager can create a new errata entry using
[an easy and user-friendly form][errataFormCreateDoc]. A [command line client][errataCLCDoc] is also available. The aim is to clearly and concisely document the issue and through the PID integration, this errata service will include all the datasets/files affected when documentation is completed correctly.

## 8.  CMIP7 organisation and governance
The [CMIP Panel][CMIPPanel], which is a standing subcommittee of the WCRP’s [Working Group on Climate Modeling][wgcmSite] provides overall guidance and oversight of CMIP activities.

The [endorsed MIPs][CMIPEndorsedMips] are managed by independent committees, but acceptance of endorsement obligates them to follow CMIP’s technical requirements. Thus across all MIPs, the modeling groups can prepare their model output following a common procedure.

The CMIP Panel has delegated responsibility for most of the technical requirements of CMIP to the [WGCM Infrastructure Panel (WIP)][wip]. The mission, rationale and Terms of Reference for the panel can be found [here][wip]. The WIP has drafted a number of position papers summarizing CMIP7 requirements and specifications. 




## 9. Entry-Level Documentation


First time using CMIP? Need a bit more help ? Check out the Entry-Level Documentation, put together by the Fresh Eyes group: TODO:url.

#TODO: questions on fresh eyes platform

 <details>
    <summary>Toggle Switch</summary>
    Foldable Content
</details>



TODO: fix all the links
TODO: in PR list all I have removed and why. (eg. Experimental conformance, why is this different than experiment documentation)
Tried to avoid wall-of-text and gear more towards users, not modellers or node manager.

TODO: what should be here vs what should be on https://wcrp-cmip.org/cmip-phases/cmip7/ ? do we need both ?


###### Document version: 2025-10-08


[metagrid]: [https://aims2.llnl.gov/search/]
[esgpull]: [https://esgf.github.io/esgf-download/]
[citemaws]: https://doi.org/10.5281/zenodo.2621084
[citesearch]: http://bit.ly/CMIP6_Citation_Search
[CMIPpubs]: https://cmip-publications.llnl.gov/view/CMIP6/
[es-docsCmip]: https://es-doc.org/cmip6
[Stockhause2017]: https://doi.org/10.5334/dsj-2017-030
[gdatasetsearch]: https://toolbox.google.com/datasetsearch/
[datacitecat]: https://search.datacite.org/works?query=prefix:10.22033
[cmipCvs]: https://github.com/WCRP-CMIP/CMIP6_CVs
[experimentIdhtml]: https://wcrp-cmip.github.io/CMIP6_CVs/docs/CMIP6_experiment_id.html
[es-docsExperiments]: https://es-doc.org/cmip6-experiments
[GMDSpecialIssue]: http://www.geosci-model-dev.net/special_issue590.html
[dunne2025]: https://gmd.copernicus.org/articles/18/6671/2025/
[CMIPPanel]: https://www.wcrp-climate.org/wgcm-cmip/cmip-panel
[CMIPEndorsedMips]: https://www.wcrp-climate.org/modelling-wgcm-mip-catalogue/modelling-wgcm-cmip6-endorsed-mips
[activityIdJson]: https://github.com/WCRP-CMIP/CMIP6_CVs/blob/master/CMIP6_activity_id.json
[input4mipsHome]: https://esgf-node.llnl.gov/projects/input4mips/
[Durack2025]:https://journals.ametsoc.org/view/journals/bams/106/8/BAMS-D-25-0119.1.xml
[cmipDataRequest]: https://cmip6dr.github.io/Data_Request_Home
[variableListXls]: http://proj.badc.rl.ac.uk/svn/exarch/CMIP6dreq/tags/latest/dreqPy/docs/CMIP6_MIP_tables.xlsx
[sourceIdHtml]: https://wcrp-cmip.github.io/CMIP6_CVs/docs/CMIP6_source_id.html
[es-docsModels]: https://es-doc.org/cmip6-models
[cmipGlobalAttGoogleDoc]: http://goo.gl/v1drZl
[cfConventionsPage]: http://cfconventions.org/
[cmipGridGoogleDoc]: http://goo.gl/1oA7bO
[cmipPressureLevelsPdf]: https://cmip6dr.github.io/Data_Request_Home/Documents/CMIP6_pressure_levels.pdf
[cmipTimeAveragesCog]: https://wcrp-cmip.github.io/WGCM_Infrastructure_Panel/CMIP6/time_and_area_averaging.html
[esgfSearchRequirementsGoogleDoc]: https://docs.google.com/document/d/1jNBw2am28Hxux_YuCL_mYMi18EEGkJSGrtNntOs3PJo
[ES-DOCErrataService]: https://errata.es-doc.org/static/index.html
[errataSearchUIDoc]: https://es-doc.github.io/esdoc-errata-client/searchUI.html
[errataPIDLookupDoc]: https://es-doc.github.io/esdoc-errata-client/lookup.html
[errataFormCreateDoc]: https://es-doc.github.io/esdoc-errata-client/create.html
[errataCLCDoc]: https://es-doc.github.io/esdoc-errata-client/client.html
[wgcmSite]: https://www.wcrp-climate.org/wgcm-overview
[wip]: https://wcrp-cmip.github.io/WGCM_Infrastructure_Panel

