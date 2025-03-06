//You can find an object and update its properties in the same step.
const employee = employees.find(employee => employee.name === "Tom");
if (employee) {
    employee.age = 29;
}
console.log(employee); // { name: "Tom", age: 29, position: "Manager" }
