---
layout: default
title: "Experiment Setup and Forcings Guidance: amip"
---

# Experiment Setup and Forcings Guidance: amip

Simulation of the climate of the recent past with prescribed sea surface temperatures and sea ice concentrations.

Responsible activity: [CMIP](./index.md#cmip). Tier: 1

These pages are intended to help with implementation of these experiments.
If you notice something that is unclear, please
[raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).
For the full background of the experiments, please see the following URLs:

- [https://doi.org/10.5194/gmd-18-6671-2025](https://doi.org/10.5194/gmd-18-6671-2025)

## Experiment set up

The amip simulation uses a specific set of forcings (see [forcings](#forcings)).

These should be applied as transient (i.e. time-changing) forcings over the length of the simulation.

### Timing, length and ensemble size

The simulation output should start on 1979-01-01 and end on 2021-12-31.

Simulations should be 43 years in length.

Only one ensemble member is required.

### Parent experiment

`amip` has no parent experiment in the CMIP7 CVs.

The parent experiment comes from [CMIP7](https://wcrp-cmip.org/CMIP7).

## Forcings

### General headlines

The `amip` experiment is a time-varying forcings experiment.

### Notes

See notes for the [piControl simulation](./picontrol.md).

The following pages give further information on each forcing beyond the ones used in the
[historical simulation](./historical.md):

- AMIP sea-surface temperature and sea-ice boundary forcing:
  [input4mips-cvs.readthedocs.io/dataset-overviews/amip-sst-sea-ice-boundary-forcing](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/amip-sst-sea-ice-boundary-forcing/)

### Versions to use

The forcings relevant for this simulation are the same as for the [historical simulation](./historical.md) with the
addition of the SST and sea-ice forcing.
For this additional forcing, we provide the version(s), in the form of "source ID(s)", which should be used when running
this simulation.
For all other forcings, please see the information on the [historical simulation](./historical.md) page.

<!-- TODO: auto-generate and just duplicate the information rather than forcing people to other pages -->

```json
{
    "amip-sea-surface-temperature-and-sea-ice-boundary-forcing": ["PCMDI-AMIP-1-1-10"]
}
```

### Getting the data

The data is available on ESGF and searchable
[via metagrid](https://esgf-node.ornl.gov/search?project=input4MIPs&versionType=all&activeFacets=%7B%22mip_era%22%3A%22CMIP7%22%7D),
although this method of finding and downloading the data can involve a lot of clicking.

Having said this, please also note: the aerosol optical properties based on the MACv2-SP parameterisation are not
distributed via the ESGF; please see their
[specific guidance section](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/aerosol-optical-properties-macv2-sp/#datasets-for-cmip7-phases)
for data access information.

If you install [esgpull](https://esgf.github.io/esgf-download/), you can download all the data associated with the
source IDs above with the script shown below.
Note that this will download all the data associated with these source IDs, which is likely to be much more data than
you actually need to run your model.

```bash
#!/bin/bash

EXPERIMENT_NAME="amip"

esgpull add --track --tag ${EXPERIMENT_NAME} source_id:PCMDI-AMIP-1-1-10,CEDS-CMIP-2025-04-18,CEDS-CMIP-2025-04-18-supplemental,DRES-CMIP-BB4CMIP7-2-0,UofMD-landState-3-1-1,CR-CMIP-1-0-0,UOEXETER-CMIP-2-2-1,FZJ-CMIP-ozone-2-0,FZJ-CMIP-nitrogen-1-2,SOLARIS-HEPPA-CMIP-4-6,PIK-CMIP-1-0-1
esgpull update --tag ${EXPERIMENT_NAME} --yes
esgpull download --tag ${EXPERIMENT_NAME}
```
