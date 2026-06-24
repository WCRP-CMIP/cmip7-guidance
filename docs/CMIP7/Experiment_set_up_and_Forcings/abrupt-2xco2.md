---
layout: default
title: "Experiment Setup and Forcings Guidance: abrupt-2xCO2"
---

# Experiment Setup and Forcings Guidance: abrupt-2xCO2

Abrupt doubling of atmospheric carbon dioxide levels.
All other conditions are kept the same as piControl.

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

The abrupt CO<sub>2</sub> doubling experiment is a simple branch from the [piControl simulation](./picontrol.md).

After branching, the atmospheric CO<sub>2</sub> concentrations should be set to two times the CO<sub>2</sub>
concentrations used in the piControl experiment.

### Parent experiment and branching

The abrupt-2xCO2 experiment branches from the [piControl](./picontrol.md) experiment (part of [CMIP](./index.md#cmip)).
The parent experiment's MIP era is [CMIP7](https://wcrp-cmip.org/CMIP7).

Branch from [piControl](./picontrol.md) at a time of your choosing.

### Output time axis

You are free to start and end the time axis of your outputs at whatever time you like (e.g. starting at year 1, or 1850,
or year 500).
You must perform at least 300 simulation years.

### Minimum ensemble size

Only one ensemble member is required.

## Forcings

The following information will help you identify the forcings to use.
However, we can't define every single detail because there can be lots of subjective steps between the raw forcings data
and model inputs (e.g. interpolation, re-aggregation, supplementation with other information).
If further guidance would be helpful, please [raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).

### General headlines

The abrupt-2xCO2 experiment is a fixed forcings experiment.

### Data

Here we make a distinction between data that is described on other experiment pages, data that is described on other
experiment pages with modifications you have to make yourself, data available via ESGF's input4MIPs project and data
distributed via other channels.

#### Data described on other experiment pages

For the following data, please see these other experiment pages:

- [piControl](./picontrol.md) for anthropogenic emissions, biomass burning emissions, land use, stratospheric aerosol
  forcing, solar, aerosol optical properties, population density, ozone, nitrogen deposition

#### Data described on other experiment pages with modifications you have to make

For the following forcings, please use data from the specified experiments with the specified modifications.

- for greenhouse gas concentrations, use the forcings from [piControl](./picontrol.md) but double the CO<sub>2</sub>
  concentrations

#### Data available via input4MIPs

No input4MIPs-based data is described specifically on this page.
Please see the other [data](#data) sub-sections for details of the forcings data to use for this experiment.

#### Data not available via input4MIPs

No data that is not input4MIPs-based is described specifically on this page.
Please see the other [data](#data) sub-sections for details of the forcings data to use for this experiment.
