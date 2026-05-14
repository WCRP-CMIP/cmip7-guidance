---
layout: default
title: "Experiment Setup and Forcings Guidance: piClim-control"
---

# Experiment Setup and Forcings Guidance: piClim-control

Baseline for effective radiative forcing (ERF) calculations. `piControl` with prescribed sea-surface temperatures and
sea-ice concentrations from a climatology of the model's `piControl` simulation.

Responsible activity: [CMIP](./index.md#cmip). Tier: 1

These pages are intended to help with implementation of these experiments.
If you notice something that is unclear, please
[raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).
For the full background of the experiments, please see the following URLs:

- [https://doi.org/10.5194/gmd-18-6671-2025](https://doi.org/10.5194/gmd-18-6671-2025)

## Experiment set up

The piClim-control simulation uses the same forcings as [piControl](./picontrol.md), with the extra specification that
sea-surface temperatures and sea-ice concentrations are prescribed.

The prescribed sea-surface temperatures and sea-ice concentrations must come from a (monthly varying, annually
repeating) climatology taken from at least 30 years of your [pre-industrial control](./picontrol.md) simulation (i.e.
these forcings are derived from your model output from one of your own simulations, they are not provided by a forcings
provider).

The start-time of the simulation is not tied to a particular year but, rather, can be chosen arbitrarily (e.g., year 200
or year 1850 or year 1).
If you have no other strong feeling, then it may be clearest to set the start-time to be equal to the middle of the
period over which the climatology was taken from the pre-industrial control experiment.
For example, if your climatology is taken over the years 120-150 in the pre-industrial control experiment, then you
could start the time axis of your `piClim-control` at 135.

### Timing, length and ensemble size

The CMIP7 CVs do not define fixed start or end dates for this simulation.

Simulations should be at least 30 years in length.

Only one ensemble member is required.

### Parent experiment

`piClim-control` branches from the [piControl](./picontrol.md) simulation (part of [CMIP](./index.md#cmip)).

Branch from `piControl` at a time of your choosing.
Given that you are using a climatology from your own model as boundary conditions, we recommended branching from the
mid-point of the period over which you calculated the climatology (but this recommendation may not be appropriate for
all models, so ultimately it is up to you to decide what introduces the smallest 'shock'/'jump' at the branch time).

The parent experiment comes from [CMIP7](https://wcrp-cmip.org/CMIP7).

## Forcings

### General headlines

The `piClim-control` experiment is a fixed forcings experiment.
For further general headlines, please see the general headlines for the [piControl simulation](./picontrol.md).

### Notes

See notes for the [piControl simulation](./picontrol.md).

### Versions to use

The forcings relevant for this simulation are the same as for the [piControl simulation](./picontrol.md).

As noted above, the prescribed sea-surface temperatures and sea-ice concentrations must come from model output from one
of your own simulations, they are not provided by a forcings provider.
We recommend including information in your `piClim-control` output that identifies the `piControl` simulation and time
period used to generate the prescribed sea-surface temperatures and sea-ice concentrations.

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

EXPERIMENT_NAME="piClim-control"

esgpull add --track --tag ${EXPERIMENT_NAME} source_id:CEDS-CMIP-2025-04-18,CEDS-CMIP-2025-04-18-supplemental,DRES-CMIP-BB4CMIP7-2-0,UofMD-landState-3-1-1,UofMD-landState-3-1-2,CR-CMIP-1-0-0,UOEXETER-CMIP-2-2-1,FZJ-CMIP-ozone-1-2,FZJ-CMIP-nitrogen-1-2,SOLARIS-HEPPA-CMIP-4-6,PIK-CMIP-1-0-1
esgpull update --tag ${EXPERIMENT_NAME} --yes
esgpull download --tag ${EXPERIMENT_NAME}
```

As noted above, the prescribed sea-surface temperatures and sea-ice concentrations must come from model output from one
of your own simulations, they are not provided by a forcings provider.
