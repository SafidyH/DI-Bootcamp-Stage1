let num1 = prompt("Enter the first number:");

num1 = parseFloat(num1);

let num2 = prompt("Enter the second number:");

num2 = parseFloat(num2);

let sum = num1 + num2;

let difference = num1 - num2;

let product = num1 * num2;

let quotient = num1 / num2;

alert(
  `Addition: ${num1} + ${num2} = ${sum}\nSubtraction: ${num1} - ${num2} = ${difference}\nMultiplication: ${num1} * ${num2} = ${product}\nDivision: ${num1} / ${num2} = ${quotient}`
);