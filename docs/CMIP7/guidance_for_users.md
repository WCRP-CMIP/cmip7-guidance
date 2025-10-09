---
layout: default
title: CMIP7 Guidance for Data Users
---

# CMIP7 Guidance for Data Users

This page is designed to inform data users on key CMIP7 concepts and tools and redirect them to the proper resources to learn more.


## 1.  Accessing CMIP7 data

CMIP7 model output is available through a distributed data archive developed and operated by the Earth System Grid Federation (ESGF). 


There are X options to access the data:
 1. [**MetaGrid**][metagrid]

    An easy-to-use website that provides an interface to search and download ESGF data. It provides access through http downloads, wget script, OPENDAP URL and Globus transfers.
    TODO:is there more than one link that works ?
 2. [**ESGpull**][esgpull]

    A python library that allows the user to interface with the ESGF search API. It handles scanning, downloading and updating datasets, files and queries from ESGF.


TODO: maybe add secondary sources  ? I assume CMIP7 will also be on Copernicus climate data store and maybe a pangeo cloud ?

 <details>
    <summary>More on access</summary>
    The data are hosted on a collection of nodes located at modeling centers or data centers across the world. The data can be accessed through any of the CMIP7 web interfaces, which enable users to search across the entire distributed archive as if it were all centrally located.
</details>


## 2.  Terms of use, citations and registration requirements

