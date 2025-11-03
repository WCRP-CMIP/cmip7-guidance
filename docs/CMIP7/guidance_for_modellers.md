---
layout: default
title: CMIP7 Participation Guidance for Modellers
---

# CMIP7 Participation Guidance for Modellers

## 1. Requirements & Expectations

Groups who plan to participate in CMIP7 should (in roughly this order, although model documentation should be 
provided as early as possible):

* Indicate your intention to participate by registering your institution and model with the 
  [CMIP7 Controlled Vocabularies](https://github.com/WCRP-CMIP/CMIP7-CVs) when the registration
  process is available. Publication of your model output (on ESGF) will not be possible
  without first registering your institution and model, which includes providing the
  *Essential Model Documentation* for your model. The list of currently registered
  institutions can be found at ***link needed*** and the registration process is 
  via ***link needed***.

* Following, or as part of, the registration of your models you will be able to indicate your
  intention to participate in community MIPs through the `activity_participation` information
  for your models. Information on community MIPs can be found [here](https://wcrp-cmip.org/mips).

* Ensure that you have joined the modelling group mailing list -- if unsure please 
  contact the [CMIP IPO](mailto:cmip-ipo@esa.int) for further details.

* Perform required DECK and MIP experiments, using the required 
  [standard forcing datasets](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/).

* Save all requested model output as specified in the 
  [Data Request](https://wcrp-cmip.org/cmip-phases/cmip7/cmip7-data-request/) where possible (see section 4 below).
  Prioritise the [Baseline Climate Variables](https://gmd.copernicus.org/articles/18/2639/2025/), a group of 135 variables that are requested from all experiments.


* Document all simulations including forcing information and a description of ensemble variants
  (details to be clarified later).

* Prepare and make available model output according to CMIP7 specifications (see sections 5, 6, 
  and 7 below).

* Plans for DOI registration and citation facilities are under consideration and 
  further information will be provided in due course.

* Correct published data when errors are discovered. Errors should be documented using the
  [ESGF Errata Service](https://errata.ipsl.fr/) before further action is taken, e.g. retraction
  and publication of replacement datasets.  Please note that the Errata Service supports 
  [user proposed issues](https://ipsl.gitbook.io/esgf-errata-service/errata-service-web-pages/propose-an-issue-through-webforms),
  which are moderated and passed to modelling groups as required. Further information about the
  service is available in the 
  [Errata Service Documentation](https://ipsl.gitbook.io/esgf-errata-service).

## 2.  Experiment Design

The CMIP7 protocol and experiments are described in a special issue of Geoscientific Model Development with an overview 
of the overall design and scientific strategy provided in the lead article of that issue by 
[Dunne et al. (2025)]( https://doi.org/10.5194/gmd-18-6671-2025).

-	Each model participating in CMIP7 is encouraged to contribute results from the eight DECK experiments 
  (`amip`, `piControl`/`esm-piControl`, `abrupt-4xCO2`, `1pctCO2`, `historical`/`esm-hist`, `piClim-control`, `piClim-anthro`, 
  `piClim-4xCO2`). See [Dunne et al. (2025)]( https://doi.org/10.5194/gmd-18-6671-2025) where the experiment protocol 
  is documented. These experiments are considered to baseline the climate models and are directly overseen by the CMIP panel. 
  With the introduction of emission driven simulations, the panel now allows emission driven or concentration driven simulations.
-	In addition to the DECK, each modelling group is encouraged to complete the Assessment Fast Track experiments described in 
  [Dunne et al. (2025)]( https://doi.org/10.5194/gmd-18-6671-2025). 
-	When called for by the experiment protocol, it is requested that the standard forcing datasets (see Section 3) are used 
  and that any deviation from the standard forcing is documented (guidance to be confirmed).

## 3.  Forcing data sets

Forcing information can be found [here](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/).

## 4.  Model output fields

The [CMIP7 Data Request](https://wcrp-cmip.org/cmip-phases/cmip7/cmip7-data-request/) specifies the list of model output variables that should be saved from each of the CMIP7 experiments. 
Find the [latest Data Request release here](https://wcrp-cmip.org/cmip7-data-request-latest).

The Data Request is organized into **Opportunities** describing scientific goals and the model output needed to achieve them. 
These Opportunities were developed through a wide community consultation, leading to a Data Request structured into three overarching parts: **Core**, **Harmonised**, and **Unharmonised**.

!!! note "Changes since CMIP6"

    Key new features of the CMIP7 Data Request include:

    - Use of **Opportunities** to document scientific objectives
    - The three-part structure, with **Core** denoting a relatively small number of highest-priority variables
    - Access via the online **Airtable** [web browser interface](https://bit.ly/CMIP7-DReq-latest) as well as a [python API](https://github.com/CMIP-Data-Request/CMIP7_DReq_software) for programmatic use

    These features are explained in more detail below.

### Core request

This component of the CMIP7 Data Request comprises a core list of 131 variables that are **requested from all experiments**. 
These model output variables, referred to as **Baseline Climate Variables for Earth System Modelling** (ESM-BCVs), enable evaluation of climate simulations across CMIP phases and MIP experiments. 

The development of the first version of the ESM-BCVs list, which segued into the wider public consultation process that developed the CMIP7 Data Request, is described in [Juckes et al. (2025)](https://doi.org/10.5194/gmd-18-2639-2025).
To promote their consistent availability across the ESGF archive, modellers are requested to provide these variables with highest priority, from every experiment.
The **Priority Level** of these variables is denoted as **Core**.

### Harmonised request

The Harmonised component of the CMIP7 Data Request is organized into 46 **Opportunities** that are grouped by five scientific **themes**: Atmosphere, Earth System, Impacts & Adaptation, Land & Land-ice, and Ocean & Sea-ice.
Five **thematic papers** in the [CMIP7 GMD Special Issue](https://gmd.copernicus.org/articles/special_issue1315.html) give an overview of the scientific rationale and requested variables for each theme's Opportunities.

Each **Opportunity** in the Data Request database specifies:

- A description of its scientific topic, justification of resources, and expected scientific impacts;
- The experiments from which output is requested (organized into **Experiment Groups**);
- The variables requested from those experiments (organized into **Variable Groups**).

The ESM-BCVs are represent as an Opportunity that requests output from *all* experiments, with its Variable Groups having a **Priority Level** of **Core** (interpreted as higher than other three priority levels).
All other Variable Groups are assigned a priority of **High**, **Medium**, or **Low**:

- **High**: The variables support the core objectives of the Opportunity, and are required to make it viable.
- **Medium**: These variables deliver extra information enabling analysts push the scientific boundaries further.
- **Low**: These variables help to fill gaps and are more speculative. This priority level can also be used for data that has prior agreement to be produced by particular modelling centres, so it is not expected by additional centres unless they wish to participate.

Opportunities document why variables are requested and provide modellers the flexibility to support community-driven scientific questions aligning with their own goals.
Based on a set of Opportunities supported, the [Data Request Software](https://github.com/CMIP-Data-Request/CMIP7_DReq_software) produces lists of requested variables for each experiment (see [Tools](#tools-to-access-and-use-the-data-request), below).
Modellers preferring not to customize their data production via Opportunity selection may simply choose to support *all* Opportunities.


<!-- The Harmonised component has been developed to meet AR7 deadlines and is targeted primarily at the AFT experiments, but also includes experiments outside the AFT. -->

### Unharmonised request

This component will be driven by community MIPs, with high flexibility, following the initial phase of CMIP7 production focusing on the AR7 AFT experiments.
Development of the Unharmonised component is in progress, with guidance to follow. 
It is likely to involve MIP-defined Opportunities defining their requests subject only to transparent technical requirements.

### Tools to access and use the Data Request

The [CMIP7 Data Request](https://wcrp-cmip.org/cmip-phases/cmip7/cmip7-data-request/) webpage provides links to the [latest version of the Data Request](https://wcrp-cmip.org/cmip7-data-request-latest), which can be [viewed online](https://bit.ly/CMIP7-DReq-latest) in the cloud-based **Airtable** application. User guidance on accessing the Data Request via Airtable is provided. 
An HTML-based Github-hosted view of the latest Data Request version is also [available here](https://cmip-data-request.github.io/cmip7-dreq-webview/latest/index.html).

The [Data Request Software](https://github.com/CMIP-Data-Request/CMIP7_DReq_software) provides a **python API** and scripts that can be used to query the data request and incorporate it into modelling workflows. 
Given a list of Opportunities supported, the software will determine the resulting lists of variables to output from each experiment by combining the separate requests from each Opportunity.



## 5.  Model output requirements

CMIP7 model output requirements are similar to those in CMIP6, with notable changes including:

- Updated [Global Attributes and Data Reference Syntax (DRS)](./global_attributes.md)
- Introduction of [Branded Variable Names](./branded_variables.md) used in output filenames, directory paths, and [CMOR tables](https://github.com/WCRP-CMIP/cmip7-cmor-tables/)
- Information on the [Data Request](#4--model-output-fields) is available via several entry points: [Airtable database](https://bit.ly/CMIP7-DReq-latest), [web viewer](https://cmip-data-request.github.io/cmip7-dreq-webview/latest), and [python API](https://github.com/CMIP-Data-Request/CMIP7_DReq_software)

As in CMIP6, all CMIP7 output will be stored in netCDF files with one variable stored per file.
The requested output fields can be determined [from the Data Request as described above](#4--model-output-fields).
As in CMIP6, the data must be “CMORized” (i.e., written in conformance with all the CMIP standards). 
The CMIP standards build on the [CF-conventions](https://cfconventions.org/), which define metadata that provide a description of the variables and their spatial and temporal properties. 
This facilitates analysis of the data by users who can read and interpret data from all models in the same way.

!!! warning "Quality Control of netCDF files"

    [Publication to ESGF](./guidance_for_esgf.md) requires CMORized netCDF files to pass Quality Control (QC) checks.
    More information on the **ESGF Quality Control (QC) Framework** [is here](#7--software-for-checking-output).

As [described below](#6--software-for-preparing-output) it is recommended, but not required, that the CMOR software library be used to rewrite model output in conformance with the standards.
Data requirements are defined and discussed in the following documents:

- [Definition of CMIP7 netCDF Global Attributes](https://zenodo.org/records/17250297), which includes specifications for file names and directory structures
- [Reference "controlled vocabularies" (CVs) for CMIP7](https://github.com/WCRP-CMIP/CMIP7-CVs)
- [Guidance on output grids](https://zenodo.org/records/15697025)
- Requested atmospheric pressure levels are described in [Table 2 / Figure 2 of Dingley et al. 2025](https://egusphere.copernicus.org/preprints/2025/egusphere-2025-3189/)
- [Guidance on time averaging (with masking)](https://wcrp-cmip.github.io/WGCM_Infrastructure_Panel/CMIP6/time_and_area_averaging.html)

Additional metadata requirements are imposed on a variable by variable basis as specified in the Data Request.
Many of these are recognized by CMOR (through input via the CMIP7 CMOR Tables), which will ensure compliance.
In addition to standardized metadata (e.g., cell methods) provided in the Data Request (and CMOR tables) for each requested variable, data producers should be aware that important information may be given in the **Processing Note** and **Description** of a requested variable.
These may be viewed in the Data Request [using Airtable](https://bit.ly/CMIP7-DReq-latest) ("Variables" tab, 3rd from left) or in the [web viewer](https://cmip-data-request.github.io/cmip7-dreq-webview/latest/variables.html).

Data producers should note that Controlled Vocabularies (CVs) play a key role in ensuring uniformity in the description of datasets across all models.
CVs are relied on in constructing file names and directory structures, and enable faceted searches of the CMIP7 ESGF archive. 
CMIP7 output requirements that are critical for successful ingestion and access via ESGF [will be enforced](#7--software-for-checking-output) when publication of the data is initiated.
The success of CMIP7 also depends on making sure that even the requirements that cannot be checked by ESGF are met. 
This is the responsibility of all data producers preparing model output for CMIP7.



## 6.  Software for preparing output

While CMOR is widely used for preparing standardised model output for CMIP and other projects, other tools are available.
Developers of tools that do an equivalent job to CMOR for CMIP7 are invited to 
[raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new) on github and ideally provide a PR with an 
update to this section of the documentation.

### 6a CMOR

CMOR, the `Climate Model Output Rewriter`, is a library written in C with interfaces for both Fortran and Python, with the aim of enforcing correct data and metadata structures for projects such as CMIP, which are now used widely across many projects.
CMOR is maintained by PCMDI on [github](https://github.com/PCMDI/cmor) and is available for installation via [conda](https://anaconda.org/conda-forge/cmor) and has documentation [here](https://cmor.llnl.gov/).
For CMIP7, the CMOR library has been updated in line with the changes to the [CMIP7 Global Attributes](https://zenodo.org/records/17250297). 
Data producers should update to version [v3.13](https://cmor.llnl.gov/news/2025/10/14/cmor3/) of CMOR to gain access to the necessary changes.

The CMOR PrePARE tool, used for quality checking in CMIP6, has been retired and data producers should refer to section 7 below for guidance on the new quality control tool, `esgf-qc`.

CMOR uses three main inputs;

| Input component | Description | 
| --- | --- |
| `CMOR tables`| JSON files describing the variables (metadata attributes for variables) |
| `Controlled Vocabulary`| A JSON file describing the allowed values of metadata fields |
| The `Input JSON file` | control information and specific values of metadata (global attributes) to be used in the creation of output files |

For CMIP7 the [CMOR tables](https://github.com/WCRP-CMIP/cmip7-cmor-tables/) have been constructed from 
the [CMIP7 data request](https://wcrp-cmip.org/cmip-phases/cmip7/cmip7-data-request/) and releases of these tables, starting with version v1.2.2.2, will follow data request releases until the new WCRP Variable Registry is established.
Note that CMOR tables may also be referred to in some contexts as MIP tables.

The Controlled Vocabulary JSON file used by CMOR will be produced and made available as part of the [CMIP7-CVs](https://github.com/WCRP-CMIP/CMIP7-CVs) repository and versioned separately. 
Note that this is a change relative to CMIP6 and further guidance alongside the CMOR tables when this file is ready for use. 
For testing purposes sample CV JSON files are available via the [CMOR tables](https://github.com/WCRP-CMIP/cmip7-cmor-tables/tree/test) repository.

Examples of the input JSON file for CMOR are available via [a jupyter notebook](https://github.com/WCRP-CMIP/cmip7-cmor-tables/blob/main/cmor_demo.ipynb).


## 7.  Software for checking output

The **ESGF Quality Control (QC) Framework** is a new unified solution designed to validate and ensure the integrity of climate model outputs intended for publication on the Earth System Grid Federation (ESGF).  
Historically, QC in ESGF has relied on a patchwork of tools (**PrePARE**, **QA-DKRZ**, **nctime**, and others) each covering different aspects of metadata and data checks. While effective, this fragmented approach introduced redundancy, maintenance challenges, and reduced transparency in QC workflows.  

The goal of this framework is to provide a cohesive, extensible, and transparent system that consolidates key checks, covers at least the minimum requirements for ESGF publication, and produces standardized reporting.

> ⚠️ **We’re releasing an **early version** of this ESGF QC Framework**. This release is the result of ongoing development and while not final, it aims to give *data managers* and *advanced users* an opportunity to explore the tool and adapt their workflows in anticipation of CMIP7. This early release is *not* intended for general use. It is primarily targeted at *data providers* responsible for the **pre-publication QC** of CMIP data on ESGF.

### 🚧 Important Caveats

- **Scope is limited**:  
  - Support only the subset of **CMIP6** variables provided to the **Copernicus Climate Data Store**
  - **CMIP7** is not yet supported due to pending updates to the Controlled Vocabulary (CV)

- **Development in progress**:  
  - The framework may still contain **minor bugs**  
  - **QC results may change** in future releases and **should not be treated as final** .

- **Not yet validated**:  
  - This version is for experimentation, not for compliance reporting.

### 🛠 Development Approach

This framework was developed through a **community-driven, iterative process**:

- Forked from the **IOOS Compliance Checker** for its modular architecture
- Feature branches reviewed and merged after unit testing  
- Public GitHub repository with issue tracking and a contribution guide
- Development progress tracked via a shared, public QC checklist table

### 📦 How to Get Started

- Installation instructions and basic usage are available here: 📘 https://esgf.github.io/esgf-qc/  
- GitHub release: 🔗 https://github.com/ESGF/esgf-qc/tree/v0.1-beta

### ⚙️ Configuration, Usage & Reporting

The framework can run specific or full QC suites against your NetCDF files. The framework was designed with a clear separation between definition and logic, ensuring that QC rules remain modular and easy to maintain.

The **configuration** enables simple versioning and sharing of rule sets, while allowing users to quickly copy and customize configurations—for example, by adjusting the list of checks or their severity levels to match a specific project context through a human-readable **TOML files** that control:
- Which checks are run
- Their severity
  - 🚫 **MANDATORY**: Must pass for file/dataset to be valid.
  - ⚠️ **WARNING**: Does not block ingestion or impact critical downstream processes, but highlights issues that should be corrected from a user perspective to ensure data quality and usability.
  - ℹ️ **OPTIONAL**: Informational checks with no impact on validity
- Expected values or constraints where applicable

> ⚠️ In this beta version, the **variable registry is not yet queried**. Variable information from CV relies on a **manual mapping** defined in the configuration file. To be automated via **esgvoc** in future releases.

**Usage** is built on the IOOS Compliance Checker, maintaining workflow flexibility for modeling groups that already operate their own QA/QC pipelines. It generates atomic log files per run (at both file and dataset levels) and supports seamless parallel execution, enabling straightforward integration with batch schedulers and large-scale production workflows. 
  ```bash
  esgqc --test=wcrp_cmip6:1.0 /path/to/data/file.nc
  ```

The **reporting system** inherits the IOOS logic, combining output filtering, severity-based scoring, and granular reports suitable for both operational monitoring and expert review. Results can be easily mapped to standard logging levels (info, warning, critical), facilitating integration with existing QA dashboards. Future releases will extend these capabilities with consolidated dataset-level reports for a clearer overview of publication readiness.

### 💡 Why Now?

This early release aims to:

- Help **data centres** and **modeling groups** prepare for CMIP7 data workflows.
- Gather **feedback** on tool design, performance, and usability.
- Build alignment with emerging **vocabulary and metadata conventions**.

### 🗣️ How to Contribute

If you encounter issues or have suggestions, please **open a GitHub issue** on the project repository:  
👉 https://github.com/ESGF/esgf-qc/issues

## 8.  Archiving/publishing output
## 9.  Documentation Process
## 10.  CMIP7 organisation and governance

The [CMIP panel](https://wcrp-cmip.org/cmip-governance/cmip-panel/) which is under 
[WCRP ESMO SSG](https://www.wcrp-esmo.org/about/the-esmo-team/the-esmo-scientific-steering-group) 
provides overall guidance and oversight of CMIP activities. 
The CMIP panel sets out the scientific priorities, experiments and protocols for CMIP7. 
Although the [CMIP7 webpages](https://wcrp-cmip.org/cmip-phases/cmip7/) provide additional information 
that may be of interest to CMIP7 participants, 
only the CMIP7 Guide (these pages) provides definitive documentation of CMIP7 technical requirements.
The experiments within the Assessment Fast Track are managed by independent MIP committees, but the 
modelling groups are asked to prepare their model output following a common procedure (Sections 4-7 above).

The WCRP-ESMO Infrastructure Panel (WIP) has responsibility for most of the technical requirements of CMIP. 
The mission, rationale and Terms of Reference for the WIP can be found 
[here](https://wcrp-cmip.org/cmip-governance/wip/).
