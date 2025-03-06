function reverseWithReduce(str) {
    return str.split('').reduce((reversed, char) => char + reversed, '');
  }
  console.log(reverseWithReduce("hello")); // "olleh"
  