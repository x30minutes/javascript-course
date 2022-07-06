// var, let, const
// let, const - blocked scoped {} - anything within {}
// var - function scoped

// global scope

var amount = 100;

function greet(){
    //local scope
    var random = 'some random value';
    console.log(`hello there ${amount}, ${random}`);
}
// console.log(random); //error, undefined

// greet();

var total = 1000;
var test = true;

if(test){
    var total = 'oranges and onions'
    console.log(`hello there`);
}

console.log(total);

let money = 1000;

if(test){
    let money = 'shit and giggles';
    let value = 'monkeys';
    console.log(`hello here`);
}

console.log(money);
// console.log(value); //no access