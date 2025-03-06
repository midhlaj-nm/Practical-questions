let arr = {a:10, b: 20, c: {e: 30, d:40},f: [1,2,3]}
const m = JSON.parse(JSON.stringify(arr))
arr.a = 20
console.log(m) 