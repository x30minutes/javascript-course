// new string methods
// startsWith(), endsWith(), includes(), repeat()

const person = "Peter Smith";
const employee = `23456-EMP-PETER-SMITH`;
const manager = "23456-MAN-JOHN-DOE";

// startsWith()
console.log(person.startsWith("Pete")); //case sensitive
console.log(person.startsWith("peter")); //case sensitive
console.log(employee.startsWith("EMP", 6));

// endsWith()
console.log(manager.endsWith("DOE"));
console.log(manager.endsWith("MAN", 9));

// includes
console.log(employee.includes("PETER"));
console.log(employee.includes("pETER"));

// repeat
const multiplyPeople = (person, amount = 5) => person.repeat(amount);

const people = multiplyPeople(person, 10);
console.log(people);

// String includes() - checks if a string contains another string.

const products = [
  { title: "Modern Poster" },
  { title: "Bar Stool" },
  { title: "Armchair" },
  { title: "Leather Chair" },
];

const text = "a";

const filteredProducts = products.filter((product) =>
  product.title.toLowerCase().includes(text)
);

console.log(filteredProducts);

// const firstName = "john";
// const result = firstName.includes("Jo", 1);
// console.log(result);

const product = {
  title: "Leather Chair",
};

const result = product.title.includes("Le");
console.log(result);
