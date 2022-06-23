// similar to css

//Select the element or group of elements you want to affect
//Decide the effect we want to apply to the selection

//many different ways

// document.body.style.backgroundColor = "blue";
// document.body.style.color = "yellow";
// document.getElementById("btn").style.color = "red";

//assign to variable
const element = document.getElementById("element");

//do something
document.querySelector("element");

//window object
console.log(window);

//return a node object or a node list, whcih is an array-like object

// const btn = document.getElementById("btn");
// const name = btn.nodeName;
// const css = btn.style;
// console.log(btn);
// console.log(name);
// console.log(css);
// btn.style.backgroundColor = "yellow";

//window object = browser api
//document
//console.dir

console.dir(document);

//Select the element or group of elements we wat
//Decide the effect we want to apply to the selection.

const h1 = document.getElementById("title");
h1.style.color = "red";

document.getElementById("btn").style.backgroundColor = "blue";
document.getElementById("btn").style.color = "white";

const btn = document.getElementById("btn");
btn.style.backgroundColor = "orange";
