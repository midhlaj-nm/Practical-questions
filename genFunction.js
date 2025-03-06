function* myg(){
    yield "Hello";
    yield "How";
    yield "Are U!"
}
const gen = myg()

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)


//
