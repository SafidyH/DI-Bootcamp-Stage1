5 + "34"
// Prediction: "534" (concatenation of the number 5 and the string "34")
// Actual: "534"

5 - "4"
// Prediction: 1 (subtraction of the number 5 and the string "4" after type coercion)
// Actual: 1

10 % 5
// Prediction: 0 (remainder of the division of 10 by 5)
// Actual: 0

5 % 10
// Prediction: 5 (remainder of the division of 5 by 10)
// Actual: 5

"Java" + "Script"
// Prediction: "JavaScript" (concatenation of the strings "Java" and "Script")
// Actual: "JavaScript"

" " + " "
// Prediction: "  " (concatenation of two empty spaces)
// Actual: "  "

" " + 0
// Prediction: " 0" (concatenation of an empty space and the number 0)
// Actual: " 0"

true + true
// Prediction: 2 (addition of two boolean values after type coercion, where true is equal to 1)
// Actual: 2

true + false
// Prediction: 1 (addition of two boolean values after type coercion, where true is equal to 1 and false is equal to 0)
// Actual: 1

false + true
// Prediction: 1 (addition of two boolean values after type coercion, where false is equal to 0 and true is equal to 1)
// Actual: 1

false - true
// Prediction: -1 (subtraction of two boolean values after type coercion, where false is equal to 0 and true is equal to 1)
// Actual: -1

!true
// Prediction: false (negation of the boolean value true)
// Actual: false

3 - 4
// Prediction: -1 (subtraction of the numbers 3 and 4)
// Actual: -1

"Bob" - "bill"
// Prediction: NaN (operation between two strings that cannot be subtracted)
// Actual: NaN