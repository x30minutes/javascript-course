// Select the element or group of elements we want
//Decide the effect we want to applu to the selection

//getElementsByClassName('classname');

//HTMLCollection

const listItems = document.getElementsByClassName("special");
console.log(listItems);
listItems[listItems.length - 1].style.color = "red";
