/*
ES6 Classes - Syntactic Sugar
Prototypal Inheritance
*/

class Account {
    constructor(name, initialBalance){
        this.name = name;
        this.balance = initialBalance;
    }
    bank = 'Chase'; // is assigned directly, instead of assigning to prototype
    deposit(amount){
        this.balance += amount;
        console.log(`Hello ${this.name}, your balance is ${this.balance}`);
    }
}

const john = new Account('john', 0);
console.log(john);
console.log(john.name);
john.deposit(100);
console.log(john);