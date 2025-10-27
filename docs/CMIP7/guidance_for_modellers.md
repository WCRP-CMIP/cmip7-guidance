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
  [ES-DOC Errata Service](https://errata.ipsl.fr/) before further action is taken, e.g. retraction
  and publication of replacement datasets.  Please note that the Errata Service supports 
  [user proposed issues](https://ipsl.gitbook.io/esgf-errata-service/errata-service-web-pages/propose-an-issue-through-webforms),
  which are moderated and passed to modelling groups as required. Further information about the
  service is available in the 
  [Errata Service Documentation](https://ipsl.gitbook.io/esgf-errata-service).

## 2.  Experiment Design
## 3.  Forcing data sets

## 4.  Model output fields

The [CMIP7 Data Request](https://wcrp-cmip.org/cmip-phases/cmip7/cmip7-data-request/) specifies the model output variables should be saved from each of the CMIP7 experiments. The Data Request is structured into three main components: **Core**, **Harmonised**, and **Unharmonised**. It is further subdivided into **Opportunities**, which encapsulate scientific goals and the model output needed to achieve them. 

### Core request

This component of the CMIP7 Data Request comprises of core list of 135 variables that are **requested from all experiments**. 
These model output variables, referred to as the Baseline Climate Variables, enable evaluation of climate simulations across CMIP phases and MIP experiments as described in [Juckes et al. (2025)](https://doi.org/10.5194/gmd-18-2639-2025).
To promote their consistent availability across the ESGF archive, modellers are requested to provide these variables with highest priority from every experiment .

### Harmonised request

The Harmonised component of the CMIP7 Data Request is organized into 46 **Opportunities** that are grouped by five scientific **themes**: Atmosphere, Earth System, Impacts & Adaptation, Land & Land-ice, and Ocean & Sea-ice.
Five **thematic papers** in the [CMIP7 GMD Special Issue](https://gmd.copernicus.org/articles/special_issue1315.html) give an overview of the scientific rationale and requested variables for each theme's Opportunities.

Each **Opportunity** in the Data Request database specifies:

- A description of its scientific topic, justification of resources, and expected scientific impacts;
- The experiments from which output is requested (organized into Experiment Groups);
- The variables requested from those experiments (organized into Variable Groups).

Each Variable Group is assigned a **Priority Level** of High, Medium, or Low:

- High: The variables support the core objectives of the Opportunity, and are required to make it viable.
- Medium: These variables deliver extra information enabling analysts push the scientific boundaries further.
- Low: These variables help to fill gaps and are more speculative. This priority level can also be used for data that has prior agreement to be produced by particular modelling centres, so it is not expected by additional centres unless they wish to participate.

Opportunities are intended to make the reasons why variables are requested more transparent, and give modellers the flexibility to support community-driven scientific questions aligned with their own goals.
Modellers wishing to avoid this complexity can simply choose to support *all Opportunities*.
The [Data Request Software](https://github.com/CMIP-Data-Request/CMIP7_DReq_software) will determine lists of requested variables for each experiment based on the Opportunities are supported (see "Tools", below).
Note that the Baseline Climate Variables (Core Request) are included as one of the Opportunities in the database (in this particular case, the Opportunity requests output from all experiments).

The Harmonised component is targeted primarily at AFT experiments and has been developed to meet AR7 deadlines, but also includes experiments outside the AFT.

### Unharmonised request

This component will be driven by community MIPs, with high flexibility, following the initial phase of CMIP7 production focusing on the AR7 AFT experiments.
Development of the Unharmonised component is in progress, with guidance to follow. 
It is likely to involve MIP-defined Opportunities defining their requests subject only to transparent technical requirements.

### Tools to access and use the Data Request

The [CMIP7 Data Request](https://wcrp-cmip.org/cmip-phases/cmip7/cmip7-data-request/) webpage provides links to the latest version of the Data Request, which can be viewed online in the cloud-based Airtable application. User guidance on accessing the Data Request via Airtable are also provided. 

The [Data Request Software](https://github.com/CMIP-Data-Request/CMIP7_DReq_software) provides a python API and scripts that can be used to query the data request and incorporate it into modelling workflows. 
As noted above, given a list of Opportunities supported, the software will determine the resulting lists of variables to output from each experiment by combining the separate requests from each Opportunity (i.e., modellers do not have to manually combine the requests of multiple Opportunities themselves).


## 5.  Model output requirements
## 6.  Software for preparing/checking output

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

## 7.  Archiving/publishing output
## 8.  Documentation Process
## 9.  CMIP7 organisation and governance