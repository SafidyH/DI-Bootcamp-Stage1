const word = prompt("Player 1, enter a word (minimum 8 letters):");

if (word.length < 8) {
  console.log("The word must have a minimum of 8 letters.");
} else {
  let hiddenWord = "*".repeat(word.length);
  let guesses = [];
  let remainingAttempts = 10;
  
  const updateHiddenWord = (guess, word, hiddenWord) => {
    let newHiddenWord = "";
    for (let i = 0; i < word.length; i++) {
      if (word[i] === guess || hiddenWord[i] !== "*") {
        newHiddenWord += word[i];
      } else {
        newHiddenWord += "*";
      }
    }
    return newHiddenWord;
  };

  const checkWin = (hiddenWord) => {
    return !hiddenWord.includes("*");
  };

  console.log(`Guess the word: ${hiddenWord}`);

  while (remainingAttempts > 0) {
    const guess = prompt("Player 2, guess a letter:").toLowerCase();

    if (guesses.includes(guess)) {
      console.log("You already guessed that letter. Try again.");
      continue;
    }

    guesses.push(guess);

    if (word.includes(guess)) {
      hiddenWord = updateHiddenWord(guess, word, hiddenWord);
      console.log(`Correct! Updated word: ${hiddenWord}`);
    } else {
      remainingAttempts--;
      console.log(`Incorrect! ${remainingAttempts} attempts remaining.`);
    }

    console.log(`Guesses: ${guesses.join(", ")}`);

    if (checkWin(hiddenWord)) {
      console.log("CONGRATS! YOU WIN.");
      break;
    }
  }

  if (remainingAttempts === 0) {
    console.log("YOU LOSE.");
  }
}
 