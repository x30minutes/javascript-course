//event object argument e, evt
//info about triggered event
//event.type
//event.currentTarget
//this keyword
//preventDefault() - prevents default behaviour

const heading = document.querySelector("h1");
const btn = document.querySelector(".btn");
const link = document.getElementById("link");

heading.addEventListener("click", function (event) {
  console.log(event.currentTarget);
});

btn.addEventListener("click", function (e) {
  e.currentTarget.classList.add("blue");
  e.currentTarget.classList.remove("btn");
});

function someFunc(e) {
  e.preventDefault();
}

link.addEventListener("click", someFunc);
