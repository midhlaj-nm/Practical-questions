function greet(name, callback){
    console.log('Hello ' + name)
    callback()
}
function saybye() {
    console.log('Goodbye')
}

greet('Midh',saybye)