let numbers = [123, 8409, 100053, 333333333, 7];

for (let number of numbers) {
  const isDivisibleByThree = number % 3 === 0;
  console.log(isDivisibleByThree);
}