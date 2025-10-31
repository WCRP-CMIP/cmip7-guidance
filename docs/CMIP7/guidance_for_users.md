---
layout: default
title: CMIP7 Guidance for Data Users
---

# CMIP7 Guidance for Data Users


This page is designed to inform users of climate model outputs on key CMIP7 concepts and tools. It is a landing page to redirect them to the proper resources to learn more.

## 1.  Accessing CMIP7 data

CMIP7 model output is available through a distributed data archive developed and operated by the Earth System Grid Federation (ESGF). The data are hosted on a collection of nodes located at centers across the world.

??? info "Understanding ESGF Nodes"

    ESGF is a collaboration of groups, agencies and institutions around the world, that are dedicated to the development and operation of a long-term system for the management, access and analysis of climate data. The ESGF architecture is based on a system of autonomous and distributed Nodes. Data is hosted on a collection of nodes located at modelling centres or data centres across the world. Nodes exchange information about their data holdings and services, trust each other for registering users and establishing access control decisions. The net result is that a user can use a web browser or rich desktop client, connect to any Node, and seamlessly find and access data throughout the federation.

    More documentation on CMIP nodes is available [here][nodes].

    ESGF data usage and publication metrics can be found on the [CMCC dashboard][cmcc].


There are 3 options to access the data:

 1. **MetaGrid** ([LLNL][metagridllnl], [DKRZ][metagriddkrz], [ORNL][metagridornl], [CEDA][metagridceda])

    Web interface to search and download ESGF data. It provides access through http downloads, wget scripts, OPeNDAP URLs and Globus transfers. It is most useful for browsing and downloading a small number of files. The data can be accessed through any of the CMIP7 web interfaces linked above, which enable users to search across the entire distributed archive as if it were all centrally located.

 2. **Using a python package**

    For larger queries, it might be more approriate to automate the search and downloads. A few packages are available to do this:

    * [ESGpull][esgpull]
    * [ESMValTool][esmvaltool]
    * [intake-esgf][intakeesgf]

3. **Alternative Access Platforms**

    Some CMIP data is also hosted in non-ESGF storage facilities. Below are links to some of these. If you know of another place CMIP data is currently being stored, please submit [this form][altaccess] to let us and the community know!

    1. COMING SOON

    For all non-ESGF data access routes, we encourage users to verify that the data used is the latest version. 



