---
layout: default
title: CMIP7 Guidance for Data Users
---

# CMIP7 Guidance for Data Users

#TODO: table of content

## 1.  Accessing CMIP7 data

CMIP7 model output is available through a distributed data archive developed and operated by the [Earth System Grid Federation (ESGF)][ESGFHome]. 


There are X options to access the data:
 1. MetaGrid: https://aims2.llnl.gov/search/cmip6/
    An easy-to-use website that provides an interface to search and download ESGF data. It provides access through http downloads, wget script, OPENDAP URL and Globus transfers.
 2. ESGpull: https://esgf.github.io/esgf-download/
    A python librairy that allows the user to interface with the ESGF search API. It handles scanning, downloading and updating datasets, files and queries from ESGF.


TODO: maybe add secondary sources ? 
TODO: add a ESGF paper CMIP7 if it exists
TODO: add link to dataHolding page when it exists ? is it really necessary ?

 <details>
    <summary>More on access</summary>
    The data are hosted on a collection of nodes located at modeling centers or data centers across the world. The data can be accessed through any of the CMIP7 CoG web interfaces, which enable users to search across the entire distributed archive as if it were all centrally located.
</details>


## 2.  Terms of use, citations and registration requirements

To enable modeling groups and others who support CMIP7 to demonstrate its impact (and secure ongoing funding), you are required to cite and acknowledge those who have made CMIP6 possible. 
Data references give credit to the data providers and enable the traceability of research findings (see [contribution to the CMIP6 Model Analysis Workshop][citemaws]). when using CMIP7 data, you must: 

 1. Acknowledge CMIP7.
    In the Acknowledgment section, please insert the following text:"We acknowledge the World Climate Research Programme, which, through its Working Group on Coupled Modelling, coordinated and promoted CMIP6. We thank the climate modeling groups for producing and making available their model output, the Earth System Grid Federation (ESGF) for archiving the data and providing access, and the multiple funding agencies who support CMIP6 and ESGF."

 2. Cite the specific dataset(s) used.
    Data citations are accessible from the [Citation Search](https://www.wdc-climate.de/ords/f?p=127:2), MetaGrid and via the furtherInfoUrl found in the global attributes of the data.
    Note that two citation granularities on experiment data and on model/MIP data are provided.

    Please include the data version to the given citation information in form of:

    Authors/Data Creators (publication year): Title. Version YYYYMMDD. Earth System Grid Federation. DOI.
    (e.g. Swart et al. (2019): CCCma CanESM5 model output prepared for CMIP6 ScenarioMIP. Version 20190429. Earth System Grid Federation. https://doi.org/10.22033/ESGF/CMIP6.1317.)

    where ESGF is the data publisher and the DOI points to the data citation landing page. If the latest dataset version included in your study is unknown, use the date of data download instead to characterize the version.
    
 3. Register your work.
    Register your work on the (CMIP7 Publication Hub)[https://cmip-publications.llnl.gov/view/CMIP6/]. 
    TODO: do we still want this ?

<span style="color:red;font-weight:bold">Please carefully read and adhere to</span> the [CMIP7 Terms of Use][termsOfUse]. 

 <details>
    <summary>More info on citation</summary>
    Further information on the data citation concept for CMIP6 is available at [cmip6cite.wdc-climate.de][cmip6cite] and described in [Stockhause and Lautenschlager (2017)][Stockhause2017]. Citations can also be search using [DataCite's catalog][datacitecat] and [Google's Dataset Search][gdatasetsearch].
</details>

## 3. CMIP7 facets

TODO: does ES-DOC exists for CMIP7 ?

CMIP7 datasets can be identified through a series of facets that represents key attributes of the data. The facets are:

* activity
* experiments
TODO: finish the list

The values associated with eahc facets is standardized through the [controlled vocabularies (CV)](URL). This section provides helpful links and gives a bit more information on a few key facets. 


### i.  Experiments
* [List of experiments](https://wcrp-cmip.github.io/CMIP6_CVs/docs/CMIP6_experiment_id.html)
* [Documentation](es-docsExperiments)

 <details>
    <summary>More on Documentation</summary>
    The ES-DOC project has already recorded documentation of the CMIP6 experiments including lists of forcings, model configuration, numerical requirements, information about building the ensembles, links to citations and contact information of the principal investigators as well as text descriptions and information about the rationale behind each experiment.

    Further documentation about CMIP6 experiments will be available from [ES-DOC][es-docsCmip6], and the reference controlled vocabularies used to define and identify these experiments are available in a [“json” file][experimentIdJson] and are also rendered in [table form][experimentIdhtml].
</details>


The CMIP7 protocol and experiments are described in a [special issue][GMDSpecialIssue] of Geoscientific Model Development with an overview of the design and scientific strategy provided in the lead article of that issue by [Dunne et al. (2025)][Dunne2025].

TODO: add a bit about the fasttrack and fix the text below to fit CMIP7

Each model participating in CMIP7 will contribute results from the four DECK experiments (piControl, AMIP, abrupt4xCO2, and 1pctCO2) and the CMIP6 historical simulation. These experiments are the only ones directly overseen by the the [CMIP Panel][CMIPPanel], and together these constitute the ongoing (slowly evolving) “CMIP Activity”. They are described in [Eyring et al. (2016)][EyringEtAl16].

In addition to the DECK and historical simulations, each modeling group may choose to contribute to any of the [CMIP6 endorsed MIPs][CMIP6EndorsedMips]. See the [GMD Special CMIP6 Issue][GMDSpecialIssue] for descriptions of each MIP and its experiment specifications. The official names of the currently endorsed CMIP6 MIP activities are recorded in a [“json” file][activityIdJson].

When called for by the experiment protocol, [standard forcing data sets][input4mipsHome] (e.g. [Durack et al. (2018)]) have been used. Any deviation from the standard forcing are supposed to be clearly [documented](#5-model-and-experiment-documentation).





### ii. Variables

[List of variables](URL)
The [CMIP6 Data Request][cmip6DataRequest] defines the variables requested from each experiment and specifies the time intervals for which they are supposed to be reported. One option for perusing the lists of variables that should be available from at least some experiments is to display the [excel spreadsheet][variableListXls]. 

TODO: explain branded variables

### iii.  Models
* [List of models](URL)
* [Documentation](es-docsModels)
 <details>
    <summary>More on Model documentation</summary>
Models will be described on a realm-by-realm basis (i.e. atmosphere, ocean, sea ice, etc.) as well as the top level (coupled model configuration). ES-DOC provides a variety of tools (script-based, text-based, and form-based) for gathering this information from modeling groups, allowing for personal/institutional preference in the way in which documents are created.
</details>

TODO: add more in models

### iii.  Members

In each model output file the “ripf” identifier is used to uniquely distinguish each member of an ensemble, but the differences between members may not always be clearly (or correctly) recorded in the “variant_info” global attribute. ES-DOC will therefore serve as the reference source for understanding differences between ensemble members.
#TODO: hopefully not True in CMIP7?
 As described in more detail elsewhere ([Definition of CMIP6 netCDF global attributes][cmip6GlobalAttGoogleDoc] and [ES-DOC for CMIP6][es-docsCmip6]), there are 4 indices defining an ensemble member: “r” for realization, “i” for initialization, “p” for physics, and “f” for forcing. Modeling groups will record in ES-DOC the key to interpreting the differences between simulations identified by different indices. In particular for each forcing index, the list of forcing data sets applied in the simulation will be recorded.


## 4. CMIP7 data format

As in previous phases, all CMIP7 output has been written to netCDF files with one variable stored per file. The data have been “cmorized” (i.e., written in conformance with the [CF-conventions][cfConventionsPage] and all the CMIP standards). The CMIP6 data requirements are defined and discussed in the following documents:

* [Definition of CMIP6 netCDF global attributes][cmip6GlobalAttGoogleDoc]
* [Reference “controlled vocabularies” (CV’s) for CMIP6][cmip6Cvs]
* [Specifications][cmip6GlobalAttGoogleDoc] for file names, directory structures, and CMIP6 Data Reference Syntax (DRS)
* Specifications for output file content, structure, and metadata are available in [draft google doc](https://goo.gl/neswPr).
* [Guidance on grid requirements][cmip6GridGoogleDoc]
* [Information on pressure levels][cmip6PressureLevelsPdf] requested
* [Guidance on time-averaging][cmip6TimeAveragesCog] (with masking)
#TODO: put CMIP7 version of those

Note that in the above, controlled vocabularies (CV’s) play a key role in ensuring uniformity in the description of data sets across all models. For all but variable-specific information, [reference CV’s][cmip6Cvs] are being maintained by PCMDI. These CV’s are relied on in constructing file names and directory structures, and they enable faceted searches of the CMIP6 archive as called for in the [search requirements document][esgfSearchRequirementsGoogleDoc].

As indicated in the [guidance specifications for output grids][cmip6GridGoogleDoc], weights will be provided to regrid all output to a few standard grids (e.g., 1x1 degree). All regridding information (weights, lats, lons, etc.) will be stored consistent with a standard format approved by the WIP.

Each CMIP6 model output file includes a global attribute called “further_info_url” which will link to a signpost web page providing simulation/ensemble information, model configuration details, current contact details, data citation details etc. This link is also selectable next to each dataset returned by the CMIP6 CoG search interface. ES-DOC will include documentation of:

TODO: a lot of this section seems a bit more relevant to modellers than users, rework this section

## 6.  Reporting suspected errors
Information about discovered issues of CMIP7 data is captured by the [ES-DOCs Errata Service][ES-DOCErrataService].
The Errata Service provides the ability to query modifications and/or corrections applied to CMIP6 data in two ways:

* A **[user friendly filtered list of ESGF known issues][errataSearchUIDoc]**.
* A **[search interface that helps retrace a specific dataset/file version history][errataPIDLookupDoc]**.

Any ESGF user can report an error to the appropriate modeling group (see "contact" attribute in the netCDF files), or through the <a href="mailto:esgf-user@llnl.gov">ESGF user mailing list</a>. After a report is received, the corresponding data manager can create a new errata entry using
[an easy and user-friendly form][errataFormCreateDoc]. A [command line client][errataCLCDoc] is also available. The aim is to clearly and concisely document the issue and through the PID integration, this errata service will include all the datasets/files affected when documentation is completed correctly.

## 8.  CMIP7 organisation and governance
The [CMIP Panel][CMIPPanel], which is a standing subcommittee of the WCRP’s [Working Group on Climate Modeling][wgcmSite] provides overall guidance and oversight of CMIP activities. Notably it determines which MIPs will participate in each phase of CMIP using the established selection criteria listed in Table 1 of [Eyring et al. (2016)][EyringEtAl16]. On [its webpages][wgcmCmip6] the CMIP Panel provides additional information that may be of interest to CMIP7 participants, but only the CMIP6 Guide (this document) provides definitive documentation of CMIP6 technical requirements. TODO: "requirements" are more for modelers than users?

The [endorsed MIPs][CMIP6EndorsedMips] are managed by independent committees, but acceptance of endorsement obligates them to follow CMIP’s technical requirements. Thus across all MIPs, the modeling groups can prepare their model output following a common procedure.

The CMIP Panel has delegated responsibility for most of the technical requirements of CMIP to the [WGCM Infrastructure Panel (WIP)][wip]. The mission, rationale and Terms of Reference for the panel can be found [here][wip]. The WIP has drafted a number of position papers summarizing CMIP7 requirements and specifications. 

Information is under preparation describing the governance of the following:

* ESGF & CoG & major replication data centers
* [CF-conventions][cfConventionsPage]
* [ES-DOC][es-docsCmip6]
* [Data citation][CMIP6Citation]
* Long-term archival (LTA) and data quality assurance (QA)
* Evaluation activities
* [input4MIPs][input4mipsHome]
* [obs4MIPs][obs4mips]
TODO: check this lists

## 9. Main Changes Compared to CMIP6

## 10. Fresh Eyes Entry-Level Documentation


First time using CMIP? Need a bit more help ? Check out the Entry-Level Documentation, put together by the Fresh Eyes group: TODO:url.

 <details>
    <summary>Toggle Switch</summary>
    Foldable Content
</details>

TODO: fix all the links
TODO: in PR list all I have removed and why. (eg. Experimental conformance, why is this different than experiment documentation)
Tried to avoid wall-of-text and gear more towards users, not modellers or node manager.