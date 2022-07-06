// Spread Operator ...
// Allows an iterable to spread/expand individually inside receiver
// Split into single items and copy them

const udemy = 'udemy';
const letters = [...udemy];
console.log(letters);

const boys = ['john', 'peter', 'bob'];
const girls = ['susan', 'anna'];
const bestFriend = 'arnold';

const friends = [...boys, ...girls, bestFriend];
console.log(friends);

const newFriends = friends; //referencing same place in memory
newFriends[0] = 'karina';
console.log(newFriends);
console.log(friends);

const newerFriends = [...friends]; //copy to new array
newerFriends[0] = 'amanda';
console.log(newerFriends);
console.log(friends);

// ES2018 - ES8
const person = {name: 'john', job: 'developer'};
const newPerson = {...person, city: 'chicago', name: 'peter'};
console.log(person);
console.log(newPerson);

// DOM Elements
const headings = document.querySelectorAll('h1');
const result = document.getElementById('result');
const text = [...headings].map(item => `<span>${item.textContent}</span>`).join(' ');

result.innerHTML = text;

// FUNCTION ARGUMENTS
console.log(Math.max(4,5,6,7,88));
const numbers = [23,45,56,57,68,79,9056,234,123,214,321];
console.log(Math.max(...numbers));

const eddy = ['eddy','jones']

const sayHello = (name, lastName) => {
    console.log(`Hello ${name} ${lastName}`);
}

sayHello(...eddy);