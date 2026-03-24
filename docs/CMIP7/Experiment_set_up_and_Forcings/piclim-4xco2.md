---
layout: default
title: piClim-4xCO2 Experiment Setup and Forcings Guidance
---

# piClim-4xCO2 Experiment Setup and Forcings Guidance

<!-- TODO: get this information from esgvoc (add reference URLs at that point) -->
Responsible activity: CMIP

<!-- TODO: get this one line description from esgvoc -->
In combination with `piClim-control`, quantifies a quadrupling of atmospheric carbon dioxide's (4xCO2's) effective radiative forcing (ERF). Same as `piClim-control`, except atmospheric carbon dioxide concentrations are set to four times `piControl` levels.

## Experiment set up

The piClim-4xCO2 simulation uses the same forcings as [piClim-control](./piclim-control.md),
except atmospheric CO<sub>2</sub> concentrations
are set to four times the concentrations used in the [piclim-control](./piclim-control.md) simulation.
<!-- TODO: consider whether we can generate these sentences automatically based on esgvoc -->
It is recommended that you use the same time axis as you use for your [piClim-control](./piclim-control.md) output
to make life easy for analysts of your output
(although this is not enforced so you are technically free to start the time axis of your outputs at whatever year you like).
Simulations should be at least 30 years in length.
Only one ensemble member is required.

### Parent experiment

<!--
    TODO: use esgvoc to fill out the template
    `<experiment-name>` branches from the `<parent-experiment-name>` simulation (part of `<parent-experiment-activity>`).
-->
<!-- TODO: check if there is meant to be a spinup -->
`piClim-4xCO2` does not branch from another simulation.

## Forcings

### General headlines

See general headlines for the [`piClim-control` simulation](./piclim-control.md).

### Notes

See notes for the [piClim-control simulation](./piclim-control.md).

### Versions to use

The forcings relevant for this simulation are the same as for the [piClim-control simulation](./piclim-control.md).

### Getting the data

<!-- TODO: allow for just putting the bash script here again i.e. repeat the information rather than forcing people to go digging -->
See instructions for the [piClim-control simulation](./piclim-control.md).
You have to quadruple the atmospheric CO<sub>2</sub> concentrations yourself.
