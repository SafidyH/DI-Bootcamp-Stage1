console.log(5 >= 1);
// Prediction: true. The comparison operator >= checks if the left operand (5) is greater than or equal to the right operand (1). In this case, 5 is greater than 1, so the result is true.
// Actual: true

console.log(0 === 1);
// Prediction: false. The strict equality operator === checks if the left operand (0) is equal to the right operand (1) in both value and data type. In this case, 0 is not equal to 1, so the result is false.
// Actual: false

console.log(4 <= 1);
// Prediction: false. The comparison operator <= checks if the left operand (4) is less than or equal to the right operand (1). In this case, 4 is not less than or equal to 1, so the result is false.
// Actual: false

console.log(1 != 1);
// Prediction: false. The inequality operator != checks if the left operand (1) is not equal to the right operand (1). In this case, 1 is equal to 1, so the result is false.
// Actual: false

console.log("A" > "B");
// Prediction: false. When comparing strings using the greater than operator >, it compares the Unicode values of the characters. The Unicode value of "A" is less than the Unicode value of "B", so the result is false.
// Actual: false

console.log("B" < "C");
// Prediction: true. When comparing strings using the less than operator <, it compares the Unicode values of the characters. The Unicode value of "B" is less than the Unicode value of "C", so the result is true.
// Actual: true

console.log("a" > "A");
// Prediction: true. When comparing strings using the greater than operator >, it compares the Unicode values of the characters. The Unicode value of "a" is greater than the Unicode value of "A", so the result is true.
// Actual: true

console.log("b" < "A");
// Prediction: false. When comparing strings using the less than operator <, it compares the Unicode values of the characters. The Unicode value of "b" is greater than the Unicode value of "A", so the result is false.
// Actual: false

console.log(true === false);
// Prediction: false. The strict equality operator === checks if the left operand (true) is equal to the right operand (false) in both value and data type. In this case, true is not equal to false, so the result is false.
// Actual: false

console.log(true != true);
// Prediction: false. The inequality operator != checks if the left operand (true) is not equal to the right operand (true). In this case, true is equal to true, so the result is false.
// Actual: false