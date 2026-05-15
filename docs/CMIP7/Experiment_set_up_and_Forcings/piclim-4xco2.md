---
layout: default
title: "Experiment Setup and Forcings Guidance: piClim-4xCO2"
---

# Experiment Setup and Forcings Guidance: piClim-4xCO2

In combination with `piClim-control`, quantifies a quadrupling of atmospheric carbon dioxide's (4xCO2's) effective
radiative forcing (ERF).
Same as `piClim-control`, except atmospheric carbon dioxide concentrations are set to four times `piControl` levels.

Responsible activity: [CMIP](./index.md#cmip). Tier: 1

These pages are intended to help with implementation of these experiments.
If you notice something that is unclear, please
[raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).
For the full background of the experiments, please see the following URLs:

- [https://doi.org/10.5194/gmd-18-6671-2025](https://doi.org/10.5194/gmd-18-6671-2025)

## Experiment set up

The piClim-4xCO2 simulation uses the same forcings as [piClim-control](./piclim-control.md), except atmospheric
CO<sub>2</sub> concentrations are set to four times the concentrations used in the [piClim-control](./piclim-control.md)
simulation.

It is recommended that you use the same time axis as you use for your [piClim-control](./piclim-control.md) output to
make life easy for analysts of your output (although this is not enforced so you are technically free to start the time
axis of your outputs at whatever year you like).

### Timing, length and ensemble size

The CMIP7 CVs do not define fixed start or end dates for this simulation.

Simulations should be at least 30 years in length.

Only one ensemble member is required.

### Parent experiment

`piClim-4xCO2` branches from the [piControl](./picontrol.md) simulation (part of [CMIP](./index.md#cmip)).

Branch from piControl at the same time as piClim-control.

The parent experiment comes from [CMIP7](https://wcrp-cmip.org/CMIP7).

## Forcings

### General headlines

See general headlines for the [`piClim-control` simulation](./piclim-control.md).

### Notes

See notes for the [piClim-control simulation](./piclim-control.md).

### Versions to use

The forcings relevant for this simulation are the same as for the [piClim-control simulation](./piclim-control.md).
You have to quadruple the CO2 concentrations yourself.

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

EXPERIMENT_NAME="piClim-4xCO2"

esgpull add --track --tag ${EXPERIMENT_NAME} source_id:CEDS-CMIP-2025-04-18,CEDS-CMIP-2025-04-18-supplemental,DRES-CMIP-BB4CMIP7-2-0,UofMD-landState-3-1-2,CR-CMIP-1-0-0,UOEXETER-CMIP-2-2-1,FZJ-CMIP-ozone-1-2,FZJ-CMIP-nitrogen-2-0,SOLARIS-HEPPA-CMIP-4-6,PIK-CMIP-1-0-1
esgpull update --tag ${EXPERIMENT_NAME} --yes
esgpull download --tag ${EXPERIMENT_NAME}
```

You have to quadruple the atmospheric CO<sub>2</sub> concentrations yourself.

As noted above, the prescribed sea-surface temperatures and sea-ice concentrations must come from model output from one
of your own simulations, they are not provided by a forcings provider.
