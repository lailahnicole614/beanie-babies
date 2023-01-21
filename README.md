# Supabase Beanie Baby App

Build a beanie babies search page

See [demo app](https://dancing-hamster-a56925.netlify.app/) for an example

## Setup

### Starter Template

Use [this template](https://github.com/alchemycodelab/web-template) for this deliverable.

### Supabase

#### `<script>`

Add in the following `<script>` tag to `index.html` for supabase functionality:

```html
<!-- js -->
<script
    defer
    src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@1.35.7/dist/umd/supabase.min.js"
></script>
<!-- goes before this one: -->
<script type="module" src="app.js"></script>
```

#### `fetch-utils.js`

Create a `fetch-utils.js` file at the root of your project. Use the following setup for
creating a supabase client to the Beanie Babies project:

```js
const SUPABASE_URL = 'https://gxwgjhfyrlwiqakdeamc.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjQxMTMxMiwiZXhwIjoxOTUxOTg3MzEyfQ.PHekiwfLxT73qQsLklp0QFEfNx9NlmkssJFDnlvNIcA';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
// export async functions that fetch data
```

Here's how we fetch all beanie babie from the beanie_babies table, assuming you've copied the above code correctly:

```js
let { data, error } = await client.from('beanie_babies').select('*');
```

Here's a special this-project-only way of get a list of astrological signs:

```js
let { data, error } = await client.from('beanie_baby_astro_signs').select('*');
```

## Data Model

Here is the model for the `beanie_babies` table:

![data model 2](./data-model-2.png)
![data model 1](./data-model-1.png)

In addition to the table, there are two views you can use to get attributes for dropdown lists:

| Attribute      | View name                | Object structure              |
| -------------- | ------------------------ | ----------------------------- |
| astrology sign | `beanie_baby_astroSigns` | `{ name: 'Leo' }`             |
| theme          | `beanie_baby_themes`     | `{ name: 'Attic Treasures' }` |

## Work Incrementally

Build out your project step by step

1. Display list from fetched data
1. Populate dropdown options from fetched data
1. Apply search criteria to fetched data

Search on:

| Attribute | Search                        |
| --------- | ----------------------------- |
| astroSign | `.eq('astroSign', astroSign)` |
| theme     | `.eq('theme', theme)`         |

Note that the options for astroSign and theme `<select>` are populated dynamically from data retrieved from supabase, you must hard code the All option: `<option>All</option>`.

## Rubric

The following is required for your assignment to be graded:

-   PR open from `dev` to `main`
-   PR Passes CI (lint + tests)
-   PR preview on netlify
-   At least 3 commits, one for each rubric task below

| Tasks...                                                | **20** |
| ------------------------------------------------------- | ------ |
| Display list of 100 Beanies on page load                | 7      |
| Populate astroSign or Theme dropdown from supabase data | 7      |
| Search Beanies by an attribute shows filtered list      | 6      |

**STRETCH:**

-   Add input to form and search by name
    -   (hint: you will use `.ilike` instead of .eq. Example: `query.ilike('title', `%${title}%`)` )
-   Display counts of search results
-   Add more search controls based on the beanie-baby data

**SUPER STRETCH**

Implement infinite scrolling:

1. Add a `let page = 1;` variable to your state
1. Add a page parameter to your getBeanies fetch function and use the `.range` modifier to select a range corresponding to the page.
1. Use a [intersection observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) to attach an event listener to the last element in the list.
1. When that element scrolls into view, increment the page and do another search, but don't clear the list element!
1. When the actual search form changes, you'll need to clear the list container and set the page back to `1`
