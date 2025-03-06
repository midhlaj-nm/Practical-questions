function capitalizeFirstLetter(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
  }
  
  console.log(capitalizeFirstLetter('hello world'));  // "Hello World"
  