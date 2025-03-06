const uniquePositions = [...new Set(employees.map(employee => employee.position))];
console.log(uniquePositions); // ["Developer", "Designer", "Manager"]
