---
layout: default
title: CMIP7 CV Registration Guide
---

# CMIP7 Controlled Vocabulary Registration Guide

This guide explains how to register new entries in CMIP7 Controlled Vocabularies (CVs) such as institutions, models (source_id), experiments, and model documentation components.

---

## 1. Overview

CMIP7 uses **Controlled Vocabularies (CVs)** to ensure consistency across all participating modelling centres. Before publishing data, you must register:

- Your **institution** (organisation)
- Your **model** (source_id)
- Any new **experiments** (if applicable)
- **Model documentation** (EMD) components

Registration is done through **GitHub issue forms** - no Git expertise required.

---

## 2. Registration Forms

### 2.1 Institution Registration

Register your institution before registering a model.

**Repository**: [WCRP-constants](https://github.com/WCRP-CMIP/WCRP-constants/issues)

| Form | Link | Required Fields |
|------|------|-----------------|
| Organisation | [Register Institution](https://github.com/WCRP-CMIP/WCRP-constants/issues/new?template=organisation.yml) | Acronym, Full name, ROR |

**Notes**:
- The **acronym** must be unique and cannot be changed once data is published
- A **ROR** (Research Organisation Registry) identifier is required for traceability. Find yours at [ror.org](https://ror.org)
- Consortia are also registered as organisations

---

### 2.2 Model Registration (source_id)

**Important**: Before registering a `source_id`, you **must** complete the EMD (Essential Model Documentation) registration process first. The `source_id` registration requires a reference to your registered EMD Model entry.

**Prerequisites**:
1. Institution registered (see 2.1)
2. EMD registration completed (see 2.4) - including grids, components, and top-level Model

**Repository**: [CMIP7-CVs](https://github.com/WCRP-CMIP/CMIP7-CVs/issues)

| Form | Link |
|------|------|
| Source (Model) | [Register source_id](https://github.com/WCRP-CMIP/CMIP7-CVs/issues/new?template=source.yml) |

---

### 2.3 Experiment Registration

For new experiments not already in the CV.

**Repository**: [CMIP7-CVs](https://github.com/WCRP-CMIP/CMIP7-CVs/issues)

| Form | Link |
|------|------|
| Experiment | [Register experiment](https://github.com/WCRP-CMIP/CMIP7-CVs/issues/new?template=experiment.yml) |

---

### 2.4 Essential Model Documentation (EMD)

EMD provides detailed technical documentation of your model. Registration follows a **hierarchical process** - you must register components in order.

**Repository**: [Essential-Model-Documentation](https://github.com/WCRP-CMIP/Essential-Model-Documentation/issues)

#### Registration Order

```
1. Grid Cells (Horizontal + Vertical)
        |
        v
2. Computational Grids (Horizontal + Vertical)
        |
        v
3. Model Components (atmosphere, ocean, etc.)
        |
        v
4. Top-level Model
```

#### Available Forms

| Step | Form | Link |
|------|------|------|
| 1a | Horizontal Grid Cells | [Register](https://github.com/WCRP-CMIP/Essential-Model-Documentation/issues/new?template=horizontal_grid_cells.yml) |
| 1b | Vertical Computational Grid | [Register](https://github.com/WCRP-CMIP/Essential-Model-Documentation/issues/new?template=vertical_computational_grid.yml) |
| 2a | Horizontal Computational Grid | [Register](https://github.com/WCRP-CMIP/Essential-Model-Documentation/issues/new?template=horizontal_computational_grid.yml) |
| 2b | Horizontal Subgrid | [Register](https://github.com/WCRP-CMIP/Essential-Model-Documentation/issues/new?template=horizontal_subgrid.yml) |
| 3 | Model Component | [Register](https://github.com/WCRP-CMIP/Essential-Model-Documentation/issues/new?template=model_component.yml) |
| 4a | Model Family | [Register](https://github.com/WCRP-CMIP/Essential-Model-Documentation/issues/new?template=model_family.yml) |
| 4b | Model (top-level) | [Register](https://github.com/WCRP-CMIP/Essential-Model-Documentation/issues/new?template=model.yml) |
| - | Reference | [Register](https://github.com/WCRP-CMIP/Essential-Model-Documentation/issues/new?template=reference.yml) |

---

## 3. Registration Workflow

### Overall Registration Order

```
1. Institution (WCRP-constants)
        |
        v
2. EMD Registration (Essential-Model-Documentation)
   2a. Grid Cells (Horizontal + Vertical)
   2b. Computational Grids
   2c. Model Components
   2d. Top-level Model
        |
        v
3. source_id (CMIP7-CVs) <-- requires EMD Model
        |
        v
4. Experiments (if needed)
```

### Step-by-Step Process

1. **Check if already registered**: Before creating a new entry, verify it doesn't already exist in the CV
2. **Fill the form**: Click the appropriate link and complete all required fields
3. **Submit**: This creates a GitHub issue
4. **Automated checks**: The system performs initial validation
5. **Review**: A reviewer checks your submission
6. **Feedback loop**: You may be asked to make corrections
7. **Approval**: Once approved, the entry is merged into the CV

### Typical Timeline

- Simple registrations (institution): 1-3 days
- Complex registrations (full EMD): May take longer due to dependencies

### Tips

- **Don't wait**: Start EMD registration early - dependencies mean sequential steps
- **Check dependencies**: A Model Component cannot reference a grid that isn't registered yet
- **Be precise**: Acronyms and identifiers cannot be changed after data publication
- **Ask for help**: Use the "General Issue" form if you have questions

---

## 4. After Registration

Once your CVs are registered:

1. **esgvoc** library will include your entries in the next update
2. You can use your registered identifiers in CMOR tables
3. Your data will pass QA/QC validation for these CV fields

---

## 5. Tools & Resources

### esgvoc Library

The `esgvoc` Python library provides programmatic access to all CVs:

- GitHub: https://github.com/WCRP-CMIP/esgf-vocab
- Documentation: https://esgf.github.io/esgf-vocab/

### CV Repositories

| Repository | Content |
|------------|---------|
| [CMIP7-CVs](https://github.com/WCRP-CMIP/CMIP7_CVs/) | CMIP7-specific CVs (source_id, experiment) |
| [WCRP-Universe](https://github.com/WCRP-CMIP/WCRP-Universe/) | Cross-project CVs (frequency, realm, etc.) |
| [WCRP-constants](https://github.com/WCRP-CMIP/WCRP-constants/) | Organisations/institutions |
| [Essential-Model-Documentation](https://github.com/WCRP-CMIP/Essential-Model-Documentation/) | EMD components |

---

## 6. Getting Help

- **General questions**: Open a [General Issue](https://github.com/WCRP-CMIP/CMIP7-CVs/issues/new) in the relevant repository
- **CV discussions**: See [CVs_discussion.md](CVs_discussion.md)
- **Contact IPO**: For complex cases, contact the CMIP International Project Office
