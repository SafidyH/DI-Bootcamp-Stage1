var form = document.querySelector("#myForm");
console.log(form);

var firstNameInput = document.querySelector("#fname");
var lastNameInput = document.querySelector("#lname");
console.log(firstNameInput);
console.log(lastNameInput);

var firstNameInputByName = document.querySelector("input[name='fname']");
var lastNameInputByName = document.querySelector("input[name='lname']");
console.log(firstNameInputByName);
console.log(lastNameInputByName);

form.addEventListener("submit", function(event) {
    event.preventDefault();
    var firstNameValue = firstNameInput.value;
    var lastNameValue = lastNameInput.value;

    if (firstNameValue !== "" && lastNameValue !== "") {
        var usersAnswerList = document.querySelector(".usersAnswer");

        var firstNameListItem = document.createElement("li");
        firstNameListItem.textContent = firstNameValue;
        usersAnswerList.appendChild(firstNameListItem);

        var lastNameListItem = document.createElement("li");
        lastNameListItem.textContent = lastNameValue;
        usersAnswerList.appendChild(lastNameListItem);
    }
});