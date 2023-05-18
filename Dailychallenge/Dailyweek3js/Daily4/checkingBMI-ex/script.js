const person1 = {
    fullName: "John Doe",
    mass: 80,
    height: 1.8,
    calculateBMI: function() {
      return this.mass / (this.height * this.height);
    }
  };
  
  const person2 = {
    fullName: "Jane Smith",
    mass: 65,
    height: 1.65,
    calculateBMI: function() {
      return this.mass / (this.height * this.height);
    }
  };
  
  function compareBMI(person1, person2) {
    const bmi1 = person1.calculateBMI();
    const bmi2 = person2.calculateBMI();
  
    if (bmi1 > bmi2) {
      return person1.fullName;
    } else if (bmi2 > bmi1) {
      return person2.fullName;
    } else {
      return "Both persons have the same BMI.";
    }
  }
  
  const personWithLargestBMI = compareBMI(person1, person2);
  console.log("The person with the largest BMI is:", personWithLargestBMI);