// Fetch built-in
// promise based
// XHR is not wrong, you can complete all our upcoming examples and projects using XHR. Fetch is just alternative approach that has simpler and cleaner syntax. The end result is the same. Still get data dynamically, behind the scenes.

const url = './api/people.json';
const btn = document.querySelector('.btn');

// const response = fetch(url);
// console.log(response);

// fetch(url)
//   .then((response) => {
//     // response object
//     // useful properties and methods
//     // console.log(response);
//     // convert response into JSON data
//     // returns promise
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

// fetch(url)
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// // use fetch in DOM
// btn.addEventListener('click', () => {
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       displayItems(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// // Use async/await
btn.addEventListener('click', async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayItems(data);
  } catch (error) {
    console.log(error);
  }
});

//function
const displayItems = (items) => {
  const displayData = items
    .map((item) => {
      const { name } = item;
      return `<p>${name}</p>`;
    })
    .join('');
  const element = document.createElement('div');
  element.innerHTML = displayData;
  document.body.appendChild(element);
};
