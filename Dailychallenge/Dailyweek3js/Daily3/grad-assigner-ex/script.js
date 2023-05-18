let grade = prompt("Enter your grade");

if (grade > 90) {
  console.log("A");
} else if (grade >= 80 && grade <= 90) {
  console.log("B");
} else if (grade >= 70 && grade < 80) {
  console.log("C");
} else {
  console.log("D");
}