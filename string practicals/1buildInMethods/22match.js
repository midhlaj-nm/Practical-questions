const str = "hello123";
console.log(str.match(/\d+/)); // Output: ['123'] (digits only)


const str2 = "hello123world456";
const result = str2.match(/\d+/);
console.log(result);
// Output: ['123'] (only the first match is returned)


const str3 = "hello123world456";
const result3 = str3.match(/\d+/g);
console.log(result3);
// Output: ['123', '456'] (all matches are returned)



const str4 = "HelloHELLOhello";
const result4 = str4.match(/hello/gi);
console.log(result4);
// Output: ['Hello', 'HELLO', 'hello']


const str5 = "Apples and APPLES";
const result5 = str5.match(/apples/gi);
console.log(result5);
// Output: ['Apples', 'APPLES']


const str6 = "hello";
const result6 = str6.match(/\d+/);
console.log(result6);
// Output: null

const str7 = "hello world";
const result7 = str7.match("hello");
console.log(result7);
// Output: ['hello']


