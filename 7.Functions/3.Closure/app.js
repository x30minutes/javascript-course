// Closure
// closure gives you an access to an outer funtion's scope from an inner function
// make private variables with closures

function outer(){
    let privateVar = 'secret';
    function inner(){
        console.log(`hello there, secret is: ${privateVar}`);
    }
    return inner;
    inner();
}

outer();

// console.log(privateVar); //error

const value = outer();
console.log(value);
value();
outer()();

//basic example

function newAccount(name, initialBalance){
    let balance = initialBalance;
    function showBalance(){
        console.log(`Hey ${name}, your balance is ${balance}`);

    }
    return showBalance;
}

newAccount('susan', 500)();

const john = newAccount('John', 300);
const bob = newAccount('bob', 300);

john();
bob();

//advanced example

function Account(name, initialBalance){
    let balance = initialBalance;
    function showBalance(){
        console.log(`Hey ${name}, your balance is ${balance}`);

    }
    function deposit(amount){
        balance += amount;
        showBalance();
    }
    function withdraw(amount){
        if(amount > balance){
            console.log(`Hey ${name}, sorry, not enough funds`);
        }else{
            balance -= amount;
            showBalance();
        }
        
    }
    return {showBalance: showBalance, deposit: deposit, withdraw:withdraw};
}

const ann = Account('ann', 200);
ann.showBalance();

ann.deposit(200);
ann.withdraw(500);
ann.withdraw(50);