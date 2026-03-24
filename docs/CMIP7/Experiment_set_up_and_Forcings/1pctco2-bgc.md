---
layout: default
title: 1pctCO2-bgc Experiment Setup and Forcings Guidance
---

# 1pctCO2-bgc Experiment Setup and Forcings Guidance

<!-- TODO: get this information from esgvoc (add reference URLs at that point) -->
Responsible activity: C4MIP

<!-- TODO: get this one line description from esgvoc -->
Biogeochemically coupled simulation (i.e. the carbon cycle only 'sees' the increase in atmospheric carbon dioxide, not any change in temperature) of a 1% per year increase in atmospheric carbon dioxide levels. All other conditions are kept the same as piControl.

## Experiment set up

<!-- TODO: decide and then consistently apply some convention about whether experiment names are always surround by backticks `` or not -->
The 1pctCO2-bgc simulation has the same forcing setup as the [1pctCO2 simulation](./1pctco2.md).
The difference is that your model should be configured such that the carbon cycle
only sees the change in atmospheric CO<sub>2</sub> concentrations
and does not see any other changes (e.g. changes in atmospheric temperatures).

<!-- TODO: consider whether we can generate these sentences automatically based on esgvoc -->
It is recommended that you start the time axis of your outputs at the branching time
to make life easy for analysts of your output
(although this is not enforced so you are technically free to start the time axis of your outputs at whatever year you like).
Simulations should be at least 150 years in length.
Only one ensemble member is required.

### Parent experiment

<!--
    TODO: use esgvoc to fill out the template
    `<experiment-name>` branches from the `<parent-experiment-name>` simulation (part of `<parent-experiment-activity>`).
-->
`1pctCO2` branches from the `piControl` simulation (part of `CMIP`).
<!-- TODO: get branch information from esgvoc -->
Branch from `piControl` at a time of your choosing.

## Forcings

### General headlines

See general headlines for the [1pctCO2 simulation](./1pctco2.md).

### Notes

See notes for the [1pctCO2 simulation](./1pctco2.md).

### Versions to use

The forcings relevant for this simulation are the same as for the [1pctCO2 simulation](./1pctco2.md).

### Getting the data

See instructions for the [1pctCO2 simulation](./1pctco2.md).
