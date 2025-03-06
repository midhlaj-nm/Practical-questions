function ispallindrome(str){
    let reversed=str.split('').reverse().join('');
    return str===reversed
}
console.log(ispallindrome('mam'))