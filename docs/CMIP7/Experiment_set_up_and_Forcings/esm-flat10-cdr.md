---
layout: default
title: "Experiment Setup and Forcings Guidance: esm-flat10-cdr"
---

# Experiment Setup and Forcings Guidance: esm-flat10-cdr

Extension of `esm-flat10` where emissions decline linearly to -10 PgC / yr then stay constant until cumulative emissions
(including the emissions in `esm-flat10`) reach zero.
An extra 20 years is included at the end to allow for calculating averages over different time windows.

- Responsible activity: [C4MIP](./index.md#c4mip)
- Tier: 1
- MIP co-chair review: **In progress** see
  [https://github.com/WCRP-CMIP/cmip7-guidance/issues/186](https://github.com/WCRP-CMIP/cmip7-guidance/issues/186)

This page is intended to help with implementation.
If you notice something that is unclear, please
[raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).

For the full background of the experiment, please see the following URLs:

- [https://doi.org/10.5194/gmd-17-8141-2024](https://doi.org/10.5194/gmd-17-8141-2024)
- [https://doi.org/10.5194/gmd-18-5699-2025](https://doi.org/10.5194/gmd-18-5699-2025)
- [https://doi.org/10.5194/gmd-9-2853-2016](https://doi.org/10.5194/gmd-9-2853-2016)

## Experiment set up

### Parent experiment and branching

The esm-flat10-cdr experiment branches from the [esm-flat10](./esm-flat10.md) experiment (part of
[C4MIP](./index.md#c4mip)).
The parent experiment's MIP era is [CMIP7](https://wcrp-cmip.org/CMIP7).

Branch from [esm-flat10](./esm-flat10.md) at the start of year 101 (i.e. 101-01-01).

### Output time axis

You are free to start and end the time axis of your outputs at whatever time you like (e.g. starting at year 1, or 1850,
or year 500).
You must perform at least 220 simulation years.

### Minimum ensemble size

Only one ensemble member is required.

## Forcings

The following information will help you identify the forcings to use.
However, we can't define every single detail because there can be lots of subjective steps between the raw forcings data
and model inputs (e.g. interpolation, re-aggregation, supplementation with other information).
If further guidance would be helpful, please [raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).

### General headlines

The esm-flat10-cdr experiment is a fixed forcings experiment.

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

- for anthropogenic emissions, use the forcings from [esm-flat10](./esm-flat10.md) but starting from the 10 PgC / yr
  total CO<sub>2</sub> emissions used in esm-flat10, decrease the total CO<sub>2</sub> emissions by 0.2 PgC / yr until
  the end of year 200 (200-12-31) then hold total CO<sub>2</sub> emissions constant at -10 PgC / yr for 100 years until
  the end of year 300 (300-12-31).
  For the last 20 years, set the total CO<sub>2</sub> emissions to 0.0 PgC / yr.

#### Data available via input4MIPs

No input4MIPs-based data is described specifically on this page.
Please see the other [data](#data) sub-sections for details of the forcings data to use for this experiment.

#### Data not available via input4MIPs

No data that is not input4MIPs-based is described specifically on this page.
Please see the other [data](#data) sub-sections for details of the forcings data to use for this experiment.
