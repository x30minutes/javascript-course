//Create Students Array
//1. setup students array with 5 students

console.log(students);

//add role:'student' property to each object
const updatedStudents = students.map(function (student) {
  student.role = "student";
  return student;
});
console.log(updatedStudents);

//return only scores >=80
const highScores = students.filter(function (student) {
  return student.score >= 80;
});
console.log(highScores);

//find specific ID in array
const specificId = students.find(function (person) {
  return person.id === 1;
});
console.log(specificId);

//sum up all student.score
//divide by lenght of the students array
//assign to averageScore and log

const averageScore =
  students.reduce(function (acc, curr) {
    return acc + curr.score;
  }, 0) / students.length;
console.log(averageScore);

//list favorite subjects
//assign to survey and log

const survey = students.reduce(function (acc, curr) {
  if (acc[curr.favouriteSubject]) {
    acc[curr.favouriteSubject] = acc[curr.favouriteSubject] + 1;
  } else {
    acc[curr.favouriteSubject] = 1;
  }
  return acc;
}, {});

console.log(survey);
