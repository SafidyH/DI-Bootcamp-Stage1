function getUniqueElements(array) {
    const uniqueArray = [];
  
    for (let i = 0; i < array.length; i++) {
      if (!uniqueArray.includes(array[i])) {
        uniqueArray.push(array[i]);
      }
    }
  
    return uniqueArray;
  }
  const list1 = [1, 2, 3, 3, 3, 3, 4, 5];
console.log(getUniqueElements(list1));

const list2 = [1, 2, 3, 3, 3, 3, 4, 5];
console.log(getUniqueElements(list2));