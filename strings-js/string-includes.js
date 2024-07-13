/*
string.includes(): Check if string contains substring
-Returns true or false boolean value

includes(): Takes substring to search ,optional start position
-Returns true if found false if not found

When to use?
-Quick check for substring presence
-Conditional code execution based on substring
-Input validation for pattern presence

Rules:
includes() is case-sensitive
optional Position parameter sets start index
Returns true or false not position

Notes:
includes() is read-only: it won't change the original string
-Useful for checking substring existence, not position
*/

//Basic usage
const textmy='I have an apple'
const resultinclude=textmy.includes('apple')


//checking for character
const resultinclude2=textmy.includes('I')

//specifying specific postion
const resultinclude3=textmy.includes('apple',8)
// apple from position 8 is present or not