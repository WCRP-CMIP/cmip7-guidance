---
layout: default
title: "Experiment Setup and Forcings Guidance: piClim-control"
---

# Experiment Setup and Forcings Guidance: piClim-control

Baseline for effective radiative forcing (ERF) calculations. `piControl` with prescribed sea-surface temperatures and
sea-ice concentrations from a climatology of the model's `piControl` simulation.

- Responsible activity: [CMIP](./index.md#cmip)
- Tier: 1
- MIP co-chair review: No review initiated yet

This page is intended to help with implementation.
If you notice something that is unclear, please
[raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).

For the full background of the experiment, please see the following URLs:

- [https://doi.org/10.5194/gmd-18-6671-2025](https://doi.org/10.5194/gmd-18-6671-2025)

## Experiment set up

The prescribed sea-surface temperatures and sea-ice concentrations must come from a (monthly varying, annually
repeating) climatology taken from at least 30 years of your [pre-industrial control](./picontrol.md) simulation (i.e.
these forcings are derived from your model output from one of your own simulations, they are not provided by a forcings
provider).

### Parent experiment and branching

The piClim-control experiment branches from the [piControl](./picontrol.md) experiment (part of
[CMIP](./index.md#cmip)).
The parent experiment's MIP era is [CMIP7](https://wcrp-cmip.org/CMIP7).

Branch from [piControl](./picontrol.md) at a time of your choosing.

### Output time axis

You are free to start and end the time axis of your outputs at whatever time you like (e.g. starting at year 1, or 1850,
or year 500).
You must perform at least 30 simulation years.

If you have no strong feeling, then it may be clearest to set the start time to the middle of the period over which the
climatology was taken from the pre-industrial control experiment.
For example, if your climatology is taken over the years 120-150 in the pre-industrial control experiment, then you
could start the time axis of your piClim-control output at year 135.

### Minimum ensemble size

Only one ensemble member is required.

## Forcings

The following information will help you identify the forcings to use.
However, we can't define every single detail because there can be lots of subjective steps between the raw forcings data
and model inputs (e.g. interpolation, re-aggregation, supplementation with other information).
If further guidance would be helpful, please [raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).

### General headlines

The piClim-control experiment is a fixed forcings experiment.

### Data

Here we make a distinction between data that is described on other experiment pages, data that is described on other
experiment pages with modifications you have to make yourself, data available via ESGF's input4MIPs project and data
distributed via other channels.

#### Data described on other experiment pages

For the following data, please see these other experiment pages:

- [piControl](./picontrol.md) for anthropogenic emissions, biomass burning emissions, land use, greenhouse gas
  concentrations, stratospheric aerosol forcing, solar, aerosol optical properties, population density, ozone, nitrogen
  deposition

#### Data described on other experiment pages with modifications you have to make

No data described on other experiment pages requires modifications by you.
Please see the other [data](#data) sub-sections for details of the forcings data to use for this experiment.

#### Data available via input4MIPs

No input4MIPs-based data is described specifically on this page.
Please see the other [data](#data) sub-sections for details of the forcings data to use for this experiment.

#### Data not available via input4MIPs

- sea-surface temperature forcing
    - notes: derived from a (monthly varying, annually repeating) climatology taken from at least 30 years of your
      [pre-industrial control](./picontrol.md) simulation
