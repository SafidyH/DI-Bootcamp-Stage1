function calculateTip() {
    var billAmount = parseFloat(prompt("What is the amount of the bill?"));
  
    var tipAmount;
    if (billAmount < 50) {
      tipAmount = billAmount * 0.2;
    } else if (billAmount >= 50 && billAmount <= 200) {
      tipAmount = billAmount * 0.15;
    } else {
      tipAmount = billAmount * 0.1;
    }
  
    var finalBill = billAmount + tipAmount;
  
    console.log("Tip amount: $" + tipAmount.toFixed(2));
    console.log("Final bill: $" + finalBill.toFixed(2));
  }
  
  calculateTip();