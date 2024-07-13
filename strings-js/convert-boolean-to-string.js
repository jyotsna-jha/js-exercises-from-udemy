/*

-Converts string to boolean via Boolean constructor
-Double negation(!!) also used for quick conversion

-Boolean: Converts string to boolean, empty string returns false
-Double Negation(!!):Shorthand for string to boolean conversion

*/


// String to Boolean
// Using Boolean() for form validation

const usernameInput45='Thomas';
const convertedVal4=Boolean(usernameInput45)
console.log(convertedVal4) // returns true

const emptyField="";
const convertedVal5=Boolean(emptyField)
console.log(convertedVal5) // returns false

// using double negation !! for quick conversion

const emailInput="emmani@gmail.com";
const convertedVal6=!!emailInput
console.log(convertedVal6)