//array to object
const arr = [1,2,3,4,5,6,7,8]
// const res = arr.map(num =>({value: num}))
// console.log(res)


//array to object
const res = arr.map((num,index)=>({[`num${index+1}`]:num}))
console.log(res)