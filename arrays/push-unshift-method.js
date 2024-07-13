/*

push():Adds elements to end of array
unshift():Adds elements to start of array

push():Appends one/multiple args to end,returns new length
unshift(): Adds elements at start,shifts existing,new length returned

*/

// using push method
const fruitsss=['Apple','Banana']
console.log('original fruits',fruitsss)
const newArrayOfFruits=fruitsss.push('kiwi')
console.log('modified fruits',fruitsss)


//using .unshift() to add elements at the beginning of an array
const mangoes=['malda','kalkatiya','bambai']
console.log('origina mangoes',mangoes)
const unshiftmangoes=mangoes.unshift('misharia')

console.log('added mango',mangoes)
