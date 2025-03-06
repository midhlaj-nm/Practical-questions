//How can you check if all employees have a salary greater than 40000?
const checksalary=employees.every(employ=>{
    return employ.salry>=50000
})
console.log(checksalary)




//some
const checksalary1=employees.some(employ=>{
    return employ.salary>=50000
})
console.log(checksalary1)