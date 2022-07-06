// this
// points to the left of the dot

const john = {
    firstName: 'john',
    lastName: 'anderson',
    fullName: function(){
        console.log(`My full name is ${this.firstName} ${this.lastName}`);
    },
};

const bob = {
    firstName: 'bob',
    lastName: 'sanders',
    fullName: function(){
        console.log(`My full name is Bob Sanders`);
    },
};

john.fullName();
bob.fullName();

// In regular functions (not arrow) "this" is determined by "HOW"!!! a function is invoked (left of .)
//defaults to global - window
//arrow functions - try not using "this"

console.log(this); //points to window object

function showThis(){
    console.log(this);
}

const anna = {
    name:'anna',
    showThis: showThis,
}

const julie = {
    name: 'julie',
    showThis: showThis,
}

anna.showThis();
julie.showThis();
showThis(); //point to window object

//if object is doing the invocation then "this" point to the object, otherwise points to "window"

const btn1 = document.querySelector('.btn-1');
const btn2 = document.querySelector('.btn-2');

btn1.addEventListener('click', showThis); //points to the button
btn2.addEventListener('click', function(){
    showThis();
}); // point to the window if invoked in annonymous function