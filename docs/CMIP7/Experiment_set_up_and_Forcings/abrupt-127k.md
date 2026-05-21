---
layout: default
title: "Experiment Setup and Forcings Guidance: abrupt-127k"
---

# Experiment Setup and Forcings Guidance: abrupt-127k

Simulation to examine the response to orbital and greenhouse gas concentration changes associated with the last
interglacial (127 000 years before present).

- Responsible activity: [PMIP](./index.md#pmip)
- Tier: 1
- MIP co-chair review: No review initiated yet

This page is intended to help with implementation.
If you notice something that is unclear, please
[raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).

For the full background of the experiment, please see the following URLs:

- [https://doi.org/10.5194/cp-19-883-2023](https://doi.org/10.5194/cp-19-883-2023)
- [https://doi.org/10.5194/gmd-10-3979-2017](https://doi.org/10.5194/gmd-10-3979-2017)

## Experiment set up

The boundary conditions should be adjusted according to Table 1 of
[Sime et al., 2025](https://egusphere.copernicus.org/preprints/2025/egusphere-2025-3531/).
(Note that this paper is still under review, when it is published or there is an update, we will copy the table in
here.)
You have to make these adjustments yourself, there are no specific forcing files provided.

### Parent experiment and branching

The abrupt-127k experiment branches from the [piControl](./picontrol.md) experiment (part of [CMIP](./index.md#cmip)).
The parent experiment's MIP era is [CMIP7](https://wcrp-cmip.org/CMIP7).

Branch from [piControl](./picontrol.md) at a time of your choosing.

### Output time axis

You are free to start and end the time axis of your outputs at whatever time you like (e.g. starting at year 1, or 1850,
or year 500).
You must perform at least 100 simulation years.

If you have no strong feeling, then you will make life simplest for analysts if you continue your time axis from the
branching point (e.g. if you branch on 1500-01-01, start your time axis on 1500-01-01).

### Minimum ensemble size

Only one ensemble member is required.

## Forcings

The following information will help you identify the forcings to use.
However, we can't define every single detail because there can be lots of subjective steps between the raw forcings data
and model inputs (e.g. interpolation, re-aggregation, supplementation with other information).
If further guidance would be helpful, please [raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).

### General headlines

The abrupt-127k experiment is a fixed forcings experiment.

### Data

Here we make a distinction between data that is described on other experiment pages, data that is described on other
experiment pages with modifications you have to make yourself, data available via ESGF's input4MIPs project and data
distributed via other channels.

#### Data described on other experiment pages

For the following data, please see these other experiment pages:

- [piControl](./picontrol.md) for anthropogenic emissions, biomass burning emissions, land use, stratospheric aerosol
  forcing, aerosol optical properties, population density, ozone, nitrogen deposition

#### Data described on other experiment pages with modifications you have to make

For the following forcings, please use data from the specified experiments with the specified modifications.

- for greenhouse gas concentrations, use the forcings from [piControl](./picontrol.md) but adjusted according to Table 1
  of [Sime et al., 2025](https://egusphere.copernicus.org/preprints/2025/egusphere-2025-3531/)
- for solar, use the forcings from [piControl](./picontrol.md) but adjusted according to Table 1 of
  [Sime et al., 2025](https://egusphere.copernicus.org/preprints/2025/egusphere-2025-3531/)

#### Data available via input4MIPs

No input4MIPs-based data is described specifically on this page.
Please see the other [data](#data) sub-sections for details of the forcings data to use for this experiment.

#### Data not available via input4MIPs

No data that is not input4MIPs-based is described specifically on this page.
Please see the other [data](#data) sub-sections for details of the forcings data to use for this experiment.
