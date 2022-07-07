// Javascript is single threaded, sunchronous language

console.log(`im first`);
console.log(`im second`);
console.log(`im third`);

boilingWater();

console.log(`im first`);
console.log(`im second`);
console.log(`im third`);

function boilingWater() {
  console.log(`boiling...`);
  for (let i = 0; i < 10000; i++) {
    console.log('still not done');
  }
  console.log('done');
}

//EXAMPLE
//Make soup
//chop onion
//chop carrots
//boil water 10min
//add carrots, boil for 5min
//add onion, boil for 5min

console.log(`chop onion`);
console.log(`chop carrot`);
~boilWater(10000);
boilWater(5000);
boilWater(5000);

function boilWater(time) {
  console.log(`boiling...`);
  for (let i = 0; i < time; i++) {
    console.log(`still boiling...`);
  }
  console.log(`done!`);
}
