// REST OPERATORS ... 
// GATHERS/COLLECTS THE ITEMS

//arrays
const fruit = ['apple','orange','lemon', 'banana', 'pear'];
const [first, second, ...fruits] = fruit;
console.log(first, second,  fruits);

//objects
const person = {name: 'john', lastName: 'smith', job: 'developer'};
// const { ...rest, job } = person //rest operator must be last
const { job, ...rest } = person
console.log(job, rest);

const getAverage = (name, ...scores) => {
    console.log(name);
    console.log(scores);
    let total = 0;
    for(const score of scores){
        total += score;
    }
    console.log(`${name}'s average score is ${total/scores.length}`);
}

const testScores = [78, 48, 98, 99, 78];

getAverage(person.name, 78,76,45,23,57,97,56,34,52);
getAverage(person.name, ...testScores);