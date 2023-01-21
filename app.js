/* Imports */
import { getBeanieBabies } from './fetch-utils.js';
/* Get DOM Elements get zodiac*/
/* CSS selector goes here, anything you can point to in CSS is a valid argument in querySelector */
// const beanieBabiesEl = document.querySelector('.beanie-babies');
// const selectEl = document.querySelector('select');
// const buttonEl = document.querySelector('button');
// const formEl = document.querySelector('form');

/* State */
// i add Data to this name so we don't confuse it for the DOM element beanieBabiesEl
let beanieBabies = [];

/* Events */
window.addEventListener('load', async () => {
    // 1) request list of beanie babies
    const beanies = await getBeanieBabies();

    beanieBabies = beanies;
    console.log(beanies);
    // 2 append beanie babies els to section (using fetched data) (displayBeanieBabies())

    // displayBeanieBabies();

    // const signs = await getZodiac();

    // for (let sign of signs) {
    //     const optionEl = document.createElement('option');

    //     optionEl.value = sign.name;
    //     optionEl.textContent = sign.name;

    //     selectEl.append(optionEl);
    // }
});

// old event listening on click
// buttonEl.addEventListener('click', async () =>{
//     const filteredBeanies = await getBeanieBabies(selectEl.value);

//     beanieBabiesData = filteredBeanies;

//     displayBeanieBabies();
// });

// new event listening on form submit
// formEl.addEventListener('submit', async (e) => {
//     // just how it is--forms don't work without this line
//     e.preventDefault();

//     const filteredBeanies = await getBeanieBabies(selectEl.value);

//     beanieBabiesData = filteredBeanies;

//     displayBeanieBabies();
// });

// /* Display Functions */

// function displayBeanieBabies() {
//     beanieBabiesEl.textContent = '';

//     for (let beanieBaby of beanieBabiesData) {
//         const beanieBabyEl = document.createElement('div');
//         const wordsEl = document.createElement('p');
//         const imgEl = document.createElement('img');

//         wordsEl.textContent = `${beanieBaby.title} is a ${beanieBaby.astroSign} and was born on ${beanieBaby.birthday}`;
//         imgEl.src = beanieBaby.image;

//         beanieBabyEl.classList.add('beanie-baby');

//         beanieBabyEl.append(wordsEl, imgEl);

//         beanieBabiesEl.append(beanieBabyEl);
//     }
// }
