//  GLOBAL IMPORTS
import '../toggleSidebar.js';
import '../cart/toggleCart.js';
import '../cart/setupCart.js';

//  FILTER IMPORTS
import setupSearch from '../filters/search.js';
import setupCompanies from '../filters/setupCompanies.js';
import setupPrice from '../filters/setupPrice.js';

//  SPECIFIC IMPORTS
import { store, setupStore } from '../store.js';
import display from '../displayProducts.js';
import { getElement } from '../utils.js';
import fetchProducts from '../fetchProducts.js';

const loading = getElement('.page-loading');

const init = async () => {
  if (store.length < 1) {
    const products = await fetchProducts();
    setupStore(products);
  }

  display(store, getElement('.products-container'));
  setupSearch(store);
  setupCompanies(store);
  setupPrice(store);
  loading.style.display = 'none';
};
init();
