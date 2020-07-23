# Tails coding test

## Specification

* Build an API that returns stores from the `stores.json` file, based on a given search string and unit test it. For example, return "Newhaven" when searching for "hav". Make sure the search allows to use both city name and postcode.
* Order the results by matching postcode first and then matching city names. For example, "br" would have "Orpington" as the 1st result as its postcode is "BR5 3RP". Next would be "Bracknell", "Broadstairs", "Tunbridge_Wells", and "Brentford"
* Using your favourite frontend framework (we would prefer Vue) on the user-facing side:
  * Build a frontend that renders a text field for the query and the list of stores that match it
  * Add suggestions to the query field as you type, with a debounce effect of 100ms and a minimum of 2 characters
  * Limit the results to 3 and lazy load the rest on page scroll


## System Requirements

To run this project you will need to have Python 3, pipenv and npm installed

## How to run this code

Clone the repository and go into the directory where the package has been placed

#### To run the server

Open a new terminal

Create a virtual environment
```
  yarn setup-api
```

Run the flask server

```
  flask run
```

To close the server and exit the virtual environment

```
  Press CTRL+C 
  exit
```

#### To run the frontend

Open a new terminal

Install dependencies
```
  yarn install-dependencies
```

Run the frontend server

```
  yarn start-frontend
```

## How to run tests

#### To run the server tests

Follow the initial steps to start the virtual environment

To run the tests

```
  pipenv run pytest
```

```
  Press CTRL+C 
  exit
```

#### To run the frontend

Follow the initial steps to install dependencies

To run the tests

```
  yarn test-frontend
```
