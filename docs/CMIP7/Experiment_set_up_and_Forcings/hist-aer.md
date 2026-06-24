---
layout: default
title: "Experiment Setup and Forcings Guidance: hist-aer"
---

# Experiment Setup and Forcings Guidance: hist-aer

Response to historical aerosol forcing (with extension using forcings from the `m` scenario simulation).
All other conditions are kept the same as piControl.

- Responsible activity: [DAMIP](./index.md#damip)
- Tier: 1
- MIP co-chair review: **In progress** see
  [https://github.com/WCRP-CMIP/cmip7-guidance/issues/188](https://github.com/WCRP-CMIP/cmip7-guidance/issues/188)

This page is intended to help with implementation.
If you notice something that is unclear, please
[raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).

For the full background of the experiment, please see the following URLs:

- [https://doi.org/10.5194/gmd-18-4399-2025](https://doi.org/10.5194/gmd-18-4399-2025)

## Experiment set up

### Parent experiment and branching

The hist-aer experiment branches from the [piControl](./picontrol.md) experiment (part of [CMIP](./index.md#cmip)).
The parent experiment's MIP era is [CMIP7](https://wcrp-cmip.org/CMIP7).

Branch from [piControl](./picontrol.md) at the same time as [historical](./historical.md).

### Output time axis

Your output time axis must start on 1850-01-01 and must end on 2035-12-31.
You must perform the full simulation i.e. 186 simulation years.

### Minimum ensemble size

At least 3 ensemble members are required.

## Forcings

The following information will help you identify the forcings to use.
However, we can't define every single detail because there can be lots of subjective steps between the raw forcings data
and model inputs (e.g. interpolation, re-aggregation, supplementation with other information).
If further guidance would be helpful, please [raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).

### General headlines

The hist-aer experiment uses a mix of fixed and transient forcings.
Please see the data sections below for details.

### Data

Here we make a distinction between data that is described on other experiment pages, data that is described on other
experiment pages with modifications you have to make yourself, data available via ESGF's input4MIPs project and data
distributed via other channels.

#### Data described on other experiment pages

For the following data, please see these other experiment pages:

- [historical](./historical.md) for anthropogenic emissions, biomass burning emissions
- [scen7-m](./scen7-m.md) for anthropogenic emissions, biomass burning emissions
- [piControl](./picontrol.md) for land use, greenhouse gas concentrations, stratospheric aerosol forcing, solar, aerosol
  optical properties, population density, ozone, nitrogen deposition

#### Data described on other experiment pages with modifications you have to make

No data described on other experiment pages requires modifications by you.
Please see the other [data](#data) sub-sections for details of the forcings data to use for this experiment.

#### Data available via input4MIPs

No input4MIPs-based data is described specifically on this page.
Please see the other [data](#data) sub-sections for details of the forcings data to use for this experiment.

#### Data not available via input4MIPs

No data that is not input4MIPs-based is described specifically on this page.
Please see the other [data](#data) sub-sections for details of the forcings data to use for this experiment.