## 2.  Terms of use, citations and registration requirements
<!--TODO: Maybe divide in mandatory and optional https://github.com/WCRP-CMIP/cmip7-guidance/issues/30 -->
<!--TODO: Try to add a link to this in global attrs if possible-->
To enable modeling groups and others who support CMIP7 to demonstrate its impact (and secure ongoing funding), you are required to cite and acknowledge those who have made CMIP7 possible. When using CMIP7 data, you must: 

 1. **Acknowledge CMIP7.**

    In the Acknowledgment section, please insert the following text:

    >We acknowledge the World Climate Research Programme's Coupled Model Intercomparison Project contributors who coordinated and promoted CMIP7. We thank the climate modelling groups for producing and making available their model output, the Earth System Grid Federation (ESGF) for archiving the data and providing access, and the multiple funding agencies who support CMIP7 and ESGF.

 2. **Cite the specific dataset(s) used.**

    Please include a citation in the form of:

        Authors/Data Creators (publication year): Title. Version YYYYMMDD. Earth System Grid Federation. DOI.
        
    e.g. 

        Swart et al. (2019): CCCma CanESM5 model output prepared for CMIP6 ScenarioMIP. Version 20190429. Earth System Grid Federation. https://doi.org/10.22033/ESGF/CMIP6.1317. 

  
    If multiple models are used in a publication, please include a table with the sources (name of the model), institutions and citations. If the journal has a citation limit, a table in the Supporting Information is acceptable.

    ??? Question "How to find the DOI and the version?"

        🔍 The DOIs can be found through the [Citation Search][citesearch] or in the citation tab of a dataset on MetaGrid. The version is indicated in a column on MetaGrid.

        🖱️ It is also possible to take the `tracking_id` global attribute of a file and append it to [http://hdl.handle.net/](http://hdl.handle.net/) (e.g., [http://hdl.handle.net/hdl:21.14100/be06a059-363d-47a4-97a2-d5253190fd15](http://hdl.handle.net/hdl:21.14100/be06a059-363d-47a4-97a2-d5253190fd15)). From there, you can follow "The file is part of the following aggregation(s)" and find the DOI and version of the dataset.

        🤖 Instead of doing this by hand, you can also use the PROTOTYPE python librairy [CMIPcite][cmipcite]. Input tracking_id(s), dataset PID(s) or file paths(s) to retrieve the citation (textually or in the bibtex format).

        Note that there are two citation granularities on experiment data and on model/MIP data.
        <!--TODO: How should the user choose which one to use ?  -->

        Further information on the data citation concept is described in [Stockhause and Lautenschlager (2017)][Stockhause2017]. Citations can also be search using [DataCite's catalog][datacitecat] and [Google's Dataset Search][gdatasetsearch].
    


 3. **Cite a paper from the GMD special issue**

    Cite, as appropriate, one or more of the [CMIP7 GMD special issue][GMDSpecialIssue] articles, which include an overview of the CMIP7 experiment design and descriptions of the CMIP7 endorsed MIPs.
    <!--TODO: Be clearer about what we actually want here. Maybe use experiment CV to get the right citation, once they have that information. -->
 
 4. **Register your work.**

    Register your work on the [CMIP7 Publication Hub][CMIPpubs]. 


5. **Adhere to the license**
    
    Adhere to the license conditions listed in the global attribute of each dataset.


6. **Use the standard vocabularies**

    Where possible, we recommend using the CMIP7 standard names as defined by the [controlled vocabularies (CVs)][cmipCvs] (see [Section 3](#3-cmip7-facets-and-their-documentation)) to make references as clear and unambiguous as possible. However, if your audience requires different terms, then you should use those but we recommend keeping a mapping from the term your audience uses to the standard name, again to ensure that references can be unambiguously resolved where needed. Refer to the collection of CMIP7 models as the “CMIP7 multi-model ensemble”.
    


!!! warning

    The CMIP7 archive contains the output of scientific simulations of the past and potential future that are subject to multiple sources of error, ranging from errors in data handling, to errors in the representation of the real world in either the model, or the experimental setup for which the model was used. Different parts of the CMIP6 archive may be subject to differing levels of such errors, and users should be alert to these issues, and their potential consequences (and to the limitations of liability expressed in the data license).




## 3. CMIP7 facets and their documentation

CMIP7 datasets can be identified through a series of facets that represents key attributes of the data. The main facets are:

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

!!! tip inline end

    Current advice from the CVs task team is to only access the CVs via [ESGVOC](https://esgf.github.io/esgf-vocab/). This will be subject to change in the future.

The values associated with each facets are standardized through the [CVs][cmipCvs]. They are used to search the ESGF database and can be found in the global attributes of the data. This section provides helpful links and gives a bit more information on a few key facets. 




### 3.1.  Source and Variant
* [List of models][sourcelist]
* [Essential Model Documentation (EMD)][emd]

The Essential Model Documentation (EMD) contains high-level description intended to contain information on model formulation that can be easily compared between different models. EMD pages contain links to more in-depth model documentation for each source.

??? info "Basic Concepts to Understand Variants"
    The source facet gives the name of the model and the variant facet represents each member of an ensemble for a given source. It can also be called the “ripf” identifier (“r” for realization, “i” for initialization, “p” for physics, and “f” for forcing).

A useful tool to evaluate the models is the [Rapid Evaluation Framework (REF)][ref]. It is an evaluation of the models participating in CMIP6 and the CMIP7 Assessment Fast Track (AFT).


### 3.2.  Experiment and Activity
* [List of experiments][experimentlist]
* [List of activities][activitylist]

 
The CMIP7 protocol and experiments are described in a [special issue][GMDSpecialIssue] of Geoscientific Model Development with an overview of the design and scientific strategy provided in the lead article of that issue by [Dunne et al. (2025)][dunne2025].



 
??? info "Basic Concepts to Understand Experiments"

    Each model participating in CMIP7 will contribute results from the eight DECK experiments. These experiments are the only ones directly overseen by the [CMIP Panel][CMIPPanel], and together these constitute the ongoing (slowly evolving) “CMIP” activity. In addition to the DECK, each modeling group may choose to contribute to any of the [CMIP7 endorsed MIPs][CMIPEndorsedMips]. The CMIP panel identifies key experiments to be prioritized on different timelines through fast tracks. The first one is the AFT.
    
    MORE COMING SOON

<!--TODO: https://github.com/WCRP-CMIP/cmip7-guidance/issues/46-->


### 3.3. Variable
* [List of variables][varlist]
* [Branded variable documentation](branded_variables.md)

The variables produced in CMIP7 were recommended by the [CMIP7 Data Request task team][cmipDataRequest]. In CMIP7, the concept of branded variable identifies the variables. It follows the template: 

```
<variableRootDD>_<temporalLabelDD>-<verticalLabelDD>-<horizontalLabelDD>-<areaLabelDD>
```
<!--TODO: add more about Data Request. Not super clear to be how it can be useful to users yet.-->

### 3.4 Frequency
* [List of frequencies][freqlist]

Models report data on a variety of time steps. The [MIP table][varlist] defines the frequency with which requested variables in an experiment should be reported.



### 3.5 Grid
* [List of grids][gridlist]
* [List of pressure levels][levellist]
* [CMIP7 Guidance on Grids][grid]

Different climate models use a variety of different horizontal grids that are documented in the [grid registry][gridreg].

Different MIPs also different requirements for vertical grid reporting. Output can be defined either on the native model levels, or it can be remapped to pressure levels.

??? info "Masked Means"

    Many variables in CMIP7 are defined as masked means, defined as the mean of a quantity over a portion of the grid cell defined by an area type. For more information on this, see this [webpage][maskavg].


## 4. CMIP7 data format

As in previous phases, all CMIP7 output has been written to netCDF files.
Before being published, these files must pass the [ESGF Quality Control (ESGF-QC)][esgfqc].
Many modelling center use the [CMOR][cmor] software to standardize their files. They are then said to have been “CMORized”.

Essential features of CMORized data are:

* Standardized naming from CMIP [CVs][cmipCvs]
* Consistent [file naming convention][GlobalAttrs]
* Uniform metadata structure:
    * [Global attributes][GlobalAttrs]
    * Coordinate variables: time, lat, lon, (if appropiate, lev)
    * One variable per file
* Self-describing (all metadata needed to interpret the data are included in the file)
* Consistent units and standard names following [CF conventions][cfConventionsPage]


!!! info "Calendars and Time Handling in CMIP7"


    Climate models often use simplified or idealized calendars for numerical and computational reasons.  
    CMIP7 data include a `calendar` attribute associated with the `time` coordinate, which determines how dates are represented.  
    Before working with any CMIP dataset, users should **check the calendar type** and handle it appropriately.

    Common calendars found in CMIP data include:

    - **gregorian** (or **standard**) — follows the real-world Gregorian calendar including leap years.  
    - **noleap** — identical to Gregorian but without leap days (365 days every year).  
    - **360_day** — each year has 12 months of 30 days (total 360 days).  
    - **proleptic_gregorian** — a continuous Gregorian calendar extended backward in time.  
    - **all_leap** — every year has 366 days (all years include a leap day).

    These calendars are stored in the `calendar` attribute of the `time` variable, for example:

    ```bash
    ncdump -h tas_day_ACCESS-ESM1-5_ssp585.nc | grep calendar
    ```

    Further reading in CF conventions for time coordinate: [https://cfconventions.org/Data/cf-conventions/cf-conventions-1.12/cf-conventions.html#time-coordinate](https://cfconventions.org/Data/cf-conventions/cf-conventions-1.12/cf-conventions.html#time-coordinate)

    It is recommended that users use the [cftime][cftime] library to handle time.


## 5.  Reporting suspected errors
Information about discovered issues of CMIP7 data is captured by the [Errata Service][ErrataService].

Any CMIP data user can report an error by submitting an issue through the Propose button on the Errata Service website.
Proposing an errata through the webform requires a contact email address. Once the webform is validated and created, a special link is created and can be shared but the issue won’t appear on the index page. A moderator (from the relevant modelling centre providing data) will validate, update or reject the entry. If no moderation action is taken after 14 day validation period, the issue will be publicly indexed, albeit with a special flag.

<!--TODO: Add info on contact when decided https://github.com/WCRP-CMIP/cmip7-guidance/issues/45 -->


## 6. New to CMIP?

First time using CMIP? Need a bit more help ? Check out the [Entry-Level Documentation][eld] (COMING SOON), put together by the [Fresh Eyes on CMIP][FeoC] group.

You have a more specific question ? Ask it on the [Fresh Eyes Platform][platform]. (You need to register [here][register] first.)




###### Document version: 2025-10-08
 <!--  abbreviation -->
*[CMIP7]: Coupled Model Intercomparison Project phase 7
*[ESGF]: Earth System Grid Federation
*[LLNL]: Lawrence Livermore National Laboratory
*[DKRZ]: Deutsches Klimarechenzentrum (German Climate Computation Centre)
*[ORNL]: Oak Ridge National Laboratory
*[CEDA]: Centre for Environmental Data Analysis (at the National Centre for Atmospheric Science in the UK)
*[GMD]: Geoscientific Model Development
*[MIPs]: Model Intercomparison Projects
*[CVs]: Controlled Vocabularies
*[EMD]: Essential Model Documentation
*[REF]: Rapid Evaluation Framework
*[DECK]: Diagnostic, Evaluation and Characterization of Klima
*[AFT]: Assessment Fast Track
*[CMOR]: Climate Model Output Rewriter

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
[CC BY 4.0]: https://creativecommons.org/licenses/by/4.0/
[esmvaltool]: https://esmvaltool.org/
[intakeesgf]: https://github.com/esgf2-us/intake-esgf
[cmor]:https://cmor.llnl.gov/
[cftime]: https://unidata.github.io/cftime/
[ref]: https://dashboard.climate-ref.org
[cmipcite]: https://cmipcite.readthedocs.io/en/latest/
[citesearch]: https://www.wdc-climate.de/ords/f?p=127:2 
[esgfqc]: https://github.com/ESGF/esgf-qc 
[nodes]: https://wcrp-cmip.org/map/
[cmcc]: https://esgf-ui.cmcc.it/esgf-dashboard-ui/index.html
[altaccess]: http://bit.ly/CMIP-data-platform

 <!-- CMIP7 links -->
[GMDSpecialIssue]: https://gmd.copernicus.org/articles/special_issue1315.html
[dunne2025]: https://gmd.copernicus.org/articles/18/6671/2025/
[Durack2025]:https://journals.ametsoc.org/view/journals/bams/106/8/BAMS-D-25-0119.1.xml

[aft]: https://wcrp-cmip.org/cmip-phases/cmip7/fast-track/
[cmipCvs]: https://github.com/WCRP-CMIP/CMIP7-CVs
[cmipDataRequest]: https://wcrp-cmip.org/cmip-phases/cmip7/cmip7-data-request/
[FeoC]: https://wcrp-cmip.org/cmip7-task-teams/fresh-eyes-on-cmip/
[GlobalAttrs]: https://zenodo.org/records/17250297
[grid]: https://zenodo.org/records/15697025
[variableid]: https://airtable.com/apphMYhEwBJfd0bUK/shrYC888Qxf8gkvky/tblpo5L8maBIGlM1B/viwNNzrqK5oPL7zk2


 <!-- TODO: all the links below need to be changed when the new version arrives. airtable ? -->
 <!-- CMIP6 links -->
 <!--[CMIPpubs]: https://cmip-publications.llnl.gov/view/CMIP6/  
[varlist]: https://airtable.com/apphXCUgASIeT6jCz/shrFnB7BtupFo1Y1e/tblqMgEiHxBJbwm2x
[experimentlist]: https://wcrp-cmip.github.io/CMIP6_CVs/docs/CMIP6_experiment_id.html
[activitylist]: https://github.com/WCRP-CMIP/CMIP6_CVs/blob/master/CMIP6_activity_id.json
[sourcelist]: https://wcrp-cmip.github.io/CMIP6_CVs/docs/CMIP6_source_id.html 
[gridlist]: https://github.com/WCRP-CMIP/CMIP6_CVs/blob/main/CMIP6_grid_label.json 
[levellist]: https://cmip6dr.github.io/Data_Request_Home/Documents/CMIP6_pressure_levels.pdf?id=88 
[freqlist]: https://github.com/WCRP-CMIP/CMIP6_CVs/blob/main/CMIP6_frequency.json
[maskavg]: https://wcrp-cmip.github.io/WGCM_Infrastructure_Panel/CMIP6/time_and_area_averaging.html -->


 <!-- unknown links -->
 <!--
[emd]:  ?
[eld]: ?
[gridreg]: ?
-->
