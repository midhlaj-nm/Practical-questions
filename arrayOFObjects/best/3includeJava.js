//first employee who has skill Django
const djangoskill=employees.find(employe=>{
    return employe.skills.includes("Django")
})
console.log(djangoskill)