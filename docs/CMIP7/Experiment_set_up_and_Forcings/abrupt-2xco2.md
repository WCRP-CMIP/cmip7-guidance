---
layout: default
title: abrupt-2xCO2 Experiment Setup and Forcings Guidance
---

# abrupt-2xCO2 Experiment Setup and Forcings Guidance

<!-- TODO: get this one line description from esgvoc -->
Abrupt doubling of atmospheric carbon dioxide levels. All other conditions are kept the same as piControl.

## Experiment set up

<!-- TODO: decide and then consistently apply some convention about whether experiment names are always surround by backticks `` or not -->
The abrupt CO<sub>2</sub> doubling simulation is a simple branch from the [piControl simulation](./picontrol.md).
After branching, the atmospheric CO<sub>2</sub> concentrations should be set to two times
the concentrations used in the `piControl` simulation.
<!-- TODO: consider whether we can generate these sentences automatically based on esgvoc -->
You are free to start the time axis of your outputs at whatever year you like
(e.g. starting at year 1, or 1850, or year 500),
although if you want to make life easy for analysts, start your time axis at the branching time.
Simulations should be at least 300 years in length.
Only one ensemble member is required.

### Parent experiment

<!--
    TODO: use esgvoc to fill out the template
    `<experiment-name>` branches from the `<parent-experiment-name>` simulation (part of `<parent-experiment-activity>`).
-->
`abrupt-2xCO2` branches from the `piControl` simulation (part of `CMIP`).
<!-- TODO: get branch information from esgvoc -->
Branch from `piControl` at a time of your choosing.

## Forcings

### Versions to use

The forcings relevant for this simulation are the same as for the [piControl simulation](./picontrol.md).

### Notes

See notes for the [piControl simulation](./picontrol.md).

### Getting the data

See instructions for the [piControl simulation](./picontrol.md).
You have to double the atmospheric CO<sub>2</sub> concentrations yourself.
