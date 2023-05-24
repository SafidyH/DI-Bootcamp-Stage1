let word = prompt("Enter a word:");

let result = word.replace(/[aeiou]/gi, "");

console.log(result);

//or

//let result = word.replace(/[aeiou]/gi, function(match) {
    //switch (match.toLowerCase()) {
      //case 'a':
        //return '1';
      //case 'e':
        //return '2';
      //case 'i':
        //return '3';
      //case 'o':
        //return '4';
      //case 'u':
        //return '5';
      //default:
        //return match;
    //}
  //});