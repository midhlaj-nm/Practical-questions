const index = employees.findIndex(employee => employee.name === "Sara");
if (index !== -1) {
    employees.splice(index, 1);
}
console.log(employees);
