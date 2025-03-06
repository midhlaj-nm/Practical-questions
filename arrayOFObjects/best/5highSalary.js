//highes salary
const highSalary=employees.reduce((acc,curr)=>{
    return acc.salary>curr.salary?acc:curr
})
console.log(highSalary)