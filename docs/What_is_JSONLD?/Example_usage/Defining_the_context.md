

## Example uses for JSONLD and how they may be defined in the context. 

For locations of the context see: 
[the \_context\_ file](../Repository_Structure/Context.md)



### Specifying Links in JSON-LD and Context Representations

#### 1. Use `@id`
The simplest way to define an item is to use the resource's unique identifier:
```json
{
  "@id": "https://wcrp-cmip.org/resource"
}
```

#### 2. Using a Named Term
We can also map a term e.g. `id` -> `@id` making the file clearer to a non-technical user. 
<div class="grid" markdown>
```json

{
        "id": "https://wcrp-cmip.org/resource"
}
```

```json
{
        "@context": {
                    "id": "@id"
        }
}
```
</div>

#### 3. Array of IDs
We may define multiple IDs to a single property

<div class="grid" markdown>
```json
{
        "related": [
                    "https://wcrp-cmip.org/resource1",
                    "https://wcrp-cmip.org/resource2"
        ]
}
```

```json
{
  "@context": {
            "related": {
                    "@container": "@id"
            }
  }
}
```
</div>

#### 4. Compact Representation of IDs
We are also able to use a shortened version of the id by using a prefix. 

<div class="grid" markdown>
```json
{
         "resource": "example:onlyoffice"
}
```

```json
{
        "@context": {
                "example": "http://wcrp-cmip.org/"
        }
}
```

</div>
This may also be defined implicitly using the `@vocab` in the global context, or locally in the case where the referenced items have  different paths to the current file. 


<div class="grid" markdown>
```json
{
         "resource": "onlyoffice"
}
```

```json
{
        "@context": {
                "resource":{ 
                            "@context": {
                                "@vocab":"http://wcrp-cmip.org/",
                                "@type":"@id"
                            }
                }
        }
}
```