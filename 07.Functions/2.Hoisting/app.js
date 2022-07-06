// Hoisting
// function and var declarations are hoisted
// safer to access only after initialized
// u can access var declaration but not the value


const firstName = 'john';
let lastName = 'jordan';
var random = 'random';

console.log(firstName);

function display(){
    console.log(`hello world`);
}

display();

function moreComplex(){
    console.log(`${firstName}, ${lastname}, ${random}`);
}