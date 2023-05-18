let table = document.body.firstElementChild;

for (let i = 0; i < table.rows.length; i++) {
  let row = table.rows[i];
  let cell = row.cells[i];
  cell.style.backgroundColor = "red";
}