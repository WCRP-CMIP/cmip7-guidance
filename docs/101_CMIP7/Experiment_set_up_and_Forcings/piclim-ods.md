---
layout: default
title: piClim-ODS Experiment Setup and Forcings Guidance
---

# piClim-ODS Experiment Setup and Forcings Guidance

<!-- TODO: get this one line description from esgvoc -->
In combination with `piClim-control`, quantifies present-day ozone-depleting substances' effective radiative forcing (ERF). Same as `piClim-control`, except ozone-depleting substances concentrations use present-day values (typically the last year of the `historical` simulation within the same CMIP era e.g. 2014 values for CMIP6, 2021 values for CMIP7).

## Experiment set up

The piClim-ODS simulation uses the same forcings as [piClim-control](./piclim-control.md),
except emissions of ozone-depleting substances use 2021 values.
<!-- TODO: check the above, I don't think this is correct... -->
The 2021 values should be prescribed on repeat throughout the simulation.
<!-- TODO: consider whether we can generate these sentences automatically based on esgvoc -->
You are free to start the time axis of your outputs at whatever year you like
(e.g. starting at year 1, or 1850, or year 500).
If you want to make life easy for analysts,
use the same time axis as you use for your [piClim-control](./piclim-control.md) output.
Simulations should be at least 30 years in length.
Only one ensemble member is required.

### Parent experiment

<!--
    TODO: use esgvoc to fill out the template
    `<experiment-name>` branches from the `<parent-experiment-name>` simulation (part of `<parent-experiment-activity>`).
-->
<!-- TODO: check if there is meant to be a spinup -->
`piClim-ODS` does not branch from another simulation.

## Forcings

### Versions to use

For the ozone-depleting substance forcing,
the forcing version relevant for this simulation is the same as for the [historical simulation](./historical.md).
For all other forcings,
the forcing versions relevant for this simulation are the same as for the [piClim-control simulation](./piclim-control.md).

### Notes

See notes for the [piClim-control simulation](./piclim-control.md).

### Getting the data

<!-- TODO: allow for just putting the bash script here again i.e. repeat the information rather than forcing people to go digging -->
See instructions for the[piClim-control simulation](./piclim-control.md) 
and [historical simulation](./historical.md).
