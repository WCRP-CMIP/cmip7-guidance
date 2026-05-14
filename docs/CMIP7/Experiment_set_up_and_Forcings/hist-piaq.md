---
layout: default
title: "Experiment Setup and Forcings Guidance: hist-piAQ"
---

# Experiment Setup and Forcings Guidance: hist-piAQ

Note, the information on this page is likely not correct.
We are awaiting documentation of the forcings for the AerChemMIP CMIP7 AFT experiments.
Some details may be available in [Fiedler et al](https://doi.org/10.5194/egusphere-2025-5669) (preprint) and information
on AerChemMIP can be found via the [CMIP IPO website](https://wcrp-cmip.org/mips/aerchemmip2/).
Please see [issue #124](https://github.com/WCRP-CMIP/cmip7-guidance/issues/124) to track progress resolving this.

Used to diagnose climate and air quality responses to the regionally heterogeneous evolution of anthropogenic non-CH4
SLCF emissions.
Anthropogenic non-CH4 tropospheric O3 precursor emissions (NMVOCs, CO, NOx), aerosols, and aerosol precursor emissions
(BC, OC, NH3, SO2) evolve as in `piControl`.
All other forcings evolve as in `historical`.
Requires interactive chemistry.
Models without interactive chemistry should run `hist-piAer` instead.
(Renamed from `hist-piNTCF` in AerChemMIP phase 1.)

Responsible activity: [AerChemMIP](./index.md#aerchemmip). Tier: 1

These pages are intended to help with implementation of these experiments.
If you notice something that is unclear, please
[raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).
For the full background of the experiments, please see the following URLs:

- [https://doi.org/10.5194/gmd-10-585-2017](https://doi.org/10.5194/gmd-10-585-2017)

## Related experiments

- [hist-piAer](./hist-piaer.md) is the corresponding non-interactive-chemistry experiment for models that do not include
  interactive chemistry.

## Experiment set up

<!-- TODO: check this with someone who knows what they're reading -->

The `hist-piAQ` simulation is a simple variant of the [historical simulation](./historical.md) where aerosol and
tropospheric non-methane ozone precursor emissions are kept at pre-industrial levels. `hist-piAQ` is for models that
include interactive chemistry.

<!-- TODO: consider whether we can generate these sentences automatically based on esgvoc -->

### Timing, length and ensemble size

The simulation output should start on 1850-01-01 and end on 2021-12-31.

Simulations should be 172 years in length.

Only one ensemble member is required.

### Parent experiment

`hist-piAQ` branches from the [piControl](./picontrol.md) simulation (part of [CMIP](./index.md#cmip)).

Branch from `piControl` at a time of your choosing.

The parent experiment comes from [CMIP7](https://wcrp-cmip.org/CMIP7).

This branch time should match the branch time used for initialising the [historical simulation](./historical.md).

## Forcings

### General headlines

The `hist-piAQ` experiment is a time-varying forcings experiment, except for aerosol and tropospheric non-methane ozone
precursor emissions which should be fixed.

### Notes

See notes for the [piControl simulation](./picontrol.md) and [historical simulation](./historical.md).

### Versions to use

For aerosol and tropospheric non-methane ozone precursor emissions the relevant forcing is the same as for the
[piControl simulation](./picontrol.md).

For all other forcings, the forcing versions relevant for this simulation are the same as for the
[historical simulation](./historical.md).

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

EXPERIMENT_NAME="hist-piAQ"

esgpull add --track --tag ${EXPERIMENT_NAME} source_id:CEDS-CMIP-2025-04-18,CEDS-CMIP-2025-04-18-supplemental,DRES-CMIP-BB4CMIP7-2-0,UofMD-landState-3-1-1,CR-CMIP-1-0-0,UOEXETER-CMIP-2-2-1,FZJ-CMIP-ozone-2-0,FZJ-CMIP-nitrogen-1-2,SOLARIS-HEPPA-CMIP-4-6,PIK-CMIP-1-0-1
esgpull update --tag ${EXPERIMENT_NAME} --yes
esgpull download --tag ${EXPERIMENT_NAME}
```
