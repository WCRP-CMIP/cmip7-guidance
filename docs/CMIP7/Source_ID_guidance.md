---
layout: default
title: CMIP7 Source ID Guidance
---

# CMIP7 Source ID Guidance

The `source_id` uniquely identifies the individual CMIP7 models.  Please take note that a CMIP7 source_id:

  1. Must be constructed solely using the following characters: a-z, A-Z, 0-9, and the hyphen (“-“).
  1. Must be limited to 25 characters and generally should be much shorter. Note that the `source_id` appears in filenames, and shorter source labels make the filenames easier to read.Of the 132 CMIP6 models, the median source_id  length is 11 characters, with only 10% of the models exceeding 15 characters.
  1. Typically includes a model name followed by a version number. The source_id's listed in CMIP5 and CMIP6 serve as examples.  Note that for a version like "3.2.4", the decimal points are forbidden by rule 1 above and usually replaced with hyphens: "3-2-4".  
  1. Should not include the name of an institution, as that information is recorded separately in CMIP7.  Note however that if more than one institution adopts the same model for its CMIP simulations, the institutions must coordinate so that when the same experiment is run by two institutions they take care to assign different variant_labels to the files they produce.
  1. Should not change when different model components become decoupled. For example, the same name would be shared by a coupled model configured for the “historical” and “amip” experiments (even though in the AMIP run, the ocean is inactive).
  1. Must be changed when a model is run at a different horizontal or vertical resolution; models run at two different resolutions must be assigned different names.
  1. Should not differ when multiple model versions are very similar (as in perturbed physics ensembles); in this case the “physics_index”, which is part of the “variant_label”, is used to distinguish the different model versions.

