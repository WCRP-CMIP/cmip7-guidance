---
layout: default
title: piClim-CH4 Experiment Setup and Forcings Guidance
---

# piClim-CH4 Experiment Setup and Forcings Guidance

<!-- TODO: get this information from esgvoc (add reference URLs at that point) -->
Responsible activity: AerChemMIP

<!-- TODO: get this one line description from esgvoc -->
In combination with `piClim-control`, quantifies present-day methane effective radiative forcing (ERF).
Same as `piClim-control`, except methane concentrations or emissions (as appropriate for the model) use present-day values
(in CMIP defined as the last year of the `historical` simulation within the same CMIP era i.e. 2021 values for CMIP7).

## Experiment set up

The piClim-CH4 simulation uses the same forcings as [piClim-control](./piclim-control.md),
except the atmospheric methane concentration forcing uses 2021 values.
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
`piClim-CH4` does not branch from another simulation.

## Forcings

### General headlines

See general headlines for the [`piClim-control` simulation](./piclim-control.md).

### Notes

See notes for the [piClim-control simulation](./piclim-control.md).

### Versions to use

For the methane forcing,
the forcing version relevant for this simulation is the same as for the [historical simulation](./historical.md).
For all other forcings,
the forcing versions relevant for this simulation are the same as for the [piClim-control simulation](./piclim-control.md).

### Getting the data

<!-- TODO: allow for just putting the bash script here again i.e. repeat the information rather than forcing people to go digging -->
See instructions for the[piClim-control simulation](./piclim-control.md) 
and [historical simulation](./historical.md).
