---
layout: default
title: "Experiment Setup and Forcings Guidance: amip-piForcing"
---

# Experiment Setup and Forcings Guidance: amip-piForcing

Same as `amip` simulation, except it starts in 1870 and all forcings are set to pre-industrial levels rather than
time-varying forcings.

- Responsible activity: [CFMIP](./index.md#cfmip)
- Tier: 1
- MIP co-chair review: **In progress** see
  [https://github.com/WCRP-CMIP/cmip7-guidance/issues/185](https://github.com/WCRP-CMIP/cmip7-guidance/issues/185)

This page is intended to help with implementation.
If you notice something that is unclear, please
[raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).

For the full background of the experiment, please see the following URLs:

- [https://doi.org/10.5194/gmd-10-359-2017](https://doi.org/10.5194/gmd-10-359-2017)

## Experiment set up

### Parent experiment and branching

amip-piForcing does not have a parent experiment.

### Output time axis

Your output time axis must start on 1870-01-01 and must end on 2021-12-31.
You must perform the full simulation i.e. 152 simulation years.

### Minimum ensemble size

Only one ensemble member is required.

## Forcings

The following information will help you identify the forcings to use.
However, we can't define every single detail because there can be lots of subjective steps between the raw forcings data
and model inputs (e.g. interpolation, re-aggregation, supplementation with other information).
If further guidance would be helpful, please [raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).

### General headlines

The amip-piForcing experiment uses a mix of fixed and transient forcings.
Please see the data sections below for details.

### Data

Here we make a distinction between data that is described on other experiment pages, data that is described on other
experiment pages with modifications you have to make yourself, data available via ESGF's input4MIPs project and data
distributed via other channels.

#### Data described on other experiment pages

For the following data, please see these other experiment pages:

- [piControl](./picontrol.md) for anthropogenic emissions, biomass burning emissions, land use, greenhouse gas
  concentrations, stratospheric aerosol forcing, solar, aerosol optical properties, population density, ozone, nitrogen
  deposition
- [amip](./amip.md) for AMIP sea-surface temperature and sea-ice boundary forcing

#### Data described on other experiment pages with modifications you have to make

No data described on other experiment pages requires modifications by you.
Please see the other [data](#data) sub-sections for details of the forcings data to use for this experiment.

#### Data available via input4MIPs

No input4MIPs-based data is described specifically on this page.
Please see the other [data](#data) sub-sections for details of the forcings data to use for this experiment.

#### Data not available via input4MIPs

No data that is not input4MIPs-based is described specifically on this page.
Please see the other [data](#data) sub-sections for details of the forcings data to use for this experiment.
