
function ispallindrome(str){
    let reversed='';
    for(i=0;i<str.length;i++){
        reversed=str[i]+reversed
    }return reversed===str
}
console.log(ispallindrome('malayalam'))




function ispallindrome(str){
    let reversed='';
    for(i=0;i<str.length;i++){
        reversed += str[i]
    }return reversed===str
}
console.log(ispallindrome('mam'))