/*

Array.of():Method in 'Array' object
Creates arrays from passed arguments

Array.of(): Addresses Array Constructor quirks
Treats all arguments as array elements
Includes single numeric argument case
*/

const numArr=Array.of(1,2,3,4)
console.log(numArr)

//array.from

// cloning array
const originalArr=[1,2,3]
const clonedArr=Array.from(originalArr)

//creating an array from an array-like object
const arrayLike={0:'a',1:'b',2:'c',length:3}
const convertedArr=Array.from(arrayLike)
console.log(convertedArr)


