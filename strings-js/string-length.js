/*
length is not a method ,it's a property
*/

// Find the length of a string

const mystr='Jyotsna Jha'
const strlength=mystr.length //not lenght() since length is not method ,it's property
console.log(strlength)

//check for length of empty string

const mystrempty=""
const strlengthempty=mystrempty.length
console.log(strlengthempty)

//string validation
const usernamex='Emmanuel';
if(usernamex.length>=6){
    console.log("Valid username")
}
else {
    console.log("Invalid username")
}