const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
      firstFloor: 3,
      secondFloor: 4,
      thirdFloor: 9,
      fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent: {
      sarah: [3, 990],
      dan: [4, 1000],
      david: [1, 500],
    },
  };
  
  console.log("Number of floors:", building.numberOfFloors);
  
  console.log("Apartments on the first floor:", building.numberOfAptByFloor.firstFloor);
  console.log("Apartments on the third floor:", building.numberOfAptByFloor.thirdFloor);
  
  const secondTenant = building.nameOfTenants[1];
  const numberOfRooms = building.numberOfRoomsAndRent[secondTenant][0];
  console.log("Second tenant:", secondTenant);
  console.log("Number of rooms in his apartment:", numberOfRooms);
  
  const sarahRent = building.numberOfRoomsAndRent.sarah[1];
  const davidRent = building.numberOfRoomsAndRent.david[1];
  const danRent = building.numberOfRoomsAndRent.dan[1];
  
  if (sarahRent + davidRent > danRent) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
  }
  
  console.log("Dan's rent after adjustment:", building.numberOfRoomsAndRent.dan[1]);