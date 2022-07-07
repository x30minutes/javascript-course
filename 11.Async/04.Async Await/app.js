// async/await
// must have async
// await waits till promise is settled
// error handling - try/catch

// async function someFunction (){
//     await
// }

// const otherFunction = async() => {
//     await
// }

const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');
const btn1 = document.querySelector('.btn1');

btn1.addEventListener('click', async () => {
  displayColor().then((data) => console.log(data));
});

//async is making a promise by default so we can use .then() after invoking function
async function displayColor() {
  try {
    const first = await addColor(1000, heading1, 'red');
    await addColor(2000, heading2, 'green');
    await addColor(1000, heading3, 'blue');
    console.log(first);
  } catch (error) {
    console.log(error);
  }
  return `hello`;
}

function addColor(time, element, color) {
  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color;
        resolve(`sup`);
      }, time);
    } else {
      reject(new Error(`There is no such element: ${element}`));
    }
  });
}