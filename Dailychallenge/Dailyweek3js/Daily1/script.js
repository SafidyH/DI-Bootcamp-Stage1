const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

fruits.shift();

fruits.sort();

fruits.push("Kiwi");

const index = fruits.indexOf("Apples");
if (index !== -1) {
  fruits.splice(index, 1);
}

fruits.reverse();

console.log(fruits);