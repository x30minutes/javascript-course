// nested objects
// set variable as property value
// dot notation vs bracket notation

const person = {
    name:'john',
    age: 25,
    married: true,
    siblings:['anna', 'peter'],
    greet:function(name){
        console.log(`Hello, my name is ${name}`);
    },
    sayHello(name){
        console.log(`Hello, my name is ${name}`);
    }
    job:{
        title: 'developer',
        company: 'coding addict',
    },
}