/* Imports */
import { getBeanieBabies, getSignOption } from './fetch-utils.js';
/* Get DOM Elements */
const beanieBabiesEl = document.querySelector('.beanie-babies');
//dropdown and button
const selectEl = document.querySelector('select');
const buttonEl = document.querySelector('button');
const selectionFormEl = document.querySelector('selection-form');

/* State */
let beanieBabies = [];
let astroSigns = [];

/* Events */
window.addEventListener('load', async () => {
    const response = await getBeanieBabies();

    beanieBabiesData = beanies;

    displayBeanieBabies();

    const signs = await getSignOption();

    for (let sign of signs) {
        const optionEl = document.createElement('option');

        optionEl.value = sign.name;
        optionEl.textContent = sign.name;

        selectEl.append(optionEl);
    }
});

selectionForm.addEventListener('submit', () => {});
/* Display Functions */

function displayBeanieBabies() {}

function displayAstroSigns() {}

// (don't forget to call any display functions you want to run on page load!)
