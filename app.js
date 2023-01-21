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

selectionFormEl.addEventListener('submit', async (e) => {
    e.preventDefault();

    const filteredBeanies = await getBeanieBabies(selectEl.value);

    beanieBabiesData = filteredBeanies;

    displayBeanieBabies();
});

/* Display Functions */

function displayBeanieBabies() {
    beanieBabiesEl.textContent = '';

    for (let beanieBaby of beanieBabiesData) {
        const beanieBabyEl = document.createElement('div');
        const wordsEl = document.createElement('p');
        const imgEl = document.createElement('img');

        wordsEl.textContent = `${beanieBaby.title} is a ${beanieBaby.astroSigns} and was born on ${beanieBaby.birthday}`;
        imgEl.src = beanieBaby.image;

        beanieBabyEl.classList.add('beanie-baby');
        beanieBabyEl.append(wordsEl, imgEl);
        beanieBabiesEl.append(beaniebabyEl);
    }
}

function displayAstroSigns() {}

// (don't forget to call any display functions you want to run on page load!)
