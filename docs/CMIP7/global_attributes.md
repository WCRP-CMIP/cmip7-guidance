---
layout: default
title: CMIP7 Global Attributes
---

# CMIP7 Global Attributes

**Version:** 1.0  
**Published:** 6 October 2025  
**DOI:** [10.5281/zenodo.17250297](https://doi.org/10.5281/zenodo.17250297)  
**Authors:** Karl E. Taylor, Laurent Troussellier, Sasha Ames, David Hassell, Maria Molina, Zebedee Nicholls, Martin Schupfner, James Anstey, Daniel Ellis, Elisabeth Dingley, Paul J. Durack, Guillaume Levavasseur, Matthew Mizielinski, and Marie-Pierre Moine  

---

## 1. Executive Summary

This document **summarizes** the definitions of the **global attributes**, **Data Reference Syntax (DRS)**, **file naming conventions**, and **directory structure** for **CMIP7** (Coupled Model Intercomparison Project Phase 7).  

It is intended as a convenient reference and overview.  
The **authoritative and complete specification** is available on Zenodo:  
➡️ [https://doi.org/10.5281/zenodo.17250297](https://doi.org/10.5281/zenodo.17250297)

Each CMIP7 model output file includes standardized metadata (global attributes) describing:

- The **source model** and **experiment conditions**
- **Data content** and **licensing**
- **Controlled vocabulary (CV)** values ensuring consistency across models

These attributes ensure interoperability, facilitate search and retrieval, and provide traceable metadata for analysis.  
The DRS system connects file naming, directory organization, and dataset metadata.

---

## 2. Introduction

CMIP7 continues the CMIP framework with updated and expanded metadata definitions.  
Each file records a well-defined set of **global attributes** — some mandatory, some optional — required to:

- Identify the model and experiment
- Ensure reproducibility and data discovery
- Enable automated validation and search

Values for many attributes are governed by **CMIP7 Controlled Vocabularies (CVs)** available at:  
➡️ [https://github.com/WCRP-CMIP/CMIP7_CVs/](https://github.com/WCRP-CMIP/CMIP7_CVs/)  
[https://github.com/WCRP-CMIP/WCRP-Universe/](https://github.com/WCRP-CMIP/WCRP-Universe/)  
Guidance documents: [https://wcrp-cmip.github.io/cmip7-guidance/](https://wcrp-cmip.github.io/cmip7-guidance/)

---

## 3. Data Reference Syntax (DRS) Components

The **DRS** defines how datasets are uniquely identified and organized. It uses a subset of global attributes to construct:
- **Filenames**
- **Directory paths**
- **URLs and search facets**

### Key Global Attributes

| Category | Attribute | Example | Description |
|-----------|------------|----------|--------------|
| **Identification** | `activity_id` | `CMIP`, `ScenarioMIP` | Activity responsible for experiment |
| | `experiment_id` | `historical`, `piControl` | Short label for experiment |
| | `mip_era` | `CMIP7` | CMIP phase |
| | `source_id` | `CanESM6-MR` | Model identifier |
| **Versioning** | `data_specs_version` | `MIP-DS7.1.0.0` | Version of data specifications |
| | `drs_specs` | `MIP-DRS7` | Label for DRS version |
| **Simulation Variants** | `realization_index` | `r1` | Different ensemble member |
| | `initialization_index` | `i1` | Initialization method/date |
| | `physics_index` | `p1` | Physics configuration |
| | `forcing_index` | `f1` | Forcing variant |
| **Structure & Sampling** | `temporal_label` | `tavg`, `tpt` | Time sampling type |
| | `vertical_label` | `h2m`, `200hPa` | Vertical level sampling |
| | `horizontal_label` | `hxy`, `hs` | Horizontal sampling |
| | `area_label` | `u`, `lnd`, `sea` | Area mask |
| **Other Required Fields** | `frequency`, `grid_label`, `region`, `realm`, `variable_id`, `tracking_id` |  | Define data frequency, grid, domain, and unique file IDs |

**Conditionally Required Attributes:**  
Used only when datasets branch from parent simulations (e.g., `branch_time_in_parent`, `parent_activity_id`).

**Optional Attributes:**  
Provide additional context (e.g., `experiment`, `institution`, `license`, `source`, `title`, `variant_info`).

---

## 4. File Name Template

Each CMIP7 file follows a standardized pattern derived from global attributes:
```
<variable_id>_<branding_suffix>_<frequency>_<region>_<grid_label>_<source_id>_<experiment_id>_<variant_label>[_<timeRangeDD>].nc
```
### Example:

tas_tavg-h2m-hxy-u_mon_glb_g13s_CanESM6-MR_historical_r2i1p1f1_190001-190912.nc  



### Notes:
- `timeRangeDD` is omitted for fixed (time-independent) variables.
- Filenames directly encode key experiment and model metadata.

---

## 5. Directory Structure Template

The CMIP7 archive organizes files hierarchically using the following DRS pattern:

```
<drs_specs>/<mip_era>/<activity_id>/<institution_id>/<source_id>/<experiment_id>/<variant_label>/<region>/<frequency>/variable_d>/<branding_suffix>/<grid_label>/<directoryDateDD>
```



### Example:

MIP-DRS7/CMIP7/CMIP/CCCma/CanESM6-MR/historical/r2i1p1f1/glb/mon/tas/tavg-h2m-hxy-u/g13s/v20250622

**`datasetEditionDD`** (e.g., `v20250622`) marks the dataset creation or revision date.

---

## 6. Appendix 1: Global Attributes for Labeling Experiments

- **Branching Attributes:**  
  Required when a simulation derives from a parent run:
  - `branch_time_in_child`
  - `branch_time_in_parent`
  - `parent_time_units`

- **Parent Identifiers:**  
  `parent_activity_id`, `parent_experiment_id`, `parent_source_id`, `parent_variant_label`, etc.

These ensure reproducibility and traceability between related simulations.

---

## 7. Appendix 2: Algorithms for Defining the “nominal_resolution” Attribute

The `nominal_resolution` describes approximate horizontal grid spacing (e.g., `"1 km"`, `"250 km"`).  
It is computed using a standard algorithm (updated from CMIP6 Appendix 2) that ensures consistent comparison of model resolutions across CMIP7 datasets.

---

## 8. Appendix 3: Document Version Information

- **Document Version:** v1.0  
- **Publication Date:** 6 October 2025  
- **DOI:** [10.5281/zenodo.17250297](https://doi.org/10.5281/zenodo.17250297)  
- **Maintained by:** WCRP CMIP7 CV TT Team  
- **Reference CV Repository:** [CMIP7_CVs GitHub](https://github.com/WCRP-CMIP/CMIP7_CVs)

---

**For further guidance and updates:**  
Visit the CMIP7 documentation portal:  
🔗 [https://wcrp-cmip.github.io/cmip7-guidance/](https://wcrp-cmip.github.io/cmip7-guidance/)
