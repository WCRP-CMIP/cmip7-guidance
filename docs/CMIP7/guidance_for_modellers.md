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

The [CMIP panel](https://wcrp-cmip.org/cmip-governance/cmip-panel/) which is under 
[WCRP ESMO SSG](https://www.wcrp-esmo.org/about/the-esmo-team/the-esmo-scientific-steering-group) 
provides overall guidance and oversight of CMIP activities. 
The CMIP panel sets out the scientific priorities, experiments and protocols for CMIP7. 
Although the CMIP7 webpages provide additional information that may be of interest to CMIP7 participants, 
only the CMIP7 Guide (these pages) provides definitive documentation of CMIP7 technical requirements.
The experiments within the Assessment Fast Track are managed by independent MIP committees, but the 
modelling groups are asked to prepare their model output following a common procedure.

The WCRP-ESMO Infrastructure Panel (WIP) has responsibility for most of the technical requirements of CMIP. 
The mission, rationale and Terms of Reference for the WIP can be found 
[here](https://wcrp-cmip.org/cmip-governance/wip/).