//String properties and methods
//wrapper String Object, don't memorize methods
let text = " Hubert Kulicki";
console.log(text.length);
console.log(text.toLocaleLowerCase());
console.log(text.toLocaleUpperCase());
console.log(text.charAt(0));
console.log(text.charAt(text.length - 1));
console.log(text.indexOf("K"));
console.log(text);
console.log(text.trim()); //gets rid of white spaces in the beginning and end
console.log(text.startsWith("hubert"));
console.log(text.trim().toLocaleLowerCase().startsWith("hubert"));
console.log(text.includes("icki"));
console.log(text.slice(0, 7));
console.log(text.slice(-5)); //gives the end of the string if value is negative

//Template Literals - ES6+
//Backtrick characters `` - above tab (left from one)
//Interpolation ${} - insert expression (value)

const name = "john";
const age = 25;
const sentence = "Hey it's " + name + " and he is " + age + " years old.";
console.log(sentence);
const sentence2 = `Hey it's ${name} and he is ${age} years old. And here is some simple math ${
  4 + 4
}`;
console.log(sentence2);

//Challange
const fullName = function ({ firstName, lastName }) {
  return `${firstName} ${lastName}`.toLocaleUpperCase();
};

console.log(fullName({ firstName: "Hubert", lastName: "Kulicki" }));

//Array Properties and Methods
let names = ["hubert", "igor", "lucyna", "olga", "benny"];

//length
console.log(names.length);
console.log(names[names.length - 1]);

//concat
const lastNames = ["pepper", "onion", "banana", "buritto"];
const allNames = names.concat(lastNames);
console.log(allNames);
//reverse
console.log(allNames.reverse());
//unshift
allNames.unshift("susy");
allNames.unshift("anna");
console.log(allNames);
//shift
allNames.shift();
allNames.shift();
allNames.shift();
console.log(allNames);
//push
allNames.push("susy");
allNames.push("chuj");
console.log(allNames);
//pop
allNames.pop();
allNames.pop();
allNames.pop();
console.log(allNames);
//splice - mutates original array
const specificNames = allNames.splice(2, 3);
console.log(specificNames);
console.log(allNames);

//Arrays and for loop

const names1 = ["anna", "susy", "bob"];
const lastName1 = "burrito";
let newArray = [];

for (let i = 0; i < names1.length; i++) {
  newArray.push(`${names[i]} ${lastName1}`);
}
console.log(newArray);

//Functions, return, if, arrays, for loop
const gas = [20, 40, 100];
const food = [10, 40, 50];

function calculateTotal(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

const gasTotal = calculateTotal(gas);
const foodTotal = calculateTotal(food);
const randomTotal = calculateTotal([200, 4000, 1, 1224321, 12312]);

console.log({
  gas: gasTotal,
  food: foodTotal,
  random: randomTotal,
});

//Reference vs Value
//Primitive Data Types
//String Number, Symbol, Boolean, Undefined, Null,
//Arrays, Functions, Objects = object
//typeof

//when assigning primitive data type value to a variable any changes are made directly to that value, without affecting original value
//when assigning non-primitive data type value to a variable is done by reference so any changes will affect all the references
const number = 1;
let number2 = number;
number2 = 7;
console.log(`the first value is ${number}`);
console.log(`the second value is ${number2}`);
let person = { name: "bob" };
let person2 = person;
let person3 = { ...person }; //copying the values instead of pointing to object
person2.name = "susy";
console.log(`the name of 1st person is ${person.name}`);
console.log(`the name of 2nd person is ${person2.name}`);
console.log(`the name of 3rd person is ${person3.name}`);

//Null and Undefined
//both represent "no value"

//undefined - "javascript can not find value for this"

//variable without value
//missing function arguments
//missing object properties

//null - "developer sets the value"
let number3 = 20 + null; // 20 + 0
console.log(number3);
let number4 = 20 + undefined;
console.log(number4); //NaN

//Truthy and Falsy
// "", '', ``, 0, -0, NaN, false, null, undefined
const bool1 = true;
const bool2 = 2 > 1;
if (bool1) {
  console.log(`Hey it works!`);
}
if (bool2) {
  console.log(`it also works`);
}

//Altough value is not a boolean, but it is either truthy or falsy, string with at least 1character is truthy, with 0 is falsy
const text2 = "";
if (text2) {
  console.log(`value is truthy`);
} else {
  console.log(`value falsy`);
}

//unary operator - typeof
//binary operator = assignment
//ternary operator
//condition ? (runs if true) : (runs if false)
const value = 2 > 1;
if (value) {
  console.log(`value is true`);
} else {
  console.log(`value is false`);
}
value ? console.log(`true`) : console.log(`false`);

//Global Scope vs Local Scope
//any variable outside code block {} is said to be in Global Scope
//can be accessed anywhere in the program
//Gotchas: name collisions, modify by mistake
//Local Scope cannot be accessed from outside code blocks
//if - NOT VAR

//Variable lookup
//{} - code block
const globalNumber = 5;
function add(num1, num2) {
  return num1 + num2 + globalNumber;
}
console.log(add(3, 4));

//Callback Functions, Higher Order Functions, Functions as First Class Object/Citizens
//Functions are first class objects - stored in a variable(expression), passed as an argument to another function, return from function(closure)

//Higher Order function - accepts another function as an argument or returns another function as a result

//Callback Function - passed to another function as an argument and executed inside that function
function morning(name) {
  return `Good morning ${name.toUpperCase()}`;
}

function greet(name, cb) {
  const myName = "john";
  console.log(`${cb(name)}, my name is ${myName}`);
}

greet("bob", morning);
