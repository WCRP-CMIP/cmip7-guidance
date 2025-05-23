
!!! tip "Documentation in progress"
    
    These need to be checked. 

## Location
Within each repository, a `_context_` file is supplied. This is not only used to provide crucial information for the resolution of JSONLD files, but also tells the cmipld scripts which repositories to process. 


## Content

The context provides additional information for the data inside a JSONLD file - particularly when it comes to the links. This is generally comprised of several sections. 

A sample context file is given below. 

``` json
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

## Additional Uses 
#### (see framing). 
To minimise the number of files we use, the `_context_` file is also used to provide a simple framing example when processing the data. This is to make working with the data easier on the end user. 

#### (see schema)
The context file is also used to update the schema when fetching information from alternative locations. 


