function removeDuplicates(str) {
    return str.split('')
      .filter((char, index, arr) => arr.indexOf(char) === index)
      .join('');
  }
  
  console.log(removeDuplicates('hello'));  // "helo"
  