function countWord(sentence, word) {
    return sentence.split(' ').filter(w => w === word).length;
  }
  
  console.log(countWord('hello world hello hello', 'hello'));  // 3
  