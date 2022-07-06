// Array.from and Array.of - NOT ON THE PROTOTYPE

// Array.of
// of creates a new Array instance from a variable number of arguments.

const example = ["one", "two", "three"];
// console.log(example);
// console.log(example.map);
// console.log(example.from);
// console.log(example.of);

const friends = Array.of("john", 2, true);
console.log(friends);

// Array.from - returns Array Object from any object with a length property or an iterable object
// 'from' turns array-like/ish into array - string, nodeList, Set

const udemy = "udemy";
console.log(Array.from(udemy));

function countTotal() {
  // console.log(arguments);
  let total = Array.from(arguments).reduce(
    (total, currNum) => (total += currNum),
    0
  );
  console.log(total);
}

countTotal(67, 89, 54, 22, 31, 12);

//DOM Elements (NodeList)
const p = document.querySelectorAll("p");
const result = document.getElementById("result");
const second = document.getElementById("second");

let newText = Array.from(p);
newText = newText.map((item) => `<span>${item.textContent}</span>`).join(" ");
result.innerHTML = newText;

//second argument of Array.from is a map method
second.innerHTML = Array.from(document.querySelectorAll("p"), (item) => {
  return `<span>${item.textContent}</span>`;
}).join(" ");

//==========================
// find - gets specific item
// findIndex - gets index of the item
// every - every item in the array
// some - at least one item

const people = [
  { id: 1, name: "john" },
  { id: 2, name: "peter" },
  { id: 3, name: "anna" },
];
const grades = ["A", "B", "A", "B", "C"];
const goodGrades = ["A", "B", "A", "B"];

// const anna = people.filter(person => person.name === 'anna');
// console.log(anna);
// console.log(anna[0].name);
// console.log(anna[0].id);

//find
const anna = people.find((person) => person.name === "anna");
console.log(anna);
console.log(anna.name);
console.log(anna.id);

//findIndex
const person = people.findIndex((item) => item.id === 3);
console.log(person);
const newPeople = people.slice(0, person);
console.log(newPeople);

//every
const allGoodGrades = grades.every((grade) => grade !== "C");
console.log(allGoodGrades);

//some
const oneBadGrade = grades.some((grade) => grade === "C");
console.log(oneBadGrade);

//Array includes() - checks if the item is an array
//useful in the conditional statements

const groceries = ["milk", "bread", "meat"];

const randomItem = "milk";

// const isIncluded = groceries.includes(randomItem, 1);
// console.log(isIncluded);

if (groceries.includes(randomItem)) {
  console.log(`Yeah! It's on the list`);
}
