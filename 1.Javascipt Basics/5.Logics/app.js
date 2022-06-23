//Conditional Statemets
// >, <, >=, <=, ==, ===, !=, !===
// else if and !

const value = false;

if (true) {
  console.log("hello world");
}
if (2 > 1) {
  console.log("hello world");
}
if (value) {
  console.log("hello world");
} else {
  console.log("hello people");
}

const num1 = 5;
const num2 = 5;
const result = num1 == num2;

if (num1 > num2) {
  console.log("first number is bigger than second");
} else if (result) {
  console.log("first number equal to second");
} else {
  console.log("second number is bigger than first");
}

// == checks only value
// === checks value and type

const num3 = 6;
const num4 = "6";

console.log(num3 == num4);
console.log(num3 === num4);
console.log(num3 != num4);
console.log(num3 !== num4);

// Logical Operators
// (|| - OR), (&& - AND), (! - NOT)

const name = "peter";
const age = 24;

if (name === "bob" || age === 24) {
  console.log("hello there user");
} else {
  console.log("wrong values");
}

// Switch
// dice values: 1-6

const dice = Math.floor(Math.random() * 7);
switch (dice) {
  case 1:
    console.log("u got 1");
    break;
  case 2:
    console.log("u got 2");
    break;
  case 3:
    console.log("u got 3");
    break;
  case 4:
    console.log("u got 4");
    break;
  case 5:
    console.log("u got 5");
    break;
  case 6:
    console.log("u got 6");
    break;
  default:
    console.log("no dice roll");
    break;
}

//CHALLANGE
const person1 = {
  name: "bob",
  age: Math.floor(Math.random() * 10 + 15),
  status: "resident",
};
const person2 = {
  name: "set",
  age: Math.floor(Math.random() * 10 + 15),
  status: "turist",
};

const test = function (person) {
  if (person.age >= 18 && person.status === "resident") {
    console.log("u got through");
  } else {
    console.log("nah");
  }
};
console.log(person1);
test(person1);
test(person2);

// Loops
// repeatedly run a block of code while condition is true
// while loop

let amount = 10;

while (amount > 0) {
  console.log(`I have ${amount}$ and I am going to the mall`);
  amount--;
}

// do while loop
// code block first, condition second
// runs at least once

let money = 110;

do {
  console.log(`You have ${money}$`);
  money++;
} while (money < 10);

// for loop

for (let i = 0; i < 10; i++) {
  console.log(`The number is ${i}`);
}
