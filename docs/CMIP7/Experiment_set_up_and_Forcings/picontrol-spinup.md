---
layout: default
title: "Experiment Setup and Forcings Guidance: piControl-spinup"
---

# Experiment Setup and Forcings Guidance: piControl-spinup

Spin-up simulation.
Used to get the model into a state of approximate radiative equilibrium before starting the `piControl` simulation.

Responsible activity: [CMIP](./index.md#cmip). Tier: 3

These pages are intended to help with implementation of these experiments.
If you notice something that is unclear, please
[raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).
For the full background of the experiments, please see the following URLs:

- [https://doi.org/10.5194/gmd-18-6671-2025](https://doi.org/10.5194/gmd-18-6671-2025)

## Related experiments

- [esm-piControl-spinup](./esm-picontrol-spinup.md) is the emissions-driven counterpart to this concentration-driven
  experiment.

## Experiment set up

The pre-industrial control spin-up simulation uses piControl forcings (see [forcings](#forcings)).

These should be applied on repeat for the entirety of the simulation.

You are free to start the time axis of your outputs at whatever year you like (e.g. starting at year 1, or 1850, or year
500).

### Timing, length and ensemble size

The CMIP7 CVs do not define fixed start or end dates for this simulation.

The CMIP7 CVs do not define a minimum simulation length for this experiment.

Only one ensemble member is required.

### Parent experiment

`piControl-spinup` has no parent experiment in the CMIP7 CVs.

## Forcings

### General headlines

The `piControl-spinup` experiment is a fixed forcings experiment.

However, it can require some care to use the correct forcings for `piControl`.
This is particularly true for stratospheric aerosol forcing, ozone and solar as the `piControl` values for these
forcings aren't simply a repeat of 1850 values.

Please note that the ozone forcing should come from files with the source ID `FZJ-CMIP-ozone-1-2`, no `piControl` data
is included in `FZJ-CMIP-ozone-2-0` (which only updates `historical` values).

Please also note that the nitrogen deposition forcing should come from files with the source ID `FZJ-CMIP-nitrogen-2-0`.
`FZJ-CMIP-nitrogen-2-0` was released quite late and the impact of the change is likely to be small, so if you have
simulations based on `FZJ-CMIP-nitrogen-1-2`, you do not need to re-run them.

Please read the guidance pages linked under [notes](#notes) to ensure that you use the correct forcing values.

### Notes

The following pages give further information on each forcing:

- anthropogenic emissions:
  [input4mips-cvs.readthedocs.io/dataset-overviews/anthropogenic-slcf-co2-emissions](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/anthropogenic-slcf-co2-emissions/)
- biomass burning emissions:
  [input4mips-cvs.readthedocs.io/dataset-overviews/open-biomass-burning-emissions](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/open-biomass-burning-emissions/)
- land use:
  [input4mips-cvs.readthedocs.io/dataset-overviews/land-use](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/land-use/)
- greenhouse gas concentrations:
  [input4mips-cvs.readthedocs.io/dataset-overviews/greenhouse-gas-concentrations](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/greenhouse-gas-concentrations/)
- stratospheric aerosol forcing:
  [input4mips-cvs.readthedocs.io/dataset-overviews/stratospheric-volcanic-so2-emissions-aod](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/stratospheric-volcanic-so2-emissions-aod/)
- ozone:
  [input4mips-cvs.readthedocs.io/dataset-overviews/ozone](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/ozone/)
- nitrogen deposition:
  [input4mips-cvs.readthedocs.io/dataset-overviews/nitrogen-deposition](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/nitrogen-deposition/)
- solar:
  [input4mips-cvs.readthedocs.io/dataset-overviews/solar](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/solar/)
- aerosol optical properties:
  [input4mips-cvs.readthedocs.io/dataset-overviews/aerosol-optical-properties-macv2-sp](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/aerosol-optical-properties-macv2-sp/)
- population density:
  [input4mips-cvs.readthedocs.io/dataset-overviews/population](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/population/)

### Versions to use

The forcings relevant for this simulation are listed below.
For each forcing, we provide the version(s), in the form of "source ID(s)", which should be used when running this
simulation.
The recommended version(s) are the version(s) we recommend using.
Any acceptable versions can be used (you are not obliged to re-run simulations that used them).
Please see the guidance pages linked above for details and note that the data-retrieval script below only includes
recommended versions.

```json
{
    "anthropogenic-emissions": {
        "recommended": [
            "CEDS-CMIP-2025-04-18",
            "CEDS-CMIP-2025-04-18-supplemental"
        ]
    },
    "biomass-burning-emissions": {
        "recommended": "DRES-CMIP-BB4CMIP7-2-0"
    },
    "land-use": {
        "recommended": "UofMD-landState-3-1-2",
        "acceptable": [
            "UofMD-landState-3-1-1"
        ]
    },
    "greenhouse-gas-concentrations": {
        "recommended": "CR-CMIP-1-0-0"
    },
    "stratospheric-aerosol-forcing": {
        "recommended": "UOEXETER-CMIP-2-2-1"
    },
    "ozone": {
        "recommended": "FZJ-CMIP-ozone-1-2"
    },
    "nitrogen-deposition": {
        "recommended": "FZJ-CMIP-nitrogen-2-0",
        "acceptable": [
            "FZJ-CMIP-nitrogen-1-2"
        ]
    },
    "solar": {
        "recommended": "SOLARIS-HEPPA-CMIP-4-6"
    },
    "aerosol-optical-properties": null,
    "population-density": {
        "recommended": "PIK-CMIP-1-0-1"
    }
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

EXPERIMENT_NAME="piControl-spinup"

esgpull add --track --tag ${EXPERIMENT_NAME} source_id:CEDS-CMIP-2025-04-18,CEDS-CMIP-2025-04-18-supplemental,DRES-CMIP-BB4CMIP7-2-0,UofMD-landState-3-1-2,CR-CMIP-1-0-0,UOEXETER-CMIP-2-2-1,FZJ-CMIP-ozone-1-2,FZJ-CMIP-nitrogen-2-0,SOLARIS-HEPPA-CMIP-4-6,PIK-CMIP-1-0-1
esgpull update --tag ${EXPERIMENT_NAME} --yes
esgpull download --tag ${EXPERIMENT_NAME}
```
