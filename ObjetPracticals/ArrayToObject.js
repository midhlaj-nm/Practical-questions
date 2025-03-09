//1
const arr = [1,2,3,4,5]
const res = arr.map((values) => ({'a':values}))
console.log(res)

//2
const ar = ['Midhlaj','Minhaj','Safiya']
let arrOfobj = []
for(i=0; i<ar.length; i++){
    arrOfobj.push({names:ar[i]})
}
console.log(arrOfobj)

//3
const fr = ['apple','banana','orange']
const frr = fr.map((value) => {
    let length = value.length
    return {name:value,length:length}
})
console.log(frr)

