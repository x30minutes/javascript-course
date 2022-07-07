//Make soup
//boil water 10min
//chop carrots
//add carrots boil for 5min
//chop onion
//add onion, boil for 5min
//BROWSER!!! Fetch Data, Get Geolocation, setTimeout, setTimer, etc.

boilWater(1000);
console.log(`chop carrots`);

function boilWater(time) {
  console.log(`boiling...`);
  setTimeout(() => {
    console.log(`done`);
  }, time);
}

//callbacks, promises, async/await

function boilCallback() {
  console.log(`boiling...`);
  setTimeout(() => {
    console.log('done');
    console.log(`add carrots`);
    setTimeout(() => {
      console.log(`carrots are done`);
      console.log(`add onions`);
      setTimeout(() => {
        console.log(`onion done`);
      }, 5000);
    }, 5000);
    console.log(`chop onion`);
  }, 10000);
}

boilCallback(); //callback hell
console.log(`chop carrots`);

//callback hell - DOM example
const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  setTimeout(() => {
    heading1.style.color = 'red';
    setTimeout(() => {
      heading2.style.color = 'green';
      setTimeout(() => {
        heading3.style.color = 'blue';
      }, 1000);
    }, 1000);
  }, 1000);
});
