let number = parseInt(prompt("Enter a number:"));

let result = "";

if (number < 2) {
  result = "boom";
} else {
  result = "B" + "o".repeat(number);
  
  if (number % 2 === 0) {
    result += "!";
  }
  
  if (number % 5 === 0) {
    result = result.toUpperCase();
  }
}

console.log(result);