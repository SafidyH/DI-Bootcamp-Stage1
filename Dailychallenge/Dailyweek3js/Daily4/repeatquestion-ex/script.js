let number = prompt("Enter a number:");
let parsedNumber = parseInt(number);

while (parsedNumber < 10) {
  number = prompt("Enter a new number:");
  parsedNumber = parseInt(number);
}

console.log("Number is greater than or equal to 10");