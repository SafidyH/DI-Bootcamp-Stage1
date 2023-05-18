let olderBirthYear = prompt("Enter the birth year of the older person (YYYY):");
let youngerBirthYear = prompt("Enter the birth year of the younger person (YYYY):");

olderBirthYear = parseInt(olderBirthYear);
youngerBirthYear = parseInt(youngerBirthYear);

let ageDifference = olderBirthYear - youngerBirthYear;
let halfAgeYear = youngerBirthYear + Math.floor(ageDifference / 2);

console.log("The year when the younger person is exactly half the age of the older person is: " + halfAgeYear);