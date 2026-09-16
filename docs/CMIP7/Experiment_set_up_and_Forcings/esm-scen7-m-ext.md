---
layout: default
title: "Experiment Setup and Forcings Guidance: esm-scen7-m-ext"
---

# Experiment Setup and Forcings Guidance: esm-scen7-m-ext

Extension of `esm-scen7-m` beyond 2100.

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

- [scen7-m-ext](./scen7-m-ext.md) is the concentration-driven counterpart to this emissions-driven experiment.

## Experiment set up

### Parent experiment and branching

The esm-scen7-m-ext experiment branches from the [esm-scen7-m](./esm-scen7-m.md) experiment (part of
[ScenarioMIP](./index.md#scenariomip)).
The parent experiment's MIP era is [CMIP7](https://wcrp-cmip.org/CMIP7).

Branch from [esm-scen7-m](./esm-scen7-m.md) at 2100-12-31.

### Output time axis

Your output time axis must start on 2101-01-01 and must not end later than 2500-12-31.
You must perform at least 50 simulation years.

### Minimum ensemble size

Only one ensemble member is required.

## Forcings

The following information will help you identify the forcings to use.
However, we can't define every single detail because there can be lots of subjective steps between the raw forcings data
and model inputs (e.g. interpolation, re-aggregation, supplementation with other information).
If further guidance would be helpful, please [raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).

### General headlines

The esm-scen7-m-ext experiment uses a mix of fixed and transient forcings.
The fixed forcings are: nitrogen deposition, ozone and stratospheric aerosol forcing.
The transient forcings are: aerosol optical properties, anthropogenic emissions, biomass burning emissions, greenhouse
gas concentrations, land use, population density and solar.

### Data

Here we make a distinction between data that is described on other experiment pages, data that is described on other
experiment pages with modifications you have to make yourself, data available via ESGF's input4MIPs project and data
distributed via other channels.

#### Data described on other experiment pages

All data is described on the [scen7-m-ext](./scen7-m-ext.md) experiment page.

#### Data described on other experiment pages with modifications you have to make

No data described on other experiment pages requires modifications by you.
Please see the other [data](#data) sub-sections for details of the forcings data to use for this experiment.

#### Data available via input4MIPs

No input4MIPs-based data is described specifically on this page.
Please see the other [data](#data) sub-sections for details of the forcings data to use for this experiment.

#### Data not available via input4MIPs

No data that is not input4MIPs-based is described specifically on this page.
Please see the other [data](#data) sub-sections for details of the forcings data to use for this experiment.
