let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
  };
  
  let name = prompt("Enter your name:");
  
  if (name.toLowerCase() in guestList) {
    let country = guestList[name.toLowerCase()];
    console.log(`Hi! I'm ${name}, and I'm from ${country}.`);
  } else {
    console.log("Hi! I'm a guest.");
  }