// String concatenation
// using the + operator
const firstName1='Jyotsna';
const lastName='Jha';
const fullname=firstName1+" "+lastName;

console.log(fullname)

//using the .concat() method
const str1='Hello';
const str2='World';
const combinedStr=str1.concat(" ",str2)

console.log(combinedStr)

// Template literal
const fruit='apple';
const color='red';
const sentence=`The ${fruit} is ${color}`;
console.log(sentence)