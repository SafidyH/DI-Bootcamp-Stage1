function singBottlesOfBeer() {
    const numberOfBottles = parseInt(prompt("Enter the number of bottles to start:"));
  
    if (isNaN(numberOfBottles) || numberOfBottles < 0) {
      console.log("Invalid input. Please enter a positive number.");
      return;
    }
  
    for (let i = numberOfBottles; i > 0; i--) {
      const bottlesText = i === 1 ? "bottle" : "bottles";
      const nextBottles = i - 1 === 1 ? "bottle" : "bottles";
  
      console.log(`${i} ${bottlesText} of beer on the wall`);
      console.log(`${i} ${bottlesText} of beer`);
      console.log(`Take ${i === 1 ? "it" : i} down, pass ${i === 1 ? "it" : "them"} around`);
      console.log(`${i - 1 === 0 ? "No" : i - 1} ${nextBottles} of beer on the wall\n`);
    }
  }
  
  singBottlesOfBeer();