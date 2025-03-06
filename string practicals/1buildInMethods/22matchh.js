//1. Extract Numbers:
const a = "I have 123 apples and 456 oranges";
const resulta = a.match(/\d+/g);
console.log(resulta);
// Output: ['123', '456']


//2. Extract Words:
const b = "Hello, world! JavaScript is fun.";
const resultb = b.match(/\w+/g);
console.log(b);
// Output: ['Hello', 'world', 'JavaScript', 'is', 'fun']


//3. Find Specific Letters:
const c = "banana";
const resultc = c.match(/a/g);
console.log(resultc);
// Output: ['a', 'a', 'a']



const str = "hello123world456";
const result = str.match(/\D+/g); // Match all non-digits
console.log(result);
// Output: ['hello', 'world'] (matches sequences of non-digits)
