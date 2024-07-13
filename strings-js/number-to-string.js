// Converting Pixel value to Number with parseInt()
const pixelvalueAsString='42px';
// const convertedVal=parseInt(pixelvalueAsString)
// console.log(convertedVal+10)

// Converting Dimension String to Number with parseFload()
const dimensionStr="42.5px"
const convertedVal=parseFloat(dimensionStr)
console.log(convertedVal+10)

// Converting Age Input to Number using Number()

const ageInput="42";
const convertedVal1=Number(ageInput)
console.log(convertedVal1+10)

// Quick conversion using Unary + Operator

const scoreStr='100';
const convertedVal2=+scoreStr
console.log(typeof convertedVal2);