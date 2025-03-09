//normal object
const obj = {a:1,b:2,c:3,d:4,e:45}
let sum = 0
sum = Object.values(obj).reduce((sum,curr)=>sum+=curr,0)
console.log(sum)

//nested object
const ob = {a:1,b:2,nes:{c:3,d:4},index:90,key:'string'}
function sumOfObj(obj) {
    // return Object.values(obj).reduce((sum, curr) => 
    //     sum + (typeof curr === 'number' ? curr : 
    //            Array.isArray(curr) ? curr.reduce((a, b) => a + (typeof b === 'number' ? b : 0), 0) : 
    //            typeof curr === 'object' && curr ? sumOfObj(curr) : 0), 0);
    return Object.values(ob).reduce((sum,curr)=>
    sum + (typeof curr === 'numbers' ? curr : 
        Array.isArray(curr) ? curr.reduce((a,b)=> a + (typeof curr === 'number' ? b : 0), 0) :
        typeof curr === 'object' && curr ? sumOfObj(curr) : 0
    ), 0)
}
console.log(sumOfObj(ob))