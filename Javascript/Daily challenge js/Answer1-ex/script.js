let c;
let a = 34;
let b = 21;

console.log(a+b); // first expression
// Prediction: The outcome will be 55 because a is 34 and b is 21, and when added together, they result in 55.
// Actual: 55

a = 2;

console.log(a+b); // second expression
// Prediction: The outcome will be 23 because the value of a has been changed to 2, so when added to b (21), the result is 23.
// Actual: 23

console.log(c);
// Prediction: The value of variable c has not been assigned, so it will output undefined.
// Actual: undefined

console.log(3 + 4 + '5');
// Prediction: The outcome will be "75" because the addition operation will be performed first (3 + 4 = 7), and then the concatenation with the string '5' will occur, resulting in "75".
// Actual: "75"
//In the first expression, the outcome of a + b is 55 because both a and b are initialized with numeric values and adding them together results in 55.

//In the second expression, the outcome of a + b is 23 because the value of a is changed to 2 before performing the addition operation with b, resulting in 23.

//The value of variable c is undefined because it has been declared but not assigned any value.
//
//In the last expression, the outcome is the string "75" because the addition operation is performed first (3 + 4 = 7), and then the result is concatenated with the string '5', resulting in "75".