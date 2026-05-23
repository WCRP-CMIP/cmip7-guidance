---
layout: default
title: "Experiment Setup and Forcings Guidance: esm-flat10"
---

# Experiment Setup and Forcings Guidance: esm-flat10

10 PgC / yr constant carbon dioxide emissions.

- Responsible activity: [C4MIP](./index.md#c4mip)
- Tier: 1
- MIP co-chair review: No review initiated yet

This page is intended to help with implementation.
If you notice something that is unclear, please
[raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).

For the full background of the experiment, please see the following URLs:

- [https://doi.org/10.5194/gmd-17-8141-2024](https://doi.org/10.5194/gmd-17-8141-2024)
- [https://doi.org/10.5194/gmd-18-5699-2025](https://doi.org/10.5194/gmd-18-5699-2025)
- [https://doi.org/10.5194/gmd-9-2853-2016](https://doi.org/10.5194/gmd-9-2853-2016)

## Experiment set up

### Parent experiment and branching

The esm-flat10 experiment branches from the [esm-piControl](./esm-picontrol.md) experiment (part of
[CMIP](./index.md#cmip)).
The parent experiment's MIP era is [CMIP7](https://wcrp-cmip.org/CMIP7).

Branch from [esm-piControl](./esm-picontrol.md) at a time of your choosing.

### Output time axis

You are free to start and end the time axis of your outputs at whatever time you like (e.g. starting at year 1, or 1850,
or year 500).
You must perform at least 100 simulation years.

### Minimum ensemble size

Only one ensemble member is required.

## Forcings

The following information will help you identify the forcings to use.
However, we can't define every single detail because there can be lots of subjective steps between the raw forcings data
and model inputs (e.g. interpolation, re-aggregation, supplementation with other information).
If further guidance would be helpful, please [raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).

### General headlines

The esm-flat10 experiment is a fixed forcings experiment.

### Data

Here we make a distinction between data that is described on other experiment pages, data that is described on other
experiment pages with modifications you have to make yourself, data available via ESGF's input4MIPs project and data
distributed via other channels.

#### Data described on other experiment pages

For the following data, please see these other experiment pages:

- [piControl](./picontrol.md) for biomass burning emissions, land use, greenhouse gas concentrations, stratospheric
  aerosol forcing, solar, aerosol optical properties, population density, ozone, nitrogen deposition

#### Data described on other experiment pages with modifications you have to make

For the following forcings, please use data from the specified experiments with the specified modifications.

- for anthropogenic emissions, use the forcings from [piControl](./picontrol.md) but set the total CO<sub>2</sub>
  emissions to 10 PgC / yr

#### Data available via input4MIPs

No input4MIPs-based data is described specifically on this page.
Please see the other [data](#data) sub-sections for details of the forcings data to use for this experiment.

#### Data not available via input4MIPs

No data that is not input4MIPs-based is described specifically on this page.
Please see the other [data](#data) sub-sections for details of the forcings data to use for this experiment.
