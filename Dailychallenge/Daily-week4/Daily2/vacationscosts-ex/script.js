function hotelCost() {
    let numOfNights;
    do {
      numOfNights = parseInt(prompt("Enter the number of nights you would like to stay in the hotel:"));
    } while (isNaN(numOfNights) || numOfNights <= 0);
  
    const hotelPricePerNight = 140;
    return numOfNights * hotelPricePerNight;
  }
  
  function planeRideCost() {
    let destination;
    do {
      destination = prompt("Enter your destination:");
    } while (typeof destination !== "string" || destination.trim().length === 0);
  
    switch (destination.toLowerCase()) {
      case "london":
        return 183;
      case "paris":
        return 220;
      default:
        return 300;
    }
  }
  
  function rentalCarCost() {
    let numOfDays;
    do {
      numOfDays = parseInt(prompt("Enter the number of days you would like to rent the car:"));
    } while (isNaN(numOfDays) || numOfDays <= 0);
  
    const carPricePerDay = 40;
    let totalCost = numOfDays * carPricePerDay;
  
    if (numOfDays > 10) {
      const discountPercentage = 5;
      const discountAmount = (totalCost * discountPercentage) / 100;
      totalCost -= discountAmount;
    }
  
    return totalCost;
  }
  
  function totalVacationCost() {
    const hotelCost = hotelCost();
    const planeRideCost = planeRideCost();
    const rentalCarCost = rentalCarCost();
  
    const totalCost = hotelCost + planeRideCost + rentalCarCost;
    console.log(`The hotel cost: $${hotelCost}, the plane tickets cost: $${planeRideCost}, the car cost: $${rentalCarCost}.`);
    return totalCost;
  }
  
  totalVacationCost();