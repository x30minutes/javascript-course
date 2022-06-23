//Variable - Most basic building block
//Variables - Store, Access, Modify === Value
//Declare, Assignment Operator, Assign Value

let name = "john shrimp shrimp taco the 6th";
console.log(name);
//some code here

//Assign value later, modify existing value
let address, zip, state;
address = "101 main street";
zip = "60612";
state = "CA";
console.log(address, zip, state);
console.log(address);

name = "fish buritto";
console.log(name);

//RULES OF NAMING VARIABLES
// can contain digits, letters, underscore, $
// must start with letter, $ or _

// no keyword
// cannot start with number

// case sensitive - fullname vs Fullname

// camelCase or underscore

//LET VS CONST VS VAR

//using var
var value = "some value";

//using let
let myName = "Hubert";

// using const (CONSTANT) - can't re-assign
const lastName = "Kulicki";

console.log(value);
console.log(myName);
console.log(lastName);

//CHALLANGE

let firstName, last_name;
firstName = "Hubert";
last_name = "Kulicki";
let address1 = "main street";
address1 = "first street";
console.log(firstName, lastName, address1);

//String Concatenation - combine string values
// `` - backtics (template strings) easier option

const fullName = firstName + " " + lastName;
console.log(fullName);
console.log("Hello there, your full name is: " + firstName + " " + lastName);
console.log(`Hello there, your full name is: ${firstName} ${lastName}`);

const website = "google";
const url = "https://www." + website + ".com";
console.log(url);

//CHALLANGE
const street = "Nyska";
const coutry = "Poland";
const fullMailingAddress = street + " " + coutry;
console.log(fullMailingAddress);

//Numbers
//Loosely Typed = don't declare type

const number = 23.5;
const number2 = 3.456;
const number3 = 2.4452;

const add = number + number2;
const sub = number - number2;
const mult = number * number2;
const div = number / number2;

console.log(number);
console.log(add);
console.log(sub);
console.log(mult);
console.log(div);

// +=, -=, /=, *=, ++, --, %
//Modulus (%) operator returns the remainder after integer division

let number4 = 40;
number4 += 5;
number4 += 5;
number4 += 5;
number4 += 5;
number4 -= 5;
number4++;

const slices = 10;
const children = 4;
const amount = slices % children;

console.log(number4);
console.log(amount);

//CHALLANGE
const score1 = Math.floor(Math.random() * 100);
const score2 = Math.floor(Math.random() * 100);
const score3 = Math.floor(Math.random() * 100);
const totalScore = score1 + score2 + score3;
const averageScore = totalScore / 3;
console.log(score1, score2, score3, totalScore, averageScore);

const plates = 20;
const people = 7;
let remainingPlates = plates % people;
remainingPlates++;
const challangeMessage = `There are ${remainingPlates} plates available`;
console.log(challangeMessage);

//Implicit Type Conversion

const name1 = "Hubert";
const lastName2 = "Kulicki";
const full_name = name1 + " " + lastName;
console.log(full_name);

const num1 = 4;
const num2 = 10;
const result = num1 + num2;
console.log(result);

const value2 = name1 - lastName2; //NaN
console.log(value2);

let num3 = "10";
let num4 = "50";
let result2 = num3 - num4;
console.log(result2);
result2 = num3 * num4;
console.log(result2);
result2 = num3 / num4;
console.log(result2);
result2 = num3 + num4;
console.log(result2); //string "1023"
//100lines
num4 = "pants";
result2 = num3 + num4;
console.log(result2);
