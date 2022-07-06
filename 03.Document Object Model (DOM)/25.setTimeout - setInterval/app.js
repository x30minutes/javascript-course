/*
setTimeout - runs function once after specific time

- pass function reference
- duration in ms (1000ms = 1second)
- default 0, will cover more extensively in async/await section
- returns unique identifier
- cleatTimeout to cancel
- on window object
*/

function sayHello() {
  console.log("hello john");
}

// setTimeout(sayHello, 1000);

// will not work
// setTimeout(sayHello(), 1000);

//alternative approach, ES6 arrow functions
// setTimeout(function () {
//   console.log(`hello shithead`);
// }, 2000);

function showScore(name, score) {
  console.log(`hello ${name}, your score is ${score}`);
}

// setTimeout(showScore, 1000, "shit", 100);

const firstID = setTimeout(showScore, 1000, "shit", 100);
const secondID = setTimeout(showScore, 1000, "shitter", 102);
console.log(firstID);
console.log(secondID);

clearTimeout(firstID);

/*
setInterval - runs function repeatedly, at speciic intervals

- pass function reference
- duration in ms (1000ms = 1second)
- default 0, will cover more extensively in async/await section
- return unique identifier
- clearInterbal to cancel
*/

const pierwszeID = setInterval(showScore, 1000, "shit", 212);
const drugieID = setInterval(showScore, 5000, "shewit", 212);

clearInterval(pierwszeID);
