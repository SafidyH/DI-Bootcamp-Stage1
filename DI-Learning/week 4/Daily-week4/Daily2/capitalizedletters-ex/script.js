function capitalize(str) {
    let evenCapitalized = '';
    let oddCapitalized = '';
  
    for (let i = 0; i < str.length; i++) {
      if (i % 2 === 0) {
        evenCapitalized += str[i].toUpperCase();
        oddCapitalized += str[i].toLowerCase();
      } else {
        evenCapitalized += str[i].toLowerCase();
        oddCapitalized += str[i].toUpperCase();
      }
    }
  
    return [evenCapitalized, oddCapitalized];
  }

  const result = capitalize("abcdef");
console.log(result);
