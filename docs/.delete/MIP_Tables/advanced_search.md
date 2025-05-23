# Advanced Searching
To perfom the search we use the Lunr search library. 
Lunr is a lightweight, client-side search library for web applications using an inverted index data structure, enabling efficient full-text searches directly within the browser.

## Wildcard searching
We can use a wildcard anywhere in a query to capture everything 
```path/to/data/MIP_*.json```

## Sepecifying Columns (fields)
We can specify a specific field by typing its name.
```field_name:search parameter```

## Boosts
When searching multiple parameters, e.g. `cmip cmor` we are likely to get more matches on cmip, which means that the results may not be sorted in the way we want them. To counter act this we can boost the importance of a keyword in the search rankings:
``` cmip cmor^10 ```


## Fuzzy matches
We can apply the levenshtein distance matching algorithm to give us words that resemble what we type, but may not be complete matches:
``` cmar~1 ```
Here the number after the tide tells us we want to match all occurances with 1 character different from our query. 

## Term presence 
Much like an online search engine we can provide multiple parameters, but mandate some words have to appear in all matches, and ensure others do not appear in any: 
``` +all some -none ```
If we want multiple words to appear in all returned results we can add these in sequence
``` +mip +cmor ```
