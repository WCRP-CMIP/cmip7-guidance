---
layout: default
title: piClim-control Experiment Setup and Forcings Guidance
---

# piClim-control Experiment Setup and Forcings Guidance

<!-- TODO: get this one line description from esgvoc -->
Baseline for effective radiative forcing (ERF) calculations. `piControl` with prescribed sea-surface temperatures and sea-ice concentrations.

## Experiment set up

The piClim-control simulation uses the same forcings as [piControl](./picontrol.md),
with the extra specification that sea-surface temperatures and sea-ice concentrations are prescribed.
The prescribed sea-surface temperatures and sea-ice concentrations
must come from a (monthly varying) climatology taken from 30 years of your [pre-industrial control](./picontrol.md) simulation
(i.e. these forcings are derived from your model output from one of your own simulations,
they are not provided by a forcings provider).
<!-- TODO: consider whether we can generate these sentences automatically based on esgvoc -->
You are free to start the time axis of your outputs at whatever year you like
(e.g. starting at year 1, or 1850, or year 500).
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

### Versions to use

The forcings relevant for this simulation are the same as for the [piControl simulation](./picontrol.md).

As noted above, the prescribed sea-surface temperatures and sea-ice concentrations
must come from model output from one of your own simulations,
they are not provided by a forcings provider.
We recommend including information in your `piClim-control` output
that identifies the `piControl` simulation and time period used to generate
the prescribed sea-surface temperatures and sea-ice concentrations.

### Notes

See notes for the [piControl simulation](./picontrol.md).

### Getting the data

See instructions for the [piControl simulation](./picontrol.md).
As noted above, the prescribed sea-surface temperatures and sea-ice concentrations
must come from model output from one of your own simulations,
they are not provided by a forcings provider.
