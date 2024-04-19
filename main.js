// Dax Dewey
// 19 APR 2024
// Evidence: JS Simple Calculator

// Input
// Create and assign values to your variables

const fullName = 'Dax Dewey';
const date = '19 APR 2024';
const project = 'JS Simple Calculator';

// Get two numbers from the user using the prompt function
const num1 = Number(prompt('Enter first number:'));
const num2 = Number(prompt('Enter second number:'));

// Process
// Do the math for this project
const additionAnswer = num1 + num2;
const subtractionAnswer = num1 - num2;
const multiplyAnswer = num1 * num2;
const divideAnswer = num1 / num2;


// Output
// Show the results/answers
console.log(fullName); 
console.log(date);
console.log(project);

console.log('Output:');

// Doing addition
console.log(`${num1} + ${num2} = ${additionAnswer}`);
// Doing subtraction
console.log(`${num1} - ${num2} = ${subtractionAnswer}`);
// Doing multiplication
console.log(`${num1} * ${num2} = ${multiplyAnswer}`);
//doing divide
console.log(`${num1} / ${num2} = ${divideAnswer}`);