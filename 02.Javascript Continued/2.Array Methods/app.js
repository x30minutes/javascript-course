//Powerfull Array Methods
//forEach, map, filter, find, reduce
//Iterate over array - no for loop required
//Accept CALLBACK function as an argument, calls Callback against each item in an array. Reference Item in the Callback Parameter

//forEach
//does not return new array

const people = [
  { name: "bob", age: 20, position: "developer", id: 1, salary: 200 },
  { name: "peter", age: 25, position: "designer", id: 2, salary: 300 },
  { name: "susy", age: 30, position: "the boss", id: 3, salary: 500 },
  { name: "anna", age: 35, position: "the boss", id: 4, salary: 500 },
];

function showPerson(person) {
  console.log(person.position.toUpperCase());
}
// people.forEach(showPerson);
people.forEach(function (person) {
  console.log(person.position);
});

//map
//does return a new array
//does not change size of original array
//uses values from original array when making new one
const ages = people.map(function (person) {
  return person.age;
});
const newPeople = people.map(function (person) {
  return {
    firstName: person.name.toUpperCase(),
    oldAge: person.age + 20,
  };
});

const namess = people.map(function (person) {
  return `<h1>${person.name}</h1>`;
});

console.log(ages);
console.log(newPeople);
console.log(namess);

document.body.innerHTML = namess.join("");

//filter
//does return a new array
//can manipulate the size of new array
//returns based on condition
const youngPeople = people.filter(function (person) {
  return person.age <= 25;
});
console.log(youngPeople);

const developers = people.filter(function (person) {
  return person.position === "developer";
});
console.log(developers);

//find
//returns single instance - (in this case object)
//returns first match, if no match - undefined
//great for getting unique value
const person4 = people.find(function (person) {
  return person.id === 3;
});
console.log(person4);

//reduce
//iterates, callback function
//reduces to a single value - number, array, object
//1 parameter ('acc') - total of all calculations
//2 parameter ('curr') - current iteration/value
const total = people.reduce(function (acc, curr) {
  console.log(`total ${acc}`);
  console.log(`current money: ${curr.salary}`);
  acc += curr.salary;
  return acc;
}, 0);

console.log(total);
