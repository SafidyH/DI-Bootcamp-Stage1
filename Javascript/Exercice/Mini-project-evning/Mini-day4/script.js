 document.addEventListener('DOMContentLoaded', function() {
    function HangmanGame() {
      var word = '';
      var hiddenWord = '';
      var attempts = 10;
      var guessedLetters = [];
      var wordContainer = document.getElementById('hidden-word');
      var guessesContainer = document.getElementById('guesses');
      var guessInput = document.getElementById('guess-input');
      var guessButton = document.getElementById('guess-button');
      var messageContainer = document.getElementById('message');
      
      function isLetterInWord(letter) {
        return word.includes(letter);
      }
      
      function updateHiddenWord(letter) {
        var updatedWord = '';
        for (var i = 0; i < word.length; i++) {
          if (word[i] === letter) {
            updatedWord += letter;
          } else {
            updatedWord += hiddenWord[i];
          }
        }
        return updatedWord;
      }
      
      function displayHiddenWord() {
        wordContainer.textContent = hiddenWord.split('').join(' ');
      }
      
      function isPlayer1Winner() {
        return !hiddenWord.includes('*');
      }
      
      function handleGuess() {
        var guess = guessInput.value.toLowerCase();
        
        if (guessedLetters.includes(guess)) {
          messageContainer.textContent = 'You have already guessed that letter. Try again.';
          return;
        }
        guessedLetters.push(guess);
        guessesContainer.textContent = guessedLetters.join(' ');
        if (isLetterInWord(guess)) {
          hiddenWord = updateHiddenWord(guess);
          displayHiddenWord();
          if (isPlayer1Winner()) {
            messageContainer.textContent = 'CONGRATS! You win.';
            disableInput();
            return;
          }
        } else {
          attempts--;
          messageContainer.textContent = 'Incorrect guess! ' + attempts + ' attempt(s) remaining.';
          if (attempts === 0) {
            messageContainer.textContent = 'YOU LOSE.';
            disableInput();
            return;
          }
        }
        guessInput.value = '';
      }
      
      function disableInput() {
        guessInput.disabled = true;
        guessButton.disabled = true;
      }
     
      function startGame() {
        word = prompt('Player 1, enter a word (minimum 8 letters):');
        if (word.length < 8) {
          alert('Word must have a minimum of 8 letters.');
          return;
        }
        word = word.toLowerCase();
        hiddenWord = '*'.repeat(word.length);
        displayHiddenWord();
        guessButton.addEventListener('click', handleGuess);
        guessInput.addEventListener('keydown', function(event) {
          if (event.key === 'Enter') {
            handleGuess();
          }
        });
      }
      
      startGame();
    }
    
    var game = new HangmanGame();
  });
  