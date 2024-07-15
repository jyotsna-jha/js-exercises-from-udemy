/*
Multi dimensional array: Array of arrays
Organize data in rows,columns, more dimensions

Two dimensional array: Elements are arrays
Like a table with rows,columns(array elements)
Higher dimensions: arrays within arrays withing arrays

*/

// Multi-Dimensional Arrays
// Creating a 2D array

const matrix=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

// access the elements 
console.log(matrix[0][0])

// creating a 3D array

const threeDArray=[
    [
    [1,2],[3,4]],
     [[4,5],[6,8]
]
]
console.log(threeDArray[0][1][1]) // returns 4
console.log(threeDArray[1][0][1]) // return 5