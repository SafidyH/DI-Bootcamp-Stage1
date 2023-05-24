function getvalue() {
    var firstName = document.getElementById("form1").elements["fname"].value;
    var lastName = document.getElementById("form1").elements["lname"].value;
    alert("First Name: " + firstName + "\nLast Name: " + lastName);
    return false; // Prevent form submission
}