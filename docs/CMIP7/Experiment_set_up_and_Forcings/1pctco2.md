---
layout: default
title: "Experiment Setup and Forcings Guidance: 1pctCO2"
---

# Experiment Setup and Forcings Guidance: 1pctCO2

1% per year increase in atmospheric carbon dioxide levels.
All other conditions are kept the same as piControl.

- Responsible activity: [CMIP](./index.md#cmip)
- Tier: 1
- MIP co-chair review: **In progress** see
  [https://github.com/WCRP-CMIP/cmip7-guidance/issues/183](https://github.com/WCRP-CMIP/cmip7-guidance/issues/183)

This page is intended to help with implementation.
If you notice something that is unclear, please
[raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).

For the full background of the experiment, please see the following URLs:

- [https://doi.org/10.5194/gmd-18-6671-2025](https://doi.org/10.5194/gmd-18-6671-2025)

## Experiment set up

The 1pctCO2 experiment is a simple branch from the [piControl simulation](./picontrol.md).

After branching, the atmospheric CO<sub>2</sub> concentrations should increase at one percent per year throughout the
experiment.

### Parent experiment and branching

The 1pctCO2 experiment branches from the [piControl](./picontrol.md) experiment (part of [CMIP](./index.md#cmip)).
The parent experiment's MIP era is [CMIP7](https://wcrp-cmip.org/CMIP7).

Branch from [piControl](./picontrol.md) at a time of your choosing.

### Output time axis

You are free to start and end the time axis of your outputs at whatever time you like (e.g. starting at year 1, or 1850,
or year 500).
You must perform at least 150 simulation years.

### Minimum ensemble size

Only one ensemble member is required.

## Forcings

The following information will help you identify the forcings to use.
However, we can't define every single detail because there can be lots of subjective steps between the raw forcings data
and model inputs (e.g. interpolation, re-aggregation, supplementation with other information).
If further guidance would be helpful, please [raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).

### General headlines

The 1pctCO2 experiment is a fixed forcings experiment, except for CO<sub>2</sub> which is transient.

### Data

Here we make a distinction between data that is described on other experiment pages, data that is described on other
experiment pages with modifications you have to make yourself, data available via ESGF's input4MIPs project and data
distributed via other channels.

#### Data described on other experiment pages

For the following data, please see these other experiment pages:

- [piControl](./picontrol.md) for anthropogenic emissions, biomass burning emissions, land use, stratospheric aerosol
  forcing, solar, aerosol optical properties, population density, ozone, nitrogen deposition

#### Data described on other experiment pages with modifications you have to make

For the following forcings, please use data from the specified experiments with the specified modifications.

- for greenhouse gas concentrations, use the forcings from [piControl](./picontrol.md) but increase the atmospheric
  CO<sub>2</sub> concentrations at one percent per year yourself.
  CO2 concentrations should increase as

    $$
    c(t) = c_0 \cdot 1.01^{\frac{t - t_0}{\tau}},
    $$

    where $t_0$ is 1850 and $\tau$ is one year.

    For step-wise increases of CO<sub>2</sub>, specify a concentration that results, to good approximation, in a mean
    CO2 concentration (or mean forcing) for each time step consistent with the mean calculated when the CO2
    concentration increases continuously.
    A particularly simple formula of sufficient accuracy for a 1% increase and time steps used in earth system models is

    $$
    c(t \rightarrow t + \Delta t) = \frac{c(t) + c(t + \Delta t)}{2},
    $$

    where $c(t \rightarrow t + \Delta t)$ is the value to apply in the time step that extends from time $t$ to $t +
    \Delta t$ and $\Delta t$ is the size of the time step in your model (this can vary from time step to time step and
    it does not affect the formula above).
    For annual time steps, this reduces to

    $$
    \begin{aligned}
    c(y)
    &= c_0 \cdot 1.01^{y - y_0} \cdot \frac{1 + 1.01}{2} \\
    &= c_0 \cdot 1.01^{y - y_0} \cdot 1.05,
    \end{aligned}
    $$

    where $y$ is the year in which to apply the given value and $y_0$ is the starting year i.e. 1850.

    For monthly time steps, this reduces to

    $$
    \begin{aligned}
    c(y, m)
    &= c_0 \cdot \frac{1.01^{y - y_0} \cdot 1.01^{(m - 1) / 12} + 1.01^{y - y_0} \cdot 1.01^{m / 12}}{2} \\
    &= c_0 \cdot 1.01^{y - y_0} \cdot 1.01^{(m - 1) / 12} \cdot \frac{1 + 1.01^(1 / 12)}{2} \\
    &= c_0 \cdot 1.01^{y - y_0} \cdot 1.01^{(m - 1) / 12} \cdot 1.0004,
    \end{aligned}
    $$

    where $m$ is the month in which to apply the given value (January is 1, February is 2 etc.).

#### Data available via input4MIPs

No input4MIPs-based data is described specifically on this page.
Please see the other [data](#data) sub-sections for details of the forcings data to use for this experiment.

#### Data not available via input4MIPs

No data that is not input4MIPs-based is described specifically on this page.
Please see the other [data](#data) sub-sections for details of the forcings data to use for this experiment.
