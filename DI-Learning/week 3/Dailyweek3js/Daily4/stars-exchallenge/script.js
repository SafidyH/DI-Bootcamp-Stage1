function printPatternWithOneLoop() {
    let pattern = '';
    for (let i = 1; i <= 6; i++) {
      pattern += '* ';
      console.log(pattern);
    }
  }
  
  printPatternWithOneLoop();

  function printPatternWithTwoLoops() {
    for (let i = 1; i <= 6; i++) {
      let pattern = '';
      for (let j = 1; j <= i; j++) {
        pattern += '* ';
      }
      console.log(pattern);
    }
  }
  
  printPatternWithTwoLoops();

  