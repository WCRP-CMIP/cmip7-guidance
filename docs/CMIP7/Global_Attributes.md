---
layout: default
title: CMIP7 Global Attributes, Filenames,Directory Path, and CVs
---

# CMIP7 Global Attributes

**Version:** 1.1  
**Published:** X March 2026  
**DOI:** [10.5281/zenodo.17250297](https://doi.org/10.5281/zenodo.17250297)  
**Authors:** Karl E. Taylor, Laurent Troussellier, Sasha Ames, David Hassell, Maria Molina, Zebedee Nicholls, Martin Schupfner, James Anstey, Daniel Ellis, Elisabeth Dingley, Paul J. Durack, Guillaume Levavasseur, Matthew Mizielinski, and Marie-Pierre Moine  

---

## **1\. Introduction**

This guidance document provides a summary of the CMIP7 Global attributes and of the Data Reference Syntax (DRS) which uniquely identifies datasets and is used to construct filenames and directory paths. Most of what is documented here can also be found in a citable [reference document](https://doi.org/10.5281/zenodo.17250296) archived by Zenodo, but some information provided here is new.

Each CMIP7 model output file includes standardized metadata, often included as file global attributes, which name or describe the characteristics of each dataset, including, for example:

* The source (model) and institution responsible for producing the data   
* The experiment and the activity responsible for the data   
* The terms used to construct the Data Reference Syntax (DRS)  
* Various dataset characteristics (e.g., reporting frequency, "parent experiment", region spanned) 

Some of the global attributes are mandatory (e.g., the attributes comprising the DRS), while others are conditionally required or optional.  Most attributes must be assigned a value found in a particular list of terms referred to as its controlled vocabulary (CV).  Most CVs are revised versions of those relied on in previous CMIP phases.  Controlled vocabularies ensure metadata consistency across datasets, which facilitates interpretation of the data and development of software tools for search and retrieval of data.

The CMIP7 Controlled Vocabularies (CVs) for the attributes described in this document are available in human-readable form in the [cmor-cvs.json file](https://github.com/WCRP-CMIP/cmip7-cmor-tables/blob/main/tables-cvs/cmor-cvs.json) found in the CMOR github repository as described in [Appendix 3](#bookmark=id.9v4j7wwc87p4) below. 

## **2\. Filenames**

Each CMIP7 filename is constructed from the metadata recorded in each file (see [Table 1](#bookmark=id.9v4j7wwc87p4) below).  The metadata elements, mostly stored as global attribute, are inserted into the following template: 

**Filename template:**  
`\<variable\_id\>\_\<branding\_suffix\>\_\<frequency\>\_\<region\>\_\<grid\_label\>\_\<source\_id\>\_\<experiment\_id\>\_\<variant\_label\>\[\_\<timeRangeDD\>\].nc`

**Example:**  
`tas\_tavg-h2m-hxy-u\_mon\_glb\_g121\_CanESM6-0-MR\_historical\_r2i1p1f1\_190001\-190912.nc`

### Each global attribute within the template's angle brackets is replaced with the value assigned to it in the file.  A DRS global attribute must be drawn from its CV which includes all terms recognized by CMIP7. Together the DRS attributes uniquely identify the contents of the file and ensure that within the CMIP7 archive all filenames are unique. 

Note that the "variant label" must conform to a pattern-constrained CV.  Note also that the last element in the filename template is not a global attribute; rather it provides the date/time of the first and last time-sample found in the file. See [Appendix 1](#bookmark=id.oaz86u839afi) for details about its format and precision.  For fixed fields (time-independent variables), this element is omitted.   

## **3\. Directory structure template**

The CMIP7 data archive organizes files hierarchically, and like the filenames, the directory paths are constructed from the DRS elements recorded in the file (see [Table 1](#bookmark=id.9v4j7wwc87p4) below).  The attribute values are inserted into the following template: 

**Directory path template:**  
`\<drs\_specs\>/\<mip\_era\>/\<activity\_id\>/\<institution\_id\>/\<source\_id\>/\<experiment\_id\>/\<variant\_label\>/\<region\>/\<frequency\>/variable\_id\>/\<branding\_suffix\>/\<grid\_label\>/\<directoryDateDD\>`

**Example:**  
`MIP-DRS7/CMIP7/CMIP/CCCma/CanESM6-0-MR/historical/r2i1p1f1/glb/mon/tas/tavg-h2m-hxy-u/g121/v20250622`

### Again, each DRS global attribute used in constructing the path must be drawn from its CV.  Note that the directoryDateDD data descriptor at the end of the directory path indicates the dataset "version" and unlike the other metadata elements, it is not stored as a global attribute. The version roughly indicates the date a dataset was created; the only essential rule constraining this date is that a newer version must invariably be assigned a more recent date than the older version.

## **3\. Data Reference Syntax (DRS) Elements**

The CMIP7 data descriptors used in constructing filenames and directory paths comprise the DRS.  Except for two exceptions, this metadata is drawn from controlled vocabularies and stored as global attributes in files.  Table 1 summarizes the DRS elements, duplicating a subset of the information found in the [reference document](https://doi.org/10.5281/zenodo.17250296) but adding a column indicating any difference to how the terms were defined in CMIP6. 

Table 1\.  List of CMIP7 DRS elements.  All elements are drawn from CMIP7 controlled vocabularies (CVs) or constructed using simple templates.  All DRS global attributes must appear in every file; they are a subset of the *required* attributes.  The timeRangeDD and directoryDateDD (indicating "version") are not global attributes but are DRS elements used in constructing filenames or directory paths.  Highlighted in yellow is the subset of global attributes proposed to serve as search facets (displayed with somewhat different labels) for filtering and retrieving data on the ESGF data servers.

| DRS element | description | sample values | in file name | in direc- tory path | Change from CMIP6 |
| ----- | ----- | ----- | :---: | :---: | ----- |
| activity\_id | name of activity (acronym) | CMIP, PMIP, CFMIP  | no | yes | limited to a single activity; a list of activities is no longer allowed. |
| branding\_suffix | suffix in the branded variable name | tavg-h2m-hxy-u,  tpt-u-hxy-u tavg-p19-hxy-air (constructed from elements in [Table 2](#bookmark=id.i0w26e5av56t): \<temporal\_label\>, \<vertical\_label\>, \<horizontal\_label\>, and \<area\_label\>) | yes | yes | new CMIP7 attribute (eliminating "table\_id" as an attribute) |
| directoryDateDD | approximate date files were written to the hosting directory, which serves as a dataset version label (recorded as a folder name in the directory path, not as a global attribute) |  v20260522, v20260807, consistent with the template "v"\<YYYYMMDD\> | no | yes | No change |
| drs\_specs | label identifying the data reference syntax used to uniquely identify datasets, name files, and define directory trees | only option: MIP-DRS7 | no | yes | New CMIP7 attribute |
| experiment\_id | short label identifying the experiment | historical, piControl, abrupt-4xCO2 | yes | yes | No change |
| frequency | time Interval between each reported time-slice | mon, day, 3hr | yes | yes | No change |
| grid\_label | unique label identifying the grid on which data is reported. | g104, g132, g382 (assigned when a grid is registered) | yes | yes | template modified: g\<N\>, where N is a 3 digit integer greater than or equal to 100 |
| institution\_id | name of institution (an acronym) | IPSL, CCCma, MOHC (assigned when an institution is registered) | no | yes | No change |
| mip\_era | label indicating the CMIP phase for which an experiment was designed  | CMIP7 | no | yes | No change |
| region | the domain over which data are reported  | "glb" (global), "ata" (Antarctica), "grl" (Greenland) | yes | yes | New CMIP7 attribute |
| source\_id | short label identifying the source (model) | CanESM6-0-MR, UKESM1-0-LL (assigned when model is registered) | yes | yes | No change |
| timeRangeDD | the time period spanned by the data in the file.  The format of this attribute is described in [Appendix 1](#bookmark=id.oaz86u839afi) below. | "1880-2020" (for annual means), 196001-199912" (for monthly means), "20030101-20031231" (for daily means) | yes | no | No change |
| variable\_id | short variable name, also referred to as “root name” | tas, pr, ua | yes | yes | No change |
| variant\_label | a label distinguishing datasets produced under only slight variants of experiment conditions or source configurations. See [section 4](#bookmark=id.57bbwu833h5l) below. | r1i1p1f1, r2i2p2f1, r1i198001p1f1, r1i198001ap1f1, r1i199001bp1f1, (constructed from elements in [Table 2](#bookmark=id.i0w26e5av56t): realization\_index, initialization\_index, physics\_index, and forcing\_index) | yes | yes | As in CMIP6 but for decadal experiments, the start date is now indicated by the "initialization index" ("i" value). |

## **4\. Notes on "variant\_label"**

When two datasets differ due to slight differences in experiment conditions (e.g., initial conditions or forcing) or slight differences in the model formulation (e.g., a small treatment in one of the parameterizations), they must be distinguished by assigning them different variant "labels".  The variant\_label is constructed from four indexes, "realization", "initialization", "physics", and "forcing", and these are combined into a single text string of the form "r2i1p1f3" recording the "r", "i", "p", "f" values identifying the variant.

* **realization**: The "r" index distinguishes among members of an ensemble of simulations that differ only in their initial conditions (e.g., spawned from different points in a control run). Note that if two different experiments were started from the same initial conditions, the same realization number should be used for both simulations. For example if a historical run with “natural forcing” only and another historical run that includes anthropogenic forcing were both spawned at the same point in a control run, both should be assigned the same realization. Also, each of the different future scenario simulations should be assigned the same realization integer as the historical run from which it was initiated. This will allow users to easily splice together the appropriate historical and future runs.

* **initialization**: The "i" index is normally set to "i1" except in CMIP prediction (or hindcast) experiments initialized from observations. For prediction experiments the "i" value should be the year and month of initialization.  For example, a hindcast initialized in January of 1960 would have an initialization index "i196001". If two simulations are initialized in the same month and day but, for example, using different reanalyses or different initialization procedures, they are labeled differently by appending a single lower case alphabetic character (e.g., "i196001a" and "i196001b").


* **physics**: The "p" index distinguishes among slight variants in a model's formulation.  In the usual case of a single physics version of a model, this argument should normally be assigned the value 1\.  It is essential that the same physics\_index be assigned to all model output produced by a given model version.  Use of “physics\_index” is reserved for model versions that differ in minor ways (e.g., as in a “perturbed physics” ensemble or minor changes in a model parameterization).  Model versions that are substantially different from one another must be assigned different source\_ids.  In particular, for a model run at two different resolutions, separate source\_id's must be registered, rather than simply assigning them different "p" values.


* **forcing**: the "f" index is used to distinguish runs conforming to the protocol of a single CMIP6 experiment but with different variants of forcing applied. One can, for example, distinguish between two historical simulations, one forced with the CMIP6-recommended forcing data sets and another forced by a different dataset, which might yield information about how forcing uncertainty affects the simulation.

The assignment of the "ripf" values is not coordinated across models, but for each source, the physics index should be consistently assigned.  Also, for each source/experiment pair, consistency in each index should be maintained across each parent/child pair whenever sensible. For example, both the ScenarioMIP child and its “historical” parent simulation would be assigned the same set of index values for realization, initialization, and physics. The integer 1 should normally be chosen for each index in the case of a single variant or for the primary variant (if there is one). This, however, is only a suggestion; there should be no expectation on the part of users that every model will have a value of 1 assigned to any of the r, i, p, f indices, and even if a 1 is assigned it does not invariably imply that it is the primary variant. Note also that a child spawned by a control run will not necessarily have the same “ripf” value as the control, since, for example, multiple realizations of an experiment will branch from different points of a single control.

When more than one variant is assigned to the files produced by a model, the differences among variants should be described in the variant\_info global attribute.  This attribute, listed in Table 4, is formally optional, but to enable analysts to interpret model results it should always be included when different variants have been generated by a model. This may not be necessary, however, if the only difference is in "realization" because the branch\_time\_in\_parent attribute defined in Table 3 indicates the only difference. 

## **5\. Additional required global attributes.**

Additional attributes that are not included in the DRS are nevertheless required.  They are listed in Table 2 along with an indication of how they might differ from their CMIP6 counterparts. 

Table 2: *Required* global attributes, in addition to those found in Table 1\.   Highlighted in yellow is the subset of global attributes proposed to serve as search facets (usually with somewhat different labels) for filtering and retrieving data on the ESGF data servers.

| group | global attribute | description | sample values | Change from CMIP6 |
| ----- | ----- | ----- | :---: | ----- |
| elements of the variant\_label attribute | realization\_index | index distinguishing the members of an ensemble initialized from different points in a parent run. See [section 4](#bookmark=id.57bbwu833h5l). | "r1", "r3", "r224", following the template: "r"\<n\> | Now a text string (not an integer) that includes the "r" prefix |
|  | initialization\_index | index indicating initialization method and/or, for decadal predictions, initialization date. See [section 4](#bookmark=id.57bbwu833h5l).  | "i1", "i2", "i196001", "i201001", "i201001a", "i201001b,  following the template: "i"\<n\>\[a\] | Now a text string (not an integer) that includes the "i" prefix |
|  | physics\_index | index distinguishing among simulations generated by the same "source", but with minor differences in physics. See [section 4](#bookmark=id.57bbwu833h5l). | "p1", "p3", "p45", following the template: "p"\<n\> | Now a text string (not an integer) that includes the "p" prefix |
|  | forcing\_index | index identifying variant of forcing. See [section 4](#bookmark=id.57bbwu833h5l). | "f1", "f6", "f13", following the template: "f"\<n\> | Now a text string (not an integer) that includes the "f" prefix |
| elements of the branded variable name | branded\_variable | full name of branded variable constructed with the following template: \<branded\_variable\> \= \<variable\_id\>\_\<branding\_suffix\> | "tas\_tavg-h2m-hxy-u", "pr\_tpt-uhxy-u", "ua\_tavg-p19-hxy-air" | New CMIP7 attribute |
|  | temporal\_label | identifier of method of sampling data in time | "tavg", "tpt", "tclm" | New CMIP7 attribute |
|  | vertical\_label | identifier of method of sampling data in the vertical | "h2m", "200hPa", "p19", "ol", "u" | New CMIP7 attribute |
|  | horizontal\_label | identifier of method of sampling data in the horizontal | "hxy", "hs", "hm" | New CMIP7 attribute |
|  | area\_label | identifier of areas where data have not been masked  | "lnd", "air", "sea", "u" | New CMIP7 attribute |
| version of standards applied  | Conventions | Latest version of CF conventions followed in reporting data | only options: "CF-1.11", "CF-1.12" or "CF-1.13" |  Additional convention names can also be listed, but must first be added to the list of terms found in the “Conventions” CV.   |
|  | data\_specs\_version | version of MIP requirements governing a dataset | "MIP-DS7.1.0.0" | This now is the version of the set of requirements and CVs followed in creating a file and has the form: "MIP-DS7.1.0.0" |
| elements useful for identifying file versions | creation\_date | date/time that file was generated | 2025-08-21T04:23:12Z, following the template \<YYYY-MM-DD\>"T"\<HH:MM:SS\>"Z" | No change |
|  | tracking\_id | unique file identifier generated by attaching to a prefix a UUID generated by the OSSP utility with the DCE 1.1 option applying version 4 (which is random number based) | hdl:21.14107/f6635404-8a1a-4aa9-918d-3792e8321f04, following the template "hdl:21.14107/"\<uuid\> | No change in format, but now beginning with "hdl:21.14107" |
| other | realm | realms most closely associated with a variable  | "atmos",  "atmos aerosol", "ocean", "land" | No change |
|  | nominal\_resolution | approximate horizontal resolution (computed following the [CMIP6 global attributes document Appendix 2](https://docs.google.com/document/d/1h0r8RZr_f3-8egBMMh7aqLwy3snpD6_MrDz1q8n5XUk/edit?tab=t.0#bookmark=id.ibeh7ad2gpdi)) | "1 km", "250 km", "500 km" | No change |
|  | product | identifier of category of data | only option: "model-output" | No change |
|  | license\_id | creative commons license identifier | "CC-BY-4.0" or "CC0-1.0" | New CMIP7 attribute |

## **6\. Conditionally required global attributes**

Table 3: Conditionally required global attributes, which are defined as they were in CMIP6.  

| Required when | global attribute | description | sample values |
| ----- | ----- | ----- | ----- |
| parent experiment exists | branch\_time\_in\_child | time when this simulation (the "child") was initiated, expressed in the time units and time model of the child. | "0.0D0", "365.0D0"  |
|  | branch\_time\_in\_parent | time when this experiment was spawned by the parent, expressed in the parent's time units and time model | "3650.0D0", "18250.0D0" |
|  | parent\_activity\_id | name of activity responsible for the parent experiment | "CMIP",  |
|  | parent\_experiment\_id | label (experiment\_id) identifying the parent experiment | “piControl”, "historical" |
|  | parent\_mip\_era | parent experiment's mip\_era | "CMIP7" or "CMIP6" (rarely) |
|  | parent\_source\_id | short name identifying the model that produced the parent simulation | "CanESM6-0-MR" |
|  | parent\_time\_units | time units as recorded in the parent run  | “days since 1850-1-1”, “days since 1000-1-1” |
|  | parent\_variant\_label | label identifying the parent experiment variant (i.e., its variant\_label) | “r1i1p1f1”, “r1i2p223f3” |
| cell\_measures attribute is attached to a variable | external\_variables | a list of blank-separated variable names recorded by the cell\_measures attribute attached to a variable | “areacella”, “areacello volcello”, "areacello" |

## **7\. Optional global attributes**

Table 4: Optional attributes, which some modeling groups might elect to provide.  The content of these attributes is uncontrolled. 

| global attribute | description | Change from CMIP6  |
| ----- | ----- | ----- |
| cmip6\_compound\_name | legacy unique identifying of variables in previous CMIP phases.  The compound name was constructed from the CMIP6 variable name and a CMOR table name.  For example: "Amon.ta", "Emon.hus", "3hr.pr" | Optional attribute recognized by CMIP7 |
| experiment | short description of the experiment registered in the source\_id CV | Required in CMIP6, but optional in CMIP7 |
| institution | Name of the institution: expansion of the acronym recorded as institution\_id and registered in the source\_id CV | Required in CMIP6, but optional in CMIP7 |
| source | full model name and version | Required in CMIP6, but optional in CMIP7 |
| history | processing history (recognized by the CF Conventions) | No change |
| license | description of license recorded as license\_id and recorded in the license CV. | No change |
| reference | references relevant to the data reported (recognized by the CF Conventions) | No change |
| title | short description of the dataset  (recognized by the CF Conventions) | No change |
| variant\_info | description of the simulation variant and how it differs from other variants. See [section 4](#bookmark=id.57bbwu833h5l) above. | No change |

## **Appendix 1\. Time labels appearing in filenames**

The last segment of a filename (referred to as the timeRangedd) indicates the time-interval spanned by all the time samples in the file.  It is defined as in CMIP5 (see cmip5\_data\_reference\_syntax.pdf) and CMIP6 (see [CMIP6 global attributes document](http://doi.org/10.5281/zenodo.17853724)):
```
If frequency \= “fx” then   
\<timeRangeDD\>=””   
else   
\<time\_range\> \= N1-N2\<suffix\> where N1 and N2 are integers of the form ‘yyyy\[MM\[dd\[hh\[mm\[ss\]\]\]\]\]’ (expressed as a string, where where ‘yyyy’, ‘MM’, ‘dd’, ‘hh’ ‘mm’ and ‘ss’ are integer year, month, day, hour, minute, and second, respectively) 
endif 
```
where the precision of the time is depends on whether a climatology has been requested or on frequency as given in Table 8, and the \<suffix\> is defined as follows: 
```
if the variable identified by variable\_id has a time dimension with a “climatology” attribute (i.e., if the temporal\_label is "tclm", "tclmdc", "tmaxavg", "tminavg"), then   
suffix \= “-clim”   
 else   
suffix \= “”   
endif 
```
Table 8: Precision of time labels (timeRangeDD) used in filenames.  If the "climatology" condition is met, then this takes precedence (no matter what the frequency).

| condition | precision of time label | notes |
| ----- | ----- | ----- |
| climatology requested | "yyyyMM" | If the time coordinate variable ("time") has a "climatology" attribute identifying the climatological bounds variable ("climatology\_bounds"), then the first label is set to the *first* time recorded by the time bounds variable array, rounded to the nearest *beginning* of a month (so a time bound that is recorded as 0Z on January 1, 1960 implies "196001"),  and the second label is the *last* time recorded by the time bounds variable array, rounded to the nearest *end* of a month (so *in this case*, a time bound recorded as 0Z on January 1, 1970 implies "196912").  These are the first and last months contributing to the climatology. |
| frequency \= fx | Omit time label | This frequency applies to variables that are independent of time (“fixed”).  |
| frequency \= yr or dec | “yyyy” | Label with the year obtained from the first and last time coordinate values in the file. |
| frequency \= mon | “yyyyMM” | Label with the year and month obtained from the first and last time coordinate values in the file. |
| frequency \= day | “yyyyMMdd” | Label with the year, month, and day obtained from the first and last time coordinate values in the file. |
| frequency \= 6hr, 3hr or 1hr | “yyyyMMddhhmm" | Label with the year, month, day, hour, and minute (rounded to the nearest whole minute) obtained from the first and last time coordinate values in the file. |
| frequency \= subhr | “yyyyMMddhhmmss” | Label with the year, month, day, hour, minute, and second (rounded to the nearest whole second) obtained from the first and last time coordinate values in the file. |

## **Appendix 2\. CMIP6 global attributes eliminated from CMIP7**

The following CMIP6 global attributes are no longer officially recognized by CMIP7, but like other non-standard attributes, they are not forbidden:  
 

* branch\_method  
* comment   
* contact  
* further\_info\_url  
* grid  
* source\_type  
* sub\_experiment  
* sub\_experiment\_id  
* table\_id


## **Appendix 3\. CMIP7 Controlled Vocabularies (CVs) for global attributes**

The controlled vocabularies (CVs) from which values assigned to many of the global attributes can be viewed in human readable lists in the CMIP7 CMOR tables github repository in the [cmor-cvs.json file](https://github.com/WCRP-CMIP/cmip7-cmor-tables/blob/main/tables-cvs/cmor-cvs.json). The following CVs in this file are not expected to be amended for the duration of CMIP7:

**Static CVs:**  
area\_label  
Conventions  
drs\_specs  
frequency  
horizontal\_label  
license\_id  
nominal\_resolution  
realm  
region  
temporal\_label  
vertical\_label

Some of the currently existing CVs have only been partially populated.  The following attribute lists (again available in this [cmor-cvs.json file](https://github.com/WCRP-CMIP/cmip7-cmor-tables/blob/main/tables-cvs/cmor-cvs.json)) will be supplemented as additional values are registered:  
	  
	**CVs in place but with ongoing addition of new values:**  
- activity\_id  
- experiment\_id  
- grid\_label  
- institution\_id  
- source\_id

The variable\_id global attribute records the "root name" of a branded variable.  The recognized root names can be found either in the [CMIP7 Data Request](https://cmip-data-request.github.io/cmip7-dreq-webview/variable_search.html) or the [CMOR variable tables](https://github.com/WCRP-CMIP/cmip7-cmor-tables/tree/main/tables). Further guidance on the branded variables naming scheme, which is new in CMIP7, is [available here](https://wcrp-cmip.github.io/cmip7-guidance/docs/CMIP7/Branded_Variables/).

