/*

toFixed(): Format floating point number
Set decimal precision
Return string with specified decimal places

toFixed(): Takes decimal places argument
Rounds number to specified decimal places
Adds zeros for required precision if needed
Useful in finance,science for precision decimals

This method is basically used to know how many places after decimal you want to talk about

Uses:
Format currency in financial apps
Represents scientific data with decimal precision
Round numbers for web app display

Rules:
toFixed():Returns string, not number
Use for specific decimal display or string join
Avoid for math ops;result is string
converted to number with parseFloat() or Number()

*/

// Formatting currency
const productPrice=49.955
const formattedPrice=productPrice.toFixed(4)
console.log(formattedPrice)

// Scientific Data
const piApprox=3.14159
const roundedPI=piApprox.toFixed(3)
console.log(roundedPI)

// Calculating Body Mass Index(BMI)

const weightKg=70;
const heightM=1.75;
const BMI=(weightKg/(heightM ** 2))
console.log(BMI.toFixed(3))