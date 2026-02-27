---
layout: default
title: CMIP7 Updates for modelling groups
---

# Updates for Modelling groups

This page will be updated with information of interest to modelling groups that the CMIP IPO has communicated by email (most recent at top).
---
## 26th February 2026

A further update on CMIP7 future forcings availability, the simple plumes aerosol data for the scenarios VL and H are now published:
 
Fiedler, S., & Azoulay, A. (2026). CMIP7 Climate Forcings Dataset: Simple plumes for anthropogenic aerosols in H and VL scenarios (SPv2.1) [Data set]. Zenodo. <https://doi.org/10.5281/zenodo.18713154> 

And available through input4MIPs at <https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/aerosol-optical-properties-macv2-sp/#cmip7_1>

If you find an issue, please [create an issue on GitHub](https://github.com/PCMDI/input4MIPs_CVs/issues/new?template=data_issue.md) so that the identification and resolution of this issue is publicly accessible. Emails sent to centres are being archived at <https://input4mips-cvs.readthedocs.io/en/latest/forcings-email-archive/>

Thank you to the dataset providers, Stephanie Fiedler and Alon Azoulay, for all their efforts.

---

## 24th February 2026

### Updates to CMIP7 Guidance pages

Several recent updates have been made  to the [CMIP7 Guidance and Documentation webpages](https://wcrp-cmip.github.io/cmip7-guidance/docs/). These include:

- Section listing updates for modellers so you don’t have to hunt through your emails: [Updates for Modellers](https://wcrp-cmip.github.io/cmip7-guidance/docs/Updates_for_Modellers/)
- EMD registration open to beta testers
- Energy Consumption and Carbon Footprint metrics spreadsheet 
- Experiment set up and forcing guidance (initial version, further updates expected)
- Quality Control (QC) guidance for CMIP7 and for those modelling centres wishing to be REF-ready
- List of key domain names – useful if you need to  whitelist these within your organisation

### Essential Model Documentation

To register a model for inclusion in CMIP7 the [Essential Model Documentation (EMD)](https://doi.org/10.5281/zenodo.15439551) must be provided. The EMD registration forms are now available for beta testers, and documentation is available at <https://emd.mipcvs.dev/docs>. Model output grids must also be registered using these forms.

Note that while a spreadsheet was recently circulated (21st December) to help modellers collaboratively gather this information, completion of the EMD github forms will be required. Since the EMD and grid registrations will be reviewed prior to acceptance, modellers are advised to complete these steps at least 2-3 weeks before beginning to write CMORized netcdf files.

### Energy Consumption and Carbon Footprint Metrics Spreadsheet

On the 9th February, the Energy Consumption & Carbon Footprint Task Team circulated a spreadsheet to modelling centres for collection of HPC energy usage metrics from model experiments during CMIP7. This data will be used to estimate the carbon footprint of CMIP7 modelling activities. 

A [Scribehow](https://wcrp-cmip.github.io/cmip7-guidance/docs/How_to_Guides/Energy_Consumption_and_Carbon_Footprint_Spreadsheet/) is available to help you navigate and complete the spreadsheet. Tier 1 metrics are strongly recommended to complete, and are the minimum information required by the Task Team to produce estimates of the carbon footprint. A comprehensive [guideline document](https://doi.org/10.5281/zenodo.17464966) is also available, and we invite any Modelling Centres to contact us with any questions: <energy-carbon-questionnaire@wcrp-cmip.org> 

### Experiment set up and forcing guidance

Information on the forcings to be used for each experiment are being added to the guidance pages [here](https://wcrp-cmip.github.io/cmip7-guidance/docs/CMIP7/Experiment_set_up_and_Forcings/). These pages currently contain an initial set of documentation about a subset of the CMIP7 AFT experiments and there are plans to extend this set in the coming weeks.

### Quality Control

Quality Control (QC): the prototype software for checking compliance of CMORized netcdf files with CMIP7 data standards can be found here: <https://esgf.github.io/cc-plugin-wcrp/>. In order to publish CMIP7 model output to ESGF, it will be **mandatory** that netcdf files pass the High-severity checks performed by this tool. Non-compliant data may be removed from ESGF search indices. 

Note that this compliance checker plugin should still be considered beta software and changes may be made to its function as early adopter testing continues. There has been limited testing using sample CMIP7 data. 

An update to the [guidance pages](https://wcrp-cmip.github.io/cmip7-guidance/docs/CMIP7/guidance_for_modellers/#7-software-for-checking-output) will be made as new versions of this software becomes available. Modelling centres are strongly encouraged to run the QC tool prior to ESGF publication in order to catch and fix potential errors early. CMOR tool users would expect to produce compliant files.  We encourage all modelling centres to run the  compliance checker plugin for CMIP 7 once it is issued for general release.

### Rapid Evaluation Framework

Those modelling centres that wish to be REF- ready should keep an eye on the [**Model Output Requirements** section](https://wcrp-cmip.github.io/cmip7-guidance/docs/CMIP7/guidance_for_modellers/#5-model-output-requirements) for the forthcoming quality checklist.

### Domains to whitelist

There is a dedicated [page listing domain names](https://wcrp-cmip.github.io/cmip7-guidance/docs/CMIP7/domain_names/) relevant to CMIP7 activities that might be useful to review and ensure that individual modelling centre institutional fire walls allow access.  Updates to the list are via issues/pull requests on GitHub.

---

## 24th February 2026

### CMIP7 forcings: land use for H,VL scenarios

The land use forcing data for the H and VL scenarios are now available – please see details at <https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/land-use/#cmip7_1> and direct links below:

- [UofMD-landState-vl-3-1](https://esgf-node.ornl.gov/search?project=input4MIPs&versionType=all&activeFacets=%7B%22source_id%22%3A%22UofMD-landState-vl-3-1%22%7D)
- [UofMD-landState-h-3-1](https://esgf-node.ornl.gov/search?project=input4MIPs&versionType=all&activeFacets=%7B%22source_id%22%3A%22UofMD-landState-h-3-1%22%7D)

If you find an issue, please [create an issue on GitHub](https://github.com/PCMDI/input4MIPs_CVs/issues/new?template=data_issue.md) so that the identification and resolution of this issue is publicly accessible.

Thank you to the dataset providers, Louise Chini and George Hurtt, for all their efforts.


---

## 16th February 2026

### CMIP7 forcings: piControl update

Further to the update circulated on 12 February, there has been an iteration on the recommendation for piControl as follows:

### Recommendation for pre-industrial control
The piControl forcing should come from files with the source ID FZJ-CMIP-ozone-1-2 data, (there are no specific piControl files available in the FZJ-CMIP-ozone-2-0 data). Note that this guidance differs from the email communication sent by the CMIP IPO on 12 February 2026.

For pre-industrial control, there are two options. The first is the monthly climatology file (frequency value of monC). This dataset averages over a longer simulation, essentially removing variability like the QBO. If you wish to use this forcing for your piControl, simply apply it on repeat.

The second is a transient file which has a time range equal to 182901-184912 in the filename. This file is found in the same directory as the historical forcing so please be careful to only use it for piControl and do not include it in historical forcing. This transient piControl forcing includes the QBO signal but uses average solar forcing and repeating 1850 emissions. If you wish to use this forcing for your piControl, simply apply it on repeat.

For full details on the ozone dataset please see [Ozone concentrations - input4MIPs Controlled Vocabularies (CVs)](https://input4mips-cvs--413.org.readthedocs.build/en/413/dataset-overviews/ozone/)

---

## 12th February 2026

### CMIP7 forcings: modelling centres’ update

This update provides the status of the delivery of the CMIP7 forcing datasets including an important notification on the historical ozone (v1.2) dataset. The homepage for CMIP7 Forcings datasets can be found [here](https://wcrp-cmip.org/cmip-phases/cmip7/cmip7-forcing-datasets/).

**Request for feedback**
Given the update on the error in v1.2 historical ozone dataset and scenario forcing data availability below, we would ask modelling centres to provide feedback by completing [this form ](https://airtable.com/applbQctZtl09L2Ga/pagKlDzoY8Fd0KCLL/form).

**IMPORTANT: Updated dataset to address discontinuity between the PI control climatology and the historical ozone**
A member of the community raised an issue with a discontinuity between the piControl climatology and the historical ozone. The full discussion is at <https://github.com/PCMDI/input4MIPs_CVs/issues/400>

The ozone forcing providers have uploaded an updated version (v2.0) of the historical ozone concentrations to correct for the discontinuity in v1.2. The new historical ozone forcing v2.0, which can be found at [this link](https://esgf-node.ornl.gov/search?project=input4MIPs&activeFacets=%7B%22mip_era%22%3A%22CMIP7%22%2C%22institution_id%22%3A%22FZJ%22%2C%22source_version%22%3A%222.0%22%7D), has an increased historical ozone burden of about 10% (primarily due to a vertical shift in the stratospheric ozone distribution). 

The CMIP Panel co-chairs are recommending that, for modelling centres who rely on ozone as an external forcing, piControl, historical, and other relevant DECK (e.g., AMIP), simulations should be re-run with the v2.0 ozone if possible. For the piControl simulation, the 1850-1870 mean of v2.0 should be used (no specific piControl file will be produced for v2.0). 
For those modellers who are not be able to repeat the piControl simulations, using the v1.2 PI climatology or the 1829-1849 20251025 v1.2 data is fine, since it is expected to be close to the 1850-1870 mean of v2.0. 

However, it is preferable for a new historical simulation to be run with v2.0, if possible, and in advance of starting scenario simulations. If any modelling centres cannot re-run their historical simulations, they should contact the ozone forcing providers for guidance on use of future scenario ozone forcing files.

If any modelling centres run historical simulations with both v1.2 and v2.0 forcing, these simulations would be of interest to the Forcings Task Team.

**Available CMIP7 scenario forcing datasets**
To access the summary of CMIP7 ScenarioMIP datasets click [here](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/#cmip7_1). The following scenario forcing datasets for the High (H) and Very Low (VL) scenarios are finalised and are now available:

(1) Anthropogenic short-lived climate forcer (SLCF) and CO2 emissions: [IIASA-IAMC-vl-1-0-0](https://esgf-node.ornl.gov/search?project=input4MIPs&activeFacets=%7B%22mip_era%22%3A%22CMIP7%22%2C%22institution_id%22%3A%22IIASA-IAMC%22%2C%22source_version%22%3A%221.0.0%22%2C%22target_mip_list%22%3A%22ScenarioMIP%22%2C%22source_id%22%3A%22IIASA-IAMC-vl-1-0-0%22%7D); IIASA-IAMC-h-1-0-0 (DOI: [10.5281/zenodo.17981825](https://doi.org/10.5281/zenodo.17981825).)

(2) Open biomass burning emissions: [IIASA-IAMC-vl-1-0-0](https://esgf-node.ornl.gov/search?project=input4MIPs&activeFacets=%7B%22mip_era%22%3A%22CMIP7%22%2C%22institution_id%22%3A%22IIASA-IAMC%22%2C%22source_version%22%3A%221.0.0%22%2C%22target_mip_list%22%3A%22ScenarioMIP%22%2C%22source_id%22%3A%22IIASA-IAMC-vl-1-0-0%22%7D); IIASA-IAMC-h-1-0-0  (DOI: [10.5281/zenodo.17981825](https://doi.org/10.5281/zenodo.17981825).)

(4) Greenhouse gas concentrations: [CR-vl-1-0-0](https://esgf-node.ornl.gov/search?project=input4MIPs&activeFacets=%7B%22mip_era%22%3A%22CMIP7%22%2C%22target_mip_list%22%3A%22ScenarioMIP%22%2C%22institution_id%22%3A%22CR%22%2C%22source_version%22%3A%221.0.0%22%2C%22source_id%22%3A%22CR-vl-1-0-0%22%7D); CR-h-1-0-0 (DOI: [No DOI provided](https://doi.org/dev-test).)

(6) Stratospheric volcanic SO2 emissions and aerosol optical properties: [UOEXETER-ScenarioMIP-2-2-2](https://esgf-node.ornl.gov/search?project=input4MIPs&activeFacets=%7B%22mip_era%22%3A%22CMIP7%22%2C%22target_mip_list%22%3A%22ScenarioMIP%22%2C%22institution_id%22%3A%22uoexeter%22%2C%22source_version%22%3A%222.2.2%22%2C%22source_id%22%3A%22UOEXETER-ScenarioMIP-2-2-2%22%7D) (No DOI provided)

PLEASE NOTE: Version 2.2.1 of the ScenarioMIP stratospheric aerosol optical properties has been updated to version 2.2.2 to fix an issue with the tropospheric mask. This issue resulted in a ~10% discrepancy between pre-industrial and ScenarioMIP stratospheric aerosol optical depth. Version 2.2.1 has been deprecated and version 2.2.2 (accessible [here]()) should be used for ScenarioMIP runs. This only applies to ScenarioMIP files, stratospheric aerosol optical properties for DECK simulations are unchanged (version 2.2.1). 

(9) Solar: [SOLARIS-HEPPA-ScenarioMIP-4-6](https://esgf-node.ornl.gov/search?project=input4MIPs&activeFacets=%7B%22mip_era%22%3A%22CMIP7%22%2C%22target_mip_list%22%3A%22ScenarioMIP%22%2C%22institution_id%22%3A%22SOLARIS-HEPPA%22%2C%22source_version%22%3A%224.6%22%2C%22source_id%22%3A%22SOLARIS-HEPPA-ScenarioMIP-4-6%22%7D) (No DOI provided)

(12) Population density: [PIK-vl-1-0-0](https://esgf-node.ornl.gov/search?project=input4MIPs&activeFacets=%7B%22mip_era%22%3A%22CMIP7%22%2C%22target_mip_list%22%3A%22ScenarioMIP%22%2C%22institution_id%22%3A%22PIK%22%2C%22source_version%22%3A%221.0.0%22%2C%22source_id%22%3A%22PIK-vl-1-0-0%22%7D); [PIK-ln-1-0-0](https://esgf-node.ornl.gov/search?project=input4MIPs&activeFacets=%7B%22mip_era%22%3A%22CMIP7%22%2C%22target_mip_list%22%3A%22ScenarioMIP%22%2C%22institution_id%22%3A%22PIK%22%2C%22source_version%22%3A%221.0.0%22%2C%22source_id%22%3A%22PIK-ln-1-0-0%22%7D); [PIK-l-1-0-0](https://esgf-node.ornl.gov/search?project=input4MIPs&activeFacets=%7B%22mip_era%22%3A%22CMIP7%22%2C%22target_mip_list%22%3A%22ScenarioMIP%22%2C%22institution_id%22%3A%22PIK%22%2C%22source_version%22%3A%221.0.0%22%2C%22source_id%22%3A%22PIK-l-1-0-0%22%7D); [PIK-ml-1-0-0](https://esgf-node.ornl.gov/search?project=input4MIPs&activeFacets=%7B%22mip_era%22%3A%22CMIP7%22%2C%22target_mip_list%22%3A%22ScenarioMIP%22%2C%22institution_id%22%3A%22PIK%22%2C%22source_version%22%3A%221.0.0%22%2C%22source_id%22%3A%22PIK-ml-1-0-0%22%7D); [PIK-m-1-0-0](https://esgf-node.ornl.gov/search?project=input4MIPs&activeFacets=%7B%22mip_era%22%3A%22CMIP7%22%2C%22target_mip_list%22%3A%22ScenarioMIP%22%2C%22institution_id%22%3A%22PIK%22%2C%22source_version%22%3A%221.0.0%22%2C%22source_id%22%3A%22PIK-m-1-0-0%22%7D); PIK-[hl-1-0-0](https://esgf-node.ornl.gov/search?project=input4MIPs&activeFacets=%7B%22mip_era%22%3A%22CMIP7%22%2C%22target_mip_list%22%3A%22ScenarioMIP%22%2C%22institution_id%22%3A%22PIK%22%2C%22source_version%22%3A%221.0.0%22%2C%22source_id%22%3A%22PIK-hl-1-0-0%22%7D); PIK-h-1-0-0 (No DOI provided)

Please note that the[ van Vuuren et al. (2025) paper](https://egusphere.copernicus.org/preprints/2025/egusphere-2024-3765/egusphere-2024-3765.pdf) has been resubmitted with updates to two scenario names (VLLO becomes VL and VLHO becomes LN) plus a new scenario (HL). The updated table can be found at https://wcrp-cmip.org/mips/scenariomip/ and below. The updated or new scenarios are highlighted in bold.

| Scenario | Scenario extension | Primary emission or temperature design criteria |
| -- | -- | -- |
| High (H) | H-ext | Emissions   as high as plausible consistent with climate policy rollback |
| **High Low (HL)** | HL-ext | High   emissions until second half of the century, followed by rapid decline to net   zero CO2 in 2100 |
| Medium (M) | M-ext | Emissions   consistent with current policies frozen as of 2025 |
| Medium Low   (ML) | ML-ext | Medium   emissions until 2040 followed by gradual decline to net zero CO2 in 2100 |
| Low (L) | L-ext | Emissions   consistent with staying likely below 2C and not returning to 1.5C before end   of the century |
| Very Low   (VL)   **(Formerly Very Low Low Overshoot;   VLLO)** | VL-ext | Emissions   consistent with limiting warming to 1.5C at the end of the century with   overshoot as low as plausible |
| Low to   Negative (LN)   **(Formerly Very Low High Overshoot;   VLHO)** | LN-ext | Emissions   consistent with limiting warming to 1.5C at end of the century with high   overshoot compared to the VL scenario. |

Following the H and VL scenario forcings delivery, the CMIP Panel has decided that M and HL will be next in the running order.

**Status of outstanding datasets**
_Land use_
Preparation of the final H and VL land use scenario forcing datasets is nearing completion and we are anticipating publication by end of February.

_Ozone concentrations and nitrogen deposition_
Due to delays in the dependent datasets, the delivery of H and VL ozone and nitrogen deposition scenario datasets is now estimated for 10 March.

_Aerosol optical properties/MACv2-SP_
The expected date for publication for H and VL aerosol plumes scenarios is end of February.

_Future extensions_
The timeline for future extensions will be confirmed in the coming weeks following delivery of the land use data.

**Impact of delays on downstream activities**
During November 2025, modelling centres completed a survey indicating likely initiation and delivery of CMIP7 DECK and Assessment Fast Track data. Around 14 centres responded that they were intending to provide piControl, historical, and H and VL scenario data by 1 July 2026 to support downstream activities including ISIMIP, CORDEX and ISMIP7. ISIMIP has recently strongly emphasised their preference to receive historical simulation data as soon as possible and scenario data ideally by May/June at the latest to allow for their contribution to AR7.

**Where to ask questions and raise issues about the forcing datasets**
These discussions are all being [captured on the input4MIPs GitHub](https://github.com/PCMDI/input4MIPs_CVs/discussions). Issues related to any datasets can also be raised here https://github.com/PCMDI/input4MIPs_CVs/issues. Please go to these pages to read and engage in any discussions. The page has search functionality so you can find what you need.


---

## 21st December 2025
### Essential Model Documentation (EMD) spreadsheet

Dear Modelling Centres,

Please find attached the Essential Model Documentation (EMD) v1.0 Excel template for documenting your model configuration. You can also access the spreadsheet at [https://cloud.ipsl.fr/index.php/s/jXpfnJba2w6NH9W](https://cloud.ipsl.fr/index.php/s/jXpfnJba2w6NH9W)

### What is the EMD Template?

The Essential Model Documentation (EMD) is a standardized format for documenting Earth System Model configurations for CMIP7 and other international modelling projects. This Excel template captures:

- **Top-level model information** including references to publications
- **Model components** (atmosphere, ocean, sea ice, land surface, etc.)
- **Horizontal grid structures** with full support for staggered grids (Arakawa arrangements)
- **Vertical grid specifications** with coordinate types and layer information
- **Controlled vocabularies** ensuring consistency across modelling centres

The EMD v1.0 specification is available at: [https://zenodo.org/records/17853724](https://zenodo.org/records/17853724)

### How to Use This Template

1. **Start with the COMPONENT_SELECTOR sheet**
    - Use the Yes/No dropdowns to indicate which components are Dynamic, Prescribed, or Omitted in your model

2. **Fill in the Top-Level Model sheet**
    - Document your model's overall properties
    - Add reference IDs that point to publications (you'll define these in the References sheet)

3. **Add all references in the References sheet**
    - Each reference needs a unique ID (e.g., REF001), citation, and DOI
    - These reference IDs will be used throughout the template

4. **Define your grids** (hierarchical 2-step process):
    - **HGrid_ComputationalGrid**: Define each computational grid with its arrangement (e.g., arakawa_c)
    - **HGrid_Subgrids**: For each computational grid, define subgrids specifying which variables (mass, x_velocity, y_velocity) are at which locations
    - **Vertical Grid**: Define vertical coordinate structure (all measurements in metres)

5. **Document each dynamic component in Model Components sheet**
    - Link each component to its horizontal and vertical grids using the Grid IDs you defined

6. **Use the CV_* sheets as reference**
    - These tabs contain controlled vocabulary values with exact descriptions from the EMD specification
    - Each CV tab includes the EMD section number and a link to the full specification

### About This Template and Model Registration

This Excel file is a helper tool to facilitate registering your model documentation.

A web-based registration form will be available at some point in the future. However, the web form is currently difficult to fill out by multiple people asynchronously, which is often necessary given that model documentation requires input from different experts across your team.

This Excel template solves this problem by:

- Allowing easy sharing among team members who each know different aspects of the model
- Enabling collaborative editing and review before final submission
- Providing offline access and version control

If you would like to work on this template online, please contact [cmip-ipo@esa.int](mailto:cmip-ipo@esa.int) who  can provide an accessible, editable link (e.g., via cloud storage) that can be shared with the various people at your modelling centre who have knowledge about different components of your model.

### If you are planning to publish CMIP7 Assessment Fast Track data before March 2026
Once your Excel sheet is completed, please:

1. Let us know if you would prefer an online collaborative link 
2. Save your filled template in the format “EMD_Modelling-centre-name.xls”
3. Return the completed Excel file to [cmip-ipo@esa.int](mailto:cmip-ipo@esa.int) 
4. Contact us if you have any questions or encounter any issues

We will inform you once the web-based form is ready for submissions for those planning to publish later in 2026.

### Support

If you need assistance:

- Refer to the EMD specification: [https://zenodo.org/records/17853724](https://zenodo.org/records/17853724)
- Each sheet includes detailed instructions and examples
- Contact [cmip-ipo@esa.int](mailto:cmip-ipo@esa.int) who will forward your query to relevant member of the EMD or CVs Task Teams for questions

Best regards,

CMIP IPO (on behalf of the CMIP Model Documentation and Controlled Vocabularies Task Teams)


---

## 19th December 2025
### Data Request v1.2.2.3
Dear CMIP community,
 
We are pleased announce that we have released [v1.2.2.3 of the CMIP7 Data Request](https://wcrp-cmip.org/cmip7-data-request-v1-2-2-3/) today. This patch release provides technical updates to the variables from the v1.2.2.2. 
 
The key components of the Data Request that you can access from today are:

1. [v1.2.2.3 release webpage and release notes](https://wcrp-cmip.org/cmip7-data-request-v1-2-2-3/)
2. [The online database (hosted on Airtable)](https://airtable.com/app2jDtttIhxC5fx7/shrAlTC2M6rDigwAr/),
3. [Database guidance pages (hosted on ScribeHow)](https://scribehow.com/page/Guide_to_using_the_CMIP7_Data_Request_Airtable__yXqZ0o-2TjuMKvKf-vQ7mg)
4. [Data Request software package (API, hosted on GitHub)](https://github.com/CMIP-Data-Request/CMIP7_DReq_Software)
5. [Data Request online viewer](https://cmip-data-request.github.io/cmip7-dreq-webview/)

The [Data Request Task Team’s Technical Implementation Subgroup (DR-TISG)](https://wcrp-cmip.org/cmip7-task-teams/data-request/#working_groups) have created Python code to allow users to interact with the CMIP7 Data Request. It provides an API and scripts that can produce lists of the variables requested for each CMIP7 experiment, information about the requested variables, and in general will support different ways of querying and utilising the information in the data request. The API is now available, though updates to improve functionality will continue.

If you would like more information about the new structure of the Data Request for CMIP7, or some background information about how the Data Request was developed, you can find this on the [CMIP7 Data Request webpage](https://wcrp-cmip.org/cmip-phases/cmip7/cmip7-data-request/). 

This release would not have been possible without the immense amount of work contributed by the [Thematic Author Team](https://airtable.com/appVPW6XAZfbOZjYM/shrH4w1SMsaSGOO7F/tbl2CCJzaUWak8XBf) members and the [Data Request Task Team](https://wcrp-cmip.org/cmip7-task-teams/data-request/) and [Controlled Vocabularies Task Team](https://wcrp-cmip.org/cmip7-task-teams/cvs/).  

Best wishes,
CMIP IPO (on behalf of the Data Request Task Team)
 
Apologies for any cross-posting of this announcement.

---

## 8th December 2025

### Updates from the WIP

* Following the infrastructure drop-in sessions in November updates have been made to the 
  [CMIP7 guidance for modellers webpages](https://wcrp-cmip.github.io/cmip7-guidance/docs/CMIP7/guidance_for_modellers/). These include:
    * Information on repacking netCDF files that are to be published to CMIP7 has been added, and the cmip7repack tool is available for testing. 
      Note that repacking will be **required** for publishing data to ESGF. Questions and queries are welcome via the [cmip7repack github repository](https://github.com/NCAS-CMS/cmip7_repack).
    * There has been a change to the guidance on QC tools, with a IOOS/compliance-checker plugin replacing a fork of the compliance checker code.
* QA/QC: early testing is possible, see details in the 
  [guidance for modellers pages](https://wcrp-cmip.github.io/cmip7-guidance/docs/CMIP7/guidance_for_modellers/#7-software-for-checking-output). 
  Users should note that:
    * Checks for CMIP6 and CORDEX-CMIP6 data are implemented, while CMIP7 checks are being finalized.
    * Some checks will be required by the ESGF publisher, but data producers can also choose to run a heavier set of checks, 
      where the data arrays within files are examined, to ensure compliance with REF standards.
    * Further guidance will be provided regardi the CMIP7 QC checks in the coming weeks.
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
[here](CMIP7/Domain_names.md). 
This will initially include domain names for ESGF, the errata service and services relevant to the REF, but others will be added as they are collected.

----

## 29th October 2025

### CMIP7 DECK historical forcings
The full set of CMIP7 DECK historical forcings are now available and can be accessed [here](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/) and below:

1. [Anthropogenic short-lived climate forcer (SLCF) and CO<sub>2</sub> emissions](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/anthropogenic-slcf-co2-emissions/)
2. [Open biomass burning emissions](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/open-biomass-burning-emissions/)
3. [Land use](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/land-use/)
4. [Greenhouse gas concentrations](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/greenhouse-gas-concentrations/)
5. [CO<sub>2</sub> isotopes](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/co2-isotopes/)
6. [Stratospheric volcanic SO<sub>2</sub> emissions and aerosol optical properties](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/stratospheric-volcanic-so2-emissions-aod/)
7. [Ozone concentrations](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/ozone/)
8. [Nitrogen deposition](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/nitrogen-deposition/)
9. [Solar](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/solar/)
10. [AMIP sea-surface temperature and sea-ice boundary forcing](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/amip-sst-sea-ice-boundary-forcing/)
11. [Aerosol optical properties/MACv2-SP](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/aerosol-optical-properties-macv2-sp/)
12. [Population density](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/population/)

Please continue to ask questions and engage in discussions at the [input4MIPs Github discussions](https://github.com/PCMDI/input4MIPs_CVs/discussions) and find all information relevant to CMIP7 Forcing datasets at https://wcrp-cmip.org/cmip-phases/cmip7/cmip7-forcing-datasets/

### CMIP7 scenarios update and forcings development
**Scenarios update**
Responding to comments received during open community review of van Vuuren et al  (2025) the ScenarioMIP Scientific Steering Committee and Advisory Group have updated some of the CMIP7 scenario names. Very Low Low Overshoot (VLLO) becomes Very Low (VL) and Very Low High Overshoot (VLHO) becomes Low to Negative (LN).  A High-Low (HL) scenario that follows the high scenario until rapid mitigation begins around 2050 has also been added. An updated version of [van Vuuren et al (2025)](https://egusphere.copernicus.org/preprints/2025/egusphere-2024-3765/) is expected to be available very soon.

**CMIP7 Scenario forcing development**
A number of preliminary scenario forcing datasets have already been made available via ESGF (see here for more information and links to the data) and are ready for testing by any interested modelling centres or data analysts. We encourage users to test the available datasets and provide feedback via input4MIPs Github discussions as soon as possible to refine the final scenario forcing development.

A small number of the scenario forcings (land use, ozone and nitrogen deposition) cannot produce all seven scenarios at the same time. Therefore, a scenario running order has been developed in close collaboration with ScenarioMIP and downstream activities such as ISIMIP, ISMIP7 and CORDEX, who require scenario data by July 2026 to facilitate their contribution to AR7. As outlined in Dunne et al. (2025) the CMIP Panel strongly encourages modelling centres to follow a running order, first running the  H and VL scenario simulations, for which scenario forcings will be delivered by January 2026. Within the survey, accompanying this update, we are requesting feedback to support further guidance on the running order of the remaining scenarios up to 2100 and extensions out to 2300/2500.

| Scenario | Scenario extension | Based on SSP |
| --- | --- | --- |
| High (H)* | H-ext | SSP3 |
| Very Low (VL)* | VL-ext | SSP1 |
| High Low (HL) | HL-ext | SSP5 |
| Medium (M) | M-ext | SSP2 |
| Medium Low (ML) | ML-ext | SSP2 |
| Low (L) | L-ext | SSP2 |
| Low to Negative (LN) | LN-ext | SSP2| 

Note: H and VL will be made available first to allow the
chemistry-climate models to be initiated.

### Rapid Evaluation Framework
The Rapid Evaluation Framework (REF) provides diagnostics to characterise climate model performance and highlight model spread, diversity and differences. These results may help researchers identify models suitable for specific applications but should not be interpreted as identifying “good” or “bad” models. This version 1 release of the REF serves as a starting point for deeper exploration and investigation into CMIP6 and CMIP6Plus model output. This version was launched at the ESM2025 Final General Assembly on the 07 October 2025. You can access it through [https://dashboard.climate-ref.org/](http://dashboard.climate-ref.org/). A tour of the dashboard is available [here](https://www.youtube.com/watch?v=bK6S_ilf6H8). The containerised version installation is available here: [https://climate-ref.readthedocs.io/](https://api.climate-ref.org/)


The Climate REF Dashboard provides multiple interfaces for accessing evaluation results:
    
- [Data Explorer](https://dashboard.climate-ref.org/explorer/themes): Interactive interface for querying and visualizing model evaluation results. Users can select specific models, variables, and experiments for detailed analysis.
- [Diagnostic Browser](https://dashboard.climate-ref.org/diagnostics): Pre-computed evaluation metrics organized by model component and diagnostic type. Results include statistical summaries, spatial maps, and time series comparisons.

Comprehensive documentation is available at [climate-ref.readthedocs.io](https://climate-ref.readthedocs.io/en/latest/), including:
    
- Technical specifications
- Diagnostic descriptions and equations
- API documentation for programmatic access
- Example workflows and use cases

We are keen to hear from modelling centres who would be interested in running the containerised version of the REF prior to publication. Sharing early simulation  data and prioritizing variables listed in Table B1 (p27) of the[ REF documentation paper](https://egusphere.copernicus.org/preprints/2025/egusphere-2025-2685/), will greatly  support the development of the CMIP7 ready REF to be launched at the CMIP Community Workshop in March 2026. Those who have already indicated interest will be contacted individually with further detail very soon.  We would also like to highlight the [CMIP7 Data Request REF Opportunity](https://airtable.com/app2jDtttIhxC5fx7/shrAlTC2M6rDigwAr/tbljoSaMlK7m0DunX/viw0evRBr0vqp658c/recpCG10UEZxH22BR).

If you have any feedback, ideas or questions please raise an issue on the [Climate-REF Github](https://github.com/Climate-REF/climate-ref/issues).

### CMIP7 Infrastructure
Final development of the key parts of the CMIP7 infrastructure is nearing completion including the Controlled Vocabularies (CVs), Essential Model Documentation (EMD) and testing of the Earth System Grid Next Generation (ESGF-NG) to facilitate initiation of simulations and CMIP7 data publication before the end of 2025. 
To find out more about CMIP7 infrastructure, and what has changed from CMIP6, please register to attend one of two drop-in sessions (to accommodate all time zones):

* [Wednesday 5 November, 08:00-09:00 UTC](https://wcrp-cmip.org/event/cmip7-infrastructure-dropin-5nov/)
* [Thursday 6 November, 17:00-18:00 UTC](https://wcrp-cmip.org/event/cmip7-infrastructure-dropin-6nov/)

**Data Request**
The latest release of the CMIP7 Data Request is available [here](https://wcrp-cmip.org/cmip7-data-request-latest). If you identify any missing variables or technical problems, please raise an issue on the [CMIP7 Data Request Harmonised Public Consultation Github](https://github.com/CMIP-Data-Request/Harmonised-Public-Consultation/issues).

**Energy Consumption and Carbon Footprint**
The [Energy Consumption and Carbon Footprint Task Team](https://wcrp-cmip.org/cmip7-task-teams/energy-consumption/) would like to ask all modelling centres participating in CMIP7 AFT and MIPs to report energy consumption, which enables the estimation of the carbon footprint associated with running climate model experiments. The proposed protocol is based on CPMIP and consists of three Tiers of questions:  

* Tier 1 (Mandatory) metrics including platform name, emission factor, energy mix, power usage effectiveness, experiment type, simulated years, core hours, data usage etc., to facilitate comparison across institutions and HPC platforms. 
* Tier 2 (Recommended) metrics providing information to analyse and interpret Tier 1 results, including model configuration and performance indicators.
* Tier 3 (Optional) metrics offering a deeper understanding of model and system behaviour through more detailed performance indicators, to identify bottlenecks and improve cross-platform comparability.

A [draft guideline document](https://zenodo.org/records/17464967) is available with further information and instructions on how the Task Team would like data to be collected. We welcome your feedback on this proposal through the relevant questions in the survey.

### WGCM Forum
The Working Group on Coupled Modelling (WGCM) would like to invite you to join the WGCM Forum: Frontiers in Earth System Modelling. This new initiative will bring together modelling centres from across the global climate science community, providing a dedicated platform to discuss ongoing challenges, technical practices and future developments. The forum will be organised as an annual activity, bringing together model developers, researchers and scientists to discuss common issues in a flexible environment. It will enable smaller and emerging modelling centres to engage with the wider community and for established groups to share their best practices. The WGCM Forum launch will take place during the CMIP Community Workshop in Kyoto. To be a part of this initiative, please let us know the contact information for representatives from your modelling group using [this form](https://airtable.com/appN9rDiTadg9smxM/pagxZUeGqCcgghAax/form). Further information on the launch can be found [here](https://www.wcrp-esmo.org/calendar/wgcm-forum-launch), or by contacting the ESMO IPO at [ipo@wcrp-esmo.org](mailto:ipo@wcrp-esmo.org?subject=WGCM%20Forum).

### Publications
The [CMIP7 Geoscientific Model Development Special Issue](https://gmd.copernicus.org/articles/special_issue1315.html) now has fifteen papers available including the highlight paper:
[An evolving Coupled Model Intercomparison Project phase 7 (CMIP7) and Fast Track in support of future climate assessment (Dunne et al., 2025)](https://gmd.copernicus.org/articles/18/6671/2025/gmd-18-6671-2025.pdf)

Other recent publications of note include:

*	[Climate models need more frequent releases of input data — here’s how to do it (Naik et al, 2025)](https://rdcu.be/eCsz2)
*	[Towards provision of regularly updated climate data from the Coupled Model Intercomparison Project (Hewitt et al., 2025)](https://journals.plos.org/climate/article?id=10.1371/journal.pclm.0000708)

[October-2025_Modelling-centre-update_CMIP.pdf](https://github.com/user-attachments/files/25295255/October-2025_Modelling-centre-update_CMIP.pdf)

---

## 29th September 2025
### Data Request v1.2.2.1
Dear CMIP community,
 
We are pleased announce that we released [v1.2.2.1 of the CMIP7 Data Request](https://wcrp-cmip.org/cmip7-data-request-v1-2-2-1/) on Friday. This patch release provides technical updates to the variables from the v1.2.2. 
 
The key components of the Data Request that you can access from today are:

1. [v1.2.2.1 release webpage and release notes](https://wcrp-cmip.org/cmip7-data-request-v1-2-2-1/)
2. [The online database (hosted on Airtable)](https://bit.ly/CMIP7-DReq-v1_2_2_1),
3. [Database guidance pages (hosted on ScribeHow)](https://bit.ly/CMIP7-DReq-guidance)
4. [Data Request software package (API, hosted on GitHub)](https://github.com/CMIP-Data-Request/CMIP7_DReq_Software)

The [Data Request Task Team’s Technical Implementation Subgroup (DR-TISG)](https://wcrp-cmip.org/cmip7-task-teams/data-request/#working_groups) have created Python code to allow users to interact with the CMIP7 Data Request. It provides an API and scripts that can produce lists of the variables requested for each CMIP7 experiment, information about the requested variables, and in general will support different ways of querying and utilising the information in the data request. The API is now available, though updates to improve functionality will continue.

If you would like more information about the new structure of the Data Request for CMIP7, or some background information about how the Data Request was developed, you can find this on the [CMIP7 Data Request webpage](https://wcrp-cmip.org/cmip-phases/cmip7/cmip7-data-request/). 

This release would not have been possible without the immense amount of work contributed by the [Thematic Author Team](https://airtable.com/appVPW6XAZfbOZjYM/shrH4w1SMsaSGOO7F) members and the [Data Request Task Team](https://wcrp-cmip.org/cmip7-task-teams/data-request/) and [Controlled Vocabularies Task Team](https://wcrp-cmip.org/cmip7-task-teams/cvs/).  

Best wishes,
CMIP IPO (on behalf of the Data Request Task Team)
 
Apologies for any cross-posting of this announcement.

---

## 25th July 2025
### Data Request v1.2.2

Dear CMIP community,
 
We are pleased to release [v1.2.2 of the CMIP7 Data Request](https://wcrp-cmip.org/cmip7-data-request-v1-2-2/). Today's release provides technical updates to the variables from the v1.2.1, release plus includes an early version of the branded variable names, which are new for CMIP7. 
 
The key components of the Data Request that you can access from today are:

1. [The online database (hosted on Airtable)](https://bit.ly/CMIP7-DReq-v1_2_2),
2. [Database guidance pages (hosted on ScribeHow)](https://bit.ly/CMIP7-DReq-guidance)
3. [v1.2.2 release webpage and release notes](https://wcrp-cmip.org/cmip7-data-request-v1-2-2/)
4. [Data Request software package (API, hosted on GitHub)](https://github.com/CMIP-Data-Request/CMIP7_DReq_Software)

Included in the v1.2.2 are the Branded Variable Names – the new way of naming variables which is being implemented for CMIP7. Please note that we anticipate an additional release v1.2.3 in late Summer/early Autumn, providing minor technical updates to the variables, mostly confined to the cell methods and dimensions. This release will also update a small number of the branded variable names. To reassure data producers, out of the 1991 variables in the v1.2.2 request, 123 have provisional names which are subject to change. The remaining names can be considered mostly stable, allowing modelling centres starting to use the Data Request to configure their workflows. The 123 provisional names are further split into two categories – ‘likely accepted’ (100 variables) and ‘requires discussion’ (23 variables). Variables names in the latter category are the least stable, however we encourage all data producers to check for name updates for all 123 provisional names in the forthcoming v1.2.3 release.

The [Data Request Task Team’s Technical Implementation Subgroup (DR-TISG)](https://wcrp-cmip.org/cmip7-task-teams/data-request/#working_groups) have created Python code to allow users to interact with the CMIP7 Data Request. It provides an API and scripts that can produce lists of the variables requested for each CMIP7 experiment, information about the requested variables, and in general will support different ways of querying and utilising the information in the data request. The API is now available, though a new update of the API will be released roughly two weeks following this content release. This separation of content and software timelines is important for managing Task Team and IPO workloads and allows the TISG to fix any issues in the code following the content release.

If you would like more information about the new structure of the Data Request for CMIP7, or some background information about how the Data Request was developed, you can find this on the [CMIP7 Data Request webpage](https://wcrp-cmip.org/cmip-phases/cmip7/cmip7-data-request/). 

This release would not have been possible without the immense amount of work contributed by the [Thematic Author Team](https://airtable.com/appVPW6XAZfbOZjYM/shrH4w1SMsaSGOO7F) members and the [Data Request Task Team](https://wcrp-cmip.org/cmip7-task-teams/data-request/) and [Controlled Vocabularies Task Team](https://wcrp-cmip.org/cmip7-task-teams/cvs/).  

Best wishes,
CMIP IPO (on behalf of the Data Request Task Team)
 
Apologies for any cross-posting of this announcement.

---

## June 2025
### Data Request update
Dear CMIP modelling centres,

As we approach a stable Data Request for the CMIP7 Assessment Fast Track (AFT), the Data Request and Controlled Vocabularies are working hard to finalise the metadata for the variables requested.

As you may have seen, we have released a number of versions of the request so far, with the latest release (v1.2.1) being available since 26th April 2025. This release provided some minor technical updates to variable metadata from the v1.2 release to improve consistency across the CMIP data archive. A further minor update (v1.2.2) is currently planned in next three weeks.

While the CMIP Panel have currently agreed this will be the final version of the Data Request for the AFT, we anticipate that, as centres start to implement the request, additional issues will arise and may require an update of the content. Further, the Controlled Vocabularies Task Team are currently undertaking a technical review of the variables to identify any issues in the request which might impact the data infrastructure.

As we approach this new phase of the request, we want to understand the impact of potential future changes on different modelling centre’s workflows. We have been made aware that changes to the following fields post model configuration could result in significant disruption and a need to reconfigure the model:
• Variable names (i.e. the name which will be saved in the CMIP7 archive, in CMIP7 this will be the ‘branded name’. More details on the branded naming will be released very soon.)
• Standard name (excluding the assignment of new names)
• Dimensions
• Cell Methods
• Positive (up, down or none)
Other centres have indicated that changes in these fields will not be particularly disruptive , as they will be fixed during the ‘data rewriting’ stage of data production (e.g. during CMORisation). Other centres write during production and so will not be able to change any fields once production has started.

Therefore, we are trying figure out the extent this might affect your centre, and if these are breaking changes or can be fixed post-processing (e.g. during CMORisation).To understand the impact on different centre’s workflows, please could you complete this short survey? We estimate the survey will take 10-15 minutes to complete.

DEADLINE: 08:00 UTC, 30th June 2025

Apologies for the tight timeline. As we know many centres are starting/have started configuring their model, we need to gather this information as quickly as possible.

---

## 29th May 2025

### Update to stratospheric volcanic aerosol forcing and resulting impact on ozone concentration and nitrogen deposition dataset delivery
 
Following the release of the [UOEXETER-CMIP-2-0-0 Stratospheric volcanic SO2 emissions and aerosol optical properties dataset](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/stratospheric-volcanic-so2-emissions-aod/) in January 2025, feedback from modelling centres via the [Github discussion](https://github.com/PCMDI/input4MIPs_CVs/discussions/175) identified an issue with NaN values affecting mostly high altitude or lowermost stratospheric extratropical regions after Pinatubo. Further questions were raised at the VolImpact workshop in April 2025 regarding Agung 1963 forcing being too latitudinally symmetric in v2.0.0 instead of mostly in the southern hemisphere and how this may affect simulated climate response.
 
Updating the dataset to resolve these issues affects the piControl climatology and will require reinitiation of the simulations that are producing the ozone forcing datasets. As a result, there will be around a two-week delay in delivery of the CMIP7 ozone concentration and nitrogen deposition datasets. The CMIP Forcings Task Team co-leads and CMIP Panel co-chairs carefully considered the implications of this delay but concluded that addressing the issues, particularly given the community feedback, and ensuring consistency was paramount.
 
In response to feedback,  the stratospheric volcanic SO2 emissions and aerosol optical properties dataset has been updated, and will be available on the ESGF soon - if you have an urgent need to access the updated dataset please contact [cmip-ipo@esa.int](mailto:cmip-ipo@esa.int) . The new estimated delivery of the CMIP7 ozone and nitrogen deposition datasets are: piControl dataset by end of June 2025 and historical datasets by end of August 2025.
 
We are aware that updates and delays are disruptive to the workflows of the modelling centres/groups seeking to deliver to the CMIP Assessment Fast Track and therefore no further updates will be made, only retractions as agreed by the CMIP Panel.
 
### Development of new population dataset for CMIP7
 
As ESMs are moving towards modelling fires interactively, thereby simulating the feedbacks on both terrestrial vegetation, carbon cycle as well as atmospheric composition. This presents some new forcing data requirements including population density data required for fire ignitions (see details in [this presentation](https://wcrp-cmip.org/wp-content/uploads/2024/10/S5_JMulcahy.pdf)).
In response to this need, a dataset will be created by collaboration of the [COMPASS](https://compass-climate.eu/) and [WorldPop](https://www.worldpop.org/) projects. It is based on the approach of merging exposure dataset described in [this document](https://compass-climate.eu/Public%20Deliverables/D3.1_Exposure%20datasets%20at%20multiple%20scales.pdf), but with the main change being the inclusion of the new WorldPop dataset. Gridded population at resolutions of 1 km or lower (such as 0.5 degree for ESMs) will utilize WorldPop gridded data for 2015-2100, with extrapolation back to 1975 with Global Human Settlement Layer (GHSL) and back to 1850 with History database of the Global Environment (HYDE; main source of data so far). As the gridded data comes in 5- or 10-year resolution, it will be interpolated. Then, the gridded data will be adjusted to annual timeseries at country level using a new compilation of historical data from project COMPASS for 1850-2023 (near-equal to UN World Population Prospects for 1950-2023) and then will follow the SSP database, specifically the upcoming SSP v3.2 data which will also be used in ScenarioMIP. The graph below schematically shows how the data is combined.
 
The change in the dataset is proposed to improve quality of both gridded and national data compared to HYDE and increase available resolution for impact data. Validation for Europe has shown that WorldPop and GHSL reduce the error in population distribution (measured by average error per grid cell) by more than half. At a 0.5 degree resolution, the average difference in grid-cell population compared to HYDE would be about 20%. The importance of population data quality and resolution is much larger for impact models, therefore a switch to a new data source already for ESMs is beneficial. The change will not introduce a major discrepancy in land use as it has limited relation to population data after 1960 in HYDE, while pre-1960 population trends are largely preserved (with limited exceptions to improve data accuracy).
We are currently awaiting final version of SSP v3.2 and WorldPop gridded population projections. The historical period will be provided first relatively soon, and SSP-based projections by end of June 2025.


---


## 27th April 2025
### Data Request v1.2.1

Dear CMIP community,
 
We are pleased to release v1.2.1 of the [CMIP7 Data Request](https://wcrp-cmip.org/cmip-phases/cmip7/cmip7-data-request/). Today's release provides a few technical updates to the variables from the v1.2 release plus includes an early version of the branded variable names, which are new for CMIP7. No new variables have been added.
 
The key components of the Data Request that you can access from today are:

1. [The online database (hosted on Airtable)](https://bit.ly/CMIP7-DReq-v1_2_1),
2. [Database guidance pages (hosted on ScribeHow)](https://bit.ly/CMIP7-DReq-guidance)
3. [v1.2.1 release webpage and guidance notes](https://wcrp-cmip.org/cmip7-data-request-v1-2-1/)
4. [Data Request software package (API, hosted on GitHub)](https://github.com/CMIP-Data-Request/CMIP7_DReq_Software)

Please note that we anticipate one final additional release in late Spring/early Summer, providing minor technical updates to the variables, mostly confined to the cell methods. However, this release does not prevent modelling centres starting to use the Data Request to configure their workflows.

The [Data Request Task Team’s Technical Implementation Subgroup (DR-TISG)](https://wcrp-cmip.org/cmip7-task-teams/data-request/#working_groups) have created Python code to allow users to interact with the CMIP7 Data Request. It will provide an API and scripts that can produce lists of the variables requested for each CMIP7 experiment, information about the requested variables, and in general will support different ways of querying and utilising the information in the data request. The v1.2beta release of the API is now available, providing significant functionality advancements since v1.0. The next release (v1.2) of the API will be released roughly two weeks following this content release. This separation of content and software timelines is important for managing Task Team and IPO workloads and allows the TISG to fix any issues in the code following the content release.

If you would like more information about the new structure of the Data Request for CMIP7, or some background information about how the Data Request was developed, you can find this on the [CMIP7 Data Request webpage](https://wcrp-cmip.org/cmip-phases/cmip7/cmip7-data-request/). 

This release would not have been possible without the immense amount of work contributed by the [Thematic Author Team](https://airtable.com/appVPW6XAZfbOZjYM/shrH4w1SMsaSGOO7F) members and the [Data Request Task Team](https://wcrp-cmip.org/cmip7-task-teams/data-request/).  

CMIP7 Data Request v1.2 launch session

The Data Request Task Team are holding a virtual launch event following the [Data Request v1.2 release.](https://wcrp-cmip.org/event/data-request-v1-0-launch-1/) The event is aimed at MIPs and Modelling Centres, though anyone from the CMIP Community is invited to register.

During the session, the Task Team and thematic author team representatives will present an overview of the request, including descriptions of the changes in structure since CMIP6, an overview of the information and tools available to you, and an update on the CMIP7 Data Request software package. There will be opportunities for questions and discussion throughout the session.

Please note, this event is being repeated across two sessions to enable participation from colleagues working in different time zones. You only need to attend one of the two meetings.

Register for Session 1: [Monday 19th May, 15:00-16:00 UTC](https://wcrp-cmip.org/event/data-request-v1-2-launch-session-1/)

Register for Session 2: [Tuesday 20th May, 07:00-08:00 UTC](https://wcrp-cmip.org/event/data-request-v1-2-launch-session-2/)

Best wishes,
CMIP IPO (on behalf of the Data Request Task Team)
 
Apologies for any cross-posting of this announcement.

---

## 22nd April 2025
### Data Request v1.2.1 in preparation

Dear Modelling centres,
 
We are currently preparing a technical update to the Data Request, as outlined in the [v1.2 release notes](https://wcrp-cmip.org/cmip7-data-request-v1-2/). This release will be the v1.2.1 and should be available on Friday 25th April.
 
The vast majority of updates will be technical, however we have had a small number of variable updates flagged to us which would have a larger impact. This is primarily related to the units for area_fraction variables.
 
We want to understand the impact making this change would have, so if any centres are already committed to using/implementing the v1.2 request, please respond to this email to let the IPO know. We can then discuss the impacts of such changes to inform our decision on whether the change is recommended or not. We will be freezing the v1.2.1 content on Thursday (European) morning, ready for a release on Friday. Therefore if this change would impact your centre we request you let us know as soon as possible, before Thursday.
 
Best wishes,
CMIP IPO

---


## 15th April 2025

### IMPORTANT: Errors in Table 1 of Dunne et al, 2025

We are aware that some of you are already following the [An evolving Coupled Model Intercomparison Project phase 7 (CMIP7) and Fast Track in support of future climate assessment](https://egusphere.copernicus.org/preprints/2024/egusphere-2024-3874/) preprint Table 1. Some errors have been found regarding the volcanic and solar forcing entries, which will be corrected for final submission, and are **highlighted in bold** below:


| Experiment short name | Experiment description | Anthropogenic Forcing | Volcanic Forcing | Solar Forcing | Start Year | End Year | Main purpose |
| --- | --- | --- | --- | --- | --- | --- | --- |
| amip | Atmosphere with SSTs and SICs prescribed | Time-varying | Time-varying | Time-varying | 1979 | 2021 | Evaluation, SST/sea ice forced variability |
| piControl and/or esm-piControl | Coupled atmosphere-ocean pre-industrial control | All 1850, CO2 prescribed concentration or zero emissions | Fixed mean radiative forcing matching historical simulation (i.e. 1850–2021 mean) | Fixed mean value matching first two solar cycles of the historical simulation (i.e. 1850–1873 mean) | 1 | 400+ | Evaluation, unforced variability |
| abrupt-4xCO2 | CO2 prescribed to 4 times preindustrial | Same as piControl except CO2 concentration prescribed to 4 times piControl | Same as piControl | Same as piControl | 1 (branching from year 101 or later of piControl) | **300+ (1000)** | Equilibrium climate sensitivity, feedback, fast responses |
| 1pctCO2 | CO2 prescribed to increase at 1% yr-1 | Same as piControl except CO2 prescribed to increase at 1% yr-1 | **Same as piControl** | **Same as piControl** | 1 (branching from year 101 or later of piControl) | 150 | Transient climate sensitivity |
| historical and/or esm-hist | Simulation of the recent past | All time varying, CO2 prescribed concentration or emission | **Time varying** | **Time varying** | 1850 | 2021 | Evaluation |
| piClim-Control (amip) | Preindustrial conditions including SST and SIC prescribed | All 1850, CO2 prescribed concentration | Same as piControl | Same as piControl | 1 | 30 | Baseline for model-specific effective radiative forcing (ERF) calculations |
| piClim-anthro (amip) | As piClim-Control  except present-day anthropogenic forcing | All 2021, CO2 prescribed concentration | Same as piControl | Same as piControl | 1 | 30 | Quantify present-day total anthropogenic ERF |
| piClim-4xCO2 (amip) | As piClim-Control  except CO2 concentrations set to 4 times preindustrial | All 1850 except CO2 prescribed at 4 times preindustrial concentration | Same as piControl | Same as piControl | 1 | 30 | Quantify ERF of 4 × CO2 |

The CMIP Panel, WIP and relevant TTs are working on a dynamic format for the experiment specifications to ensure everyone can access the most up to date information rather than referring to a static paper going forwards. In the meantime, for forcings information and descriptions, we strongly recommend referring to the information/documentation found at https://wcrp-cmip.org/cmip-phases/cmip7/cmip7-forcing-datasets/ linking to the dataset overviews at https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/


---

## 4th April 2025
### Model output technical updates

Dear Modelling Centre technical leads,
 
The WGCM Infrastructure Panel (WIP) have prepared a short update (attached) outlining some upcoming technical changes in the CMIP7 data requirements, mainly regarding model output preparation. Each change from CMIP6 practices has been carefully considered by the WIP and associated task teams, and while modelling groups will need to adapt their data preparation procedures to the changes, we believe that the effort required will not be onerous. 
 
If you have any questions or feedback or this email has come to the wrong contact at your centre, please email [cmip-ipo@esa.int](mailto:cmip-ipo@esa.int)

Best wishes,
 
CMIP IPO (on behalf of WIP)

[2025-04-04_CMIP7-Infrastructure-update.pdf](https://github.com/user-attachments/files/25296271/2025-04-04_CMIP7-Infrastructure-update.pdf)

---

## 1st April 2025 
### Data Request v1.2
Dear CMIP community,
 
We are pleased to release [v1.2 of the CMIP7 Data Request](https://wcrp-cmip.org/cmip7-data-request-v1-2/). Today's release finalises the content requested in the CMIP AR7 Fast Track Data Request.
The key components of the Data Request that you can access from today are:

1. [The online database (hosted on Airtable)](https://bit.ly/CMIP7-DReq-v1_2),
2. [Database guidance pages (hosted on ScribeHow)](https://bit.ly/CMIP7-DReq-guidance)
3. [v1.2 release webpage](https://wcrp-cmip.org/cmip7-data-request-v1-2/)

Please note that we anticipate two additional releases across the next month: one updating the [Data Request software package (API)](https://github.com/CMIP-Data-Request/CMIP7_DReq_Software), and the other (v1.2.1) performing minor technical updates to the variables, mostly confined to the cell methods. This will result in v1.2.1 being released on 25th April 2025. However, these releases do not prevent modelling centres starting to use the Data Request to configure workflows.

If you would like more information about the new structure of the Data Request for CMIP7, or some background information about how the Data Request was developed, you can find this on the [CMIP7 Data Request webpage](https://wcrp-cmip.org/cmip-phases/cmip7/cmip7-data-request/).

This release would not have been possible without the immense amount of work contributed by the [Thematic Author Team](https://airtable.com/appVPW6XAZfbOZjYM/shrH4w1SMsaSGOO7F) members and the [Data Request Task Team](https://wcrp-cmip.org/cmip7-task-teams/data-request/).  

### CMIP7 Data Request v1.2 launch session

The Data Request Task Team are holding a virtual launch event following the [Data Request v1.2 release.](https://wcrp-cmip.org/event/data-request-v1-0-launch-1/) The event is aimed at MIPs and Modelling Centres, though anyone from the CMIP Community is invited to register.

During the session, the Task Team and thematic author team representatives will present an overview of the request, including descriptions of the changes in structure since CMIP6, an overview of the information and tools available to you, and an update on the CMIP7 Data Request software package. There will be opportunities for questions and discussion throughout the session.

Please note, this event is being repeated across two sessions to enable participation from colleagues working in different time zones. You only need to attend one of the two meetings.

Register for Session 1: [Monday 19th May, 15:00-16:00 UTC](https://wcrp-cmip.org/event/data-request-v1-2-launch-session-1/)

Register for Session 2: [Tuesday 20th May, 07:00-08:00 UTC](https://wcrp-cmip.org/event/data-request-v1-2-launch-session-2/)

Best wishes,
CMIP IPO (on behalf of the Data Request Task Team)
 
Apologies for any cross-posting of this announcement.

---

## 27th March 2025
### Forcings update

The [CMIP Forcings Task Team](https://wcrp-cmip.org/cmip7-task-teams/forcings/) would like to provide an update on the availability of CMIP7 forcings datasets:

- CMIP7 Anthropogenic short-lived climate forcer (SLCF) and CO2 emissions data is now [available](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/anthropogenic-slcf-co2-emissions/#cmip7). 
- For models with interactive chemistry, all data sets required for piControl and historical simulations are now available.
- For models that require ozone and nitrogen deposition as inputs, we expect ozone and nitrogen deposition piControl datasets to be available before the end of April.
- Please see [https://wcrp-cmip.org/cmip-phases/cmip7/cmip7-forcing-datasets/](https://wcrp-cmip.org/cmip-phases/cmip7/cmip7-forcing-datasets/) for links to the data, where and how to feedback, and how to ensure you stay updated on the latest announcements.


---

## 31st January 2025

### Request for update on your plans for AR7 Fast Track
On the 17 January we provided an update of key CMIP components to facilitate your participation in the AR7 Fast Track simulations (see attached or available for download [here](https://wcrp-cmip.org/wp-content/uploads/2025/01/25-01_Modelling-centre-update_FINAL.pdf)) and also asked you to provide a consolidated response on your centre/group’s planning for AR7 Fast Track simulations in this [short form](https://airtable.com/applbQctZtl09L2Ga/pagZPvPgcuOkVspkx/form) by 08:00 UTC Friday 14th February. A pdf version of the form is also attached but only responses submitted via the [short form](https://airtable.com/applbQctZtl09L2Ga/pagZPvPgcuOkVspkx/form) will be accepted. Although the deadline is 14th February,  ScenarioMIP will meet next week and have requested information on when centres/groups may be initiating scenario simulations to support their own timeline planning. Downstream activities such as CORDEX, ISIMIP and ISMIP7 are also keen to be informed on the latest status to determine their ability to deliver within the AR7 timeframe, which is expected to be confirmed at the IPCC Plenary at the end of February.

### Update on CMIP6Plus stratospheric aerosol optical property and volcanic sulfur emission datasets
Version 1.3.0 of the CMIP6Plus stratospheric aerosol optical property and volcanic sulfur emission datasets are now [available on ESGF](https://esgf-node.ornl.gov/search?project=input4MIPs&activeFacets=%7B%22source_id%22%3A%22UOEXETER-CMIP-1-3-1%22%7D) with succinct documentation [available here](https://docs.google.com/document/d/1blX5kv0We1BteqWzMKs0OuhazAcAonay/edit?usp=sharing&ouid=111400553859688856208&rtpof=true&sd=true). A key development in this version is the addition of small-magnitude volcanic eruption pre-satellite era, addressing an important bias in previous versions. This development means that the piControl climatology for stratospheric aerosol optical properties should be very stable from now on, and that if you start spinning up your model with this version, we expect minor effects when you implement future updates, including the final version that will be frozen for use in the AR7 Fast Track at the end of February. We encourage users to test the available datasets and provide feedback via the input4MIPs_CVs repository discussions on [GitHub](https://github.com/PCMDI/input4MIPs_CVs/discussions).

---

## 30th January 2025
### Data Request v1.1

Dear CMIP Modelling Centres,
 
We are pleased to release [v1.1 of the CMIP7 Data Request](https://wcrp-cmip.org/cmip7-data-request-v1-1/).
 
There are three key components of the request that you can access from today:

1. [The online database (hosted on Airtable)](https://bit.ly/CMIP7-DReq-v1_1),
2. [The software package (hosted on GitHub)](https://github.com/CMIP-Data-Request/CMIP7_DReq_Software).
3. [Database guidance pages (hosted on ScribeHow)](https://bit.ly/CMIP7-DReq-guidance)

 
All information about accessing and using the request is available on our website at [https://wcrp-cmip.org/cmip7-data-request-v1-1](https://wcrp-cmip.org/cmip7-data-request-v1-1) for future reference, including links to guidance documents – please read this carefully.
 
Feedback requested
Modelling centres are invited to provide feedback on v1.1. Feedback mechanisms are the same as in the [previous round of consultation](https://wcrp-cmip.org/cmip7/cmip7-data-request/public-consultation-phase2/). Modelling centres who have provided feedback during previous consultation phases do not need to submit any feedback again, unless you want to update your answers.
 
There are a few high-level questions we would like input on from as many modelling centres as possible. In addition to this, we have three additional feedback options for those who would like to provide greater insight to their centre’s production intent for Opportunities, variables, and variable groups. The links in the list below will direct you to more information about each feedback mechanism.

1. [Overview survey](https://wcrp-cmip.org/cmip7/cmip7-data-request/public-consultation-phase3/#1_the_overview_survey): requested from all modelling centres (estimated ~10-15 minutes to complete).
2. [Technical comments on specific Opportunities, variables, or variable groups: ](https://wcrp-cmip.org/cmip7/cmip7-data-request/public-consultation-phase3/#2_comment_forms)optional for modelling centres.
3. [Production intent for Opportunities and variable groups: optional for modelling centres.](https://wcrp-cmip.org/cmip7/cmip7-data-request/public-consultation-phase3/#3_modelling_centre_production_intent_for_opportunities_and_variable_groups) Information is useful for thematic author teams when undergoing their harmonisation work.
4. [Production intent for Variables](https://wcrp-cmip.org/cmip7/cmip7-data-request/public-consultation-phase3/#4_modelling_centre_production_intent_for_variables): optional for modelling centres. Information is useful for thematic author teams when undergoing their harmonisation work.

 
Detailed feedback is not compulsory though responses to the Overview Survey would be appreciated from as many centres/activities as possible. However, the Data Request Task Team appreciates any feedback to improve the request. 
 
A PDF of the survey and the more detailed feedback form are attached to help consolidate one response from across your modelling centre. However, we will only accept responses via the [online survey form](https://bit.ly/CMIP7-DReq-consultation-survey). The variable spreadsheet is also attached – if you choose to fill in the spreadsheet, please return to the CMIP IPO via email ([cmip-ipo@esa.int](mailto:cmip-ipo@esa.int)). 
 
Feedback Deadlines
The v1.2 release will be published on 31st March 2025. This will be the final major version of the CMIP7 Data Request for the AR7 Fast Track. Feedback must be submitted by 07:00 UTC on 17th March 2025. 
 
The earlier the Task Team receive feedback, the more chance we have to incorporate technical fixes into the database, improving its usability. Key feedback from CMIP6 highlighted that the frequently evolving Data Request caused issues for many modelling centres. The v1.2 release is intended to be the final major release for the AR7 Fast Track, so any updates are requested as soon as possible. A minor release is expected later in 2025 for any small variable fixes.
 
We request one consolidated response from each modelling centre, so please circulate the materials to all necessary people in your centre, collate the responses into the attached feedback spreadsheet and email to [cmip-ipo@esa.int](mailto:cmip-ipo@esa.int). 
 
We would like to thank the thematic author teams for all their hard work developing the request. 
  
Best wishes,
CMIP IPO (on behalf of the Data Request Task Team)
 
Apologies for any cross-posting of this announcement.

---

## 17th January 2025
### AFT updates

Dear All,
 
We are writing to provide an update of key CMIP components to facilitate your participation in the AR7 Fast Track simulations (see attached or available for download [here](https://wcrp-cmip.org/wp-content/uploads/2025/01/25-01_Modelling-centre-update_FINAL.pdf)). The update contains details on:

1. CMIP7 description paper
2. Historical forcing dataset availability
3. Scenarios and harmonisation
4. Data request
5. Rapid Evaluation Framework
 
Given this information, we ask you to provide information on your centre/group’s planning for spin up, piControl, historical and wider AR7 Fast Track simulations in this [short form](https://airtable.com/applbQctZtl09L2Ga/pagZPvPgcuOkVspkx/form) by 08:00 UTC Friday 14th February. This information has been specifically requested from downstream communities such as CORDEX, ISIMIP, ISMIP7 and others to support their planning for contribution to AR7. Please ensure you submit a consolidated response from your centre/group.
 
Best wishes,

CMIP IPO (on behalf of the CMIP Panel and WIP)

---

## 22nd November 2024
### Data Request v1.0

Dear MIPs and Modelling Centres,
 
We are pleased to [release v1.0 of the CMIP7 Data Request](https://wcrp-cmip.org/cmip7-data-request-v1-0). There are two key components of the request that you can access and review from today: 

1. [the online database (hosted on Airtable),](https://bit.ly/CMIP7-DReq-v1_0)
2. [the software package hosted on GitHub](https://github.com/CMIP-Data-Request/CMIP7_DReq_Software). 

 
All information about accessing and using the request is available on our website at [https://wcrp-cmip.org/cmip7-data-request-v1-0](https://wcrp-cmip.org/cmip7-data-request-v1-0) for future reference, including links to guidance documents – please read this carefully.
 
Please feel free to continue to provide feedback using the Excel spreadsheets and/or Variable Comment forms circulated [during the v1.0beta release](https://wcrp-cmip.org/cmip7-data-request-v1-0beta/). These will continuously be incorporated into the request.
 
We would like to thank the thematic author teams for all their hard work developing the request.
 
Best wishes,
CMIP IPO

---

## 13th November 2024
### CMIP6Plus preliminary forcing datasets

A number of CMIP6Plus preliminary forcing datasets have been made [available ](https://input4mips-controlled-vocabularies-cvs.readthedocs.io/en/latest/database-views/input4MIPs_delivery-summary_CMIP6Plus.html)via ESGF through the input4MIPs project ([https://aims2.llnl.gov/search/input4MIPs](https://aims2.llnl.gov/search?project=input4MIPs&activeFacets=%7B%22mip_era%22%3A%22CMIP6Plus%22%7D)) and are ready for testing by any interested modelling centres or data analysts.

 We encourage users to test the [available datasets ](https://input4mips-controlled-vocabularies-cvs.readthedocs.io/en/latest/database-views/input4MIPs_delivery-summary_CMIP6Plus.html)and provide feedback via the input4MIPs_CVs repository discussions on [GitHub (https://github.com/PCMDI/input4MIPs_CVs/discussions)](https://github.com/PCMDI/input4MIPs_CVs/discussions). For further details on the CMIP DECK forcing suite please see the [CMIP Forcings Task Team webpage](https://wcrp-cmip.org/cmip7-task-teams/forcings/), the recent open community drop-in session [slides](https://wcrp-cmip.org/wp-content/uploads/2024/10/2024-10-29_Forcings-drop-in_session.pdf) and [recording](19a0cdb6fd9d5ada593958dfb1a9daf2), and the input4MIPs documentation repository ([https://input4mips-controlled-vocabularies-cvs.readthedocs.io/en/latest/dataset-overviews/](https://input4mips-controlled-vocabularies-cvs.readthedocs.io/en/latest/dataset-overviews/)) 

All CMIP6Plus era data sets are for testing purposes only, i.e. they are not to be relied upon for CMIP7 production runs. CMIP7 datasets to support the AR7 Fast Track will be made available in early 2025.

We would like to extend a huge thank you to the Forcings Task Team for their work in coordinating this effort.

---

## 21st October 2024
### Data Request v1.0beta

Dear CMIP Modelling Centres,
 
We are pleased to release v1.0beta of the CMIP7 Data Request today. There are three key components of the request that you can access and review from today: 

1. [the online database (hosted on Airtable),](https://bit.ly/CMIP7-DReq-v1_0beta)
2. an Excel spreadsheet to gather feedback (attached), and 
3. [the software package hosted on GitHub](https://github.com/CMIP-Data-Request/CMIP7_DReq_Software). 

 
All information for the review is available on our website at [https://wcrp-cmip.org/cmip7-data-request-v1-0beta](https://wcrp-cmip.org/cmip7-data-request-v1-0beta)for future reference including links to guidance documents – please read this carefully.
 
Feedback requested
Modelling centres and MIPs are invited to provide feedback on v1.0beta. Feedback is not compulsory; however, the Data Request Task Team appreciates any feedback to improve the request. The full v1.0 release will be published on 22nd November 2024. The deadline for feedback which you would like to be considered in advance of the full public v1.0 release should be submitted by 23:59 UTC on 17th November 2024. Feedback submitted after this date is still welcome and will be considered for v1.1 later this year. 
 
The earlier the Task Team receive feedback, the more stable future Data Request releases will be. Key feedback from CMIP6 highlighted that a the frequently evolving Data Request caused issues for many modelling centres. The ongoing work and public consultations aim to reduce the number of updates required for the CMIP7 Data Request. Your feedback is essential for this. 
 
We request one consolidated response from each modelling centre, so please circulate the materials to all necessary people in your centre, collate the responses into the attached feedback spreadsheet and email to [cmip-ipo@esa.int](mailto:cmip-ipo@esa.int). 
 
Please visit our dedicated webpage at https://wcrp-cmip.org/cmip7-data-request-v1-0beta/ for detailed information about reading and reviewing the CMIP7 Data Request, including links to guidance documents.
 
Best wishes,
CMIP IPO (on behalf of the Data Request Task Team)

---


