const container = document.getElementById("container");
console.log(container);

const peteElement = document.querySelector(".list li:nth-child(2)");
peteElement.textContent = "Richard";

const sarahElement = document.querySelector(".list:nth-child(2) li:nth-child(2)");
sarahElement.remove();

const ulElements = document.querySelectorAll(".list");
ulElements.forEach((ul) => {
  const firstNameElement = ul.querySelector("li:first-child");
  firstNameElement.textContent = "Your Name";
});

ulElements.forEach((ul) => {
  ul.classList.add("student_list");
});

const firstUlElement = document.querySelector(".list:first-child");
firstUlElement.classList.add("university", "attendance");