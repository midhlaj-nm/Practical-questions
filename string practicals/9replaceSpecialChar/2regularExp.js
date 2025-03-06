function replaceSpaces(str) {
    return str.replace(/ /g, '%20');
  }
  
  console.log(replaceSpaces('Hello World Example'));  // "Hello%20World%20Example"
  