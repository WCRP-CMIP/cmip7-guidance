---
layout: default
title: "Experiment Setup and Forcings Guidance: amip-p4K"
---

# Experiment Setup and Forcings Guidance: amip-p4K

Same as `amip` simulation, except sea surface temperatures are increased by 4K in ice-free regions.

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

amip-p4K does not have a parent experiment.

### Output time axis

Your output time axis must start on 1979-01-01 and must end on 2021-12-31.
You must perform the full simulation i.e. 43 simulation years.

### Minimum ensemble size

Only one ensemble member is required.

## Forcings

The following information will help you identify the forcings to use.
However, we can't define every single detail because there can be lots of subjective steps between the raw forcings data
and model inputs (e.g. interpolation, re-aggregation, supplementation with other information).
If further guidance would be helpful, please [raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).

### General headlines

The amip-p4K experiment is a transient forcings experiment.

### Data

Here we make a distinction between data that is described on other experiment pages, data that is described on other
experiment pages with modifications you have to make yourself, data available via ESGF's input4MIPs project and data
distributed via other channels.

#### Data described on other experiment pages

For the following data, please see these other experiment pages:

- [historical](./historical.md) for anthropogenic emissions, biomass burning emissions, land use, greenhouse gas
  concentrations, stratospheric aerosol forcing, ozone, nitrogen deposition, solar, aerosol optical properties,
  population density

#### Data described on other experiment pages with modifications you have to make

For the following forcings, please use data from the specified experiments with the specified modifications.

- for AMIP sea-surface temperature and sea-ice boundary forcing, use the forcings from [amip](./amip.md) but add 4K to
  sea-surface temperatures in ice-free regions

#### Data available via input4MIPs

No input4MIPs-based data is described specifically on this page.
Please see the other [data](#data) sub-sections for details of the forcings data to use for this experiment.

#### Data not available via input4MIPs

No data that is not input4MIPs-based is described specifically on this page.
Please see the other [data](#data) sub-sections for details of the forcings data to use for this experiment.
