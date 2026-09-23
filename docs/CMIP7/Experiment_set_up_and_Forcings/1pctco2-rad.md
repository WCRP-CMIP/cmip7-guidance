---
layout: default
title: "Experiment Setup and Forcings Guidance: 1pctCO2-rad"
---

# Experiment Setup and Forcings Guidance: 1pctCO2-rad

Radiatively coupled simulation (i.e. the carbon cycle only 'sees' the increase in temperature, not any change in
atmospheric carbon dioxide) of a 1% per year increase in atmospheric carbon dioxide levels.
All other conditions are kept the same as piControl.

- Responsible activity: [C4MIP](./index.md#c4mip)
- Tier: 1
- MIP co-chair review: **In progress** see
  [https://github.com/WCRP-CMIP/cmip7-guidance/issues/186](https://github.com/WCRP-CMIP/cmip7-guidance/issues/186)
- Tags: AFT (Assessment Fast Track)

This page is intended to help with implementation.
If you notice something that is unclear, please
[raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).

For the full background of the experiment, please see the following references:

- Sanderson, B.
  M., Booth, B.
  B.
  B., Dunne, J., Eyring, V., Fisher, R.
  A., Friedlingstein, P., Gidden, M.
  J., Hajima, T., Jones, C.
  D., Jones, C.
  G., King, A., Koven, C.
  D., Lawrence, D.
  M., Lowe, J., Mengis, N., Peters, G.
  P., Rogelj, J., Smith, C., Snyder, A.
  C., et al. (2024).
  The need for carbon-emissions-driven climate projections in CMIP7.
  Geoscientific Model Development, 17(22), 8141–8172. https://doi.org/10.5194/gmd-17-8141-2024
- Sanderson, B.
  M., Brovkin, V., Fisher, R.
  A., Hohn, D., Ilyina, T., Jones, C.
  D., Koenigk, T., Koven, C., Li, H., Lawrence, D.
  M., Lawrence, P., Liddicoat, S., MacDougall, A.
  H., Mengis, N., Nicholls, Z., O’Rourke, E., Romanou, A., Sandstad, M., Schwinger, J., et al. (2025). flat10MIP: an
  emissions-driven experiment to diagnose the climate response to positive, zero and negative CO <sub>2</sub> emissions.
  Geoscientific Model Development, 18(17), 5699–5724. https://doi.org/10.5194/gmd-18-5699-2025
- Jones, C.
  D., Arora, V., Friedlingstein, P., Bopp, L., Brovkin, V., Dunne, J., Graven, H., Hoffman, F., Ilyina, T., John, J.
  G., Jung, M., Kawamiya, M., Koven, C., Pongratz, J., Raddatz, T., Randerson, J.
  T., & Zaehle, S. (2016).
  C4MIP – The Coupled Climate–Carbon Cycle Model Intercomparison Project:
experimental protocol for CMIP6.
Geoscientific Model Development, 9(8), 2853–2880. https://doi.org/10.5194/gmd-9-2853-2016

## Experiment set up

The 1pctCO2-rad simulation has the same forcing setup as the [1pctCO2 simulation](./1pctco2.md).

The difference is that your model should be configured such that the carbon cycle only sees the change in radiation and
does not see any other changes (e.g. changes in atmospheric CO<sub>2</sub> concentrations).

### Parent experiment and branching

The 1pctCO2-rad experiment branches from the [piControl](./picontrol.md) experiment (part of [CMIP](./index.md#cmip)).
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

The 1pctCO2-rad experiment is a fixed forcings experiment, except for CO<sub>2</sub> which is transient.

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
