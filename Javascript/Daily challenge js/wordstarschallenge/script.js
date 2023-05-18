function createFrame() {
    const input = prompt("Enter words (separated by commas):");
  
    const words = input.split(",");
  
    let maxLength = 0;
    for (let i = 0; i < words.length; i++) {
      const word = words[i].trim();
      if (word.length > maxLength) {
        maxLength = word.length;
      }
    }
  
    let frame = "";
    const line = "*".repeat(maxLength + 4);
  
    frame += line + "\n";
  
    for (let i = 0; i < words.length; i++) {
      const word = words[i].trim();
      const spaces = " ".repeat(maxLength - word.length);
  
      frame += "* " + word + spaces + " *\n";
    }
  
    frame += line;
    console.log(frame);
  }
  
  createFrame();