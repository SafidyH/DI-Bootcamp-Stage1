const navBar = document.getElementById("navBar");
navBar.setAttribute("id", "socialNetworkNavigation");

const newListItem = document.createElement("li");
const textNode = document.createTextNode("Logout");
newListItem.appendChild(textNode);

const ulElement = navBar.querySelector("ul");
ulElement.appendChild(newListItem);

const firstLi = ulElement.firstElementChild;
const lastLi = ulElement.lastElementChild;
console.log(firstLi.textContent);
console.log(lastLi.textContent);