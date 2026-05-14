---
layout: default
title: "Experiment Setup and Forcings Guidance: piClim-anthro"
---

# Experiment Setup and Forcings Guidance: piClim-anthro

Responsible activity: [CMIP](./index.md#cmip). Tier: 1

These pages are intended to help with implementation of these experiments.
If you notice something that is unclear, please
[raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).
For the full background of the experiments, please see the following URLs:

- [https://doi.org/10.5194/gmd-18-6671-2025](https://doi.org/10.5194/gmd-18-6671-2025)

In combination with `piClim-control`, quantifies present-day total anthropogenic effective radiative forcing (ERF).
Same as `piClim-control`, except all anthropogenic forcings use present-day values (typically the last year of the
`historical` simulation within the same CMIP era e.g. 2014 values for CMIP6, 2021 values for CMIP7).

## Experiment set up

This simulation uses the same forcings as [piClim-control](./piclim-control.md), except for the forcings listed below.

The following forcings should use 2021 values from the [historical simulation](./historical.md):

- anthropogenic emissions
- biomass-burning emissions
- land-use forcing
- greenhouse-gas concentrations
- ozone
- nitrogen deposition
- population density

The 2021 values should be prescribed on repeat throughout the simulation.

Solar and stratospheric aerosol forcing should remain as in [piClim-control](./piclim-control.md).

<!-- TODO: consider whether we can generate these sentences automatically based on esgvoc -->

It is recommended that you use the same time axis as you use for your [piClim-control](./piclim-control.md) output to
make life easy for analysts of your output (although this is not enforced so you are technically free to start the time
axis of your outputs at whatever year you like).

### Timing, length and ensemble size

The CMIP7 CVs do not define fixed start or end dates for this simulation.

Simulations should be at least 30 years in length.

Only one ensemble member is required.

### Parent experiment

`piClim-anthro` branches from the [piControl](./picontrol.md) simulation (part of [CMIP](./index.md#cmip)).

Same as `piClim-control`.

Parent MIP era: [CMIP7](https://wcrp-cmip.org/CMIP7).

## Forcings

### General headlines

See general headlines for the [`piClim-control` simulation](./piclim-control.md).

### Notes

See notes for the [piClim-control simulation](./piclim-control.md).

### Versions to use

For the forcings listed below, the forcing version relevant for this simulation is the same as for the
[historical simulation](./historical.md):

- anthropogenic emissions
- biomass-burning emissions
- land-use forcing
- greenhouse-gas concentrations
- ozone
- nitrogen deposition
- population density

For all other forcings, the forcing versions relevant for this simulation are the same as for the
[piClim-control simulation](./piclim-control.md).

### Getting the data

The data is available on ESGF and searchable
[via metagrid](https://esgf-node.ornl.gov/search?project=input4MIPs&versionType=all&activeFacets=%7B%22mip_era%22%3A%22CMIP7%22%7D),
although this method of finding and downloading the data can involve a lot of clicking.
Having said this, please also note: the aerosol optical properties based on the MACv2-SP parameterisation are not
distributed via the ESGF.
<!-- TODO: add CI to check all URLs are live -->
Please see
[their specific guidance section](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/aerosol-optical-properties-macv2-sp/#datasets-for-cmip7-phases)
for data access information.

If you install [esgpull](https://esgf.github.io/esgf-download/), you can download all the data associated with the
source IDs above with the script shown below.
Note that this will download all the data associated with these source IDs, which is likely to be much more data than
you actually need to run your model.

```bash
#!/bin/bash

EXPERIMENT_NAME="piClim-anthro"

esgpull add --track --tag ${EXPERIMENT_NAME} source_id:UOEXETER-CMIP-2-2-1,SOLARIS-HEPPA-CMIP-4-6,CEDS-CMIP-2025-04-18,CEDS-CMIP-2025-04-18-supplemental,DRES-CMIP-BB4CMIP7-2-0,UofMD-landState-3-1-1,CR-CMIP-1-0-0,FZJ-CMIP-ozone-2-0,FZJ-CMIP-nitrogen-1-2,PIK-CMIP-1-0-1
esgpull update --tag ${EXPERIMENT_NAME} --yes
esgpull download --tag ${EXPERIMENT_NAME}
```
