---
layout: default
title: 1pctCO2-rad Experiment Setup and Forcings Guidance
---

# 1pctCO2-rad Experiment Setup and Forcings Guidance

<!-- TODO: get this information from esgvoc (add reference URLs at that point) -->
Responsible activity: C4MIP

<!-- TODO: get this one line description from esgvoc -->
Radiatively coupled simulation (i.e. the carbon cycle only 'sees' the increase in temperature, not any change in atmospheric carbon dioxide) of a 1% per year increase in atmospheric carbon dioxide levels. All other conditions are kept the same as piControl.

## Experiment set up

<!-- TODO: decide and then consistently apply some convention about whether experiment names are always surround by backticks `` or not -->
The 1pctCO2-rad simulation has the same forcing setup as the [1pctCO2 simulation](./1pctco2.md).
The difference is that your model should be configured such that the carbon cycle
only sees the change in radiation
and does not see any other changes (e.g. changes in atmospheric CO<sub>2</sub> concentrations).

<!-- TODO: consider whether we can generate these sentences automatically based on esgvoc -->
The start-time of the simulation is not tied to a particular year but, rather, can be chosen arbitrarily
(e.g., year 200 or year 1850 or year 1).
However, it is easier for analysts if the start-time is consistent with the branching time in the parent experiment
(e.g., if the the simulation branches from year 200 in the parent experiment,
then the start time in the child experiment would be set to year 200).
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
