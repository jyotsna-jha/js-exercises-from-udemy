/*

.filter() method: New array with elements passing callback condition
.filter(): Callback function applied to each element
Function returns 'true' to include element in new array
.filter() always returns new array
Callback must return Boolean('true','false')

*/


const numbersarr4=[1,2,3,4,5,6]
const evenNumbers=numbersarr4.filter(function(num){
    //filter logic here
    return num%2==0
})

console.log(evenNumbers);

const gender=['male','female']
const maleArr=gender.filter(function(gender){
    return gender==='male'
})

console.log(maleArr)

// using filter to remove falsy values an array

const mixedArr4=[0,1,'apple',null,""]
const truthyValues=mixedArr4.filter(function(value){
    return Boolean(value)
})
console.log(truthyValues)