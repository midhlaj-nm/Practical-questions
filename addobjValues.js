let obj = {a:10, b:20}
const sum = Object.values(obj).reduce((acc,curr)=> acc+curr, 0)
console.log(sum)