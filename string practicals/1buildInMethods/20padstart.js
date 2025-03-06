const str = "5";
console.log(str.padStart(3, "0")); // Output: '005'


const fruits2 = "applebananaorange";
console.log(fruits2.padStart(3, "0")); 
// Output: 'applebananaorange' (no padding added because targetLength is smaller than the string length)

const fruits3="applebananaorange";
console.log(fruits3.padStart(20,"0"))
//000applebananaorange
