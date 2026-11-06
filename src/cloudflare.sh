#!/bin/bash

if [ "$CF_PAGES_BRANCH" == "production" ]; then
	echo "We are on the production, reusing actions build 'docs'"
else
	pip install -r src/mkdocs/requirements.txt;
	mkdocs build --clean -f src/mkdocs/mkdocs.yml;
	rm -rf docs; 
	cp -r src/mkdocs/site docs;
	rm -rf src/ 
fi
