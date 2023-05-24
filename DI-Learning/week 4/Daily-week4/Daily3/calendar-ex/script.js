function createCalendar(year, month) {
    const weekdayNames = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
  
    const table = document.createElement('table');
  
    const headerRow = document.createElement('tr');
    for (let i = 0; i < 7; i++) {
      const th = document.createElement('th');
      th.textContent = weekdayNames[i];
      headerRow.appendChild(th);
    }
    table.appendChild(headerRow);
  
    const startDate = new Date(year, month - 1, 1);
    const endDate = new Date(year, month, 0);
  
    let currentDate = new Date(startDate);
    while (currentDate <= endDate) {
      const weekRow = document.createElement('tr');
      for (let i = 0; i < 7; i++) {
        const td = document.createElement('td');
        if (currentDate.getMonth() === month - 1) {
          td.textContent = currentDate.getDate();
        }
        weekRow.appendChild(td);
        currentDate.setDate(currentDate.getDate() + 1);
      }
      table.appendChild(weekRow);
    }
  
    document.body.appendChild(table);
  }
  
  createCalendar(2012, 9);