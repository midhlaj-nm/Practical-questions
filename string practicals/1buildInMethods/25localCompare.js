const str1 = "apple";
const str2 = "banana";

console.log(str1.localeCompare(str2));  // Output: -1 (apple is less than banana)
console.log(str2.localeCompare(str1));  // Output: 1 (banana is greater than apple)
console.log(str1.localeCompare("apple"));  // Output: 0 (both are equal)


