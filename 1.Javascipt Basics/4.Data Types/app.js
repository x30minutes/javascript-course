// Data Types - 7 total
// Primitive - String, Number, Boolean, Null, Undefined, Symbol
// Object - Arrays, Functions, Objects

//typeof - operator (typeof variable) (typeof value)

//String
const text = "some text";
//Number
const number = 45;
//Boolean
let value1 = true;
let value2 = false;
//Null
const result = null;
//Undefined
let name;
//Symbol(ES6)

console.log(typeof text); //string
console.log(typeof "hello world"); //string
console.log(typeof true); //boolean
console.log(typeof number); //number
console.log(typeof value1); //boolean
console.log(typeof value2); //boolean
console.log(typeof result); //object
console.log(typeof name); //undefined

//Arrays, Function and Objects
//Arrays - [], 0 index based

const friend1 = "anna";
const friend2 = "joanna";
const friend3 = "annani";
const friend4 = "ananta";

const friends = ["anna", "joanna", "annani", "ananta", 45, undefined, null];
friends[4] = "bob";
console.log(friends);
console.log(friends[4]);

//CHALLANGE
const fruits = ["apple", "bannana", "pear", "berry", "melon", 20];
const var1 = fruits[0];
fruits[fruits.length - 1] = "kiwi";
console.log(fruits[0]);
console.log(fruits);

//Functions - declare, invoke
//params - when declare/define
//placeholders, local vars
//arguments - when invoke/call/run
//use vars/values, multiple params, undefined

function hello(name) {
  //logic
  console.log(`Hello there ${name}`);
}
hello("Bob");
hello("Anna");
hello("Susy");

//return
//default undefined, shortcuts, ignores after
//1 inch = 2.54cm

const wallHeight = 80;

function calculate(value) {
  return value * 2.54;
}

const width = calculate(100);
const height = calculate(wallHeight);
const dimensions = [width, height];

console.log(dimensions);

//expressions - another way define a function
//create a variable assign to FUNCTION (not value), user var
//diff - hoisting, use - arrow function, libraries

//function definition/declaration
function addValues(num1, num2) {
  return num1 + num2;
}

const firstValue = addValues(3, 4);
const secondValue = addValues(12, 34);
//function expression
const add = function (num1, num2) {
  return num1 + num2;
};
const thirdValue = add(5, 6);
const values = [firstValue, secondValue, thirdValue, add(8, 9)];
console.log(values);

//CHALLLANGE
//1. create "calculateTotal" function
//2. add two parameters subTotal, tax
//3. return sum of parameters

//4. create 3 vars "order1", "order2", "order3"
//5. call calculateTotal, pass in some values and assign result to each other
//6. log all three orders
//7. refactor "calculateTotal" to function expression

const calculateTotal = function (subTotal, tax) {
  return subTotal + tax;
};

const order1 = calculateTotal(10, 2);
const order2 = calculateTotal(20, 12);
const order3 = calculateTotal(120, 22);

console.log(order1, order2, order3);

//Objects - key/value pairs methods
//dot notation

const person = {
  name: "Hubert",
  lastName: "Kulicki",
  age: 40,
  education: false,
  married: true,
  siblings: ["anna", "susan", "peter"],

  greeting() {
    console.log("Hello my name is " + this.name);
  },
};

const age = person.age;
console.log(age);
person.greeting();
person.name = "bob";
person.greeting();

//CHALLANGE
const car = {
  make: "Honda",
  model: "Civic",
  year: 2012,
  colors: ["white", "blue"],
  hybrid: false,

  drive() {
    console.log("We drive now bitch");
  },

  stop() {
    console.log("Police got us bitch");
  },
};

console.log(car.make);
console.log(car.colors[1]);
car.drive();
car.stop();
