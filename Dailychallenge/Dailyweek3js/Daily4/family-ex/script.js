const family = {
    father: "John",
    mother: "Jane",
    son: "Tom",
    daughter: "Emily"
  };
  
  console.log("Keys of the family object:");
  for (let key in family) {
    console.log(key);
  }
  
  console.log("Values of the family object:");
  for (let key in family) {
    console.log(family[key]);
  }