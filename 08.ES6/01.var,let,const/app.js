// VAR, LET, CONST 
// define, update, redefine
// const cannot mutate primitive type

// define
var number = 100;
console.log(number);
// update
number = 200;
console.log(number);
// redefine
var number = 'orange';
console.log(number);

//define
let amount  = 100;
console.log(amount);
//update
amount = 200;
console.log(amount);
//redefine
// let amount = 'orange'; //Identifier "amount" has already been declared

//define
const total = 100;
console.log(total);
//update
// total = 200; // error, cannot update
const person = { name: 'bob'}
person.name = 'john';
console.log(person.name);