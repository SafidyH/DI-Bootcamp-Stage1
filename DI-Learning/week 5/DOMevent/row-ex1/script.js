function insertRow() {
    var table = document.getElementById("sampleTable");
    var row = table.insertRow(-1); // Append row at the end of the table

    var cell1 = row.insertCell(0);
    cell1.innerHTML = "New row cell1";

    var cell2 = row.insertCell(1);
    cell2.innerHTML = "New row cell2";
}