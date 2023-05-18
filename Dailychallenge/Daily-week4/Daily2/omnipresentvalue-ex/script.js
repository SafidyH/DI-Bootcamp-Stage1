function isOmnipresent(arr, value) {
    for (let subArr of arr) {
      if (!subArr.includes(value)) {
        return false;
      }
    }
    return true;
  }
  
  console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1));
  console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6)); 