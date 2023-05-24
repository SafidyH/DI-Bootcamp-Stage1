function playTheGame() {
    const play = confirm("Would you like to play the game?");
  
    if (!play) {
      alert("No problem, Goodbye.");
      return;
    }
  
    let userNumber = prompt("Enter a number between 0 and 10:");
    let attempts = 1;
  
    while (isNaN(userNumber) || userNumber < 0 || userNumber > 10) {
      userNumber = prompt("Sorry it's not a good number, try again:");
      attempts++;
  
      if (attempts > 3) {
        alert("Out of chances. Goodbye.");
        return;
      }
    }
  
    const computerNumber = Math.floor(Math.random() * 11);
    compareNumbers(userNumber, computerNumber);
  }
  
  function compareNumbers(userNumber, computerNumber) {
    if (userNumber == computerNumber) {
      alert("WINNER!");
    } else if (userNumber > computerNumber) {
      userNumber = prompt("Your number is bigger than the computer's, guess again:");
      compareNumbers(userNumber, computerNumber);
    } else {
      userNumber = prompt("Your number is smaller than the computer's, guess again:");
      compareNumbers(userNumber, computerNumber);
    }
  }