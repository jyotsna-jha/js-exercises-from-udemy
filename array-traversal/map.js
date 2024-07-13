/*

 map(): method: New array from existing array with function
.map(): Creates new array by applying function to each element in existing array

'.map()': Callback function applied to each element
collects results in new array
original array remains unchanged


*/


const numbersarr2=[1,2,3,4,5,6]
const newnumSquareArr=numbersarr2.map(function(num,index,arr){
    return num*10;
})
console.log(newnumSquareArr)

// using map to convert an array of strings to uppercase
const words2=['apple','mango','guava']
const convertedWords=words2.map(function(words2){
    return words2.toUpperCase()
})
console.log(convertedWords)