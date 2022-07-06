//parentElement

const heading = document.querySelector("h2");
// console.log(heading.parentElement.parentElement.parentElement.parentElement.parentElement);
// console.log(heading.parentElement.parentElement.parentElement.parentElement);
// console.log(heading.parentElement.parentElement.parentElement);
// console.log(heading.parentElement.parentElement);
// console.log(heading.parentElement);
// console.log(heading);

const parent = heading.parentElement;
parent.style.color = "red";
