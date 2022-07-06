//createElement('element')
//createTextNod('text content')
//element.appendChild(childElement)

//insertBefore('element','location')
//replaceChild('new', 'old')

const result = document.querySelector("#result");
const first = document.querySelector(".red");

// create empty element
const bodyDiv = document.createElement("div");
// create text node
const text = document.createTextNode("a simple body div");
bodyDiv.appendChild(text);
document.body.appendChild(bodyDiv);

const heading = document.createElement("h2");
const headingText = document.createTextNode("dynamic heading");
heading.appendChild(headingText);
heading.classList.add("blue");
result.appendChild(heading);

const bodyDiv2 = document.createElement("div");
const text2 = document.createTextNode(
  "apparently you need new one because it is being overwritten"
);
bodyDiv2.appendChild(text2);
document.body.insertBefore(bodyDiv2, result);
result.insertBefore(heading, first); //overwrites previous allocation

const smallHeading = document.createElement("h6");
const smallText = document.createTextNode(`i'm small heading text`);
smallHeading.classList.add("red");
smallHeading.appendChild(smallText);
document.body.replaceChild(smallHeading, bodyDiv); //replaced bodyDiv

console.log(result.children);
