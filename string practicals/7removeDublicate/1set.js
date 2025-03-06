function removeDublicate(str){
    return [...new Set(str)].join('')
}
console.log(removeDublicate("Hello"))