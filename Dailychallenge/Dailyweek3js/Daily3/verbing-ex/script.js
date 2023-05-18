let verb = prompt("Enter a verb");

if (verb.length >= 3) {
  if (verb.endsWith("ing")) {
    console.log(verb + "ly");
  } else {
    console.log(verb + "ing");
  }
} else {
  console.log(verb);
}