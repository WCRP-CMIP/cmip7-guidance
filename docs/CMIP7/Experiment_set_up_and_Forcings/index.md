---
layout: default
title: Overview
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
The papers which describe the experiments in the scientific literature are the original source and key reference,
but they may still contain errors which cannot be fixed after publication so should not be relied upon in isolation.
[The papers](https://gmd.copernicus.org/articles/special_issue1315.html) also provide further information about each simulation than what is provided here,
such as the motivation, history and results from previous CMIP phases.

These pages specify the intended way to run each simulation.
However, we understand that modelling groups sometimes need to make changes for a variety of reasons.
We are currently discussing a mechanism for modeling centers to document these alterations in a central, publicly accessible location
(for example, [discussion of how to choose values for the forcing 'f' identifier is ongoing](https://github.com/PCMDI/input4MIPs_CVs/issues/415)).
When these discussions are finalised, these guidance pages will be updated.
<!-- TODO: do we have a section to cross-link to? -->

<!--- TODO: alter this page so that the MIP headings are auto-generated and inject the MIP descriptions from esgvoc. -->
## DECK experiments

### CMIP

<!-- TODO: get this from esgvoc automatically -->
CMIP core common experiments i.e. the DECK (Diagnostic, Evaluation and Characterization of Klima).

1. [piControl](./picontrol.md)
1. [esm-piControl](./esm-picontrol.md)
1. [historical](./historical.md)
1. [esm-hist](./esm-hist.md)
1. [1pctCO2](./1pctco2.md)
1. [abrupt-4xCO2](./abrupt-4xco2.md)

## Assessment Fast Track (AFT) experiments

### CFMIP

<!-- TODO: get this from esgvoc automatically -->
Cloud feedback model intercomparison project.
Focussed primarily on cloud feedbacks with a secondary focus on understanding of response to
forcing, model biases, circulation, regional-scale precipitation, and non-linear changes.

1. [abrupt-2xCO2](./abrupt-2xco2.md)
1. [abrupt-0p5xCO2](./abrupt-0p5xco2.md)

### C4MIP

<!-- TODO: get this from esgvoc automatically -->
Coupled climate carbon cycle model intercomparison project: exploration of the response of the coupled carbon-climate system.

1. [1pctco2-bgc](./1pctco2-bgc.md)
1. [1pctco2-rad](./1pctco2-rad.md)

### ScenarioMIP

<!-- TODO: get this from esgvoc automatically -->
Future scenario experiments.
Exploration of the future climate under a (selected) range of possible boundary conditions.

1. [scen7-vl](./scen7-vl.md)
