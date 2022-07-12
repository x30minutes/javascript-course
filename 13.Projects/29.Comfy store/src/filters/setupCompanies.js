import { getElement } from '../utils.js';
import display from '../displayProducts.js';

const setupCompanies = (store) => {
  const companiesDOM = getElement('.companies');
  const searchInput = getElement('.search-input');

  let companies = ['all', ...new Set(store.map((product) => product.company))];

  companiesDOM.innerHTML = companies
    .map((company) => {
      return `<button class="company-btn">${company}</button>`;
    })
    .join('');
  companiesDOM.addEventListener('click', function (e) {
    const element = e.target;
    if (element.classList.contains('company-btn')) {
      let newStore = [];
      if (element.textContent === 'all') {
        newStore = [...store];
      } else {
        newStore = store.filter(
          (product) => product.company === element.textContent
        );
      }
      display(newStore, getElement('.products-container'), true);
      if (searchInput.value) searchInput.value = null;
    }
  });
};

export default setupCompanies;
