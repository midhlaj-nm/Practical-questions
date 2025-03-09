const arr = [1,2,3,4,5,6,7,8]
const res = arr.map((value)=>{
    let isEven = value % 2 === 0 ? 'Even' : 'Odd'
    let isOdd = value % 2 === 1 ? 'Odd' : 'Even'
    if(isEven){
        return {num: value, numType: isEven}
    } else {
        return {num: value, numType: isOdd}
    }
})
console.log(res)