// IMPORTS
import fetchFollowers from './utils/fetchFollowers.js';
import displayFollowers from './utils/displayFollowers.js';
import paginate from './utils/paginate.js';
import displayButtons from './utils/displayButtons.js';

// SELECT DOM ELEMENTS
const title = document.querySelector('.section-title h1');
const btnContainer = document.querySelector('.btn-container');

// VARIABLES
let index = 0;
let pages = [];

// //  LOGIC
const setupUI = () => {
  displayFollowers(pages[index]);
  displayButtons(btnContainer, pages, index);
};

//  INITIALIZATION
const init = async () => {
  const followers = await fetchFollowers();
  title.textContent = `Pagination`;
  pages = paginate(followers);
  setupUI();
};

//  EVENT LISTENERS
btnContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('btn-container')) return;
  if (e.target.classList.contains('page-btn')) {
    index = parseInt(e.target.dataset.index);
  }
  if (e.target.classList.contains('next-btn')) {
    index++;
    if (index > pages.length - 1) index = 0;
  }
  if (e.target.classList.contains('prev-btn')) {
    index--;
    if (index < 0) index = pages.length - 1;
  }
  setupUI();
});

window.addEventListener('load', init);
