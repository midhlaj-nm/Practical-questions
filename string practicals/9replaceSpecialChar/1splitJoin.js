function replaceSpaces(str) {
    return str.split(' ').join('%20');
  }
  
  console.log(replaceSpaces('Hello World Example'));  // "Hello%20World%20Example"
  