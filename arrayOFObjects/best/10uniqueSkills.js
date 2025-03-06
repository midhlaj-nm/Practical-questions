//skills
const skills=employees.map(employ=>employ.skills).flat();
console.log(skills)


// unique skills
const skills1=[...new Set(employees.map(employ=>employ.skills).flat())];
console.log(skills1)