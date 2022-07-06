// Arrow Functions or Fat Arrow Functions
// no name, always expression, assign to variable
// no function keyword
// 'this'

// function sayHi() {
//     console.log('hello');
// }
// sayHi();

// const hello = function(name){
//     console.log(`hello ${name}`);
// };
// hello('bob');

// function triple(value1, value2) {
//     return value1 * value2 * 3;
// }

const sayHi = () => console.log(`hello`);
sayHi();

const double = value => value * 2;
const num = double(4);
console.log(num);

//two parameters and more than one line
const multiply = (num1, num2) => {
    const result = num1 * num2;
    // more code here
    return result;
}

const sum = multiply(4,5);
console.log(sum);

//return object
const object = () => ({name: 'john', age: 25});
const person = object();
console.log(person);

//arrow functions as callback functions
const numbers = [1,2,3,4,5,6];
const big = numbers.filter(item => item > 2);
console.log(big);

const btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', () => console.log('you clicked me'));

//reg function: 'this' refers parent, left of the dot
//arrow function : refers to it's current surrounding scope

const bob = {
    firstName: 'bob',
    lastName: 'smith',
    sayName: function(){
        console.log(this);
        setTimeout(() => {
            console.log(this);
            console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
        }, 2000);
        
    },
};

const anna = {
    firstName: 'anna',
    lastName: 'sanders',
    sayName: () => {
        console.log(this);
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    },
};

bob.sayName();
// anna.sayName();

//Select Element and 'this'
const btn2 = document.getElementById('btn2');
btn2.addEventListener('click', function() {
    console.log(this);
    setTimeout(() => {
        this.style.color = 'black';
    }, 2000);
}) // as reg function 'this' refers to 'btn2', with arrow function it refers 'window'

//default parameters, arrow function gotchas

const john = 'John';
const peter = 'Peter';

function sayHello1(person = 'Susan') {
    console.log(`Hello ${person}`);
}
const sayHello2 = (person = 'BOB') => console.log(`Hello ${person}`);

sayHello1();
sayHello2();