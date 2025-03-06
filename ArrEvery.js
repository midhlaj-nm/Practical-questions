function allNumbers(str){
    return str.every(item => typeof item === 'number')
}
console.log(allNumbers([2,34,45,3]))