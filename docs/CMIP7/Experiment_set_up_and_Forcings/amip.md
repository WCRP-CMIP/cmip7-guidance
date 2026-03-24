---
layout: default
title: AMIP Experiment Setup and Forcings Guidance
---

# amip Experiment Setup and Forcings Guidance

<!-- TODO: get this information from esgvoc (add reference URLs at that point) -->
Responsible activity: CMIP

<!-- TODO: get this one line description from esgvoc -->
Atmosphere-only simulation with prescribed sea surface temperatures (SSTs) and sea-ice concentrations.

## Experiment set up

<!-- TODO: decide and then consistently apply some convention about whether experiment names are always surround by backticks `` or not -->
The amip simulation uses a specific set of forcings (see [forcings](#forcings)).
These should be applied as transient (i.e. time-changing) forcings over the length of the simulation.
<!-- TODO: consider whether we can generate these sentences automatically based on esgvoc -->
The simulation output should start on 1979-01-01 and end on 2021-12-31.
Only one ensemble member is required.

### Parent experiment

<!--
    TODO: use esgvoc to fill out the template
    `<experiment-name>` branches from the `<parent-experiment-name>` simulation (part of `<parent-experiment-activity>`).
-->
`amip` has no parent experiment.

## Forcings

### General headlines

The `amip` experiment is a time-varying forcings experiment.

### Notes

See notes for the [piControl simulation](./picontrol.md).
<!-- TODO: auto-generate -->
The following pages give further information on each forcing
beyond the ones used in the [historical simulation](./historical.md):

- AMIP sea-surface temperature and sea-ice boundary forcing: [input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/amip-sst-sea-ice-boundary-forcing](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/amip-sst-sea-ice-boundary-forcing/)

### Versions to use

The forcings relevant for this simulation are the same as for the [historical simulation](./historical.md)
with the addition of the SST and sea-ice forcing.
For this additional forcing, we provide the version(s), in the form of "source ID(s)",
which should be used when running this simulation.
For all other forcings, please see the information on the [historical simulation page](./historical.md).
<!-- TODO: auto-generate and just duplicate the information rather than forcing people to other pages -->

<!-- TODO: auto-generate this -->
```json
{
    "amip-sea-surface-temperature-and-sea-ice-boundary-forcing": ["PCMDI-AMIP-1-1-10"]
}
```

### Getting the data

The data is available on ESGF and searchable [via metagrid](https://esgf-node.ornl.gov/search?project=input4MIPs&versionType=all&activeFacets=%7B%22mip_era%22%3A%22CMIP7%22%7D),
although this method of finding and downloading the data can involve a lot of clicking.
Having said this, please also note: the aerosol optical properties based on the MACv2-SP parameterisation are not distrubuted via the ESGF.
<!-- TODO: add CI to check all URLs are live -->
Please see [their specific guidance section](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/aerosol-optical-properties-macv2-sp/#datasets-for-cmip7-phases)
for data access information.

If you install [esgpull](https://esgf.github.io/esgf-download/),
you can download all the data associated with the source IDs above with the script shown below.
Note that this will download all the data associated with these source IDs,
which is likely to be much more data than you actually need to run your model.

<!-- TODO: auto-generate this -->
```bash
#!/bin/bash

EXPERIMENT_NAME="historical"

esgpull add --track --tag ${EXPERIMENT_NAME} source_id:PCMDI-AMIP-1-1-10,CEDS-CMIP-2025-04-18,CEDS-CMIP-2025-04-18-supplemental,DRES-CMIP-BB4CMIP7-2-0,UofMD-landState-3-1-1,CR-CMIP-1-0-0,UOEXETER-CMIP-2-2-1,FZJ-CMIP-ozone-2-0,FZJ-CMIP-nitrogen-1-2,SOLARIS-HEPPA-CMIP-4-6,PIK-CMIP-1-0-1
esgpull update --tag ${EXPERIMENT_NAME} --yes
esgpull download --tag ${EXPERIMENT_NAME}
```
