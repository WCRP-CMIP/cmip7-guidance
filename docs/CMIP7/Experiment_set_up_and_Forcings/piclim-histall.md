---
layout: default
title: "Experiment Setup and Forcings Guidance: piClim-histall"
---

# Experiment Setup and Forcings Guidance: piClim-histall

In combination with `piClim-control`, quantifies transient effective radiative forcing (ERF) over the historical period
and the `scen7-m` experiment.
This complements the `piClim-*` experiments which provide a more precise quantification of present-day ERF for various
forcing components.

- Responsible activity: [RFMIP](./index.md#rfmip)
- Tier: 1
- MIP co-chair review: **In progress** see
  [https://github.com/WCRP-CMIP/cmip7-guidance/issues/192](https://github.com/WCRP-CMIP/cmip7-guidance/issues/192)

This page is intended to help with implementation.
If you notice something that is unclear, please
[raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).

For the full background of the experiment, please see the following URLs:

- [https://doi.org/10.5194/acp-20-9591-2020](https://doi.org/10.5194/acp-20-9591-2020)
- [https://doi.org/10.5194/gmd-9-3447-2016](https://doi.org/10.5194/gmd-9-3447-2016)
- [https://doi.org/10.5194/gmd-9-3447-2016](https://doi.org/10.5194/gmd-9-3447-2016)

## Experiment set up

piClim-histaer is the same setup as [piClim-control](./piclim-control.md), except all forcings follow the
[historical simulation](./historical.md) experiment then the [scen7-m](./scen7-m.md) experiment.

### Parent experiment and branching

The piClim-histall experiment branches from the [piControl](./picontrol.md) experiment (part of
[CMIP](./index.md#cmip)).
The parent experiment's MIP era is [CMIP7](https://wcrp-cmip.org/CMIP7).

Branch from [piControl](./picontrol.md) at the same time as [piClim-control](./piclim-control.md).

### Output time axis

Your output time axis must start on 1850-01-01 and must end on 2100-12-31.
You must perform the full simulation i.e. 251 simulation years.
Extensions to 2150-12-31 (301 simulation years) are welcome but not mandatory.

### Minimum ensemble size

Only one ensemble member is required.

## Forcings

The following information will help you identify the forcings to use.
However, we can't define every single detail because there can be lots of subjective steps between the raw forcings data
and model inputs (e.g. interpolation, re-aggregation, supplementation with other information).
If further guidance would be helpful, please [raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).

### General headlines

The piClim-histall experiment uses a mix of fixed and transient forcings.
The fixed forcings are: sea-surface temperature forcing.
The transient forcings are: aerosol optical properties, anthropogenic emissions, biomass burning emissions, greenhouse
gas concentrations, land use, nitrogen deposition, ozone, population density, solar and stratospheric aerosol forcing.

### Data

Here we make a distinction between data that is described on other experiment pages, data that is described on other
experiment pages with modifications you have to make yourself, data available via ESGF's input4MIPs project and data
distributed via other channels.

#### Data described on other experiment pages

For the following data, please see these other experiment pages:

- [historical](./historical.md) for anthropogenic emissions, biomass burning emissions, land use, greenhouse gas
  concentrations, stratospheric aerosol forcing, ozone, nitrogen deposition, solar, aerosol optical properties,
  population density
- [scen7-m](./scen7-m.md) for anthropogenic emissions, biomass burning emissions, land use, greenhouse gas
  concentrations, stratospheric aerosol forcing, ozone, nitrogen deposition, solar, aerosol optical properties,
  population density
- [piClim-control](./piclim-control.md) for sea-surface temperature forcing

#### Data described on other experiment pages with modifications you have to make

No data described on other experiment pages requires modifications by you.
Please see the other [data](#data) sub-sections for details of the forcings data to use for this experiment.

#### Data available via input4MIPs

No input4MIPs-based data is described specifically on this page.
Please see the other [data](#data) sub-sections for details of the forcings data to use for this experiment.

#### Data not available via input4MIPs

No data that is not input4MIPs-based is described specifically on this page.
Please see the other [data](#data) sub-sections for details of the forcings data to use for this experiment.
