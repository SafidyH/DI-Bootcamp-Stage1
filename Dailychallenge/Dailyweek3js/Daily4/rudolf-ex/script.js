const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  };
  
  let sentence = '';
  for (let key in details) {
    sentence += `${key} ${details[key]} `;
  }
  
  console.log(sentence.trim());