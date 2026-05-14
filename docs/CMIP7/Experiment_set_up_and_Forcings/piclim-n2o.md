---
layout: default
title: "Experiment Setup and Forcings Guidance: piClim-N2O"
---

# Experiment Setup and Forcings Guidance: piClim-N2O

Responsible activity: AerChemMIP

These pages are intended as a summary guide only.
For full details of experiments, please see the following URLs:

- [https://doi.org/10.5194/gmd-10-585-2017](https://doi.org/10.5194/gmd-10-585-2017)

In combination with `piClim-control`, quantifies present-day nitrous oxide effective radiative forcing (ERF).
Same as `piClim-control`, except nitrous oxide concentrations or emissions (as appropriate for the model) use
present-day values (typically the last year of the `historical` simulation within the same CMIP era e.g. 2014 values for
CMIP6, 2021 values for CMIP7).

## Experiment set up

This simulation uses the same forcings as [piClim-control](./piclim-control.md), except for the forcing listed below.

The following forcing should use 2021 values from the [historical simulation](./historical.md):

- nitrous oxide concentrations or emissions (as appropriate for the model)

The 2021 values should be prescribed on repeat throughout the simulation.

<!-- TODO: consider whether we can generate these sentences automatically based on esgvoc -->

It is recommended that you use the same time axis as you use for your [piClim-control](./piclim-control.md) output to
make life easy for analysts of your output (although this is not enforced so you are technically free to start the time
axis of your outputs at whatever year you like).

### Timing, length and ensemble size

The CMIP7 CVs do not define fixed start or end dates for this simulation.

Simulations should be at least 30 years in length.

Only one ensemble member is required.

### Parent experiment

`piClim-N2O` branches from the [piControl](./picontrol.md) simulation (part of [CMIP](./index.md#cmip)).

Same as `piClim-control`.

Parent MIP era: [CMIP7](https://wcrp-cmip.org/CMIP7).

## Forcings

### General headlines

See general headlines for the [`piClim-control` simulation](./piclim-control.md).

### Notes

See notes for the [piClim-control simulation](./piclim-control.md).

### Versions to use

For the forcing listed below, the forcing version relevant for this simulation is the same as for the
[historical simulation](./historical.md):

- nitrous oxide concentrations or emissions (as appropriate for the model)

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

EXPERIMENT_NAME="piClim-N2O"

esgpull add --track --tag ${EXPERIMENT_NAME} source_id:CEDS-CMIP-2025-04-18,CEDS-CMIP-2025-04-18-supplemental,DRES-CMIP-BB4CMIP7-2-0,UofMD-landState-3-1-1,UOEXETER-CMIP-2-2-1,FZJ-CMIP-ozone-1-2,FZJ-CMIP-nitrogen-1-2,SOLARIS-HEPPA-CMIP-4-6,PIK-CMIP-1-0-1,CR-CMIP-1-0-0
esgpull update --tag ${EXPERIMENT_NAME} --yes
esgpull download --tag ${EXPERIMENT_NAME}
```
