//className - overwrite class
//classList - add, remove, contains

const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");

console.log(first.className);
// second.className = "colors";
// second.className = "text"; //overwrites
second.className = "colors text"; //assigns both

third.classList.add("colors");
third.classList.add("text");
console.log(third.classList);
third.classList.remove("text");
console.log(third.classList);

let result = third.classList.contains("colors"); //boolean
console.log(result);
