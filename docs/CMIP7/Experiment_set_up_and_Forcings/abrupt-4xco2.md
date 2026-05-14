---
layout: default
title: "Experiment Setup and Forcings Guidance: abrupt-4xCO2"
---

# Experiment Setup and Forcings Guidance: abrupt-4xCO2

Abrupt quadrupling of atmospheric carbon dioxide levels.
All other conditions are kept the same as piControl.

Responsible activity: [CMIP](./index.md#cmip). Tier: 1

These pages are intended to help with implementation of these experiments.
If you notice something that is unclear, please
[raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).
For the full background of the experiments, please see the following URLs:

- [https://doi.org/10.5194/gmd-18-6671-2025](https://doi.org/10.5194/gmd-18-6671-2025)

## Experiment set up

The abrupt CO<sub>2</sub> quadrupling simulation is a simple branch from the [piControl simulation](./picontrol.md).

After branching, the atmospheric CO<sub>2</sub> concentrations should be set to four times the concentrations used in
the `piControl` simulation.

<!-- TODO: consider whether we can generate these sentences automatically based on esgvoc -->

The start-time of the simulation is not tied to a particular year but, rather, can be chosen arbitrarily (e.g., year 200
or year 1850 or year 1).
However, it is easier for analysts if the start-time is consistent with the branching time in the parent experiment
(e.g., if the the simulation branches from year 200 in the parent experiment, then the start time in the child
experiment would be set to year 200).

### Timing, length and ensemble size

The CMIP7 CVs do not define fixed start or end dates for this simulation.

Simulations should be at least 300 years in length.

Only one ensemble member is required.

### Parent experiment

`abrupt-4xCO2` branches from the [piControl](./picontrol.md) simulation (part of [CMIP](./index.md#cmip)).

Branch from `piControl` at a time of your choosing.

The parent experiment comes from [CMIP7](https://wcrp-cmip.org/CMIP7).

## Forcings

### General headlines

The `abrupt-4xCO2` experiment is a fixed forcings experiment.
For further general headlines, please see the general headlines for the [piControl simulation](./picontrol.md).

### Notes

See notes for the [piControl simulation](./picontrol.md).

You have to quadruple the atmospheric CO<sub>2</sub> concentrations yourself.

### Versions to use

The forcings relevant for this simulation are the same as for the [piControl simulation](./picontrol.md).

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

EXPERIMENT_NAME="abrupt-4xCO2"

esgpull add --track --tag ${EXPERIMENT_NAME} source_id:CEDS-CMIP-2025-04-18,CEDS-CMIP-2025-04-18-supplemental,DRES-CMIP-BB4CMIP7-2-0,UofMD-landState-3-1-1,CR-CMIP-1-0-0,UOEXETER-CMIP-2-2-1,FZJ-CMIP-ozone-1-2,FZJ-CMIP-nitrogen-1-2,SOLARIS-HEPPA-CMIP-4-6,PIK-CMIP-1-0-1
esgpull update --tag ${EXPERIMENT_NAME} --yes
esgpull download --tag ${EXPERIMENT_NAME}
```
