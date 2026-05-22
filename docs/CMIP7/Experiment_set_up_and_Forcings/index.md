---
layout: default
title: "Overview"
---

# CMIP7 Experiment Setup and Forcings Guidance

!!! tip "Documentation under development"

    The contents of these pages are currently in development.
    Their format and content will evolve as feedback is received on the drafts.
    We will remove this tip once the guidance is stable.
    If you have any feedback, please feel free to raise an issue at
    https://github.com/WCRP-CMIP/cmip7-guidance/issues/new and tag @znichollscr.

These pages provide guidance on the experimental setup and forcings to be used in CMIP7.
They are updated regularly, hence should be considered the current source of guidance.
The papers which describe the experiments in the scientific literature are the original source and key reference, but
they may still contain errors which cannot be fixed after publication so should not be relied upon in isolation.
The papers also provide further information about each simulation than what is provided here, such as the motivation,
history and results from previous CMIP phases.

These pages specify the intended way to run each simulation.
However, we understand that modelling groups sometimes need to make changes for a variety of reasons.
We are currently discussing a mechanism for modeling centers to document these alterations in a central, publicly
accessible location (for example,
[discussion of how to choose values for the forcing 'f' identifier is ongoing](https://github.com/PCMDI/input4MIPs_CVs/issues/415)).
When these discussions are finalised, these guidance pages will be updated.
<!-- TODO: do we have a section to cross-link to? -->

## DECK experiments

### CMIP

CMIP core common experiments i.e. the DECK (Diagnostic, Evaluation and Characterization of Klima).

These pages are intended to help with implementation of these experiments.
If you notice something that is unclear, please
[raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).
For the full background of the experiments, please see the following URLs:

- [https://doi.org/10.5194/gmd-18-6671-2025](https://doi.org/10.5194/gmd-18-6671-2025)

The following experiments are included in `CMIP`:

1. [1pctCO2](./1pctco2.md)
1. [abrupt-4xCO2](./abrupt-4xco2.md)
1. [amip](./amip.md)
1. [historical](./historical.md)
1. [esm-hist](./esm-hist.md)
1. [piClim-4xCO2](./piclim-4xco2.md)
1. [piClim-anthro](./piclim-anthro.md)
1. [piClim-control](./piclim-control.md)
1. [piControl](./picontrol.md)
1. [esm-piControl](./esm-picontrol.md)
1. [piControl-spinup](./picontrol-spinup.md)
1. [esm-piControl-spinup](./esm-picontrol-spinup.md)

## Assessment Fast Track (AFT) experiments

### AerChemMIP

Aerosols and chemistry model intercomparison project: exploration of aerosol chemistry.

These pages are intended to help with implementation of these experiments.
If you notice something that is unclear, please
[raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).
For the full background of the experiments, please see the following URLs:

- [https://doi.org/10.5194/gmd-10-585-2017](https://doi.org/10.5194/gmd-10-585-2017)

The following experiments are included in `AerChemMIP`:

1. [hist-piAer](./hist-piaer.md)
1. [hist-piAQ](./hist-piaq.md)
1. [piClim-CH4](./piclim-ch4.md)
1. [piClim-N2O](./piclim-n2o.md)
1. [piClim-NOx](./piclim-nox.md)
1. [piClim-ODS](./piclim-ods.md)
1. [piClim-SO2](./piclim-so2.md)
1. [scen7-h-Aer](./scen7-h-aer.md)
1. [esm-scen7-h-Aer](./esm-scen7-h-aer.md)
1. [scen7-h-AQ](./scen7-h-aq.md)
1. [esm-scen7-h-AQ](./esm-scen7-h-aq.md)
1. [scen7-vl-Aer](./scen7-vl-aer.md)
1. [esm-scen7-vl-Aer](./esm-scen7-vl-aer.md)
1. [scen7-vl-AQ](./scen7-vl-aq.md)
1. [esm-scen7-vl-AQ](./esm-scen7-vl-aq.md)

### CFMIP

Cloud feedback model intercomparison project.
Focussed primarily on cloud feedbacks with a secondary focus on understanding of response to forcing, model biases,
circulation, regional-scale precipitation, and non-linear changes.

These pages are intended to help with implementation of these experiments.
If you notice something that is unclear, please
[raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).
For the full background of the experiments, please see the following URLs:

- [https://doi.org/10.5194/gmd-10-359-2017](https://doi.org/10.5194/gmd-10-359-2017)

The following experiments are included in `CFMIP`:

1. [abrupt-0p5xCO2](./abrupt-0p5xco2.md)
1. [abrupt-2xCO2](./abrupt-2xco2.md)
1. [amip-p4K](./amip-p4k.md)
1. [amip-piForcing](./amip-piforcing.md)

### C4MIP

Coupled climate carbon cycle model intercomparison project: exploration of the response of the coupled carbon-climate
system.

These pages are intended to help with implementation of these experiments.
If you notice something that is unclear, please
[raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).
For the full background of the experiments, please see the following URLs:

- [https://doi.org/10.5194/gmd-17-8141-2024](https://doi.org/10.5194/gmd-17-8141-2024)
- [https://doi.org/10.5194/gmd-18-5699-2025](https://doi.org/10.5194/gmd-18-5699-2025)
- [https://doi.org/10.5194/gmd-9-2853-2016](https://doi.org/10.5194/gmd-9-2853-2016)

The following experiments are included in `C4MIP`:

1. [1pctCO2-bgc](./1pctco2-bgc.md)
1. [1pctCO2-rad](./1pctco2-rad.md)

### ScenarioMIP

Future scenario experiments.
Exploration of the future climate under a (selected) range of possible boundary conditions.

The priority of ScenarioMIP experiments (expressed as Tier 1 and 2) is summarized in the flowchart below, which is based
on Table 1 of [Van Vuuren et al. 2026](https://gmd.copernicus.org/articles/19/2627/2026/).
Emissions-driven experiments, indicated in yellow, have names beginning with `esm-`.

- If your model is capable of running in emissions-driven mode, ScenarioMIP request emissions-driven scenarios, and
  additionally the concentration-driven experiment `scen7-m`, at Tier-1 (highest priority).
- If your model will run only the concentration-driven experiments, ScenarioMIP request all concentration-driven
  scenarios at Tier-1.

If you are running in emissions-driven mode, you are welcome to run other scenarios in concentration-driven mode, but
they have not been assigned a specific tier (i.e., are lowest priority).

<figure>
  <img src="figures/ScenarioMIP-tiers_v3.svg">
  <figcaption>
    ScenarioMIP experiments, with emissions-driven experiments indicated in yellow.
  </figcaption>
</figure>

These pages are intended to help with implementation of these experiments.
If you notice something that is unclear, please
[raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).
For the full background of the experiments, please see the following URLs:

- [https://doi.org/10.5194/egusphere-2024-3765](https://doi.org/10.5194/egusphere-2024-3765)

The following experiments are included in `ScenarioMIP`:

1. [scen7-h](./scen7-h.md)
1. [esm-scen7-h](./esm-scen7-h.md)
1. [scen7-h-ext](./scen7-h-ext.md)
1. [esm-scen7-h-ext](./esm-scen7-h-ext.md)
1. [scen7-hl](./scen7-hl.md)
1. [esm-scen7-hl](./esm-scen7-hl.md)
1. [scen7-hl-ext](./scen7-hl-ext.md)
1. [esm-scen7-hl-ext](./esm-scen7-hl-ext.md)
1. [scen7-l](./scen7-l.md)
1. [esm-scen7-l](./esm-scen7-l.md)
1. [scen7-l-ext](./scen7-l-ext.md)
1. [esm-scen7-l-ext](./esm-scen7-l-ext.md)
1. [scen7-ln](./scen7-ln.md)
1. [esm-scen7-ln](./esm-scen7-ln.md)
1. [scen7-ln-ext](./scen7-ln-ext.md)
1. [esm-scen7-ln-ext](./esm-scen7-ln-ext.md)
1. [scen7-m](./scen7-m.md)
1. [esm-scen7-m](./esm-scen7-m.md)
1. [scen7-m-ext](./scen7-m-ext.md)
1. [esm-scen7-m-ext](./esm-scen7-m-ext.md)
1. [scen7-ml](./scen7-ml.md)
1. [esm-scen7-ml](./esm-scen7-ml.md)
1. [scen7-ml-ext](./scen7-ml-ext.md)
1. [esm-scen7-ml-ext](./esm-scen7-ml-ext.md)
1. [scen7-vl](./scen7-vl.md)
1. [esm-scen7-vl](./esm-scen7-vl.md)
1. [scen7-vl-ext](./scen7-vl-ext.md)
1. [esm-scen7-vl-ext](./esm-scen7-vl-ext.md)

### DAMIP

Detection and attribution model intercomparison project: exploration of the role of individual forcings (both
anthropogenic and natural) in past and future climate change.

These pages are intended to help with implementation of these experiments.
If you notice something that is unclear, please
[raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).
For the full background of the experiments, please see the following URLs:

- [https://doi.org/10.5194/gmd-18-4399-2025](https://doi.org/10.5194/gmd-18-4399-2025)

The following experiments are included in `DAMIP`:

1. [hist-aer](./hist-aer.md)
1. [hist-GHG](./hist-ghg.md)
1. [hist-nat](./hist-nat.md)

### GeoMIP

Geoengineering model intercomparison project: exploration of the climate response to solar radiation manipulation.

These pages are intended to help with implementation of these experiments.
If you notice something that is unclear, please
[raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).
For the full background of the experiments, please see the following URLs:

- [https://doi.org/10.1175/BAMS-D-25-0191.1](https://doi.org/10.1175/BAMS-D-25-0191.1)
- [https://doi.org/10.5194/gmd-17-2583-2024](https://doi.org/10.5194/gmd-17-2583-2024)

The following experiments are included in `GeoMIP`:

1. [G7-1p5K-SAI](./g7-1p5k-sai.md)

### PMIP

Palaeoclimate modelling intercomparison project: assessment of paleoclimate i.e. climate thousands of years or more in
the past.

These pages are intended to help with implementation of these experiments.
If you notice something that is unclear, please
[raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).
For the full background of the experiments, please see the following URLs:

- [https://doi.org/10.5194/cp-19-883-2023](https://doi.org/10.5194/cp-19-883-2023)
- [https://doi.org/10.5194/gmd-10-3979-2017](https://doi.org/10.5194/gmd-10-3979-2017)

The following experiments are included in `PMIP`:

1. [abrupt-127k](./abrupt-127k.md)

### RFMIP

Radiative Forcing Model Intercomparison Project: characterisation of radiative forcing within models.

These pages are intended to help with implementation of these experiments.
If you notice something that is unclear, please
[raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).
For the full background of the experiments, please see the following URLs:

- [https://doi.org/10.5194/acp-20-9591-2020](https://doi.org/10.5194/acp-20-9591-2020)
- [https://doi.org/10.5194/gmd-9-3447-2016](https://doi.org/10.5194/gmd-9-3447-2016)

The following experiments are included in `RFMIP`:

1. [piClim-aer](./piclim-aer.md)
1. [piClim-histaer](./piclim-histaer.md)
1. [piClim-histall](./piclim-histall.md)
