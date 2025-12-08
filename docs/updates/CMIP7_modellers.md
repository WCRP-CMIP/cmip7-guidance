---
layout: default
title: CMIP7 Updates for modelling groups
---

# Updates for Modelling groups

This page will be updated with information of interest to modelling groups.

## 8th December 2025

### Updates from the WIP

* Following the infrastructure drop-in sessions in November updates have been made to the 
  [CMIP7 guidance for modellers webpages](https://wcrp-cmip.github.io/cmip7-guidance/CMIP7/guidance_for_modellers/). These include:
    * Information on repacking netCDF files that are to be published to CMIP7 has been added, and the cmip7repack tool is available for testing. 
      Note that repacking will be **required** for publishing data to ESGF. Questions and queries are welcome via the [cmip7repack github repository](https://github.com/NCAS-CMS/cmip7_repack).
    * There has been a change to the guidance on QC tools, with a IOOS/compliance-checker plugin replacing a fork of the compliance checker code.
* QA/QC: early testing is possible, see details in the 
  [guidance for modellers pages](https://wcrp-cmip.github.io/cmip7-guidance/CMIP7/guidance_for_modellers/#7-software-for-checking-output). 
  Users should note that:
    * Checks for CMIP6 and CORDEX-CMIP6 data are implemented, while CMIP7 checks are being finalized.
    * Some checks will be required by the ESGF publisher, but data producers can also choose to run a heavier set of checks, 
      where the data arrays within files are examined, to ensure compliance with REF standards.
    * Further guidance will be provided regarding the CMIP7 QC checks in the coming weeks.
* Updates are planned to CMOR to ensure full compliance with the CMIP7 data standards (v3.13 requires a few minor changes) along with 
  optimisations to the internal structure of files being produced.  The Controlled Vocabularly (CV) file needed by CMOR is available for testing   and further updates will be made available via [github](https://github.com/WCRP-CMIP/cmip7-cmor-tables/).
* A new Data Request release (v1.2.2.3) is expected before Christmas, with a very limited set of necessary changes, and  updated CMOR tables will 
  be made available shortly after its release. Release notes will specify what has changed in the Data Request since the last patch release 
  (v.1.2.2.2).
* To register a model for inclusion in CMIP7 the Essential Model Documentation (EMD) must be provided. The registration form, and associated 
  process, will be completed early in the new year, but to allow groups to collect and prepare the information needed to complete the form on github 
  a spreadsheet will be made available. Note that this spreadsheet cannot be used for submission of the EMD — completion of the github form *will be
  required*.

### ESGF updates

#### Core Architecture

For the ESGF-NG (Next Generation) architecture, load testing has been successfully completed through a series of structured Data Challenges. 
Since no CMIP7 data are yet available for publishing, production dates for the completion of the core architecture have been pushed out to 
the end of December 2025 for “friendly project” collections and to the end of January 2026 for all projects. 
The bulk of the Core Architecture team effort has transitioned to testing and integration, including coordinating republication of CMIP6 and 
CMIP6Plus data, collaborating with the Rapid Evaluation Framework (REF) delivery team, and several data discovery and access applications that 
are being made compatible with ESGF-NG’s new search and publishing interfaces based on STAC. 
The STAC extensions for the CMIP6 and CMIP7 collections are in final stages of development by the CVs Task Team and the esgvoc developers.

#### Publisher

Work is underway to update ESGF’s client publishing suite - *esgpublish*, and dependent on tools (e.g., *esgdrs* and *esgmapfile*) in order to
support ESGF-NG’s new STAC interfaces. 
The suite is expected to be completed by the end of the calendar year (2025), and testing will involve republication of CMIP6 and CMIP6Plus 
data and publication of CORDEX-CMIP6. 
It is expected to be available for production use for CMIP7 Assessment Fast Track data by February 2026.

#### Documentation

Starting with existing documentation for using, operating, and developing ESGF infrastructure, new documentation will be produced for the ESGF 
Next Generation architecture. 
Developers for software components will be asked to create documentation for users, node operators, and other developers that will be published on 
a new ESGF website designed to serve these audiences. A prototype of the website structure has been created, and it will soon be available with 
limited content, while access to existing site content will be maintained in an archival fashion.

### Accessing CMIP7 relevant information sources

To ensure that modelling groups are able to access all services relevant to CMIP7 activities a list of domain names is being put together 
[here](../CMIP7/domain_names.md). 
This will initially include domain names for ESGF, the errata service and services relevant to the REF, but others will be added as they are collected.

----