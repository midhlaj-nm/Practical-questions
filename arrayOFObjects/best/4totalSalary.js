//total salary
const totalsalary=employees.reduce((acc,curr)=>{
    return acc+curr.salary
},0);
console.log(totalsalary)