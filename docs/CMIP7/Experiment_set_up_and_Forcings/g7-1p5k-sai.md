---
layout: default
title: "Experiment Setup and Forcings Guidance: G7-1p5K-SAI"
---

# Experiment Setup and Forcings Guidance: G7-1p5K-SAI

Stablisation of global-mean temperature at 1.5C by increasing stratospheric sulfur forcing.

- Responsible activity: [GeoMIP](./index.md#geomip)
- Tier: 1
- MIP co-chair review: No review initiated yet

This page is intended to help with implementation.
If you notice something that is unclear, please
[raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).

For the full background of the experiment, please see the following URLs:

- [https://doi.org/10.1175/BAMS-D-25-0191.1](https://doi.org/10.1175/BAMS-D-25-0191.1)
- [https://doi.org/10.5194/gmd-17-2583-2024](https://doi.org/10.5194/gmd-17-2583-2024)

## Experiment set up

This experiment is the same as [scen7-ml](./scen7-ml.md), except you should increase the stratospheric sulfur forcing
through the injection of SO₂ at 30N and 30S year round, or (for models with no prognostic sulfate cycle) through the
addition of a prescribed stratospheric aerosol field provided by the GeoMIP team.
The stratospheric sulfur forcing should be increased to whatever level is required to stablise global-mean temperatures
at 1.5C after the branching point.
For details, see [Visioni et al., 2026](https://doi.org/10.5194/egusphere-2026-2417), Section 3.1.2.

### Parent experiment and branching

The G7-1p5K-SAI experiment branches from the [scen7-ml](./scen7-ml.md) experiment (part of
[ScenarioMIP](./index.md#scenariomip)).
The parent experiment's MIP era is [CMIP7](https://wcrp-cmip.org/CMIP7).

Branch from [scen7-ml](./scen7-ml.md) at 2035-01-01.

### Output time axis

Your output time axis must start on 2035-01-01.
You are free to end the time axis of your outputs at whatever time you like that is compatible with the start date.
You must perform at least 50 simulation years.

### Minimum ensemble size

Only one ensemble member is required.

## Forcings

The following information will help you identify the forcings to use.
However, we can't define every single detail because there can be lots of subjective steps between the raw forcings data
and model inputs (e.g. interpolation, re-aggregation, supplementation with other information).
If further guidance would be helpful, please [raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).

### General headlines

The G7-1p5K-SAI experiment is a transient forcings experiment.

### Data

Here we make a distinction between data that is described on other experiment pages, data that is described on other
experiment pages with modifications you have to make yourself, data available via ESGF's input4MIPs project and data
distributed via other channels.

#### Data described on other experiment pages

All data is described on the [scen7-ml](./scen7-ml.md) experiment page.

#### Data described on other experiment pages with modifications you have to make

No data described on other experiment pages requires modifications by you.
Please see the other [data](#data) sub-sections for details of the forcings data to use for this experiment.

#### Data available via input4MIPs

No input4MIPs-based data is described specifically on this page.
Please see the other [data](#data) sub-sections for details of the forcings data to use for this experiment.

#### Data not available via input4MIPs

No data that is not input4MIPs-based is described specifically on this page.
Please see the other [data](#data) sub-sections for details of the forcings data to use for this experiment.
