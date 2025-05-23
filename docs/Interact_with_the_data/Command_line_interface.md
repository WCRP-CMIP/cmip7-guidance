Screenshots and usage to go here. 

## Installation 

```bash 
pip install git+https://github.com/WCRP-CMIP/CMIP-LD.git
```
! warning
Beware that this repository is currently rapidly in development, and you will have to upgrade the installed version regularly. 



## Arguments
The arguments can be found by typing `cmipld --help` once installed. These are: 
``` config
CLI entry point for the JSON-LD processor. 
Process JSON-LD documents and extract dependencies 

To toggle between data and line mode, press 'm'. 
To exit the viewer, press 'q'. Maintainer: Dan Ellis (CMIP IPO)


positional arguments:
    url                   URL of the JSON-LD document to process

options:
    -h, --help            show this help message and exit
    --deps, -d            Extract dependencies
    --relative            Use relative URLs for dependencies
    --no-compact, -nc     Do not compact the document
    --expand-ctx, -ctx    Do not expand context
    --no-expand-links, -nl
                            Do not expand linked documents
    --output OUTPUT, -o OUTPUT
                            Output file (default: stdout)
    --no-interactive, -n  Interactive Playground
```

## Simple use case. 
The simplest use case is to view the url of a given file. The function recursively populates all the links if they exist. 

``` 
cmipld universal:activity/cmip
```

This will give us in interactive view of the returned result. 

<image src='/assets/demo_images/cli1.png'/>
### Collapsing entries
Should we want to we can also scroll down and use the spacebar to collpse any fields we are not interested in. 

<image src='/assets/demo_images/cli2.png'/>

### Data View
For additional information we could also trigger the data view by pressing `m` to give us an alternative representation. 

<image src='/assets/demo_images/cli3.png'/>

### Quitting
To quit the viewer press `q`.


## Getting all the dependancies. 
When opening a file, we get a small amount of additional information. For instance if we wish to open `cmip6plus:source/miroc6` we get a notification of the expansion of the prefix (to ensure this is correct) and a warning that one of the links does not appear to have resolved correctly. 

<image src='/assets/demo_images/cli5.png'/>

### Listing all the links
To open all the links currently present in the JSONLD file we can use the `--deps` or `-d` flag when supplying our cli arguments. 

<image src='/assets/demo_images/cli4.png'/>

## Saving the output 
To save the output, we can use the `-o` flag with the location and filename we wish to save. E.g. 
```
cmipld universal:activity/cmip -o cmip_activity.json
```
## Rendering all items in a directory
Sometimes we might want to view all the items in a repository of directory. For this reason we can use the graph.jsonld file. 

For instance entering: 

```
cmipld universal:activity
```
will resolve into 
```
https://wcrp-cmip.github.io/WCRP-universe/activity/graph.jsonld
```
which outlines all the files in the repository and displays them. 

<image src='/assets/demo_images/cli6.png'/>


____
Optional extras to fix (these were working but changes in the code have rendered them temporarily disabled in the current version):
Compact view. 
Context Inclusion
