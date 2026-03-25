---
layout: default
title: piClim-control Experiment Setup and Forcings Guidance
---

# piClim-control Experiment Setup and Forcings Guidance

<!-- TODO: get this information from esgvoc (add reference URLs at that point) -->
Responsible activity: CMIP

<!-- TODO: get this one line description from esgvoc -->
Baseline for effective radiative forcing (ERF) calculations. `piControl` with prescribed sea-surface temperatures and sea-ice concentrations.

## Experiment set up

The piClim-control simulation uses the same forcings as [piControl](./picontrol.md),
with the extra specification that sea-surface temperatures and sea-ice concentrations are prescribed.
The prescribed sea-surface temperatures and sea-ice concentrations
must come from a (monthly varying, annually repeating)
climatology taken from at least 30 years of your [pre-industrial control](./picontrol.md) simulation
(i.e. these forcings are derived from your model output from one of your own simulations,
they are not provided by a forcings provider).
<!-- TODO: consider whether we can generate these sentences automatically based on esgvoc -->
The start-time of the simulation is not tied to a particular year but, rather, can be chosen arbitrarily
(e.g., year 200 or year 1850 or year 1).
If you have no other strong feeling, then it may be clearest to set the start-time
to be equal to the middle of the period over which the climatology was taken from the pre-industrial control experiment.
For example, if your climatology is taken over the years 120-150 in the pre-industrial control experiment,
then you could start the time axis of your `piClim-control` at 135.
Simulations should be at least 30 years in length.
Only one ensemble member is required.

### Parent experiment

<!--
    TODO: use esgvoc to fill out the template
    `<experiment-name>` branches from the `<parent-experiment-name>` simulation (part of `<parent-experiment-activity>`).
-->
<!-- TODO: check if there is meant to be a spinup -->
`piClim-control` does not branch from another simulation.

## Forcings

### General headlines

The `piClim-control` experiment is a fixed forcings experiment.
For further general headlines, please see the general headlines for the [piControl simulation](./picontrol.md).

### Notes

See notes for the [piControl simulation](./picontrol.md).

### Versions to use

The forcings relevant for this simulation are the same as for the [piControl simulation](./picontrol.md).

As noted above, the prescribed sea-surface temperatures and sea-ice concentrations
must come from model output from one of your own simulations,
they are not provided by a forcings provider.
We recommend including information in your `piClim-control` output
that identifies the `piControl` simulation and time period used to generate
the prescribed sea-surface temperatures and sea-ice concentrations.

### Getting the data

See instructions for the [piControl simulation](./picontrol.md).
As noted above, the prescribed sea-surface temperatures and sea-ice concentrations
must come from model output from one of your own simulations,
they are not provided by a forcings provider.
