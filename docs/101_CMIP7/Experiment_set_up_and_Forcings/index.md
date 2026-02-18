---
layout: default
title: CMIP7 Experiment Setup and Forcings Guidance
---

# CMIP7 Experiment Setup and Forcings Guidance

!!! tip "Documentation under development"

    The contents of these pages are currently in development.
    Their format and content will evolve as feedback is received on the drafts.
    We will remove this tip once the guidance is stable.
    If you have any feedback, please feel free to raise an issue at
    https://github.com/WCRP-CMIP/cmip7-guidance/issues/new and tag @znichollscr.

These pages provide guidance on the experimental setup and forcings to be used in CMIP7.
They are updated regularly, hence should be considered the source of truth.
The papers which describe the experiments in the scientific literature are the original source of truth,
but they may still contain errors which cannot be fixed after publication so should not be relied upon in isolation.
The papers are, of course, the best source of further information about each simulation
such as the motivation, history and results from previous CMIP phases.

These pages specify the intended way to run each simulation.
However, we understand that modelling groups sometimes need to make changes for a variety of reasons.
This is fine, but please make sure that you document these alterations clearly.
How this should be documented is still being discussed
(for example, [discussion of how to choose values for the forcing 'f' identifier is ongoing](https://github.com/PCMDI/input4MIPs_CVs/issues/415)).
When these discussions are finalised, these guidance pages will be updated.
<!-- TODO: do we have a section to cross-link to? -->

<!--- TODO: alter this page so that the MIP headings are auto-generated and inject the MIP descriptions from esgvoc. -->
<!--- TODO: check if internal cross-links work once pages are built -->
## DECK experiments

### CMIP

<!-- TODO: CMIP description here based on esgvoc -->

#. [piControl](./picontrol.md)
#. [esm-piControl](./esm-picontrol.md)
#. [historical](./historical.md)
#. [esm-hist](./esm-hist.md)
#. [1pctCO2](./1pctco2.md)
#. [abrupt-4xCO2](./abrupt-4xco2.md)

## Assessment Fast Track (AFT) experiments

### CFMIP

<!-- TODO: CFMIP description here based on esgvoc -->

#. [abrupt-2xCO2](./abrupt-2xco2.md)
#. [abrupt-0p5xCO2](./abrupt-0p5xco2.md)

### C4MIP

<!-- TODO: C4MIP description here based on esgvoc -->

#. [1pctco2-bgc](./1pctco2-bgc.md)
#. [1pctco2-rad](./1pctco2-rad.md)

### ScenarioMIP

<!-- TODO: ScenarioMIP description here based on esgvoc -->

#. [scen7-vl](./scen7-vl.md)
