const str = "test1 test2";
const matches = str.matchAll(/\d+/g);
console.log(Array.from(matches)); // Output: [['1'], ['2']]

