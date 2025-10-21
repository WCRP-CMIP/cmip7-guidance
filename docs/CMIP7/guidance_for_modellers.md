---
layout: default
title: CMIP7 Participation Guidance for Modellers
---

# CMIP7 Participation Guidance for Modellers

## 1. Requirements & Expectations
## 2.  Experiment Design
## 3.  Forcing data sets
## 4.  Model output fields
## 5. Model output requirements
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

### Model documentation

The Essential Model Documentation (EMD) is a high-level description of an Earth System Model.

It contains information about model configuration that is helpful to all communities who are expected to make use of the model output, whilst not being so detailed that it becomes too much of a burden on the modelling groups who have to provide the information.

Note that it is not intended to contain all information about a model's formulation.
More detailed documentation than that provided by the EMD is to be found in the references cited as part of the EMD.

The EMD, which has been designed to be applicable to any earth system model, will only be truly valuable when it is provided for all models.
To guarantee this, providing EMD is a mandatory requirement for CMIP7 participation, and the registration of a CMIP7 model will not be possible unless its EMD has been provided.

#### Creating EMD

The online form that will be used for CMIP7 model registration will include a section for completing the EMD.
The EMD will be automatically validated, reviewed by a human and once accepted the model registration can be completed.
The on-line form will also enable those documenting a model to import documentation components from other, already registered models, which can then be edited if required - significantly reducing the time taken to create the content.

The EMD content is stored in GitHub (in JSON files), and may be edited at any time to add further information, or to correct any mistakes. All such changes will go through the usual GitHub-based review process in a  fully transparent and traceable manner.

#### EMD structure

The full EMD specification may be found at https://doi.org/10.5281/zenodo.15439551. However, each question asked in the on-line EMD creation form will also be accompanied by detailed guidance, so reference to the full specification should not generally be necessary during the actual creation process.

EMD comprises the following sections:

- Top-level model
  - A top-level description of the model as whole.
  - Includes model the name and family and an overview description.
- Model components
  - A description of each dynamically simulated model component.
  - Includes the component name and family, an overview description, and the relationship to other components.
- Horizontal and vertical grids
  - For each model component, a description of its native grid.
- References
  - References to published work for the top-level model or one its model components.


## 9.  CMIP7 organisation and governance