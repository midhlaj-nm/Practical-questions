function removeDuplicates(str) {
    let result = '';
    let seen = {};  // Object to track characters we've already added
    for (let i = 0; i < str.length; i++) {
      if (!seen[str[i]]) {  // If the character hasn't been seen yet
        result += str[i];  // Add it to the result string
        seen[str[i]] = true;  // Mark this character as seen
      }
    }
    return result;
  }
  
  console.log(removeDuplicates('hello'));  // "helo"
  