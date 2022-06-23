//previousSibling
//nextSibling
//return whitespace

const first = document.querySelector(".first");
const second = first.nextSibling.nextSibling;
console.log(second);

//first value is a #whitespace, you need to run nextSibling twice

const last = document.querySelector("#last");
const third = last.previousSibling.previousSibling;
console.log(third);
console.log(last.nextSibling); //whitespace
console.log(last.nextSibling.nextSibling); //NULL

//previousElementSibling
//nextElementSibling

first.nextElementSibling.style.color = "red";
