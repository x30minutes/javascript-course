//========================================================
// call - runs instantly, arguments - list of items

const john = {
    name: 'john',
    age:24,
    greet : function(){
        console.log(this);
        console.log(`Hello, I am ${this.name} and I am ${this.age} years old`);
    }

}

const susan = {
    name: 'susan',
    age:21
}

john.greet();

function greet(city, country) {
    console.log(this);
    console.log(`Hello, I am ${this.name} and I am ${this.age} years old and I live in ${city}, ${country}`);
}

// //this will fail
// susan.greet(); //uncaught error, susan.greet is not a function
// greet() //points to window
// const secondGreet = john.greet;
// secondGreet(); //points to window

greet.call(john, 'san diego', 'us'); //points to john object
greet.call(susan, 'san diego', 'us'); //points to susan object
greet.call({name: 'peter', age: 30}, 'san diego', 'us'); //points to newly created object

john.greet.call(susan); //points to susan object and invokes 'john''s object method

//========================================================
//apply - runs instantly, arguments - array of items

greet.apply(john, ['san diego', 'us']);
greet.apply(susan, ['san diego', 'us']);
greet.apply({name: 'peter', age: 30}, ['san diego', 'us']);

//========================================================
//bind - assign, use later, arguments - list of items

//assign, call it later
const susanGreet = greet.bind(susan, 'toronto', 'canada');
//invoke later
susanGreet();