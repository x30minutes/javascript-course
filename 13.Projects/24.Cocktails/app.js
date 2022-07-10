// IMPORTS
import presentDrinks from './src/presentDrinks.js';
import './src/searchForm.js';

//DATA
const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

//LOGIC
window.addEventListener('DOMContentLoaded', () => {
  presentDrinks(URL);
});
