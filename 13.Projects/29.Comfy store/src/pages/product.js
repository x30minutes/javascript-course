//  GLOBAL IMPORTS
import '../toggleSidebar.js';
import '../cart/toggleCart.js';
import '../cart/setupCart.js';

// SPECIFIC IMPORTS
import { addToCart } from '../cart/setupCart.js';
import { singleProductUrl, getElement, formatPrice } from '../utils.js';

// SELECTION
const loading = getElement('.page-loading');
const centerDOM = getElement('.single-product-center');
const pageTitleDOM = getElement('.page-hero-title');
const imgDOM = getElement('.single-product-img');
const titleDOM = getElement('.single-product-title');
const companyDOM = getElement('.single-product-company');
const priceDOM = getElement('.single-product-price');
const colorsDOM = getElement('.single-product-colors');
const descDOM = getElement('.single-product-description');
const cartBtn = getElement('.addToCartBtn');

// LOGIC
//cart product
let productID;

//show product when page loads
window.addEventListener('DOMContentLoaded', async () => {
  const urlID = window.location.search;
  try {
    const response = await fetch(`${singleProductUrl}${urlID}`);
    if (response.status >= 200 && response.status <= 299) {
      const product = await response.json();

      //  grab data
      const { id, fields } = product;
      productID = id;
      const { name, company, price, colors, description } = fields;
      const image = fields.image[0].thumbnails.large.url;

      //  set values
      document.title = `${name.toUpperCase()} | Comfy`;
      pageTitleDOM.textContent = `Home / ${name}`;
      imgDOM.src = image;
      titleDOM.textContent = name;
      companyDOM.textContent = `by ${company}`;
      priceDOM.textContent = formatPrice(price);
      descDOM.textContent = description;
      colorsDOM.innerHTML = colors
        .map((color) => {
          return `<span class="product-color" style="background: ${color}"></span>`;
        })
        .join('');
    } else {
      console.log(response.status, response.statusText);
      centerDOM.innerHTML = `
        <div> 
            <h3 class="error">Sorry, something went wrong</h3>
            <a href="index.html" class="btn">back home</a>
        </div>
      `;
    }
  } catch (error) {
    console.log(error);
  }

  loading.style.display = 'none';
});

cartBtn.addEventListener('click', () => {
  addToCart(productID);
});
