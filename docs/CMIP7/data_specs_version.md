---
layout: default
title: CMIP7 Data Specifications Versioning
---

# CMIP7 Data Specifications Versioning

This document describes the versioning strategy for CMIP7 data specifications, including the `data_specs_version` global attribute.

---

## 1. Overview

CMIP7 files include three versioning-related global attributes:

| Attribute | Purpose | CMIP7 Value |
|-----------|---------|-------------|
| **Conventions** | CF conventions version | `CF-1.12` (or later) |
| **drs_specs** | Data Reference Syntax identifier | `MIP-DRS7` |
| **data_specs_version** | Version of CVs and data specifications | `MIP-DS7.1.0.0` |

---

## 2. Attribute Definitions

### 2.1 Conventions

Identifies the CF (Climate and Forecast) conventions version followed by the file.

- All CMIP7 data must conform to **CF-1.12** or later
- This attribute is defined by CF conventions
- Software may parse this to check CF compliance

### 2.2 drs_specs

Identifies the Data Reference Syntax (DRS) used for file naming and directory structure.

- Fixed at **`MIP-DRS7`** for all CMIP7 data
- Defines how filenames and directories are constructed
- Does **not** include the CV values themselves (only the structure)
- Allows software to know the "shape" of file paths without opening files

### 2.3 data_specs_version

Identifies the version of data specifications used when creating the file.

**Initial value for CMIP7**: `MIP-DS7.1.0.0`

The detailed versioning scheme (what triggers version increments) is still under discussion.

---

## 3. Current Version

### MIP-DS7.1.0.0

**Release date**: February 2026

**Components**:

| Component | Version | Reference |
|-----------|---------|-----------|
| Global attributes & DRS | v1.0 | [DOI: 10.5281/zenodo.17250297](https://doi.org/10.5281/zenodo.17250297) |
| Data Request | v1.2.2.3 | [CMIP7 Data Request](https://github.com/CMIP-Data-Request/CMIP7_DReq_Software) |
| Controlled Vocabularies | v7.1.0.0 | [CMIP7-CVs](https://github.com/WCRP-CMIP/CMIP7_CVs/) |

---

## 4. Versioning Policy

### 4.1 Key Constraint

> **Any changes to CVs or Data Request must NOT break data intercomparability.**

This is a strict requirement for the CMIP7 Fast Track. Files produced under different `data_specs_version` values must remain comparable.

### 4.2 Permitted Changes

| Change Type | Allowed | Notes |
|-------------|---------|-------|
| Add new CV terms (source, experiment, etc.) | Yes | Most common update |
| Changes not affecting file attributes | Yes | No impact on files |
| Relaxation of existing restrictions | Yes | Document only |
| Changes causing QA/QC warnings | Rare | Requires discussion |
| Changes causing QA/QC fatal errors | No | Would break intercomparability |

### 4.3 QA/QC Behaviour

- QA/QC **should respect** the `data_specs_version` recorded in the file
- Files are validated against the specifications that were in place when they were produced
- This allows modelling groups to publish data produced under previous (but still valid) specifications

---

## 5. Version History

| Version | Date | Changes |
|---------|------|---------|
| `MIP-DS7.1.0.0` | Feb 2026 | Initial release for CMIP7 Fast Track |

*Future versions will be documented here with detailed changelogs.*

---

## 6. Background

This versioning strategy was developed through extensive discussion within the CMIP7 CV Task Team (January 2026). Key contributors: Guillaume Levavasseur, Zebedee Nicholls, Karl Taylor, Matthew Mizielinski, Martin Juckes.

The full discussion is archived in the WCRP-CMIP collaboration platform.

### Key Design Decisions

1. **Separate DRS from CVs**: `drs_specs` identifies structure; `data_specs_version` covers CV content
2. **Backward compatibility**: New versions must not invalidate previously published data
3. **QA/QC flexibility**: Tools validate against the version in the file, not necessarily the latest
4. **Transparency over complexity**: A single version string cannot capture all nuances; detailed CHANGELOGs are essential

---

## 7. References

- [CMIP7 Global Attributes Specification](https://doi.org/10.5281/zenodo.17250297)
- [CMIP7 Controlled Vocabularies](https://github.com/WCRP-CMIP/CMIP7_CVs/)
- [esgvoc Library](https://github.com/WCRP-CMIP/esgf-vocab)
