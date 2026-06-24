---
layout: default
title: "Experiment Setup and Forcings Guidance: land-hist"
---

# Experiment Setup and Forcings Guidance: land-hist

Land-only version of `historical` with prescribed climate and weather inputs required to drive land models.

- Responsible activity: [LMIP](./index.md#lmip)
- Tier: 1
- MIP co-chair review: **In progress** see
  [https://github.com/WCRP-CMIP/cmip7-guidance/issues/190](https://github.com/WCRP-CMIP/cmip7-guidance/issues/190)

This page is intended to help with implementation.
If you notice something that is unclear, please
[raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).

For the full background of the experiment, please see the following URLs:

- [https://doi.org/10.5194/gmd-9-2809-2016](https://doi.org/10.5194/gmd-9-2809-2016)

## Experiment set up

Spinup of the land-only simulations should follow the TRENDY protocol
([van den Hurk et al (2016)](https://gmd.copernicus.org/articles/9/2809/2016/)).

### Parent experiment and branching

land-hist does not have a parent experiment.

### Output time axis

Your output time axis must start on 1901-01-01 and must end on 2021-12-31.
You must perform the full simulation i.e. 121 simulation years.

### Minimum ensemble size

Only one ensemble member is required.

## Forcings

The following information will help you identify the forcings to use.
However, we can't define every single detail because there can be lots of subjective steps between the raw forcings data
and model inputs (e.g. interpolation, re-aggregation, supplementation with other information).
If further guidance would be helpful, please [raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).

### General headlines

The land-hist experiment is a transient forcings experiment.

### Data

Here we make a distinction between data that is described on other experiment pages, data that is described on other
experiment pages with modifications you have to make yourself, data available via ESGF's input4MIPs project and data
distributed via other channels.

#### Data described on other experiment pages

For the following data, please see these other experiment pages:

- [historical](./historical.md) for anthropogenic emissions, biomass burning emissions, land use, greenhouse gas
  concentrations, stratospheric aerosol forcing, ozone, nitrogen deposition, solar, aerosol optical properties,
  population density

#### Data described on other experiment pages with modifications you have to make

No data described on other experiment pages requires modifications by you.
Please see the other [data](#data) sub-sections for details of the forcings data to use for this experiment.

#### Data available via input4MIPs

No input4MIPs-based data is described specifically on this page.
Please see the other [data](#data) sub-sections for details of the forcings data to use for this experiment.

#### Data not available via input4MIPs

- Land model climate and weather inputs
    - notes: The default forcing data is from a corrected reanalysis product that includes all the climate/weather
      inputs to drive a land model.
      The dataset is typically referred to as CRUJRA.
      CRUJRA Climate forcing data are provided by Ian Harris at UEA 1901-2024 and available from the following website:
      [crudata.uea.ac.uk/cru/data/hrg/cru_ts_4.09]().
      A 2nd historical forcing dataset is in development and would ideally also be run.
