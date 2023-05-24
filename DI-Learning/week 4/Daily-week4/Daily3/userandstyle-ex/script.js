const divElement = document.querySelector("div");
divElement.style.backgroundColor = "lightblue";
divElement.style.padding = "10px";

const johnElement = document.querySelector("li:first-child");
johnElement.style.display = "none";

const peteElement = document.querySelector("li:last-child");
peteElement.style.border = "1px solid black";

document.body.style.fontSize = "16px";

if (divElement.style.backgroundColor === "lightblue") {
  const users = document.querySelectorAll("li");
  const user1 = users[0].textContent;
  const user2 = users[1].textContent;
  alert("Hello " + user1 + " and " + user2);
}