function add(a , b){
    return 8 + 9;
}
console.log(add())

const add1 = (a , b) => 7 + 6;
console.log(add1());


















const sum = (a ,b) => 6 + 8
console.log(sum())


let num = 0
const inter = (limit) => {
    const intervel = setInterval(()=>{
        num += 2;
        console.log(num)
        if(num >= limit){
            clearInterval(intervel)
        }
    }, 1000)
}

inter(10)






