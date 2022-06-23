//nodeValue
//textContent

const item = document.getElementById("special");
const value = item.nodeValue;
console.log(value); //null
console.log(item.childNodes[0].nodeValue);
const easyValue = item.textContent;
console.log(easyValue);
const long = document.getElementById("special").childNodes[0].nodeValue;
console.log(long);
