// PROMISES - Pending, Resolved, Rejected
// then catch - pass another callback

const btn1 = document.querySelector('.btn1');
const promise = new Promise((resolve, reject) => {
  let value = false;
  if (value) {
    resolve(`hey, value is true`);
  } else {
    reject(`there was an error, value is false`);
  }
});

console.log(promise);
promise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

const container = document.querySelector('.img-container');
const url = 'https://source.unsplash.com/random';

btn1.addEventListener('click', () => {
  loadImage(url)
    .then((data) => container.appendChild(data))
    .catch((err) => console.log(err));
});

function loadImage(url) {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.addEventListener('load', () => {
      resolve(img);
    });
    img.addEventListener('error', () => {
      reject(new Error(`Failed to load image from the source: ${url}`));
    });
    img.src = url;
    img.alt = `random image`;
  });
}

//PROMISES - DOM EXAMPLE
const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');
const btn2 = document.querySelector('.btn2');

btn2.addEventListener('click', () => {
  addColor(1000, heading1, 'red')
    .then(() => addColor(2000, heading2, 'green'))
    .then(() => addColor(1000, heading3, 'blue'))
    .catch((err) => console.log(err));
});

function addColor(time, element, color) {
  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color;
        resolve();
      }, time);
    } else {
      reject(new Error(`There is no such element: ${element}`));
    }
  });
}
