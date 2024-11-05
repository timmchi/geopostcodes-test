# GeoPostcodes' frontend technical test

Using React, preferably in Typescript, create the following pages: landing page and data explorer.
Note that it doesn't have to be perfect replica: if you want you can propose improvements.

You will find all the necessary images in the [images](./images) folder.

## What must be delivered

* The project's code source: it must be possible to start the project with a command like ```npm start```.
* The compiled files, ready to use in a website.

## Landing page

Reproduce the following landing page: [landing page](landing_page_screenshot.png).

Focus on the layout: the elements do not need to be interactive except for the data explorer which should point the to the page described in the next section.

## Data explorer

Reproduce the following data explorer page: [data explorer page](data_explorer_screenshot.png).

The data for the list of countries comes from this file: [data.json](./data/countries.json).
You can access the raw file using this link: <https://raw.githubusercontent.com/GeoPostcodes/technical-test/main/front-end/data/countries.json>

Your code must dynamically query this file to get the data in an asynchronous way.
The content of the "data set" panel can be hardcoded.
Each country points to a link ```/data-explorer/$url``` where the value of ```$url``` comes from the property ```url```.

As you can see, the countries are grouped by continent. They must be sorted using the property ```continentCode```.
