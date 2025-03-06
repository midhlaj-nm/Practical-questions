const oldest = employees.reduce((oldest, current) => (current.age > oldest.age ? current : oldest), employees[0]);
console.log(oldest); // { name: "John", age: 30, position: "Developer" }
