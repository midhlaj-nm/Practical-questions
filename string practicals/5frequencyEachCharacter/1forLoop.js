function charFrequency(str) {
    let frequency = {};
    for (let char of str) {
      frequency[char] = (frequency[char] || 0) + 1;
    }
    return frequency;
  }
  
  console.log(charFrequency('hello'));  // { h: 1, e: 1, l: 2, o: 1 }
  