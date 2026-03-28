---
layout: default
title: hist-piAer Experiment Setup and Forcings Guidance
---

# hist-piAer Experiment Setup and Forcings Guidance

<!-- TODO: get this information from esgvoc (add reference URLs at that point) -->
Responsible activity: AerChemMIP

Note, the information on this page is likely not correct.
We are awaiting documentation of the forcings for the AerChemMIP CMIP7 AFT experiments.
Some details may be available in [Fiedler et al](https://doi.org/10.5194/egusphere-2025-5669) (preprint)
and information on AerChemMIP can be found via the [CMIP IPO website](https://wcrp-cmip.org/mips/aerchemmip2/).
Please see [issue #124](https://github.com/WCRP-CMIP/cmip7-guidance/issues/124)
to track progress resolving this.

<!-- TODO: get this one line description from esgvoc -->
<!-- TODO: check this with someone who knows what they're reading -->
In combination with `historical`, allows for evaluation of the air quality and climate effect of historical aerosol and tropospheric non-methane ozone precursor emissions in models without interactive chemistry (for models with interactive chemistry, see `hist-piAQ`).

## Experiment set up

<!-- TODO: check this with someone who knows what they're reading -->
<!-- TODO: decide and then consistently apply some convention about whether experiment names are always surround by backticks `` or not -->
The `hist-piAer` simulation is a simple variant of the [historical simulation](./historical.md)
where aerosol and trospheric non-methane ozone precursor emissions are kept at pre-industrial levels.
`hist-piAer` is for models that do not include interactive chemistry.
For models with interactive chemistry, please see [hist-piAQ](./hist-piaq.md) instead.
<!-- TODO: consider whether we can generate these sentences automatically based on esgvoc -->
The simulation output should start on 1850-01-01 and end on 2021-12-31.
<!-- TODO: double check, dunne et al. says 6?! -->
Only one ensemble member is required.

### Parent experiment

<!--
    TODO: use esgvoc to fill out the template
    `<experiment-name>` branches from the `<parent-experiment-name>` simulation (part of `<parent-experiment-activity>`).
-->
`hist-piAer` branches from the `piControl` simulation (part of `CMIP`).
<!-- TODO: get branch information from esgvoc -->
Branch from `piControl` at a time of your choosing.
This branch time should match the branch time used for initialising the [historical simulation](./historical.md).

## Forcings

### General headlines

The `hist-piAer` experiment is a time-varying forcings experiment,
except for aerosol and tropospheric non-methane ozone precursor emissions which should be fixed.

### Notes

See notes for the [piControl simulation](./picontrol.md) and [historical simulation](./historical.md).

### Versions to use

For aerosol and trospheric non-methane ozone precursor emissions
the relevant forcing is the same as for the [piControl simulation](./picontrol.md).
For all other forcings,
the forcing versions relevant for this simulation are the same as for the [historical simulation](./historical.md).

### Getting the data

See instructions for the [piControl simulation](./picontrol.md) and [historical simulation](./historical.md).
