function ispallindrome(str){
    let reversed="";
    for(let char of str){
        reversed=char+reversed;
    }
    return str===reversed;
}
console.log(ispallindrome('malayalam'))


