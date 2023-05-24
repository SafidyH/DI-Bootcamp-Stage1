let sentence = "This dinner is not that bad! You cook well";

let wordNot = sentence.indexOf("not");

let wordBad = sentence.indexOf("bad");

if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {
  let result = sentence.slice(0, wordNot) + "good" + sentence.slice(wordBad + 3);

  console.log(result);
} else {
  console.log(sentence);
}