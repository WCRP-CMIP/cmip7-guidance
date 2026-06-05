---
# CMIP7 Global Attributes, Filenames, Directory Path, and CVs

---

**Version:** 1.1  
**Published:** 18 May 2026
**DOI:** [10.5281/zenodo.19366138](https://doi.org/10.5281/zenodo.19366138)  
**Authors:** Karl E. Taylor, Laurent Troussellier, Sasha Ames, David Hassell, Maria Molina, Zebedee Nicholls, Martin Schupfner, James Anstey, Daniel Ellis, Elisabeth Dingley, Paul J. Durack, Guillaume Levavasseur, Matthew Mizielinski, and Marie-Pierre Moine  



## 1. Introduction

This guidance document provides a summary of the CMIP7 Global attributes and of the Data Reference Syntax (DRS) which uniquely identifies datasets and is used to construct filenames and directory paths. Most of what is documented here can also be found in a [citable reference document](https://zenodo.org/records/19366138) archived by Zenodo, but some information provided here is new.

Each CMIP7 model output file includes standardized metadata, often included as file global attributes, which name or describe the characteristics of each dataset, including, for example:

- The source (model) and institution responsible for producing the data 
- The experiment and the activity responsible for the data 
- The terms used to construct the Data Reference Syntax (DRS)
- Various dataset characteristics (e.g., reporting frequency, "parent experiment", region spanned)

Some of the global attributes are mandatory (e.g., the attributes comprising the DRS), while others are conditionally required or optional. Most attributes must be assigned a value found in a particular list of terms referred to as its controlled vocabulary (CV). Most CVs are revised versions of those relied on in previous CMIP phases. Controlled vocabularies ensure metadata consistency across datasets, which facilitates interpretation of the data and development of software tools for search and retrieval of data.

The CMIP7 Controlled Vocabularies (CVs) for the attributes described in this document are available in human-readable form in the [CMOR CVs file][cmor-cvs] (or its [split view][cmor-cvs-split]) found in the CMOR github repository as described in [Appendix 3](#appendix-3-cmip7-controlled-vocabularies-cvs-for-global-attributes) below.

---

## 2. Filenames

Each CMIP7 filename is constructed from the metadata recorded in each file (see [Table 1](#table-1-list-of-cmip7-drs-elements) below). The metadata elements, mostly stored as global attribute, are inserted into the following template:

**Filename template:**

```
<variable_id>_<branding_suffix>_<frequency>_<region>_<grid_label>_<source_id>_<experiment_id>_<variant_label>[_<timeRangeDD>].nc
```

**Example:**

```
tas_tavg-h2m-hxy-u_mon_glb_g121_CanESM6-0-MR_historical_r2i1p1f1_190001-190912.nc
```

Each global attribute within the template's angle brackets is replaced with the value assigned to it in the file. A DRS global attribute must be drawn from its CV which includes all terms recognized by CMIP7. Together the DRS attributes uniquely identify the contents of the file and ensure that within the CMIP7 archive all filenames are unique.

Note that the "variant label" must conform to a pattern-constrained CV. Note also that the last element in the filename template (timeRangeDD) is not a global attribute; rather it provides the date/time of the first and last time-sample found in the file as described in [Appendix 1](#appendix-1-time-labels-appearing-in-filenames).

The CMIP6 filenames differed from the CMIP7 construction defined above in several ways, so codes meant to extract the information from them and interpret it will need to be modified. In CMIP7 variables are uniquely identified by attaching to the variable_id a branding_suffix (see [the guidance notes](https://wcrp-cmip.github.io/cmip7-guidance/docs/CMIP7/Branded_Variables/)), whereas in CMIP6 a "table name" was attached. In CMIP7 a region attribute has been included for the first time and the variant_label is interpreted in a different way for decadal prediction forecasts and hindcasts. The CMIP6-defined timeRangeDD has for CMIP7 been slightly simplified as given in [Appendix 1](#appendix-1-time-labels-appearing-in-filenames). The ending suffix `-clim` found in CMIP6 climatological dataset filenames has been eliminated.

Any code built to parse and interpret CMIP6 filenames will break when applied to CMIP7 files. We understand that this may be disruptive, but the information available from the old filenames is equally available from the new ones. The changes made for CMIP7 result in a more robust, versatile, and long-term method for uniquely identifying files, so we are making this breaking change now and appreciate any effort it may take to update scripts to adjust to it.

---

## 3. Directory Structure Template

The CMIP7 data archive organizes files hierarchically, and like the filenames, the directory paths are constructed from the DRS elements recorded in the file (see [Table 1](#table-1-list-of-cmip7-drs-elements) below). The attribute values are inserted into the following template:

**Directory path template:**

```
<drs_specs>/<mip_era>/<activity_id>/<institution_id>/<source_id>/<experiment_id>/<variant_label>/<region>/<frequency>/<variable_id>/<branding_suffix>/<grid_label>/<directoryDateDD>
```

**Example:**

```
MIP-DRS7/CMIP7/CMIP/CCCma/CanESM6-0-MR/historical/r2i1p1f1/glb/mon/tas/tavg-h2m-hxy-u/g121/v20250622
```

Again, there are minor changes from CMIP6 and each DRS global attribute used in constructing the path must be drawn from its CMIP7 CV. Note that the directoryDateDD data descriptor at the end of the directory path indicates the dataset "version" and unlike the other metadata elements, it is not stored as a global attribute. The version roughly indicates the date a dataset was created; the only essential rule constraining this date is that a newer version must invariably be assigned a more recent date than the older version.

---

## 4. Data Reference Syntax (DRS) Elements

The CMIP7 data descriptors used in constructing filenames and directory paths comprise the DRS. Except for two exceptions, this metadata is drawn from controlled vocabularies and stored as global attributes in files. Table 1 summarizes the DRS elements, duplicating a subset of the information found in the [reference document](https://zenodo.org/records/19366138) but adding a column indicating any difference in how the terms were defined in CMIP6.

### Table 1. List of CMIP7 DRS elements

All elements are drawn from CMIP7 controlled vocabularies (CVs) or constructed using simple templates. **All DRS global attributes must appear in every file**; they are a subset of the required attributes. The timeRangeDD and directoryDateDD (indicating "version") are not global attributes but are DRS elements used in constructing filenames or directory paths. **Highlighted in yellow** is the subset of global attributes proposed to serve as search facets (displayed with somewhat different labels) for filtering and retrieving data on the ESGF data servers.

<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr style="background-color: #f3f3f3;">
<th style="border: 1px solid #cccccc; padding: 8px; text-align: left; word-wrap: break-word;">DRS element</th>
<th style="border: 1px solid #cccccc; padding: 8px; text-align: left; word-wrap: break-word;">Description</th>
<th style="border: 1px solid #cccccc; padding: 8px; text-align: left; word-wrap: break-word;">Sample values</th>
<th style="border: 1px solid #cccccc; padding: 8px; text-align: left; word-wrap: break-word;">In filename</th>
<th style="border: 1px solid #cccccc; padding: 8px; text-align: left; word-wrap: break-word;">In directory path</th>
<th style="border: 1px solid #cccccc; padding: 8px; text-align: left; word-wrap: break-word;">Change from CMIP6</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border: 1px solid #cccccc; padding: 8px; background-color: #ffff00; word-wrap: break-word;"><strong>activity_id</strong></td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">name of activity (acronym)</td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">CMIP, PMIP, CFMIP</td>
<td style="border: 1px solid #cccccc; padding: 8px; text-align: center; word-wrap: break-word;">no</td>
<td style="border: 1px solid #cccccc; padding: 8px; text-align: center; word-wrap: break-word;">yes</td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">limited to a single activity; a list of activities is no longer allowed.</td>
</tr>
<tr style="background-color: #f9f9f9;">
<td style="border: 1px solid #cccccc; padding: 8px; background-color: #ffff00; word-wrap: break-word;"><strong>branding_suffix</strong></td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">suffix in the branded variable name</td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">tavg-h2m-hxy-u, tpt-u-hxy-u, tavg-p19-hxy-air (constructed from elements in Table 2)</td>
<td style="border: 1px solid #cccccc; padding: 8px; text-align: center; word-wrap: break-word;">yes</td>
<td style="border: 1px solid #cccccc; padding: 8px; text-align: center; word-wrap: break-word;">yes</td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">new CMIP7 attribute (eliminating "table_id" as an attribute)</td>
</tr>
<tr>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">directoryDateDD</td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">approximate date files were written to the hosting directory, which serves as a dataset version label (recorded as a folder name in the directory path, not as a global attribute)</td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">v20260522, v20260807, consistent with the template "v"&lt;YYYYMMDD&gt;</td>
<td style="border: 1px solid #cccccc; padding: 8px; text-align: center; word-wrap: break-word;">no</td>
<td style="border: 1px solid #cccccc; padding: 8px; text-align: center; word-wrap: break-word;">yes</td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">No change</td>
</tr>
<tr style="background-color: #f9f9f9;">
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">drs_specs</td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">label identifying the data reference syntax used to uniquely identify datasets, name files, and define directory trees</td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">only option: MIP-DRS7</td>
<td style="border: 1px solid #cccccc; padding: 8px; text-align: center; word-wrap: break-word;">no</td>
<td style="border: 1px solid #cccccc; padding: 8px; text-align: center; word-wrap: break-word;">yes</td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">New CMIP7 attribute</td>
</tr>
<tr>
<td style="border: 1px solid #cccccc; padding: 8px; background-color: #ffff00; word-wrap: break-word;"><strong>experiment_id</strong></td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">short label identifying the experiment</td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">historical, piControl, abrupt-4xCO2</td>
<td style="border: 1px solid #cccccc; padding: 8px; text-align: center; word-wrap: break-word;">yes</td>
<td style="border: 1px solid #cccccc; padding: 8px; text-align: center; word-wrap: break-word;">yes</td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">No change</td>
</tr>
<tr style="background-color: #f9f9f9;">
<td style="border: 1px solid #cccccc; padding: 8px; background-color: #ffff00; word-wrap: break-word;"><strong>frequency</strong></td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">time interval between each reported time-slice</td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">mon, day, 3hr</td>
<td style="border: 1px solid #cccccc; padding: 8px; text-align: center; word-wrap: break-word;">yes</td>
<td style="border: 1px solid #cccccc; padding: 8px; text-align: center; word-wrap: break-word;">yes</td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">No change</td>
</tr>
<tr>
<td style="border: 1px solid #cccccc; padding: 8px; background-color: #ffff00; word-wrap: break-word;"><strong>grid_label</strong></td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">unique label identifying the grid on which data is reported.</td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">g104, g132, g382 (assigned when a grid is registered)</td>
<td style="border: 1px solid #cccccc; padding: 8px; text-align: center; word-wrap: break-word;">yes</td>
<td style="border: 1px solid #cccccc; padding: 8px; text-align: center; word-wrap: break-word;">yes</td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">template modified: g&lt;N&gt;, where N is a 3 digit integer greater than or equal to 100</td>
</tr>
<tr style="background-color: #f9f9f9;">
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">institution_id</td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">name of institution (an acronym)</td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">IPSL, CCCma, MOHC (assigned when an institution is registered)</td>
<td style="border: 1px solid #cccccc; padding: 8px; text-align: center; word-wrap: break-word;">no</td>
<td style="border: 1px solid #cccccc; padding: 8px; text-align: center; word-wrap: break-word;">yes</td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">No change</td>
</tr>
<tr>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">mip_era</td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">label indicating the CMIP phase for which an experiment was designed</td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">CMIP7</td>
<td style="border: 1px solid #cccccc; padding: 8px; text-align: center; word-wrap: break-word;">no</td>
<td style="border: 1px solid #cccccc; padding: 8px; text-align: center; word-wrap: break-word;">yes</td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">No change</td>
</tr>
<tr style="background-color: #f9f9f9;">
<td style="border: 1px solid #cccccc; padding: 8px; background-color: #ffff00; word-wrap: break-word;"><strong>region</strong></td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">the domain over which data are reported</td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">"glb" (global), "ata" (Antarctica), "grl" (Greenland)</td>
<td style="border: 1px solid #cccccc; padding: 8px; text-align: center; word-wrap: break-word;">yes</td>
<td style="border: 1px solid #cccccc; padding: 8px; text-align: center; word-wrap: break-word;">yes</td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">New CMIP7 attribute</td>
</tr>
<tr>
<td style="border: 1px solid #cccccc; padding: 8px; background-color: #ffff00; word-wrap: break-word;"><strong>source_id</strong></td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">short label identifying the source (model)</td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">CanESM6-0-MR, UKESM1-0-LL (assigned when model is registered)</td>
<td style="border: 1px solid #cccccc; padding: 8px; text-align: center; word-wrap: break-word;">yes</td>
<td style="border: 1px solid #cccccc; padding: 8px; text-align: center; word-wrap: break-word;">yes</td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">No change</td>
</tr>
<tr style="background-color: #f9f9f9;">
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">timeRangeDD</td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">the time period spanned by the data in the file. The format of this attribute is described in Appendix 1 below.</td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">"1880-2020" (for annual means), "196001-199912" (for monthly means), "20030101-20031231" (for daily means)</td>
<td style="border: 1px solid #cccccc; padding: 8px; text-align: center; word-wrap: break-word;">yes</td>
<td style="border: 1px solid #cccccc; padding: 8px; text-align: center; word-wrap: break-word;">no</td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">No change</td>
</tr>
<tr>
<td style="border: 1px solid #cccccc; padding: 8px; background-color: #ffff00; word-wrap: break-word;"><strong>variable_id</strong></td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">short variable name, also referred to as "root name"</td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">tas, pr, ua</td>
<td style="border: 1px solid #cccccc; padding: 8px; text-align: center; word-wrap: break-word;">yes</td>
<td style="border: 1px solid #cccccc; padding: 8px; text-align: center; word-wrap: break-word;">yes</td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">No change</td>
</tr>
<tr style="background-color: #f9f9f9;">
<td style="border: 1px solid #cccccc; padding: 8px; background-color: #ffff00; word-wrap: break-word;"><strong>variant_label</strong></td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">a label distinguishing datasets produced under only slight variants of experiment conditions or source configurations. See section 5 below.</td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">r1i1p1f1, r2i2p2f1, r1i198001p1f1, r1i198001ap1f1, r1i199001bp1f1 (constructed from elements in Table 2)</td>
<td style="border: 1px solid #cccccc; padding: 8px; text-align: center; word-wrap: break-word;">yes</td>
<td style="border: 1px solid #cccccc; padding: 8px; text-align: center; word-wrap: break-word;">yes</td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">As in CMIP6 but for decadal experiments, the start date is now indicated by the "initialization index" ("i" value).</td>
</tr>
</tbody>
</table>

---

## 5. Notes on "variant_label"

When two datasets differ due to slight differences in experiment conditions (e.g., initial conditions or forcing) or slight differences in the model formulation (e.g., a small treatment in one of the parameterizations), they must be distinguished by assigning them different variant "labels". The variant_label is constructed from four indexes, "realization", "initialization", "physics", and "forcing", and these are combined into a single text string of the form "r2i1p1f3" recording the "r", "i", "p", "f" values identifying the variant.

- **realization**: The "r" index distinguishes among members of an ensemble of simulations that differ only in their initial conditions (e.g., spawned from different points in a control run). Note that if two different experiments were started from the same initial conditions, the same realization number should be used for both simulations. For example if a historical run with "natural forcing" only and another historical run that includes anthropogenic forcing were both spawned at the same point in a control run, both should be assigned the same realization. Also, each of the different future scenario simulations should be assigned the same realization integer as the historical run from which it was initiated. This will allow users to easily splice together the appropriate historical and future runs.

- **initialization**: The "i" index is normally set to "i1" except in CMIP prediction (or hindcast) experiments initialized from observations. For prediction experiments the "i" value should be the year and month of initialization. For example, a hindcast initialized in January of 1960 would have an initialization index "i196001". If two simulations are initialized in the same month and day but, for example, using different reanalyses or different initialization procedures, they are labeled differently by appending a single lower case alphabetic character (e.g., "i196001a" and "i196001b").

- **physics**: The "p" index distinguishes among slight variants in a model's formulation. In the usual case of a single physics version of a model, this argument should normally be assigned the value 1. It is essential that the same physics_index be assigned to all model output produced by a given model version. Use of "physics_index" is reserved for model versions that differ in minor ways (e.g., as in a "perturbed physics" ensemble or minor changes in a model parameterization). Model versions that are substantially different from one another must be assigned different source_ids. In particular, for a model run at two different resolutions, separate source_id's must be registered, rather than simply assigning them different "p" values.

- **forcing**: the "f" index is used to distinguish runs conforming to the protocol of a single CMIP6 experiment but with different variants of forcing applied. One can, for example, distinguish between two historical simulations, one forced with the CMIP6-recommended forcing data sets and another forced by a different dataset, which might yield information about how forcing uncertainty affects the simulation.

The assignment of the "ripf" values is not coordinated across models, but for each source, the physics index should be consistently assigned. Also, for each source/experiment pair, consistency in each index should be maintained across each parent/child pair whenever sensible. For example, both the ScenarioMIP child and its "historical" parent simulation would be assigned the same set of index values for realization, initialization, and physics. The integer 1 should normally be chosen for each index in the case of a single variant or for the primary variant (if there is one). This, however, is only a suggestion; there should be no expectation on the part of users that every model will have a value of 1 assigned to any of the r, i, p, f indices, and even if a 1 is assigned it does not invariably imply that it is the primary variant. Note also that a child spawned by a control run will not necessarily have the same "ripf" value as the control, since, for example, multiple realizations of an experiment will branch from different points of a single control.

When more than one variant is assigned to the files produced by a model, the differences among variants should be described in the variant_info global attribute. This attribute, listed in Table 4, is formally optional, but to enable analysts to interpret model results it should always be included when different variants have been generated by a model. This may not be necessary, however, if the only difference is in "realization" because the branch_time_in_parent attribute defined in Table 3 indicates the only difference.

---

## 6. Additional Required Global Attributes

Additional attributes that are not included in the DRS are nevertheless required. They are listed in Table 2 along with an indication of how they might differ from their CMIP6 counterparts.

### Table 2. Required global attributes

Additional required global attributes in addition to those found in Table 1. **Highlighted in yellow** is the subset of global attributes proposed to serve as search facets (usually with somewhat different labels) for filtering and retrieving data on the ESGF data servers.

<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr style="background-color: #f3f3f3;">
<th style="border: 1px solid #b7b7b7; padding: 8px; text-align: left; word-wrap: break-word; width: 15%;">Group</th>
<th style="border: 1px solid #b7b7b7; padding: 8px; text-align: left; word-wrap: break-word; width: 15%;">Global Attribute</th>
<th style="border: 1px solid #b7b7b7; padding: 8px; text-align: left; word-wrap: break-word; width: 35%;">Description</th>
<th style="border: 1px solid #b7b7b7; padding: 8px; text-align: left; word-wrap: break-word; width: 20%;">Sample Values</th>
<th style="border: 1px solid #b7b7b7; padding: 8px; text-align: left; word-wrap: break-word; width: 15%;">Change from CMIP6</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border: 1px solid #b7b7b7; padding: 8px; word-wrap: break-word;" rowspan="4">Elements of the variant_label attribute</td>
<td style="border: 1px solid #b7b7b7; padding: 8px; word-wrap: break-word;"><strong>realization_index</strong></td>
<td style="border: 1px solid #b7b7b7; padding: 8px; word-wrap: break-word;">index distinguishing the members of an ensemble initialized from different points in a parent run. See section 5.</td>
<td style="border: 1px solid #b7b7b7; padding: 8px; word-wrap: break-word;">"r1", "r3", "r224", following the template: "r"&lt;n&gt;</td>
<td style="border: 1px solid #b7b7b7; padding: 8px; word-wrap: break-word;">Now a text string (not an integer) that includes the "r" prefix</td>
</tr>
<tr>
<td style="border: 1px solid #b7b7b7; padding: 8px; word-wrap: break-word;"><strong>initialization_index</strong></td>
<td style="border: 1px solid #b7b7b7; padding: 8px; word-wrap: break-word;">index indicating initialization method and/or, for decadal predictions, initialization date. See section 6.</td>
<td style="border: 1px solid #b7b7b7; padding: 8px; word-wrap: break-word;">"i1", "i2", "i196001", "i201001", "i201001a", "i201001b", following the template: "i"&lt;n&gt;[a]</td>
<td style="border: 1px solid #b7b7b7; padding: 8px; word-wrap: break-word;">Now a text string (not an integer) that includes the "i" prefix</td>
</tr>
<tr>
<td style="border: 1px solid #b7b7b7; padding: 8px; word-wrap: break-word;"><strong>physics_index</strong></td>
<td style="border: 1px solid #b7b7b7; padding: 8px; word-wrap: break-word;">index distinguishing among simulations generated by the same "source", but with minor differences in physics. See section 6.</td>
<td style="border: 1px solid #b7b7b7; padding: 8px; word-wrap: break-word;">"p1", "p3", "p45", following the template: "p"&lt;n&gt;</td>
<td style="border: 1px solid #b7b7b7; padding: 8px; word-wrap: break-word;">Now a text string (not an integer) that includes the "p" prefix</td>
</tr>
<tr>
<td style="border: 1px solid #b7b7b7; padding: 8px; word-wrap: break-word;"><strong>forcing_index</strong></td>
<td style="border: 1px solid #b7b7b7; padding: 8px; word-wrap: break-word;">index identifying variant of forcing. See section 5.</td>
<td style="border: 1px solid #b7b7b7; padding: 8px; word-wrap: break-word;">"f1", "f6", "f13", following the template: "f"&lt;n&gt;</td>
<td style="border: 1px solid #b7b7b7; padding: 8px; word-wrap: break-word;">Now a text string (not an integer) that includes the "f" prefix</td>
</tr>
<tr>
<td style="border: 1px solid #b7b7b7; padding: 8px; word-wrap: break-word;" rowspan="5">Elements of the branded variable name</td>
<td style="border: 1px solid #b7b7b7; padding: 8px; word-wrap: break-word;"><strong>branded_variable</strong></td>
<td style="border: 1px solid #b7b7b7; padding: 8px; word-wrap: break-word;">full name of branded variable constructed with the following template: &lt;branded_variable&gt; = &lt;variable_id&gt;_&lt;branding_suffix&gt;</td>
<td style="border: 1px solid #b7b7b7; padding: 8px; word-wrap: break-word;">"tas_tavg-h2m-hxy-u", "pr_tpt-uhxy-u", "ua_tavg-p19-hxy-air"</td>
<td style="border: 1px solid #b7b7b7; padding: 8px; word-wrap: break-word;">New CMIP7 attribute</td>
</tr>
<tr>
<td style="border: 1px solid #b7b7b7; padding: 8px; word-wrap: break-word;"><strong>temporal_label</strong></td>
<td style="border: 1px solid #b7b7b7; padding: 8px; word-wrap: break-word;">identifier of method of sampling data in time</td>
<td style="border: 1px solid #b7b7b7; padding: 8px; word-wrap: break-word;">"tavg", "tpt", "tclm"</td>
<td style="border: 1px solid #b7b7b7; padding: 8px; word-wrap: break-word;">New CMIP7 attribute</td>
</tr>
<tr>
<td style="border: 1px solid #b7b7b7; padding: 8px; word-wrap: break-word;"><strong>vertical_label</strong></td>
<td style="border: 1px solid #b7b7b7; padding: 8px; word-wrap: break-word;">identifier of method of sampling data in the vertical</td>
<td style="border: 1px solid #b7b7b7; padding: 8px; word-wrap: break-word;">"h2m", "200hPa", "p19", "ol", "u"</td>
<td style="border: 1px solid #b7b7b7; padding: 8px; word-wrap: break-word;">New CMIP7 attribute</td>
</tr>
<tr>
<td style="border: 1px solid #b7b7b7; padding: 8px; word-wrap: break-word;"><strong>horizontal_label</strong></td>
<td style="border: 1px solid #b7b7b7; padding: 8px; word-wrap: break-word;">identifier of method of sampling data in the horizontal</td>
<td style="border: 1px solid #b7b7b7; padding: 8px; word-wrap: break-word;">"hxy", "hs", "hm"</td>
<td style="border: 1px solid #b7b7b7; padding: 8px; word-wrap: break-word;">New CMIP7 attribute</td>
</tr>
<tr>
<td style="border: 1px solid #b7b7b7; padding: 8px; word-wrap: break-word;"><strong>area_label</strong></td>
<td style="border: 1px solid #b7b7b7; padding: 8px; word-wrap: break-word;">identifier of areas where data have not been masked</td>
<td style="border: 1px solid #b7b7b7; padding: 8px; word-wrap: break-word;">"lnd", "air", "sea", "u"</td>
<td style="border: 1px solid #b7b7b7; padding: 8px; word-wrap: break-word;">New CMIP7 attribute</td>
</tr>
<tr>
<td style="border: 1px solid #b7b7b7; padding: 8px; word-wrap: break-word;" rowspan="2">Version of standards applied</td>
<td style="border: 1px solid #b7b7b7; padding: 8px; word-wrap: break-word;"><strong>Conventions</strong></td>
<td style="border: 1px solid #b7b7b7; padding: 8px; word-wrap: break-word;">Latest version of CF conventions followed in reporting data</td>
<td style="border: 1px solid #b7b7b7; padding: 8px; word-wrap: break-word;">only options: "CF-1.11", "CF-1.12" or "CF-1.13"</td>
<td style="border: 1px solid #b7b7b7; padding: 8px; word-wrap: break-word;">Additional convention names can also be listed, but must first be added to the list of terms found in the "Conventions" CV.</td>
</tr>
<tr>
<td style="border: 1px solid #b7b7b7; padding: 8px; word-wrap: break-word;"><strong>data_specs_version</strong></td>
<td style="border: 1px solid #b7b7b7; padding: 8px; word-wrap: break-word;">version of MIP requirements governing a dataset</td>
<td style="border: 1px solid #b7b7b7; padding: 8px; word-wrap: break-word;">"MIP-DS7.1.0.0"</td>
<td style="border: 1px solid #b7b7b7; padding: 8px; word-wrap: break-word;">This now is the version of the set of requirements and CVs followed in creating a file and has the value: "MIP-DS7.1.0.0"</td>
</tr>
<tr>
<td style="border: 1px solid #b7b7b7; padding: 8px; word-wrap: break-word;" rowspan="2">Elements useful for identifying file versions</td>
<td style="border: 1px solid #b7b7b7; padding: 8px; word-wrap: break-word;"><strong>creation_date</strong></td>
<td style="border: 1px solid #b7b7b7; padding: 8px; word-wrap: break-word;">date/time that file was generated</td>
<td style="border: 1px solid #b7b7b7; padding: 8px; word-wrap: break-word;">2025-08-21T04:23:12Z, following the template &lt;YYYY-MM-DD&gt;"T"&lt;HH:MM:SS&gt;"Z"</td>
<td style="border: 1px solid #b7b7b7; padding: 8px; word-wrap: break-word;">No change</td>
</tr>
<tr>
<td style="border: 1px solid #b7b7b7; padding: 8px; word-wrap: break-word;"><strong>tracking_id</strong></td>
<td style="border: 1px solid #b7b7b7; padding: 8px; word-wrap: break-word;">unique file identifier generated by attaching to a prefix a UUID generated by the OSSP utility with the DCE 1.1 option applying version 4 (which is random number based)</td>
<td style="border: 1px solid #b7b7b7; padding: 8px; word-wrap: break-word;">hdl:21.14107/f6635404-8a1a-4aa9-918d-3792e8321f04, following the template "hdl:21.14107/"&lt;uuid&gt;</td>
<td style="border: 1px solid #b7b7b7; padding: 8px; word-wrap: break-word;">No change in format, but now beginning with "hdl:21.14107"</td>
</tr>
<tr>
<td style="border: 1px solid #b7b7b7; padding: 8px; word-wrap: break-word;" rowspan="4">Other</td>
<td style="border: 1px solid #b7b7b7; padding: 8px; word-wrap: break-word;"><strong>realm</strong></td>
<td style="border: 1px solid #b7b7b7; padding: 8px; word-wrap: break-word;">realms most closely associated with a variable</td>
<td style="border: 1px solid #b7b7b7; padding: 8px; word-wrap: break-word;">"atmos", "atmos aerosol", "ocean", "land"</td>
<td style="border: 1px solid #b7b7b7; padding: 8px; word-wrap: break-word;">No change</td>
</tr>
<tr>
<td style="border: 1px solid #b7b7b7; padding: 8px; word-wrap: break-word;"><strong>nominal_resolution</strong></td>
<td style="border: 1px solid #b7b7b7; padding: 8px; word-wrap: break-word;">approximate horizontal resolution (computed following the CMIP6 global attributes document Appendix 2)</td>
<td style="border: 1px solid #b7b7b7; padding: 8px; word-wrap: break-word;">"1 km", "250 km", "500 km"</td>
<td style="border: 1px solid #b7b7b7; padding: 8px; word-wrap: break-word;">No change</td>
</tr>
<tr>
<td style="border: 1px solid #b7b7b7; padding: 8px; word-wrap: break-word;"><strong>product</strong></td>
<td style="border: 1px solid #b7b7b7; padding: 8px; word-wrap: break-word;">identifier of category of data</td>
<td style="border: 1px solid #b7b7b7; padding: 8px; word-wrap: break-word;">only option: "model-output"</td>
<td style="border: 1px solid #b7b7b7; padding: 8px; word-wrap: break-word;">No change</td>
</tr>
<tr>
<td style="border: 1px solid #b7b7b7; padding: 8px; word-wrap: break-word;"><strong>license_id</strong></td>
<td style="border: 1px solid #b7b7b7; padding: 8px; word-wrap: break-word;">creative commons license identifier</td>
<td style="border: 1px solid #b7b7b7; padding: 8px; word-wrap: break-word;">"CC-BY-4.0" or "CC0-1.0"</td>
<td style="border: 1px solid #b7b7b7; padding: 8px; word-wrap: break-word;">New CMIP7 attribute</td>
</tr>
</tbody>
</table>

---

## 7. Conditionally Required Global Attributes

### Table 3. Conditionally required global attributes

These attributes are defined as they were in CMIP6.

<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr style="background-color: #f3f3f3;">
<th style="border: 1px solid #cccccc; padding: 8px; text-align: left; word-wrap: break-word; width: 15%;">Required When</th>
<th style="border: 1px solid #cccccc; padding: 8px; text-align: left; word-wrap: break-word; width: 18%;">Global Attribute</th>
<th style="border: 1px solid #cccccc; padding: 8px; text-align: left; word-wrap: break-word; width: 40%;">Description</th>
<th style="border: 1px solid #cccccc; padding: 8px; text-align: left; word-wrap: break-word; width: 27%;">Sample Values</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;" rowspan="8">Parent experiment exists</td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;"><strong>branch_time_in_child</strong></td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">time when this simulation (the "child") was initiated, expressed in the time units and time model of the child.</td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">0.0D0, 365.0D0</td>
</tr>
<tr>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;"><strong>branch_time_in_parent</strong></td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">time when this experiment was spawned by the parent, expressed in the parent's time units and time model</td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">3650.0D0, 18250.0D0</td>
</tr>
<tr>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;"><strong>parent_activity_id</strong></td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">name of activity responsible for the parent experiment</td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">"CMIP"</td>
</tr>
<tr>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;"><strong>parent_experiment_id</strong></td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">label (experiment_id) identifying the parent experiment</td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">"piControl", "historical"</td>
</tr>
<tr>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;"><strong>parent_mip_era</strong></td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">parent experiment's mip_era</td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">"CMIP7" or "CMIP6" (rarely)</td>
</tr>
<tr>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;"><strong>parent_source_id</strong></td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">short name identifying the model that produced the parent simulation</td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">"CanESM6-0-MR"</td>
</tr>
<tr>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;"><strong>parent_time_units</strong></td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">time units as recorded in the parent run</td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">"days since 1850-1-1", "days since 1000-1-1"</td>
</tr>
<tr>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;"><strong>parent_variant_label</strong></td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">label identifying the parent experiment variant (i.e., its variant_label)</td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">"r1i1p1f1", "r1i2p223f3"</td>
</tr>
<tr>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">cell_measures attribute is attached to a variable</td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;"><strong>external_variables</strong></td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">a list of blank-separated variable names recorded by the cell_measures attribute attached to a variable</td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">"areacella", "areacello volcello", "areacello"</td>
</tr>
</tbody>
</table>

---

## 8. Optional Global Attributes

### Table 4. Optional attributes

These attributes are optional, and some modeling groups might elect to provide them. The content of these attributes is uncontrolled.

<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr style="background-color: #f3f3f3;">
<th style="border: 1px solid #cccccc; padding: 8px; text-align: left; word-wrap: break-word; width: 18%;">Global Attribute</th>
<th style="border: 1px solid #cccccc; padding: 8px; text-align: left; word-wrap: break-word; width: 55%;">Description</th>
<th style="border: 1px solid #cccccc; padding: 8px; text-align: left; word-wrap: break-word; width: 27%;">Change from CMIP6</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;"><strong>cmip6_compound_name</strong></td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">legacy unique identifiers of variables in previous CMIP phases. The compound name was constructed from the CMIP6 variable name and a CMOR table name. For example: "Amon.ta", "Emon.hus", "3hr.pr"</td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">Optional attribute recognized by CMIP7</td>
</tr>
<tr>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;"><strong>experiment</strong></td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">short description of the experiment registered in the source_id CV</td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">Required in CMIP6, but optional in CMIP7</td>
</tr>
<tr>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;"><strong>institution</strong></td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">Name of the institution: expansion of the acronym recorded as institution_id and registered in the source_id CV</td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">Required in CMIP6, but optional in CMIP7</td>
</tr>
<tr>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;"><strong>source</strong></td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">full model name and version</td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">Required in CMIP6, but optional in CMIP7</td>
</tr>
<tr>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;"><strong>history</strong></td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">processing history (recognized by the CF Conventions)</td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">No change</td>
</tr>
<tr>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;"><strong>license</strong></td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">description of license recorded as license_id and recorded in the license CV.</td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">No change</td>
</tr>
<tr>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;"><strong>references</strong></td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">references relevant to the data reported (recognized by the CF Conventions)</td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">No change</td>
</tr>
<tr>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;"><strong>title</strong></td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">short description of the dataset (recognized by the CF Conventions)</td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">No change</td>
</tr>
<tr>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;"><strong>variant_info</strong></td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">description of the simulation variant and how it differs from other variants. See section 5 above.</td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">No change</td>
</tr>
</tbody>
</table>

---

## Appendix 1. Time Labels Appearing in Filenames

The last segment of a filename (referred to as the timeRangeDD) indicates the time-interval spanned by all the time samples in the file. With one minor change, it is defined as in CMIP5 and CMIP6.

```
If frequency = "fx" then 
  <timeRangeDD> = ""
else 
  <time_range> = N1-N2 where N1 and N2 are integers of the form 'yyyy[MM[dd[hh[mm[ss]]]]]'
  (expressed as a string, where 'yyyy', 'MM', 'dd', 'hh', 'mm' and 'ss' are 
   integer year, month, day, hour, minute, and second, respectively)
endif
```

The precision of the time label depends on whether a climatology has been requested, and if the dataset is not a climatology, the precision is determined by the frequency as given in Table 8.

### Table 8. Precision of Time Labels in Filenames

<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr style="background-color: #f3f3f3;">
<th style="border: 1px solid #cccccc; padding: 8px; text-align: left; word-wrap: break-word; width: 20%;">Condition</th>
<th style="border: 1px solid #cccccc; padding: 8px; text-align: left; word-wrap: break-word; width: 20%;">Precision of Time Label</th>
<th style="border: 1px solid #cccccc; padding: 8px; text-align: left; word-wrap: break-word; width: 60%;">Notes</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">Climatology requested</td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">"yyyyMM"</td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">If the time coordinate variable ("time") has a "climatology" attribute identifying the climatological bounds variable ("climatology_bounds"), then the first label is set to the first time recorded by the time bounds variable array, rounded to the nearest beginning of a month, and the second label is the last time recorded by the time bounds variable array, rounded to the nearest end of a month.</td>
</tr>
<tr>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">frequency = fx</td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">Omit time label</td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">This frequency applies to variables that are independent of time ("fixed").</td>
</tr>
<tr>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">frequency = yr or dec</td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">"yyyy"</td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">Label with the year obtained from the first and last time coordinate values in the file.</td>
</tr>
<tr>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">frequency = mon</td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">"yyyyMM"</td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">Label with the year and month obtained from the first and last time coordinate values in the file.</td>
</tr>
<tr>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">frequency = day</td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">"yyyyMMdd"</td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">Label with the year, month, and day obtained from the first and last time coordinate values in the file.</td>
</tr>
<tr>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">frequency = 6hr, 3hr or 1hr</td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">"yyyyMMddhhmm"</td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">Label with the year, month, day, hour, and minute (rounded to the nearest whole minute) obtained from the first and last time coordinate values in the file.</td>
</tr>
<tr>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">frequency = subhr</td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">"yyyyMMddhhmmss"</td>
<td style="border: 1px solid #cccccc; padding: 8px; word-wrap: break-word;">Label with the year, month, day, hour, minute, and second (rounded to the nearest whole second) obtained from the first and last time coordinate values in the file.</td>
</tr>
</tbody>
</table>

---

## Appendix 2. CMIP6 Global Attributes Eliminated from CMIP7

The following CMIP6 global attributes are no longer officially recognized by CMIP7, but like other non-standard attributes, they are not forbidden:

- branch_method
- comment
- contact
- further_info_url
- grid
- source_type
- sub_experiment
- sub_experiment_id
- table_id

---

## Appendix 3. CMIP7 Controlled Vocabularies (CVs) for Global Attributes

The controlled vocabularies (CVs) from which values assigned to many of the global attributes can be viewed in human readable lists in the CMIP7 CMOR tables github repository in the [CMOR CVs file][cmor-cvs] or its [split view][cmor-cvs-split]. The following CVs in this file are not expected to be amended for the duration of CMIP7:

### Static CVs

- area_label
- Conventions
- drs_specs
- frequency
- horizontal_label
- license_id
- nominal_resolution
- realm
- region
- temporal_label
- vertical_label

### CVs in Place but with Ongoing Addition of New Values

Some of the currently existing CVs have only been partially populated. The following attribute lists (again available in the [CMOR CVs file][cmor-cvs] or its [split view][cmor-cvs-split]) will be supplemented as additional values are registered:

- activity_id
- experiment_id
- grid_label
- institution_id
- source_id (see [Source ID Guidance](Source_ID_guidance.md) for information on constructing a new source id)

How to register new values is [described here](cv_registration.md).

### Variable Identifiers

The variable_id global attribute records the "root name" of a branded variable. The recognized root names can be found either in the [CMIP7 Data Request](https://cmip-data-request.github.io/cmip7-dreq-webview/variable_search.html) or the [CMOR variable tables](https://github.com/WCRP-CMIP/cmip7-cmor-tables/tree/main/tables). Further guidance on the branded variables naming scheme, which is new in CMIP7, is [available here](https://wcrp-cmip.github.io/cmip7-guidance/docs/CMIP7/Branded_Variables/).



[cmor-cvs]: https://github.com/WCRP-CMIP/cmip7-cmor-tables/blob/main/tables-cvs/cmor-cvs.json
[cmor-cvs-split]: https://github.com/WCRP-CMIP/cmip7-cmor-tables/blob/main/tables-cvs/split-view
