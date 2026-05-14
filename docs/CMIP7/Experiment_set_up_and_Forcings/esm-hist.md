---
layout: default
title: "Experiment Setup and Forcings Guidance: esm-hist"
---

# Experiment Setup and Forcings Guidance: esm-hist

Simulation of the climate of the recent past (typically meaning 1850 to present-day) with prescribed carbon dioxide
emissions (for prescribed carbon dioxide concentrations, see `historical`).

Responsible activity: [CMIP](./index.md#cmip). Tier: 1

These pages are intended to help with implementation of these experiments.
If you notice something that is unclear, please
[raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).
For the full background of the experiments, please see the following URLs:

- [https://doi.org/10.5194/gmd-18-6671-2025](https://doi.org/10.5194/gmd-18-6671-2025)

## Related experiments

- [historical](./historical.md) is the concentration-driven counterpart to this emissions-driven experiment.

## Experiment set up

The emissions-driven historical simulation uses a specific set of forcings (see [forcings](#forcings)).

These should be applied as transient (i.e. time-changing) forcings over the length of the simulation.

### Timing, length and ensemble size

The simulation output should start on 1850-01-01 and end on 2021-12-31.

Simulations should be 172 years in length.

Only one ensemble member is required.

### Parent experiment

`esm-hist` branches from the [esm-piControl](./esm-picontrol.md) simulation (part of [CMIP](./index.md#cmip)).

Branch from esm-piControl at a time of your choosing.

The parent experiment comes from [CMIP7](https://wcrp-cmip.org/CMIP7).

## Forcings

### General headlines

The `esm-hist` experiment is a time-varying forcings experiment.
Please note that the ozone forcing should come from files with the source ID `FZJ-CMIP-ozone-2-0`.
`FZJ-CMIP-ozone-2-0` was released quite late, so if you have simulations based on `FZJ-CMIP-ozone-1-2`, these would also
be of interest to the Forcings Task Team so please publish them
([discussion of how to set the value for the forcing 'f' identifier in such files is ongoing](https://github.com/PCMDI/input4MIPs_CVs/issues/415)).

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

Where there is more than one source ID listed, this either indicates that you may need data from multiple source IDs or
that multiple options are acceptable (because, e.g., fixes were made but re-running is not required).
Please see the guidance pages linked above for details.

```json
{
    "anthropogenic-emissions": ["CEDS-CMIP-2025-04-18", "CEDS-CMIP-2025-04-18-supplemental"],
    "biomass-burning-emissions": ["DRES-CMIP-BB4CMIP7-2-0"],
    "land-use": ["UofMD-landState-3-1-1"],
    "greenhouse-gas-concentrations": ["CR-CMIP-1-0-0"],
    "stratospheric-aerosol-forcing": ["UOEXETER-CMIP-2-2-1"],
    "ozone": ["FZJ-CMIP-ozone-1-2", "FZJ-CMIP-ozone-2-0"],
    "nitrogen-deposition": ["FZJ-CMIP-nitrogen-1-2", "FZJ-CMIP-nitrogen-2-0"],
    "solar": ["SOLARIS-HEPPA-CMIP-4-6"],
    "aerosol-optical-properties": null,
    "population-density": ["PIK-CMIP-1-0-1"]
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

EXPERIMENT_NAME="esm-hist"

esgpull add --track --tag ${EXPERIMENT_NAME} source_id:CEDS-CMIP-2025-04-18,CEDS-CMIP-2025-04-18-supplemental,DRES-CMIP-BB4CMIP7-2-0,UofMD-landState-3-1-1,CR-CMIP-1-0-0,UOEXETER-CMIP-2-2-1,FZJ-CMIP-ozone-2-0,FZJ-CMIP-nitrogen-1-2,SOLARIS-HEPPA-CMIP-4-6,PIK-CMIP-1-0-1
esgpull update --tag ${EXPERIMENT_NAME} --yes
esgpull download --tag ${EXPERIMENT_NAME}
```
