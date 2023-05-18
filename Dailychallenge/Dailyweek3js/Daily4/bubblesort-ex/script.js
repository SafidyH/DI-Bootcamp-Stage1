const numbers = [5, 0, 9, 1, 7, 4, 2, 6, 3, 8];

const numbersToString = numbers.toString();
console.log(numbersToString);

const joinWithPlus = numbers.join("+");
console.log(joinWithPlus);

const joinWithSpace = numbers.join(" ");
console.log(joinWithSpace);

const joinWithEmpty = numbers.join("");
console.log(joinWithEmpty);

for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers.length - 1; j++) {
    if (numbers[j] < numbers[j + 1]) {
      let temp = numbers[j];
      numbers[j] = numbers[j + 1];
      numbers[j + 1] = temp;
    }
  }
}

console.log(numbers);