---
layout: default
title: "Experiment Setup and Forcings Guidance: 1pctCO2-bgc"
---

# Experiment Setup and Forcings Guidance: 1pctCO2-bgc

Biogeochemically coupled simulation (i.e. the carbon cycle only 'sees' the increase in atmospheric carbon dioxide, not
any change in temperature) of a 1% per year increase in atmospheric carbon dioxide levels.
All other conditions are kept the same as piControl.

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

The 1pctCO2-bgc simulation has the same forcing setup as the [1pctCO2 simulation](./1pctco2.md).

The difference is that your model should be configured such that the carbon cycle only sees the change in atmospheric
CO<sub>2</sub> concentrations and does not see any other changes (e.g. changes in atmospheric temperatures).

### Parent experiment and branching

The 1pctCO2-bgc experiment branches from the [piControl](./picontrol.md) experiment (part of [CMIP](./index.md#cmip)).
The parent experiment's MIP era is [CMIP7](https://wcrp-cmip.org/CMIP7).

Branch from [piControl](./picontrol.md) at the same time as [1pctCO2](./1pctco2.md).

### Output time axis

You are free to start and end the time axis of your outputs at whatever time you like (e.g. starting at year 1, or 1850,
or year 500).
You must perform at least 150 simulation years.

If you have no strong feeling, then you will make life simplest for analysts if you use the same time axis as
[1pctCO2](./1pctco2.md).

### Minimum ensemble size

Only one ensemble member is required.

## Forcings

The following information will help you identify the forcings to use.
However, we can't define every single detail because there can be lots of subjective steps between the raw forcings data
and model inputs (e.g. interpolation, re-aggregation, supplementation with other information).
If further guidance would be helpful, please [raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).

### General headlines

The 1pctCO2-bgc experiment is a fixed forcings experiment, except for CO<sub>2</sub> which is transient.

### Data

Here we make a distinction between data that is described on other experiment pages, data that is described on other
experiment pages with modifications you have to make yourself, data available via ESGF's input4MIPs project and data
distributed via other channels.

#### Data described on other experiment pages

All data is described on the [1pctCO2](./1pctco2.md) experiment page.

#### Data described on other experiment pages with modifications you have to make

No data described on other experiment pages requires modifications by you.
Please see the other [data](#data) sub-sections for details of the forcings data to use for this experiment.

#### Data available via input4MIPs

No input4MIPs-based data is described specifically on this page.
Please see the other [data](#data) sub-sections for details of the forcings data to use for this experiment.

#### Data not available via input4MIPs

No data that is not input4MIPs-based is described specifically on this page.
Please see the other [data](#data) sub-sections for details of the forcings data to use for this experiment.
