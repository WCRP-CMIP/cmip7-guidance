---
layout: default
title: abrupt-0p5xCO2 Experiment Setup and Forcings Guidance
---

# abrupt-0p5xCO2 Experiment Setup and Forcings Guidance

<!-- TODO: get this information from esgvoc (add reference URLs at that point) -->
Responsible activity: CFMIP

<!-- TODO: get this one line description from esgvoc -->
Abrupt halving of atmospheric carbon dioxide levels. All other conditions are kept the same as piControl.

## Experiment set up

<!-- TODO: decide and then consistently apply some convention about whether experiment names are always surround by backticks `` or not -->
The abrupt CO<sub>2</sub> halving simulation is a simple branch from the [piControl simulation](./picontrol.md).
After branching, the atmospheric CO<sub>2</sub> concentrations should be set to half
the concentrations used in the `piControl` simulation.
<!-- TODO: consider whether we can generate these sentences automatically based on esgvoc -->
The start-time of the simulation is not tied to a particular year but, rather, can be chosen arbitrarily
(e.g., year 200 or year 1850 or year 1).
However, it is easier for analysts if the start-time is consistent with the branching time in the parent experiment
(e.g., if the the simulation branches from year 200 in the parent experiment,
then the start time in the child experiment would be set to year 200).
Simulations should be at least 300 years in length.
Only one ensemble member is required.

### Parent experiment

<!--
    TODO: use esgvoc to fill out the template
    `<experiment-name>` branches from the `<parent-experiment-name>` simulation (part of `<parent-experiment-activity>`).
-->
`abrupt-0p5xCO2` branches from the `piControl` simulation (part of `CMIP`).
<!-- TODO: get branch information from esgvoc -->
Branch from `piControl` at a time of your choosing.

## Forcings

### General headlines

See general headlines for the [abrupt-4xCO2 simulation](./abrupt-4xco2.md).

### Notes

See notes for the [piControl simulation](./picontrol.md).

### Versions to use

The forcings relevant for this simulation are the same as for the [piControl simulation](./picontrol.md).

### Getting the data

See instructions for the [piControl simulation](./picontrol.md).
You have to halve the atmospheric CO<sub>2</sub> concentrations yourself.
