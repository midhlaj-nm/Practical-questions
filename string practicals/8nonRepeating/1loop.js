function firstNonRepeating(str) {
    let frequency = {};
    
    // Step 1: Count the frequency of each character
    for (let i = 0; i < str.length; i++) {
      frequency[str[i]] = (frequency[str[i]] || 0) + 1;
    }
  
    // Step 2: Find the first character with a frequency of 1
    for (let i = 0; i < str.length; i++) {
      if (frequency[str[i]] === 1) {
        return str[i];  // Return the first non-repeating character
      }
    }
  
    return null;  // Return null if there are no non-repeating characters
  }
  
  console.log(firstNonRepeating('swiss'));  // "w"
  