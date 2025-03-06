function sumNumbersInString(str) {
    // Split the string by spaces and parse each part as a number
    const numbers = str.split(' ').map(num => parseFloat(num)).filter(num => !isNaN(num));
  
    // Sum all the valid numbers
    return numbers.reduce((sum, num) => sum + num, 0);
  }
  
  console.log(sumNumbersInString('12 34 56 78'));  // 180 (12 + 34 + 56 + 78)
  console.log(sumNumbersInString('12.5 3 5'));  // 20.5 (12.5 + 3 + 5)
  console.log(sumNumbersInString('apple 4 orange'));  // 4 (only 4 is a valid number)
  