---
layout: default
title: "Experiment Setup and Forcings Guidance: esm-scen7-h-AQ"
---

# Experiment Setup and Forcings Guidance: esm-scen7-h-AQ

Used to diagnose climate and air quality responses to the regionally heterogeneous evolution of anthropogenic non-CH4
SLCF emissions.
Anthropogenic non-CH4 tropospheric O3 precursor emissions (NMVOCs, CO, NOx), aerosols, and aerosol precursor emissions
(BC, OC, NH3, SO2) are held constant at present-day (2021) levels.
All other forcings evolve as in `esm-scen7-h`.
Requires interactive chemistry.
Models without interactive chemistry should run `esm-scen7-h-Aer` instead.

- Responsible activity: [AerChemMIP](./index.md#aerchemmip)
- Tier: 1
- MIP co-chair review: No review initiated yet

This page is intended to help with implementation.
If you notice something that is unclear, please
[raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).

For the full background of the experiment, please see the following URLs:

- [https://doi.org/10.5194/gmd-10-585-2017](https://doi.org/10.5194/gmd-10-585-2017)

## Paired experiments

- [esm-scen7-h-Aer](./esm-scen7-h-aer.md) is the corresponding non-interactive-chemistry experiment for models that do
  not include interactive chemistry.
- [scen7-h-AQ](./scen7-h-aq.md) is the concentration-driven counterpart to this emissions-driven experiment.

## Experiment set up

### Parent experiment and branching

The esm-scen7-h-AQ experiment branches from the [esm-hist](./esm-hist.md) experiment (part of [CMIP](./index.md#cmip)).
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

The esm-scen7-h-AQ experiment uses a mix of fixed and transient forcings.
The fixed forcings are: anthropogenic emissions and biomass burning emissions.
The transient forcings are: aerosol optical properties, greenhouse gas concentrations, land use, nitrogen deposition,
ozone, population density, solar and stratospheric aerosol forcing.

### Data

Here we make a distinction between data that is described on other experiment pages, data that is described on other
experiment pages with modifications you have to make yourself, data available via ESGF's input4MIPs project and data
distributed via other channels.

#### Data described on other experiment pages

All data is described on the [scen7-h-AQ](./scen7-h-aq.md) experiment page.

#### Data described on other experiment pages with modifications you have to make

No data described on other experiment pages requires modifications by you.
Please see the other [data](#data) sub-sections for details of the forcings data to use for this experiment.

#### Data available via input4MIPs

No input4MIPs-based data is described specifically on this page.
Please see the other [data](#data) sub-sections for details of the forcings data to use for this experiment.

#### Data not available via input4MIPs

No data that is not input4MIPs-based is described specifically on this page.
Please see the other [data](#data) sub-sections for details of the forcings data to use for this experiment.
