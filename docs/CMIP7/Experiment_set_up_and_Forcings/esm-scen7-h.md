---
layout: default
title: "Experiment Setup and Forcings Guidance: esm-scen7-h"
---

# Experiment Setup and Forcings Guidance: esm-scen7-h

CMIP7 ScenarioMIP High emission scenario - A scenario with emissions as high as judged to be plausible, based on
assuming developments that include a rollback of current mitigation policies.
This scenario is expected to result in forcings below SSP5-8.5.
Run with prescribed carbon dioxide emissions (for prescribed carbon dioxide concentrations, see `scen7-h`).

- Responsible activity: [ScenarioMIP](./index.md#scenariomip)
- Tier: See [ScenarioMIP](./index.md#scenariomip) information
- MIP co-chair review: **In progress** see
  [https://github.com/WCRP-CMIP/cmip7-guidance/issues/187](https://github.com/WCRP-CMIP/cmip7-guidance/issues/187)

This page is intended to help with implementation.
If you notice something that is unclear, please
[raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).

For the full background of the experiment, please see the following URLs:

- [https://doi.org/10.5194/egusphere-2024-3765](https://doi.org/10.5194/egusphere-2024-3765)

## Paired experiments

- [scen7-h](./scen7-h.md) is the concentration-driven counterpart to this emissions-driven experiment.

## Experiment set up

### Parent experiment and branching

The esm-scen7-h experiment branches from the [esm-hist](./esm-hist.md) experiment (part of [CMIP](./index.md#cmip)).
The parent experiment's MIP era is [CMIP7](https://wcrp-cmip.org/CMIP7).

Branch from [esm-hist](./esm-hist.md) at 2021-12-31.

### Output time axis

Your output time axis must start on 2022-01-01 and must end on 2100-12-31.
You must perform the full simulation i.e. 79 simulation years.

### Minimum ensemble size

Only one ensemble member is required.

## Forcings

The following information will help you identify the forcings to use.
However, we can't define every single detail because there can be lots of subjective steps between the raw forcings data
and model inputs (e.g. interpolation, re-aggregation, supplementation with other information).
If further guidance would be helpful, please [raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).

### General headlines

The esm-scen7-h experiment is a transient forcings experiment.

### Data

Here we make a distinction between data that is described on other experiment pages, data that is described on other
experiment pages with modifications you have to make yourself, data available via ESGF's input4MIPs project and data
distributed via other channels.

#### Data described on other experiment pages

All data is described on the [scen7-h](./scen7-h.md) experiment page.

#### Data described on other experiment pages with modifications you have to make

No data described on other experiment pages requires modifications by you.
Please see the other [data](#data) sub-sections for details of the forcings data to use for this experiment.

#### Data available via input4MIPs

No input4MIPs-based data is described specifically on this page.
Please see the other [data](#data) sub-sections for details of the forcings data to use for this experiment.

#### Data not available via input4MIPs

No data that is not input4MIPs-based is described specifically on this page.
Please see the other [data](#data) sub-sections for details of the forcings data to use for this experiment.
