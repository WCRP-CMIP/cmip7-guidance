## JSON Linked-Data

JSONLD is a lightweight link data format closely conforming to the JSON standards. It allows us to provide relational data, in a flat format accessible to everyone within minimal intervention. 


### Why is this useful?

The JavaScript Object Notation has been accepted as a human and machine readable and intuitive data standard for both scripting and online programs. It tends to describe items in a Key-Value pair structure and present it in plain-text. 
This is the standard that was adopted for CMIP6 control variables and has been used since. 

In converting current and future data into JSONLD we are able to provide pointers to *reusable* bits of information, thus drastically reducing duplication, and in turn human-induced error in the WCRP (and beyond) community. 


### Existing Workflows
In introducing any new technology, there is often a period in which existing software will need to be updated. By opting for JSONLD the interference between this should be minimal, since any produced files will still be readable by existing scripts. 

### Bespoke output and Breaking Changes 
The main merit of JSONLD comes from its framing capabilities. It allows us to take a flat JSON file and build (populate) this with all linked components without having to store them in the same file, or even location. 
JSONLD parsers are available for all majour programming languages, and capable of extracting linked files (using their ids (URIs)) meaning that we will always have an up-to-date frame when we request it. 

This also means that should a non-standard or altered format be required for your work (e.g. just the names of MIPs or Institutions in an Activity, this will be possible through either custom framing or requesting an action be added to the relevant repository to generate this. Github actions are designed to run each time the data in the repository is updated. 




### How does it change the existing structure?

JsonLD is still a valid JSON format allowing all previous tools and workflows to function. . 
In addition to this we apply a intuitive unique id to each item, and a context file. 

#### Example file change to LD

```json
{
            "description": "CMIP DECK: 1pctCO2, abrupt-4xCO2, amip, esm-piControl, esm-historical...",
            "activity_id": "CMIP",
            "url": "https://gmd.copernicus.org/articles/9/1937/2016/gmd-9-1937-2016.pdf"
}
```
Is now updated to have an `id`, `type` and `@context`

```json
{
            "@context": "_context_",
            "id": "cmip",
            "type": "activity",
            "description": "CMIP DECK: 1pctCO2, abrupt-4xCO2, amip, esm-piControl, esm-historical...",
            "name": "CMIP",
            "url": "https://gmd.copernicus.org/articles/9/1937/2016/gmd-9-1937-2016.pdf"
}
```

#### Context files   
The context file defines how this shall be treated, where the files are located, and if there are any additional links to the fields. An example context file is given below
```jsonld

{
    "@context": {
                    // define the base and prefix adresses so that we do not have to specify these in the file
                    "@base": "https://wcrp-cmip.github.io/CMIP6Plus_CVs/",
                    "@vocab": "https://wcrp-cmip.github.io/CMIP6Plus_CVs/",

                    // map id and type to @id and @type. This is done for legibility
                    "id": "@id",
                    "type": "@type",
                    
                    // add any external prefixes. 
                    "cmip7": "https://wcrp-cmip.github.io/CMIP7_CVs/",
                    "wcrp-universe": "https://wcrp-cmip.github.io/WCRP-universe/"

                    // define information for fields which may be linked. 
                    "activity": {
                                    "@context": "https://wcrp-cmip.github.io/WCRP-universe/activity/_context_",
                                    "@type": "@id",
                            }
    },

    // framing options go here, e.g. expand all links
    "@embed": "@always"
}
```
The `_context_` files in our repositories are used both to define additional `@context` information, and to provide a basic framing context should that be required by the user. 


### Other changes to the CVs

#### File hierarchy
Instead of having one large file containing all possible sources/experiments/institutions etc., we will break these out into individual json files. 

This serves to improve the workflow and usability of the directories in several ways: 

1. *A better understanding of changes over time.* This way we are able to create a difference log for an individual item, without having to track the entire collection or category.
2. *Error isolation* A mistake in a single file will not affect any of the others, and will allow us to easier identify it. 
3. *Versioning* The changes in each file are tracked, and we know exactly when they have occured. 
4. *Line identification* It will be easier to hilight a file or specific line, without the worry that an issue 2 weeks old will now refer to something else. 
5. *ATTRIBUTION* by seeing who is contributing changes to certain files will allow us to credit prominent members of the community, and generate a list of specialists for specific topics should there be any queries at a later point. 
