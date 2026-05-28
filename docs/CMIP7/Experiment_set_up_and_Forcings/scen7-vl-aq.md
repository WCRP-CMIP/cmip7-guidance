---
layout: default
title: "Experiment Setup and Forcings Guidance: scen7-vl-AQ"
---

# Experiment Setup and Forcings Guidance: scen7-vl-AQ

Used to diagnose climate and air quality responses to the regionally heterogeneous evolution of anthropogenic non-CH4
SLCF emissions.
Anthropogenic non-CH4 tropospheric O3 precursor emissions (NMVOCs, CO, NOx), aerosols, and aerosol precursor emissions
(BC, OC, NH3, SO2) evolve as in `scen7-h`.
All other forcings evolve as in `scen7-vl`.
Requires interactive chemistry.
Models without interactive chemistry should run `scen7-vl-Aer` instead.

- Responsible activity: [AerChemMIP](./index.md#aerchemmip)
- Tier: 1
- MIP co-chair review: No review initiated yet

This page is intended to help with implementation.
If you notice something that is unclear, please
[raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).

For the full background of the experiment, please see the following URLs:

- [https://doi.org/10.5194/gmd-10-585-2017](https://doi.org/10.5194/gmd-10-585-2017)

## Paired experiments

- [esm-scen7-vl-AQ](./esm-scen7-vl-aq.md) is the emissions-driven counterpart to this concentration-driven experiment.
- [scen7-vl-Aer](./scen7-vl-aer.md) is the corresponding non-interactive-chemistry experiment for models that do not
  include interactive chemistry.

## Experiment set up

### Parent experiment and branching

The scen7-vl-AQ experiment branches from the [historical](./historical.md) experiment (part of [CMIP](./index.md#cmip)).
The parent experiment's MIP era is [CMIP7](https://wcrp-cmip.org/CMIP7).

Branch from [historical](./historical.md) at 2021-12-31.

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

The scen7-vl-AQ experiment is a transient forcings experiment.

### Data

Here we make a distinction between data that is described on other experiment pages, data that is described on other
experiment pages with modifications you have to make yourself, data available via ESGF's input4MIPs project and data
distributed via other channels.

#### Data described on other experiment pages

For the following data, please see these other experiment pages:

- [scen7-vl](./scen7-vl.md) for land use, greenhouse gas concentrations, stratospheric aerosol forcing, ozone, nitrogen
  deposition, solar, aerosol optical properties, population density

#### Data described on other experiment pages with modifications you have to make

For the following forcings, please use data from the specified experiments with the specified modifications.

- for anthropogenic emissions, use the forcings from [scen7-h](./scen7-h.md) but only for aerosol (BC, OC,
  NH<sub>3</sub>, SO<sub>2</sub>) and tropospheric non-methane ozone precursor emissions (NMVOCs, CO, NO<sub>x</sub>).
- for biomass burning emissions, use the forcings from [scen7-h](./scen7-h.md) but only for aerosol (BC, OC,
  NH<sub>3</sub>, SO<sub>2</sub>) and tropospheric non-methane ozone precursor emissions (NMVOCs, CO, NO<sub>x</sub>).
- for anthropogenic emissions, use the forcings from [scen7-vl](./scen7-vl.md) but only for everything except aerosol
  (BC, OC, NH<sub>3</sub>, SO<sub>2</sub>) and tropospheric non-methane ozone precursor emissions (NMVOCs, CO,
  NO<sub>x</sub>).
- for biomass burning emissions, use the forcings from [scen7-vl](./scen7-vl.md) but only for everything except aerosol
  (BC, OC, NH<sub>3</sub>, SO<sub>2</sub>) and tropospheric non-methane ozone precursor emissions (NMVOCs, CO,
  NO<sub>x</sub>).

#### Data available via input4MIPs

No input4MIPs-based data is described specifically on this page.
Please see the other [data](#data) sub-sections for details of the forcings data to use for this experiment.

#### Data not available via input4MIPs

No data that is not input4MIPs-based is described specifically on this page.
Please see the other [data](#data) sub-sections for details of the forcings data to use for this experiment.
