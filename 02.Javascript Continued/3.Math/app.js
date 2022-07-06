// Math
// Standard built-in objects - always available

const number = 4.56789;
console.log(Math.floor(number));
console.log(Math.round(number));
console.log(Math.ceil(number));
console.log(Math.sqrt(49));
console.log(Math.PI);
console.log(Math.min(2, 4, 5, 1, 451, 123, 2));
console.log(Math.max(2, 4, 5, 1, 451, 123, 2));
console.log(Math.random());
console.log(Math.random() * 10);

//Date

const months = [
  "Januray",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const date = new Date();
console.log(date);
console.log(date.getDay());
console.log(months[date.getMonth()]);
console.log(days[date.getDay()]);

const sentence = `${days[date.getDay()]}, ${date.getDate()} ${
  months[date.getMonth()]
} ${date.getFullYear()}`;

document.body.innerHTML = sentence;
