//Destructuring
//faster/easier way to access/unpack values from arrays
//objects into variables
//=======================
//ARRAYS

const fruits = ['orange','banana','lemon'];
const friends = ['john', 'peter','bob', 'anna','kelly'];

const orange = fruits[0];
const banana = fruits[1];
const lemon = fruits[2];
console.log(orange, banana, lemon);

const [enemy,, bob,, kelly, ] = friends; //use coma to ommit elements you don't wish to use
console.log(enemy, bob, kelly, );

//=======================
//SWAP VARIABLES

let one = 'bob';
let two = 'john';

// let temp = second;
// second = first;
// first = temp;

[two, one] = [one, two];

console.log(one, two);

//=======================
//OBJECTS

const bobby = {
    first: 'bobby',
    last: 'sanders',
    city: 'chicago',
    siblings: {
        sister: 'jane',
    },
};

// const firstName = bobby.first;
// const lastName = bobby.last;
// const sister = bobby.siblings.sister;

// console.log(firstName, lastName, sister);

const {first:firstName, last, city, zip, siblings:{sister:favouriteSibling} } = bobby;
console.log(firstName,last, city, zip, favouriteSibling);

//=======================
// AS FUNCTION PARAMETERS

function printPerson({first, last, city}){
    // const {first, last, city} = person;
    console.log(first, last, city);
}
printPerson(bobby);