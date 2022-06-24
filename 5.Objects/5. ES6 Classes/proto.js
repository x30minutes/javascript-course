/*
ES6 Classes - Syntactic Sugar
Prototypal Inheritance
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