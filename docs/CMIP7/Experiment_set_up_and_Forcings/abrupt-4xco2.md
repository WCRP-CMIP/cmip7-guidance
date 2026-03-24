---
layout: default
title: abrupt-4xCO2 Experiment Setup and Forcings Guidance
---

# abrupt-4xCO2 Experiment Setup and Forcings Guidance

<!-- TODO: get this information from esgvoc (add reference URLs at that point) -->
Responsible activity: CMIP

<!-- TODO: get this one line description from esgvoc -->
Abrupt quadrupling of atmospheric carbon dioxide levels. All other conditions are kept the same as piControl.

## Experiment set up

<!-- TODO: decide and then consistently apply some convention about whether experiment names are always surround by backticks `` or not -->
The abrupt CO<sub>2</sub> quadrupling simulation is a simple branch from the [piControl simulation](./picontrol.md).
After branching, the atmospheric CO<sub>2</sub> concentrations should be set to four times
the concentrations used in the `piControl` simulation.
<!-- TODO: consider whether we can generate these sentences automatically based on esgvoc -->
It is recommended that you start the time axis of your outputs at the branching time
to make life easy for analysts of your output
(although this is not enforced so you are technically free to start the time axis of your outputs at whatever year you like).
Simulations should be at least 300 years in length.
Only one ensemble member is required.

### Parent experiment

<!--
    TODO: use esgvoc to fill out the template
    `<experiment-name>` branches from the `<parent-experiment-name>` simulation (part of `<parent-experiment-activity>`).
-->
`abrupt-4xCO2` branches from the `piControl` simulation (part of `CMIP`).
<!-- TODO: get branch information from esgvoc -->
Branch from `piControl` at a time of your choosing.

## Forcings

### General headlines

The `abrupt-4xCO2` experiment is a fixed forcings experiment.
For further general headlines, please see the general headlines for the [piControl simulation](./picontrol.md).

### Notes

See notes for the [piControl simulation](./picontrol.md).

### Versions to use

The forcings relevant for this simulation are the same as for the [piControl simulation](./picontrol.md).

### Getting the data

See instructions for the [piControl simulation](./picontrol.md).
You have to quadruple the atmospheric CO<sub>2</sub> concentrations yourself.
