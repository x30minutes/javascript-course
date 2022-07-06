// Web Storage API - provided by browser
// session storage, local storage
// setItem, getItem, removeItem, clear

// localStorage.setItem("name", "john");
// sessionStorage.setItem("name", "john");

localStorage.setItem("name", "john");

//if key is same you overwrite the value

localStorage.setItem("friend", "peter");
localStorage.setItem("job", "developer");
localStorage.setItem("address", "street 123");

const name = localStorage.getItem("name");
console.log(name);
localStorage.removeItem("name");
const anotherName = localStorage.getItem("name");
console.log(anotherName);
localStorage.clear();

//Local Storage with multiple values
//JSON.stringify(), JSON.parse()

const friends = ["john", "peter", "bob"];
localStorage.setItem("friends", friends);
console.log(localStorage.getItem("friends"));
const values = localStorage.getItem("friends");
console.log(values[0]);

localStorage.setItem("friendss", JSON.stringify(friends));
const valuess = JSON.parse(localStorage.getItem("friendss"));
console.log(valuess[1]);

let fruits;

if (localStorage.getItem("fruits")) {
  fruits = JSON.parse(localStorage.getItem("fruits"));
} else {
  fruits = [];
}

console.log(fruits);
// fruits.push("apple");
fruits.push("orange");
localStorage.setItem("fruits", JSON.stringify(fruits));
