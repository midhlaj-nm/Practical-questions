function second(arr) {
    let max = -Infinity
    let secLar = -Infinity

    for(let num of arr){
        if(num > max){
            max = num
        }
    }

    for(let num of arr){
        if(num > secLar && num < max){
            secLar = num
        }
    }

    return secLar === -Infinity ? null : secLar
}

console.log(second([1,2,3,4,5,6,7]))