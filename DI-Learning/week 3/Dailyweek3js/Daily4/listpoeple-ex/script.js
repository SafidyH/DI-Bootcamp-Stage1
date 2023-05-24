const people = ["Greg", "Mary", "Devon", "James"];

people.splice(people.indexOf("Greg"), 1);

people[people.indexOf("James")] = "Jason";

people.push("Yourname");

console.log(people.indexOf("Mary"));

const peopleCopy = people.slice(1, -1);

console.log(people.indexOf("Foo"));

const last = people[people.length - 1];

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
  }
  
  for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Devon") {
      break;
    }
  }