// Ask the user for a string of numbers separated by commas
let input = prompt("Enter a string of numbers separated by commas:");

// Convert the input string to an array of numbers
let numbers = input.split(",").map(Number);

// Calculate the sum of the numbers using the reduce method
let sum = numbers.reduce((acc, curr) => acc + curr, 0);

// Console.log the sum of the numbers
console.log(sum);