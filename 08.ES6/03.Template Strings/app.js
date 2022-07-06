// Template Strings/Literals
// `` backticks above the tab key left of 1 key
const name = 'bob';
const lastName = 'sanders';
const age = 25;

const phrase = "My full name is " + name + " " + lastName + " and I'm " + age + " years old.";

console.log(phrase);

console.log(`My full name is ${name} ${lastName.toUpperCase()} and I'm ${age} years old.`);

const person = {
    name: "kyle",
    job: "developer",
    hobbies: ["surfing", "baking", "bowling"],
};

const result = document.getElementById("result");

// result.innerHTML = "<h2>" + person.name + "</h2>" + "<p>" + person.job + "</p>";

result.innerHTML = `
<h2>${person.name}</h2>
<p>${person.job}</p>
<ul>${person.hobbies.map(item => {
    return `<li>${item}</li>`;
}).join("")}</ul>
`;

//tagged template literals

const author = "Some Author";
const statement = "Some Statement"

const quote = highlight`Here is the ${statement} by ${author} and it could not be more true`;
console.log(quote);

const final = document.getElementById('final')
final.innerHTML = quote;

function highlight(text, ...vars){
    const awesomeText = text.map((item, index) => {
        return `${item} <strong class="blue">${vars[index] || ""}</strong>`;
    });
    return awesomeText.join("");
}