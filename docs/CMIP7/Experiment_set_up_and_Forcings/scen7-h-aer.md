---
layout: default
title: "Experiment Setup and Forcings Guidance: scen7-h-Aer"
---

# Experiment Setup and Forcings Guidance: scen7-h-Aer

Used to diagnose climate responses to the regionally heterogeneous evolution of anthropogenic aerosol emissions.
Anthropogenic aerosols and aerosol precursor emissions (BC, OC, NH3, SO2) are held constant at present-day (2021)
levels.
All other forcings evolve as in `scen7-h`.
Intended for models without interactive chemistry.
Models with interactive chemistry should run `scen7-h-AQ` instead.

Responsible activity: [AerChemMIP](./index.md#aerchemmip). Tier: 1

These pages are intended to help with implementation of these experiments.
If you notice something that is unclear, please
[raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).
For the full background of the experiments, please see the following URLs:

- [https://doi.org/10.5194/gmd-10-585-2017](https://doi.org/10.5194/gmd-10-585-2017)

## Related experiments

- [scen7-h-AQ](./scen7-h-aq.md) is the corresponding interactive-chemistry experiment for models that include
  interactive chemistry.

## Experiment set up

The `scen7-h-Aer` simulation is a variant of the `scen7-h` simulation.

The aerosol and tropospheric non-methane ozone precursor emissions should be held fixed at 2021 values from the
historical simulation.

All other forcings should evolve as in `scen7-h`.

`scen7-h-Aer` is for models that do not include interactive chemistry.

### Timing, length and ensemble size

The simulation output should start on 2022-01-01 and end on 2100-12-31.

Simulations should be 79 years in length.

Only one ensemble member is required.

### Parent experiment

`scen7-h-Aer` branches from the [historical](./historical.md) simulation (part of [CMIP](./index.md#cmip)).

Branch from `historical` at 2022-01-01.

The parent experiment comes from [CMIP7](https://wcrp-cmip.org/CMIP7).

## Forcings

### General headlines

The `scen7-h-Aer` experiment is a time-varying forcings experiment, combining aerosol and tropospheric non-methane ozone
precursor emissions from the 2021 values in the [historical simulation](./historical.md) with all other forcings from
the `scen7-h` simulation.

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

For aerosol and tropospheric non-methane ozone precursor emissions, the relevant forcing is the same as for the 2021
values in the [historical simulation](./historical.md).

For all other forcings, the forcing versions relevant for this simulation are the same as for the `scen7-h` simulation.

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

EXPERIMENT_NAME="scen7-h-Aer"

## You may need to run the below if you haven't already done it once with esgpull
# esgpull self install
## You may also need to run this step to get the data to download
# esgpull config api.index_node esgf-node.ornl.gov/esgf-1-5-bridge
esgpull add --track --tag ${EXPERIMENT_NAME} source_id:CEDS-CMIP-2025-04-18,CEDS-CMIP-2025-04-18-supplemental,IIASA-IAMC-h-1-0-0,IIASA-IAMC-1-0-0,UofMD-landState-h-3-1-1,CR-h-1-0-0,UOEXETER-ScenarioMIP-2-2-2,FZJ-CMIP-ozone-vl-1-0,FZJ-CMIP-nitrogen-vl-1-0,SOLARIS-HEPPA-ScenarioMIP-4-6,PIK-h-1-0-0
esgpull update --tag ${EXPERIMENT_NAME} --yes
esgpull download --tag ${EXPERIMENT_NAME}
```
