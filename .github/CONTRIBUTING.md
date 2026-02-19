



## Editing the documentation.

Docmentation is found in the `docs` folder with the file names and hierarchy affecting the navigational menu. 

### Editing materials. 

- menu/page name is determined by the `#` header tag at the top of a file. 

All other editing advice can be found on the mkdocs documentation. 

## MkDocs setup for development

1. Create a virtual environment with the requirements installed. From the root of this repo;
   

    # You may want to create a virtual environment first,
    # `python -m venv venv`
    # `source venv/bin/activate`  # on linux, windows has an equivalent that depends on the shell you're using
    `pip install -r src/mkdocs/requirements.txt`
   
3. when complete activate the conda environment and run
   
    `mkdocs serve -f src/mkdocs/mkdocs.yml`
   
You should see the link to a local process that is running a webserver -- connect to that and you can browse the pages as you edit them.
