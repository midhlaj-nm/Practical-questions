// REVERSE THE ARRAY AND ITS INNER NUMBER ALSO
// -------------------------------------------



// const arr = [98,7654,321]


// for(let i=0;i<arr.length;i++){
//     let a = arr[i].toString().split('')
//     let start = 0
//     let end = a.length-1
//     while(start != (Math.floor(a.length/2))){
//         [a[start],a[end]] = [a[end],a[start]]
//         start++
//         end--
//     }
//     arr[i] = parseInt(a.join(''))

// }

// let start = 0
// let end = arr.length-1

// while(start<end){
//     [arr[start],arr[end]] = [arr[end],arr[start]]
//     start++
//     end--
// }
// console.log(arr)



// Write a function that takes an array of integers and reverses it in place (without using any extra array or reverse function).
// ------------------------------------------------------------------------------------------------------------------------------


// let arr = [5,4,3,2,1]

// let start =0
// let end = arr.length-1
// while(start<end){
//     [arr[start],arr[end]] = [arr[end],arr[start]]
//     start++
//     end--
// }
// console.log(arr)




// Given an array of integers, write a function to find the maximum product of any two integers.
// ------------------------------------------------------------------------------------------------------------------------------



// eg:- we need to multiply one with another element in the same array and return the hightst multiple


// wayone : -

// let arr = [1,2,5,6,3]
// let largest = 0
// for(let i=0;i<arr.length-1;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if((arr[i]*arr[j])>largest){
//             largest = arr[i]*arr[j]
//         }
//     }
// }
// console.log(largest)

// waytwo:- with less complexity

// let arr = [1,2,5,6,6,3]
// let large = -Infinity
// let secondLargest 
// for( let a of arr){
//     if(a>large){
//         secondLargest = large
//         large = a
//     }else if(a>secondLargest){
//         secondLargest = a
//     }
// }

// console.log(large*secondLargest)





// Write a function that removes duplicates from an array using filter
// ------------------------------------------------------



// let arr = [1,2,3,4,5,3,2]
// let result = arr.filter((num,index)=>arr.indexOf(num) == index)
// console.log(result)








// Write a function that removes duplicates from an array without using built-in methods like Set or filter.
// ---------------------------------------------------------------------------------------------------------




// let arr = [1,2,3,4,5,3,2,4,5]
// let uniqueArr = []

// let set = {}

// for(let a of arr){
//     if(!set[a]){
//         uniqueArr[uniqueArr.length] = a
//         set[a] = true
//     }
// }
// console.log(uniqueArr)








// reverse a nested array
// -----------------------



 
// let arr = [1,2,3,4,5,6,[7,8,9]]


// function reverse(arr){
//     let j = arr.length-1
//     for(let i =0;i<j;i++){
//         if(Array.isArray(arr[i])){
//              reverse(arr[i])
//         }
//         if(Array.isArray(arr[j])){
//             reverse(arr[j])
//         }
//         [arr[i],arr[j]] = [arr[j],arr[i]]
//         j-- 
//     }
// }

// reverse(arr)
// console.log(arr)








//   a='a1b2c3df6'    spacial case question
// ----------------------------------------





//` let a='a1b2c3df6'
// let res = ''
// let result = ''
// for(let i=0;i<a.length;i++){
//     if(isNaN(a[i])){
//         res += a[i]
//     }else{
//         let sub = res
//         for(let j=1;j<parseInt(a[i]);j++){
//             res += sub
//         }
//         result += res
//         res = ''
//     }
// }
// console.log(result`)



//   Flat an array with nested arrays without using 'flat()' method.
//   ---------------------------------------------------------------


// let arr = [1,2,3,[4,[5,6,[8,9,0]]]]

// function flatternArray(arr,newArr=[]){
//     for(let a of arr){
//         if(Array.isArray(a)){
//             flatternArray(a,newArr)
//         }else{
//             newArr.push(a)
//         }
//     }
//     return newArr
// }

// console.log(flatternArray(arr));





// Delete consecutive odd numbers from an array.
// .............................................


// let arr = [1,2,3,3,4,5,6,7,9,3]

// function deleteOdd(arr){
//     let count = 0
//     let odd = []
//     let deleteIndex = []
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] % 2 != 0){
//             count++
//             odd.push(i)
//         }else{
//             if(count>1){
//                 deleteIndex.push(odd)
//             }
//             count = 0
//             odd = []
//         }
//     }
//     if(odd.length>1){
//         deleteIndex.push(odd)
//     }
//     let newArr = deleteIndex.flat()
//     console.log(newArr);
//     let result = arr.filter((x,index)=> {return !newArr.includes(index) })
//     console.log(result)
    
// }
// deleteOdd(arr)



//  Delete the repeated elements from an array (without using Set).
//  ---------------------------------------------------------------


// let arr =[1,2,3,4,1,5,3,2,6,7,8,9]
// let tempArr = []
// let index = []
// for(let i=0;i<arr.length;i++){
//     if(tempArr.includes(arr[i])){
//         index.push(i)
//     }else{
//         tempArr.push(arr[i])
//     }
// }
// let result = arr.filter((x,i)=> {
//     if(!index.includes(i)){
//         return x
//     }
// })
// console.log(result)







// Find the Maximum mark earned by the student from an array of    objects ( obj eg:{ name:''john'', mark:75} ).
// -------------------------------------------------------------------------------------------------------------




// let arr = [{ name:'john', mark:75},{ name:'srun', mark:175},{ name:'john', mark:65}]

// let result = arr.reduce((acc,curr)=>{
//     if(curr.mark>acc.mark){
//         return acc = curr
//     }
//     return acc
// },{mark:0})

// console.log(result)





//  Destructure nested array and object.
// -------------------------------------

 
// let arr = [1,2,3,[4,5,6,[7,8,9]]]

// let [first,second,third,[fourth,fisth,sixth,[seventh,engith,nineth]]]  = arr

// console.log(first)


// let obj1 = {
//     name:"abin",
//     address:{
//         city:"calicut",
//         state:"kerala"
//     }
// }

// let {name,address:{city,state}} = obj1

// console.log(city)


// Removing the nth element from an array.
// ---------------------------------------


// let arr = [1,3,5,7,9,0,8,6,4,2]
// let n = 5
// console.log(arr.split(n,1))



//                    OR


// let arr = [1,3,5,7,9,0,8,6,4,2]


// function removeNthElement(arr,n){
//     let newArr = []
//     for(let i=0;i<arr.length;i++){
//         if(i!=n){
//             newArr.push(arr[i])
//         }
//     }
//     return newArr
// }

// console.log(removeNthElement(arr,5))





// .map(): convert elements to uppercase.
// ---------------------------------------


// let arr = ["abin","binu","arun"]

// let newArr = arr.map((x)=>x.toUpperCase())
// console.log(newArr)







// .reduce(): longest string in an array.
// ---------------------------------------

// let arr = ["abin","binu cheruvotte","arun srenivas"]


// let result = arr.reduce((acc,curr)=>{
//     if(curr.length>acc.length){
//         return acc = curr
//     }
//     return acc

// },"")
// console.log(result);

