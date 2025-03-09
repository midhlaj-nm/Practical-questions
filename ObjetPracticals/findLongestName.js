const names = ['alice','midhlaj','anshida']
const res = names.map((values) => ({name:values}))
let high = res.reduce((acc,curr)=>{
    return curr.name.length ? curr : acc
})
console.log(res)