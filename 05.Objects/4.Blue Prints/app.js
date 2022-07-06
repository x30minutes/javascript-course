// Blue Print
// Factory Functions and Constructor Functions

// Factory Functions

function createPerson(firstName, lastName){
    return {
        firstName,
        lastName,
        fullName: function(){
            console.log(`My full name is ${this.firstName} ${this.lastName}`);
        },
    };
};

const john = createPerson('john', 'anderson');
const bob = createPerson('bob', 'apple');
const susy = createPerson('susy', 'pear');
john.fullName();
bob.fullName();
susy.fullName();


//Constructor Functions
//new - creates new object, points to it, omits return

function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function(){
        console.log(`My full name is ${this.firstName} ${this.lastName}`);
    };
};

const maciek = new Person('maciek', 'paczek');
maciek.fullName();

// All Objects in Javascript have access to constructor property that returns a constructor function that created it.
//built in constructor functions
//arrays and functions are objects in javascript

const jimmy = new Person('jimmy', 'fallon');
console.log(jimmy.constructor);

const bulbasaur = {};
console.log(bulbasaur.constructor);

const list = [];
console.log(list.constructor);

const sayHi = function() {};
console.log(sayHi.constructor);

const squirtle = new jimmy.constructor('squirtle', 'pokemon');
squirtle.fullName();
console.log(squirtle);

/*
Prototypal Inheritance Model
Javascript uses prototypal inheritance model. That means that every constructor function/class has a prototype property that is shared by every instance of the constructor/class. So any properties and methods of prototype can be accessed by every instance. Prototype property returns an object.
*/

function Account(name, initialBalance){
    this.name;
    this.balance = initialBalance; 
};

const wartotle = new Account('Wartotle', 200);
const blastoise = new Account('Blastoise', 0);

console.log(wartotle);
console.log(blastoise);
console.log(Account.prototype);

Account.prototype.bank = 'CHASE';

console.log(wartotle);
console.log(blastoise);
console.log(wartotle.bank);

Account.prototype.deposit = function(amount){
    this.balance += amount;
    console.log(`Hello ${this.name}, your balance is ${this.balance}`);
};

wartotle.deposit(300);

/*
Property Lookup
If child does not have ask parent
Everything in JS in an Object
*/



