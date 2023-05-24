function abbrevName(str) {
    const words = str.split(' ');
    const firstName = words[0];
    const lastNameInitial = words[1].charAt(0).toUpperCase() + '.';
    return firstName + ' ' + lastNameInitial;
  }
  
  console.log(abbrevName("Robin Singh"));