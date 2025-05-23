# Creating a dispatch action

A dispatch action is one where a call to the github API triggers an action, and consequently a script. 
Our usage case for CMIP6Plus is the submission of new data from a web form or API to update a file. 

## How to  submit

Here we have an event payload - this contains any data we want to send. Here the entries we will add to a table are contained in the `jsondata` field. 




### Javascript
```js


async function triggerWorkflow() {
  const repoOwner = owner;
  const repoName = repo;
  const personalAccessToken = githubToken;

  const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/dispatches`;
  console.log(apiUrl)
  const eventPayload = {
    event_type: 'source_id',
    client_payload: {
      record: jsondata ,
      author:  'CMIP-IPO Automation',
      name: myrecord

      ...  insert other fields here 

    },
  };

  const options = {
    method: 'POST',
    headers: {
      'Accept': 'application/vnd.github.everest-preview+json',
      'Authorization': `token ${personalAccessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(eventPayload),
  };
```

### Python 

```python

import requests
import json

async def trigger_workflow():
    repo_owner = owner
    repo_name = repo
    personal_access_token = github_token

    api_url = f"https://api.github.com/repos/{repo_owner}/{repo_name}/dispatches"
    print(api_url)

    event_payload = {
        "event_type": "source_id",
        "client_payload": {
            "record": jsondata,
            "author":  'CMIP-IPO Automation',
            "name": my_record
        }
    }

    headers = {
        "Accept": "application/vnd.github.everest-preview+json",
        "Authorization": f"token {personal_access_token}",
        "Content-Type": "application/json"
    }

    response = requests.post(api_url, headers=headers, data=json.dumps(event_payload))

    if response.status_code == 204:
        print("Workflow triggered successfully.")
    else:
        print(f"Failed to trigger workflow. Status code: {response.status_code}")
        print(response.text)

# Call the function
await trigger_workflow()

```


## Action script
The action script is contained in the YML file under your `.github/workflows` folder. 
To trigger a new dispatch and read the event payload we use the following script. 

```yaml
name: Source_ID_dispatch

on:
  repository_dispatch:
    types:
      - source_id

jobs:
  process-payload:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Repository
        uses: actions/checkout@v2

      - name: Print Payload
        run: |
          echo "Received Payload:"
          echo "Key: ${{ github.event.client_payload.key }}"
          echo "json: ${{ github.event.client_payload.record }}"
          echo "author: ${{ github.event.client_payload.author }}"
          echo "source: ${{ github.event.client_payload.name }}"


```

Accessing the values can be done using `github.event.client_payload`.

We can now feed these into a python script of our choosing: 
```yaml
       - name: Run Python Check
         id: 'run-python-script'
         run: |
          
           python .github.lib/source_id.py -k ${{ github.event.client_payload.key }} -r ${{ github.event.client_payload.record }}
          
         env:
           PYTHON_SCRIPT_OUTPUT: ${{ steps.run-python-script.outputs.stdout }}
           PYTHON_SCRIPT_ERROR: ${{ steps.run-python-script.outputs.stderr }}
         continue-on-error: false
```

