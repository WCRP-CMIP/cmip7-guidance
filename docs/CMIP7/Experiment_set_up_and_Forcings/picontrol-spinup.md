---
layout: default
title: "Experiment Setup and Forcings Guidance: piControl-spinup"
---

# Experiment Setup and Forcings Guidance: piControl-spinup

Spin-up simulation.
Used to get the model into a state of approximate radiative equilibrium before starting the `piControl` simulation.

- Responsible activity: [CMIP](./index.md#cmip)
- Tier: 3
- MIP co-chair review: **In progress** see
  [https://github.com/WCRP-CMIP/cmip7-guidance/issues/183](https://github.com/WCRP-CMIP/cmip7-guidance/issues/183)

This page is intended to help with implementation.
If you notice something that is unclear, please
[raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).

For the full background of the experiment, please see the following URLs:

- [https://doi.org/10.5194/gmd-18-6671-2025](https://doi.org/10.5194/gmd-18-6671-2025)

## Paired experiments

- [esm-piControl-spinup](./esm-picontrol-spinup.md) is the emissions-driven counterpart to this concentration-driven
  experiment.

## Experiment set up

### Parent experiment and branching

piControl-spinup does not have a parent experiment.

### Output time axis

You are free to start and end the time axis of your outputs at whatever time you like (e.g. starting at year 1, or 1850,
or year 500).

### Minimum ensemble size

Only one ensemble member is required.

## Forcings

The following information will help you identify the forcings to use.
However, we can't define every single detail because there can be lots of subjective steps between the raw forcings data
and model inputs (e.g. interpolation, re-aggregation, supplementation with other information).
If further guidance would be helpful, please [raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).

### General headlines

The piControl-spinup experiment is a fixed forcings experiment.

### Data

Here we make a distinction between data that is described on other experiment pages, data that is described on other
experiment pages with modifications you have to make yourself, data available via ESGF's input4MIPs project and data
distributed via other channels.

#### Data described on other experiment pages

All data is described on the [piControl](./picontrol.md) experiment page.

#### Data described on other experiment pages with modifications you have to make

No data described on other experiment pages requires modifications by you.
Please see the other [data](#data) sub-sections for details of the forcings data to use for this experiment.

#### Data available via input4MIPs

No input4MIPs-based data is described specifically on this page.
Please see the other [data](#data) sub-sections for details of the forcings data to use for this experiment.

#### Data not available via input4MIPs

No data that is not input4MIPs-based is described specifically on this page.
Please see the other [data](#data) sub-sections for details of the forcings data to use for this experiment.
