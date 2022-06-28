// for of - loops through the values of an iterable object
// String, Array, Map, Set erc - NOT OBJECT
// unlike forEach - we can use break, continue

const fruits = ['apple', 'orange', 'banana', 'peach'];
const longName = 'John Smith Pepper III';
let shortName = '';

for(const letter of longName){
    if(letter === ' '){
        continue;
    }else{
        shortName += letter;
    }
}

console.log(shortName);

for (const fruit of fruits){
    if(fruit === 'banana'){
        // break;
        continue;
    }
    console.log(fruit);
}

//"for in" loop - iterate over object properties
// not advised to use it on arrays, especially if the order is important
// on arrays use "for of" loop instead

const person = {
    name: 'john',
    age: 25,
    status: 'student',
};

for (const propertyName in person){
    console.log(`${propertyName} : ${person[propertyName]}`);
}