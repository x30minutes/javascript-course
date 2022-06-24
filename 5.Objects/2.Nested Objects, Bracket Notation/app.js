// nested objects
// set variable as property value
// dot notation vs bracket notation

const age = 60;
const married = true;
let random = 'random-value';

const person = {
    name:'john',
    age: age,
    married, //ES6 option if variable's name matches property's name
    siblings:['anna', 'peter'],
    greet:function(name){
        console.log(`Hello, my name is ${name}`);
    },
    sayHello(name){
        console.log(`Hello, my name is ${name}`);
    },
    job:{
        title: 'developer',
        company: {
            name: 'coding addict',
            address: '123 main street',
        },
    },
    'random-value' : 'random',
};

console.log(person.job.title);
console.log(person.job.company.name);
console.log(person.work); //undefined, if does not exist
// console.log(person.work.title); //error with undefined if trying to exist property of undefined object
console.log(person);
console.log(person["random-value"]);
console.log(person['name']);
console.log(person[random]);