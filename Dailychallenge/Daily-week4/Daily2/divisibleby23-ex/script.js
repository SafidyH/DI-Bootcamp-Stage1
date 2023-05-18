function isDivisible(divisor) {
    var sum = 0;
  
    for (var i = 0; i <= 500; i++) {
      if (i % divisor === 0) {
        console.log(i);
        sum += i;
      }
    }
  
    console.log("Sum:", sum);
  }
  
  isDivisible(23);