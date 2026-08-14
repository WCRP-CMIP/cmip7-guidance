---
layout: default
title: CMIP7 Source ID Guidance
---

# CMIP7 Source ID Guidance

The `source_id` uniquely identifies the individual CMIP7 models. Please take note that a CMIP7 `source_id`:

1. Must be constructed solely using the following characters: a-z, A-Z, 0-9, and the hyphen ("-").

2. Must be limited to 25 characters and generally should be much shorter. Note that the `source_id` appears in filenames, and a shorter `source_id` makes the filenames easier to read. Of the 132 CMIP6 models, the median `source_id` length is 11 characters, with only 10% of the models exceeding 15 characters.

3. Typically includes a model name followed by a version number. The `source_id`'s listed in CMIP5 and CMIP6 serve as examples. Note that for a version like "3.2.4", the decimal points are forbidden by rule 1 above and usually replaced with hyphens: "3-2-4".

4. Does not need to include the name of an institution because the `institution_id` is recorded separately in CMIP7. Note that if more than one institution adopts the same model for its CMIP simulations, the same `source_id` should be assigned to all results, but the institutions must coordinate so that when the same experiment is run by two institutions they take care to assign different `variant_labels` to the files they produce.

5. Must be changed when a model is run at a different horizontal or vertical resolution; models run at two different resolutions must be assigned different `source_id`'s.

6. Should not differ when multiple variants of a model perform experiments for exploring model sensitivity to parameter (or parameterization) changes (as in perturbed physics ensembles); in this case the `physics_index`, which is part of the `variant_label`, is used to distinguish the different model versions.

7. Should remain consistent (unchanged) for experiment results considered to have come from the same model, even if some model components are prescribed rather than fully coupled in a particular experiment. If, for example, the oceanic and sea-ice components in an ESM or AOGCM are replaced by prescribed conditions, as in AMIP experiments, the `source_id` should not change. By using the same `source_id` across both coupled and uncoupled experiments, users will be able to know definitively whether the differences between two simulations are due to the different experimental conditions (achieved by prescribing one or more components) or due to differences in model physics. When, on the other hand, results from different experiments should be considered as coming from different models (whether because of structural differences, different coupling strategies, or some other reason), assign different `source_id`'s.

---

## View Examples of Registered Source IDs

Once you have registered your model in the Essential Model Documentation (EMD) and your Step 4 (Model) registration is merged, you can view your assigned `source_id` and examples from other registered models at:

**[EMD Model Documentation](https://wcrp-cmip.github.io/Essential-Model-Documentation/docs/Model/)**

This page shows all registered models and their assigned source_ids, providing practical examples of how source_ids are constructed and used across CMIP7.
