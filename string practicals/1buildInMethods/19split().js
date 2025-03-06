//The split() method in JavaScript is used to divide a string into an array of substrings based on a specified separator.
const str = "apple,banana,orange";
console.log(str.split(",")); // Output: ['apple', 'banana', 'orange']

const fruits="apple,banana,orange";
console.log(fruits.split(" "))
//[ 'apple,banana,orange' ]


const fruits1="apple, banana, orange";
console.log(fruits1.split(" "))
//[ 'apple,', 'banana,', 'orange' ]


const fruits2="apple,banana,orange";
console.log(fruits2.split(","))
//[ 'apple', 'banana', 'orange' ]

const fruits3="apple,banana,orange";
console.log(fruits3.split("a"))
//[ '', 'pple,b', 'n', 'n', ',or', 'nge' ]
