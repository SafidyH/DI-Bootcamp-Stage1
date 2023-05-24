let sentence = prompt("Enter a sentence containing the word 'Nemo':");

let position = sentence.indexOf("Nemo");

if (position !== -1) {
  
  console.log(`I found Nemo at ${position}`);
} else {
  
  console.log("I can't find Nemo");
}