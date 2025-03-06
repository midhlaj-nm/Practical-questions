//Check if an Object Exists in the Array
const hasDesigner = employees.some(employee => employee.salary === 700);
console.log(hasDesigner); // false


//Check if All Objects Meet a Condition
const allAbove20 = employees.every(employee => employee.age > 20);
console.log(allAbove20); // true

//If you need to find the first object in the array that satisfies a condition, find() is perfect.
const firstEmployee = employees.find(employee => employee.age > 27);
console.log(firstEmployee); 


//Combine multiple conditions to find objects with complex criteria.
const designer = employees.find(employee => employee.position === "Designer" && employee.age < 30);
console.log(designer); // { name: "Sara", age: 25, position: "Designer" }


// Finding Objects by Nested Properties
const projects = [
    { name: "Project1", manager: { name: "John", age: 30 } },
    { name: "Project2", manager: { name: "Sara", age: 25 } }
];

const project = projects.find(project => project.manager.name === "Sara");
console.log(project); // { name: "Project2", manager: { name: "Sara", age: 25 } }

const employees = [
    {
      name: "Alice",
      age: 30,
      salary: 50000,
      price: 200,
      skills: ["JavaScript", "React", "Node.js"]
    },
    {
      name: "Bob",
      age: 25,
      salary: 45000,
      price: 180,
      skills: ["Python", "Django", "Machine Learning"]
    },
    {
      name: "Charlie",
      age: 35,
      salary: 70000,
      price: 250,
      skills: ["Java", "Spring", "SQL"]
    },
    {
      name: "David",
      age: 28,
      salary: 55000,
      price: 220,
      skills: ["PHP", "Laravel", "MySQL"]
    }
  ];
  
  console.log(employees);
  const findskilled = employees.find(employ => employ.skills.includes("PHP"));
console.log(findskilled);