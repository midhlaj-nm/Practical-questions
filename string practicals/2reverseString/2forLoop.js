function reverseWithForLoop(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }
  console.log(reverseWithForLoop("hello")); // "olleh"

  

 
 
  function reverseWithForLoop(str) {
    let reversed = '';
    for (let i = 0; i <str.length; i++) {
      reversed =str[i]+reversed
    }
    return reversed;
  }
  console.log(reverseWithForLoop("hello")); // "olleh"
  


  