let zipCode = prompt("Please enter your zip code:");

if (
  zipCode.length === 5 &&
  !isNaN(zipCode) &&
  zipCode.trim() === zipCode &&
  parseInt(zipCode) >= 0 &&
  parseInt(zipCode) <= 99999
) {
  console.log("success");
} else {
  console.log("error");
}

//test
// Ask the user for their zip code
//let zipCode = prompt("Please enter your zip code:");

// Define the regular expression pattern for valid zip code
//let pattern = /^\d{5}$/;

// Check if the zip code matches the pattern
//if (pattern.test(zipCode)) {
  //console.log("success");
//} else {
  //console.log("error");
//}