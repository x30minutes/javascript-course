// Three methods to convert objects into arrays
// Object.keys() - converts property names into array
// Object.values() - converts property values into array
// Object.entries() - converts both

const person = {
    name: 'john',
    age: 25,
    status: 'student',
};

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));


//map method
const result = Object.entries(person);
const newResult = result.map((item)=>{
    const [first, second] = item;
    console.log(first, second);
    return first;
});

console.log(newResult);

//for of
for(const [first, second] of result){
    // const [first, second] = item;
    console.log(first, second);
}