# \<com-eng\>



## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed. Then run `polymer serve` to serve your application locally.

## Viewing Your Application

```
$ polymer serve
```

## Building Your Application

```
$ polymer build
```

This will create a `build/` folder with `bundled/` and `unbundled/` sub-folders
containing a bundled (Vulcanized) and unbundled builds, both run through HTML,
CSS, and JS optimizers.

You can serve the built versions by giving `polymer serve` a folder to serve
from:

```
$ polymer serve build/bundled
```

## Running Tests

```
$ polymer test
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.

# API Endpoints
URL: https://gabezjlby1.execute-api.us-west-2.amazonaws.com/Hacktest/
- GET
- POST
- OPTIONS

URL: https://gabezjlby1.execute-api.us-west-2.amazonaws.com/Hacktest/listissues
- GET
- OPTIONS

GET / only has hard coded demo data GET /listissues uses the DB for dummy data

Refer to post-model.json for POST method body request information