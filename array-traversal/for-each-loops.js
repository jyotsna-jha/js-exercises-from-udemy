/*

forEach loop: Array method function for each element
forEach method: Direct handling of array elements
No need for counter or explicit index
Pass callback function for element handling

Rules:
Use forEach when no array transformation needed
No 'break' in 'forEach';alternatives like exceptions

*/

const numbersarr=[1,2,3,4,5,6]
numbersarr.forEach(function(element,index,array){
    console.log('Element',element);
    console.log('index',index);
    console.log('original array',array)
})



// using forEach to sum the elements of an array
let sum=0;
numbersarr.forEach(function(num){
    sum+=num
})

console.log('The total sum is:',sum)

// Modifying array elements using forEach
const numbersarr1=[1,2,3,4,5,6,100]
const squares=[]
numbersarr1.forEach(function(num1){
    squares.push(num1*num1)
})
console.log(squares)