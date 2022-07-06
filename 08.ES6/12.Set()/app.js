// Set object - stores a collection of unique values of any type

// new Set()
// add(value)
// delete(value)
// clear()
// has(value)

// iterators
// entries(), keys(), values(), forEach()

const unique = new Set();

const random = "third";

unique.add("first");
unique.add("second");
unique.add(random);
unique.add(4);
unique.add("third");

// const result = unique.delete("third"); //true
// console.log(result);
const result = unique.delete("five"); //false
console.log(result);

const isValue = unique.has(4);
console.log(isValue);

console.log(unique);

// new Set() - accepts iterable objects

const products = [
  {
    title: "high-back bench",
    company: "ikea",
  },
  {
    title: "albany table",
    company: "marcos",
  },
  {
    title: "accent chair",
    company: "caressa",
  },
  {
    title: "wooden table",
    company: "ikea",
  },
];

// const companies = products.map((item) => item.company);
// console.log(companies);

// const uniqueCompanies = new Set(companies);
// console.log(uniqueCompanies);

// const finalCompanies = ["all", ...uniqueCompanies];
// console.log(finalCompanies);

const oneLine = ["all", ...new Set(products.map((item) => item.company))];
console.log(oneLine);
