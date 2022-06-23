// Select the element or group of elemenets we want
// Decide the effect we want to apply to the selection

//getElementsByTagName('tagname');
//HTMLCollection = array-like object
//index, length property but no array methods (forEach)

//querySelectorAll() in most cases
//NodeList - object are collections of nodes
//can run forEach
//turn them into array - spread operator [...]
//after that can use any array properties

const headings = document.getElementsByTagName("h2");
headings[0].style.color = "red";
console.log(headings);

const items = document.getElementsByTagName("li");
items[2].style.color = "orange";

const betterItems = [...items];

betterItems.forEach(function (item) {
  console.log(item);
});

console.log(items);
console.log(betterItems);
