let str1 = "mix";
let str2 = "pod";

let swappedStr1 = str2.slice(0, 2) + str1.slice(2);
let swappedStr2 = str1.slice(0, 2) + str2.slice(2);

let concatenatedStr = swappedStr1 + " " + swappedStr2;

console.log(concatenatedStr);