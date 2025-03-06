function reverseWithForOfLoop(str) {
    let reversed = '';
    for (const char of str) {
      reversed = char + reversed;
    }
    return reversed;
  }
  console.log(reverseWithForOfLoop("hello")); // "olleh"

  

  