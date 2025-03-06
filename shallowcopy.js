let obj2 = { a: 10, b: { x: 20 } };
let copy2 = { ...obj2 };

copy2.b.x = 100; 

console.log(obj2);  // { a: 10, b: { x: 100 } }
console.log(copy2); // { a: 10, b: { x: 100 } }
