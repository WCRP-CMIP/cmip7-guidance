---
layout: default
title: piClim-SO2 Experiment Setup and Forcings Guidance
---

# piClim-SO2 Experiment Setup and Forcings Guidance

<!-- TODO: get this information from esgvoc (add reference URLs at that point) -->
Responsible activity: AerChemMIP

<!-- TODO: get this one line description from esgvoc -->
In combination with `piClim-control`, quantifies present-day sulfur (dioxide) effective radiative forcing (ERF).
Same as `piClim-control`, except sulfur emissions use present-day values
(in CMIP defined as the last year of the `historical` simulation within the same CMIP era i.e. 2021 values for CMIP7).

## Experiment set up

The piClim-SO2 simulation uses the same forcings as [piClim-control](./piclim-control.md),
except emissions of sulfur dioxide (SO<sub>2</sub>) use 2021 values.
The 2021 values should be prescribed on repeat throughout the simulation.
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
`piClim-SO2` does not branch from another simulation.

## Forcings

### General headlines

See general headlines for the [`piClim-control` simulation](./piclim-control.md).

### Notes

See notes for the [piClim-control simulation](./piclim-control.md).

### Versions to use

For the sulfur dioxide (SO2) emissions,
the forcing version relevant for this simulation is the same as for the [historical simulation](./historical.md).
For all other forcings,
the forcing versions relevant for this simulation are the same as for the [piClim-control simulation](./piclim-control.md).

### Getting the data

<!-- TODO: allow for just putting the bash script here again i.e. repeat the information rather than forcing people to go digging -->
See instructions for the[piClim-control simulation](./piclim-control.md) 
and [historical simulation](./historical.md).
