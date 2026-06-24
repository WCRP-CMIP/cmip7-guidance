---
layout: default
title: "Experiment Setup and Forcings Guidance: piClim-anthro"
---

# Experiment Setup and Forcings Guidance: piClim-anthro

In combination with `piClim-control`, quantifies present-day total anthropogenic effective radiative forcing (ERF).

- Responsible activity: [CMIP](./index.md#cmip)
- Tier: 1
- MIP co-chair review: **In progress** see
  [https://github.com/WCRP-CMIP/cmip7-guidance/issues/183](https://github.com/WCRP-CMIP/cmip7-guidance/issues/183)

This page is intended to help with implementation.
If you notice something that is unclear, please
[raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).

For the full background of the experiment, please see the following URLs:

- [https://doi.org/10.5194/gmd-18-6671-2025](https://doi.org/10.5194/gmd-18-6671-2025)

## Experiment set up

### Parent experiment and branching

The piClim-anthro experiment branches from the [piControl](./picontrol.md) experiment (part of [CMIP](./index.md#cmip)).
The parent experiment's MIP era is [CMIP7](https://wcrp-cmip.org/CMIP7).

Branch from [piControl](./picontrol.md) at the same time as [piClim-control](./piclim-control.md).

### Output time axis

You are free to start and end the time axis of your outputs at whatever time you like (e.g. starting at year 1, or 1850,
or year 500).
You must perform at least 30 simulation years.

If you have no strong feeling, then you will make life simplest for analysts if you use the same time axis as
[piClim-control](./piclim-control.md).

### Minimum ensemble size

Only one ensemble member is required.

## Forcings

The following information will help you identify the forcings to use.
However, we can't define every single detail because there can be lots of subjective steps between the raw forcings data
and model inputs (e.g. interpolation, re-aggregation, supplementation with other information).
If further guidance would be helpful, please [raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).

### General headlines

The piClim-anthro experiment is a fixed forcings experiment.

### Data

Here we make a distinction between data that is described on other experiment pages, data that is described on other
experiment pages with modifications you have to make yourself, data available via ESGF's input4MIPs project and data
distributed via other channels.

#### Data described on other experiment pages

For the following data, please see these other experiment pages:

- [piControl](./picontrol.md) for stratospheric aerosol forcing, solar
- [piClim-control](./piclim-control.md) for sea-surface temperature forcing

#### Data described on other experiment pages with modifications you have to make

For the following forcings, please use data from the specified experiments with the specified modifications.

- for anthropogenic emissions, use the forcings from [historical](./historical.md) but hold the values constant
  throughout the simulation; apply 2021 values
- for biomass burning emissions, use the forcings from [historical](./historical.md) but hold the values constant
  throughout the simulation; apply 2021 values
- for land use, use the forcings from [historical](./historical.md) but hold the values constant throughout the
  simulation; apply 2021 values
- for greenhouse gas concentrations, use the forcings from [historical](./historical.md) but hold the values constant
  throughout the simulation; apply 2021 values
- for ozone, use the forcings from [historical](./historical.md) but hold the values constant throughout the simulation;
  apply 2021 values
- for nitrogen deposition, use the forcings from [historical](./historical.md) but hold the values constant throughout
  the simulation; apply 2021 values
- for aerosol optical properties, use the forcings from [historical](./historical.md) but hold the values constant
  throughout the simulation; apply 2021 values
- for population density, use the forcings from [historical](./historical.md) but hold the values constant throughout
  the simulation; apply 2021 values

#### Data available via input4MIPs

No input4MIPs-based data is described specifically on this page.
Please see the other [data](#data) sub-sections for details of the forcings data to use for this experiment.

#### Data not available via input4MIPs

No data that is not input4MIPs-based is described specifically on this page.
Please see the other [data](#data) sub-sections for details of the forcings data to use for this experiment.
