console.log('Hello World!\n==========\n');

// Exercise 1 Section
console.log('EXERCISE 1:\n==========\n');
for (let i = 0; i < 101; i++) {
	if (i % 2 !== 0) console.log(i);
}

// Exercise 2 Section
console.log('EXERCISE 2:\n==========\n');
for (let i = 0; i < 101; i++) {
	if (i % 3 === 0 && i % 5 === 0) console.log('FizzBuzz');
	else if (i % 3 === 0) console.log('Fizz');
	else if (i % 5 === 0) console.log('Buzz');
	else console.log(i);
}

// Exercise 3 Section
console.log('REPEAT EXERCISE 1:\n==========\n');
let index = 0;
while (index < 101) {
	if (index % 2 !== 0) console.log(index);
	index++;
}

// Exercise 3 Section
console.log('REPEAT EXERCISE 2:\n==========\n');
let i = 0;
do {
	if (i % 3 === 0 && i % 5 === 0) console.log('FizzBuzz');
	else if (i % 3 === 0) console.log('Fizz');
	else if (i % 5 === 0) console.log('Buzz');
	else console.log(i);
	i++;
} while (i < 101);

// Exercise 4 Section
console.log('EXERCISE 4:\n==========\n');
let value = Math.round(Math.random() * 500); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
console.log(`The number to be found is: ${n}`);

let found = false;
for (let i = 0; i <= value; i++) {
	if (i === value) {
		console.log(`Found value! It's ${n}`);
		found = true;
		break;
	}
	if (!found) console.log('Did not find value');
}

// Exercise 5 Section
console.log('EXERCISE 5:\n==========\n');
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let num = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);
for (let i = start; i <= n; i++) {
	if (i % fizzDivisor === 0 && i % buzzDivisor === 0) {
		console.log('FizzBuzz');
	} else if (i % fizzDivisor === 0) {
		console.log('Fizz');
	} else if (i % buzzDivisor === 0) {
		console.log('Buzz');
	} else {
		console.log(i);
	}
}
