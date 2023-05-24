function getValue() {
    var firstName = document.getElementById("form1").elements["fname"].value;
    var lastName = document.getElementById("form1").elements["lname"].value;
    console.log("First Name: " + firstName);
    console.log("Last Name: " + lastName);
    return false; // Prevent form submission
}