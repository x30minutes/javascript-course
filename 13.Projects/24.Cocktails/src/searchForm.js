//IMPORTS
import get from './getElement.js';
import presentDrinks from './presentDrinks.js';

//DATA
const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const form = get('.search-form');
const input = get('[name="drink"]');

//LOGIC
form.addEventListener('keyup', function (e) {
  e.preventDefault();
  if (!input.value) return;
  presentDrinks(`${baseURL}${input.value}`);
});
