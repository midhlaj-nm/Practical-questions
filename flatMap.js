const arr = [1,2,[3,4],[5,6,[7,8]]]
const nested = arr.flatMap(item => Array.isArray(item) ? item : [item])
console.log(nested)