const obj = {a:10, b:20, c:30}
let res = Object.values(obj).reduce((acc, curr) => acc + curr)
console.log(res)

//nested object
function sumOf(num){
    let sum = 0

    function add(input){
        if(typeof input === 'number'){
            sum += input
        } else if (Array.isArray(input)){
            input.forEach(add)
        } else if (typeof input === 'object') {
            Object.values(input).forEach(add)
        }
    }
    add(num)
    return sum
}
console.log(sumOf({a:10, b:{ e: 20, d:[2,3,4,5]},c: 45} ))