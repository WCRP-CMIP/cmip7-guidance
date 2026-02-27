---
layout: default
title: 1pctCO2 Experiment Setup and Forcings Guidance
---

# 1pctCO2 Experiment Setup and Forcings Guidance

<!-- TODO: get this one line description from esgvoc -->
1% per year increase in atmospheric carbon dioxide levels. All other conditions are kept the same as piControl.

## Experiment set up

<!-- TODO: decide and then consistently apply some convention about whether experiment names are always surround by backticks `` or not -->
The 1pctCO2 simulation is a simple branch from the [piControl simulation](./picontrol.md).
After branching, the atmospheric CO<sub>2</sub> concentrations should increase at one percent per year throughout the simulation.
<!-- TODO: consider whether we can generate these sentences automatically based on esgvoc -->
You are free to start the time axis of your outputs at whatever year you like
(e.g. starting at year 1, or 1850, or year 500),
although if you want to make life easy for analysts, start your time axis at the branching time.
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

### Versions to use

The forcings relevant for this simulation are the same as for the [piControl simulation](./picontrol.md).

### Notes

See notes for the [piControl simulation](./picontrol.md).

### Getting the data

See instructions for the [piControl simulation](./picontrol.md).
You have to increase the atmospheric CO<sub>2</sub> concentrations at one percent per year yourself.
<!--- 
    TODO: discuss with Matt/someone else the specific implementation instructions.
    Set concentrations in first year to be higher than piControl
    (because, if you don't do this and you have a linear increase,
    then you'd have to drop concentrations in January of the first year in order to get the average correct)
-->
The annual-average concentrations should increase following the formula c(y) = c_0 * 1.01 ** (y - y_0 - 1),
where c is the annual-average concentration in year y and y_0 is the first year of the `1pctCO2` simulation
(i.e. average atmospheric CO<sub>2</sub> concentrations in the first year of the `1pctCO2` simulation
should be higher than in `piControl`).
It is up to you to decide whether you apply your concentrations as a series of step changes
(constant over each year) or as a steady linear increase
(such that e.g. concentrations in December are higher than those in January)
that results in the correct annual average being applied.
