function alertChoice() {
    var selectElement = document.getElementById("select1");
    var selectedOption = selectElement.options[1].value;
    alert("Selected Option: " + selectedOption);
}

function addOptionToEnd() {
    var selectElement = document.getElementById("select1");
    var newOption = document.createElement("option");
    newOption.value = "Work";
    newOption.text = "Work";
    selectElement.appendChild(newOption);
}

function addOptionToBeginning() {
    var selectElement = document.getElementById("select1");
    var newOption = document.createElement("option");
    newOption.value = "Primary School";
    newOption.text = "Primary School";
    selectElement.insertBefore(newOption, selectElement.firstChild);
}

function changeSelectedOption() {
    var selectElement = document.getElementById("select1");
    selectElement.value = "banana";
}