To enable modeling groups and others who support CMIP7 to demonstrate its impact (and secure ongoing funding), you are required to cite and acknowledge those who have made CMIP7 possible. Data references give credit to the data providers and enable the traceability of research findings (see [contribution to the CMIP6 Model Analysis Workshop][citemaws]). When using CMIP7 data, you must: 

 1. **Acknowledge CMIP7.**

    In the Acknowledgment section, please insert the following text:

    "We acknowledge the World Climate Research Programme, which, through its Working Group on Coupled Modelling, coordinated and promoted CMIP6. We thank the climate modeling groups for producing and making available their model output, the Earth System Grid Federation (ESGF) for archiving the data and providing access, and the multiple funding agencies who support CMIP7 and ESGF."

 2. **Cite the specific dataset(s) used.**

    Data citations are accessible from the [Citation Search][citesearch], MetaGrid and via the furtherInfoUrl found in the global attributes of the data.
    Note that there are two citation granularities on experiment data and on model/MIP data.

    Please include the data version to the given citation information in the form of:

        Authors/Data Creators (publication year): Title. Version YYYYMMDD. Earth System Grid Federation. DOI.
        
    (e.g. Swart et al. (2019): CCCma CanESM5 model output prepared for CMIP6 ScenarioMIP. Version 20190429. Earth System Grid Federation. https://doi.org/10.22033/ESGF/CMIP6.1317. )

    where ESGF is the data publisher and the DOI points to the data citation landing page. If the latest dataset version included in your study is unknown, use the date of data download instead to characterize the version.
    
 3. **Register your work.**

    Register your work on the [CMIP7 Publication Hub][CMIPpubs]. 
    TODO:do we still want this ?

 <!-- admonition test -->
!!! warning
   Please carefully read and adhere to</span> the [CMIP7 Terms of Use](terms_of_use.md). 

 <details>
    <summary>More info on citations</summary>
    Further information on the data citation concept for CMIP7 is available at [cmip6cite.wdc-climate.de][es-docsCmip] and described in [Stockhause and Lautenschlager (2017)][Stockhause2017]. Citations can also be search using [DataCite's catalog][datacitecat] and [Google's Dataset Search][gdatasetsearch].
</details>

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

#TODO: do we still have ES-DOC in CMIP7 ? 


### 3.1.  Experiment and Activity
* [List of experiments][experimentIdhtml]
* [List of activities][activityIdJson]
* [Documentation](es-docsExperiments)

 <details>
    <summary>More on Documentation</summary>
    The ES-DOC project has recorded documentation of the CMIP7 experiments including lists of forcings, model configuration, numerical requirements, information about building the ensembles, links to citations and contact information of the principal investigators as well as text descriptions and information about the rationale behind each experiment.
</details>
 
The CMIP7 protocol and experiments are described in a [special issue][GMDSpecialIssue] of Geoscientific Model Development with an overview of the design and scientific strategy provided in the lead article of that issue by [Dunne et al. (2025)][dunne2025].

Each model participating in CMIP7 will contribute results from the eight DECK experiments (piControl, AMIP, abrupt4xCO2, 1pctCO2, historical, piClim-Control, piClim-anthro, piClim-4xCO2). These experiments are the only ones directly overseen by the [CMIP Panel][CMIPPanel], and together these constitute the ongoing (slowly evolving) “CMIP” activity. 

In addition to the DECK, each modeling group may choose to contribute to any of the [CMIP7 endorsed MIPs][CMIPEndorsedMips]. See the [GMD Special CMIP6 Issue][GMDSpecialIssue] for descriptions of each MIP and its experiment specifications. The CMIP panel identifies key experiments to be prioritized on different timelines through fast tracks. The first one is the [Assessment Fast Track (AFT)][aft].




### 3.2. Variable
* [List of variables](URL)
* [Branded variable documentation](branded_variable.md)

The variables produced in CMIP7 were recommended by the [CMIP7 Data Request task team][cmipDataRequest]. In CMIP7, the concept of branded variable uniquely identifies each variable. It follows the  template: 
```
<variableRootDD>_<temporalLabelDD>-<verticalLabelDD>-<horizontalLabelDD>-<areaLabelDD>
```


### 3.3.  Source and Variant
* [List of models][sourceIdhtml]
* [Essential Model Documentation (EMD)][emd]
* [ES-DOC][es-docsCmip]


Many sources, or models, participate in CMIP7. Each CMIP6 model output file includes a global attribute called “further_info_url” which will link to a signpost web page providing simulation/ensemble information, model configuration details, current contact details, data citation details, etc.  Two types of documentation are available to understand the differences between models: 

1. [**Essential Model Documentation (EMD)**][emd]
    High-level description intended to contain information on model formulation that can be easily compared between different models. Mandatory in CMIP7
2. [**ES-DOC**][es-docsCmip]
    More in-depth but less standardized documentation of each model. Note that each model might also put documentation up on their own website.


In each model output file, the “ripf” identifier, named variant, is used to uniquely distinguish each member of an ensemble, but the differences between members may not always be clearly (or correctly) recorded in the “variant_info” global attribute. ES-DOC will therefore serve as the reference source for understanding differences between ensemble members.
#TODO: hopefully not True in CMIP7?
There are 4 indices defining an ensemble member: “r” for realization, “i” for initialization, “p” for physics, and “f” for forcing. Modeling groups will record in ES-DOC the key to interpreting the differences between simulations identified by different indices. 

A useful tool to assess the models is the [Rapid Evaluation Framework (REF)][ref]. It is a systematic and rapid performance assessment of the expected models participating in the CMIP7 Assessment Fast Track. 

## 4. CMIP7 data format

As in previous phases, all CMIP7 output has been written to netCDF files with one variable stored per file. The data have been “cmorized” (i.e., written in conformance with the [CF-conventions][cfConventionsPage] and all the CMIP standards). There are mandatory [global attributes][cmipGlobalAttGoogleDoc] to include in each files.


For advanced users who want to understand the data better, the CMIP7 data requirements that were given to modelling centers are defined and discussed in the following documents:
* [Specifications][cmipGlobalAttGoogleDoc] for file names, directory structures, and CMIP6 Data Reference Syntax (DRS)
* Specifications for output file content, structure, and metadata are available in [draft google doc](https://goo.gl/neswPr).
* [Guidance on grid requirements][cmipGridGoogleDoc]
* [Information on pressure levels][cmipPressureLevelsPdf] requested
* [Guidance on time-averaging][cmipTimeAveragesCog] (with masking)




## 5.  Reporting suspected errors
Information about discovered issues of CMIP7 data is captured by the [ES-DOCs Errata Service][ES-DOCErrataService].
The Errata Service provides the ability to query modifications and/or corrections applied to CMIP6 data in two ways:

* A **[user friendly filtered list of ESGF known issues][errataSearchUIDoc]**.
* A **[search interface that helps retrace a specific dataset/file version history][errataPIDLookupDoc]**.

Any ESGF user can report an error to the appropriate modeling group (see "contact" attribute in the netCDF files), or through the <a href="mailto:esgf-user@llnl.gov">ESGF user mailing list</a>. After a report is received, the corresponding data manager can create a new errata entry using
[an easy and user-friendly form][errataFormCreateDoc]. A [command line client][errataCLCDoc] is also available. The aim is to clearly and concisely document the issue and through the PID integration, this errata service will include all the datasets/files affected when documentation is completed correctly.

## 6.  CMIP7 organisation and governance
The [CMIP Panel][CMIPPanel], which is a standing subcommittee of the WCRP’s [Working Group on Climate Modeling][wgcmSite] provides overall guidance and oversight of CMIP activities. The CMIP Panel has delegated responsibility for most of the technical requirements of CMIP to the [WGCM Infrastructure Panel (WIP)][wip].More on the governance [here][gov].

The [endorsed MIPs][CMIPEndorsedMips] are managed by independent committees, but acceptance of endorsement obligates them to follow CMIP’s technical requirements. Thus across all MIPs, the modeling groups can prepare their model output following a common procedure.



## 7. New to CMIP?

First time using CMIP? Need a bit more help ? Check out the [Entry-Level Documentation][eld] (COMING SOON), put together by the [Fresh Eyes on CMIP][FeoC] group.

You have a more specific question ? Ask it on the [Fresh Eyes Platform][platform]. (You need to register [here][register] first.)




TODO: in PR list all I have removed and why. (eg. Experimental conformance, why is this different than experiment documentation)
Tried to avoid wall-of-text and gear more towards users, not modellers or node manager.
TODO: what should be here vs what should be on https://wcrp-cmip.org/cmip-phases/cmip7/ ? do we need both ? can we avoid proliferation of pages that say some but not all of the same thing ?
#TODO: make pretty with more admonitions. https://squidfunk.github.io/mkdocs-material/reference/admonitions/


###### Document version: 2025-10-08

 <!-- valid general links -->
[metagrid]: [https://aims2.llnl.gov/search/]
[esgpull]: [https://esgf.github.io/esgf-download/]
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


 <!-- CMIP7 links -->
[GMDSpecialIssue]: https://gmd.copernicus.org/articles/special_issue1315.html
[dunne2025]: https://gmd.copernicus.org/articles/18/6671/2025/
[Durack2025]:https://journals.ametsoc.org/view/journals/bams/106/8/BAMS-D-25-0119.1.xml
[ref]: https://wcrp-cmip.org/cmip-phases/cmip7/rapid-evaluation-framework/
[aft]: https://wcrp-cmip.org/cmip-phases/cmip7/fast-track/
[cmipCvs]: https://github.com/WCRP-CMIP/CMIP7-CVs
[cmipDataRequest]: https://wcrp-cmip.org/cmip-phases/cmip7/cmip7-data-request/
[FeoC]: https://wcrp-cmip.org/cmip7-task-teams/fresh-eyes-on-cmip/


#TODO: all the links below need to be changed when the new version arrives
 <!-- valid CMIP6 links -->
[citesearch]: http://bit.ly/CMIP6_Citation_Search   
[CMIPpubs]: https://cmip-publications.llnl.gov/view/CMIP6/
[experimentIdhtml]: https://wcrp-cmip.github.io/CMIP6_CVs/docs/CMIP6_experiment_id.html
[activityIdJson]: https://github.com/WCRP-CMIP/CMIP6_CVs/blob/master/CMIP6_activity_id.json
[sourceIdHtml]: https://wcrp-cmip.github.io/CMIP6_CVs/docs/CMIP6_source_id.html
[cmipGlobalAttGoogleDoc]: http://goo.gl/v1drZl
[cmipGridGoogleDoc]: http://goo.gl/1oA7bO
[cmipPressureLevelsPdf]: https://cmip6dr.github.io/Data_Request_Home/Documents/CMIP6_pressure_levels.pdf
[cmipTimeAveragesCog]: https://wcrp-cmip.github.io/WGCM_Infrastructure_Panel/CMIP6/time_and_area_averaging.html

 <!-- unknown links -->
[emd]:  ?
[eld]: ?

 <!-- broken links -->
 [es-docsCmip]: https://es-doc.org/
 [es-docsExperiments]: https://es-doc.org/cmip6-experiments
 [es-docsModels]: https://es-doc.org/cmip6-models
 [ES-DOCErrataService]: https://errata.es-doc.org/static/index.html
 [errataSearchUIDoc]: https://es-doc.github.io/esdoc-errata-client/searchUI.html
 [errataPIDLookupDoc]: https://es-doc.github.io/esdoc-errata-client/lookup.html
 [errataFormCreateDoc]: https://es-doc.github.io/esdoc-errata-client/create.html
 [errataCLCDoc]: https://es-doc.github.io/esdoc-errata-client/client.html
