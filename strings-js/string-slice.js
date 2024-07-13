/*
String.slice():Extract portion, create new string
Doesn't modify original string
useful for text manipulation:substring,trimming

*/

/*

Rules:
-positive integers:Slice from begining
-Negative integers:Slice from end
-'slice()' non-destructive;returns new strings original unaltered
*/

/*
-Analogy:'slice()' as bead selection
-original bead line unchanged
-select beads, create new shorter line
*/

/*
use cases for 'slice()':
extracting username/domain from email
manipulating text for summarises/preview
cleaning data by removing string parts
*/

/*
-if start>end:Empty string from 'slice()'
out-of-bounds handled:closest valid index by Javascript
*/

// String Slice

//Basic use

const greeting1='Hello,world';
const extractedWord=greeting1.slice(1,3)
console.log(extractedWord)

// omitting the end index
const text='Hello,world'
// const result2=text.slice(7)
const result2=text.slice(7,9)
console.log(result2)

//uisng negative indices
const phrase='Hello, world';
const endingText=phrase.slice(-6); // returns last six
console.log(endingText)

// slicing between negative indices

const sentence2='Hello, world';
const result4=sentence2.slice(-6,-1)
console.log(result4)