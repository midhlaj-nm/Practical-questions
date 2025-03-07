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


//Fibonacci function

function* fibonacci(){
    let a = 0, b = 1
    while(true){
    yield a;
    [a , b] = [b, a + b]
    }
}
 const fib = fibonacci()
 console.log(fib.next().value)
 console.log(fib.next().value)