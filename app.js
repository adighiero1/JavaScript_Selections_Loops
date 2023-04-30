console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FIZZBUZZ");
  } else if (i % 3 === 0) {
    console.log("FIZZ");
  } else if (i % 5 === 0) {
    console.log("BUZZ");
  } else {
    console.log(i);
  }
}
//Excercise 3
console.log("EXERCISE 3:\n==========\n");

let a = 1;
while (a <= 100) {
  console.log(a);
  a++;
}
let b = 1;
console.log("do while");
do {
  console.log(b);
  b++;
} while (b <= 100);
//Excercise 4
console.log("EXERCISE 4:\n==========\n");

let value = Math.round(Math.random() * 500); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for (c = 0; c <= n; c++) {
  if (c === n) {
    console.log("Found Value!");
    break;
  } else {
    console.log("Did not find value");
  }
}

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let end = Math.round(Math.random() * (1000 - 1) + 1); // creates a random number between 1 and 1000
let start = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 1000

for (let d = start; d <= end; d++) {
  if (d % fizzDivisor === 0) {
    console.log(d + "FIZZ");
  }
  if (d % buzzDivisor === 0) {
    console.log(d + "BUZZ");
  }
  if (d % fizzDivisor === 0 && d % buzzDivisor === 0) {
    console.log(d + "FIZZBUZZ");
  }
}
