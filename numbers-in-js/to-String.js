//Using toString() with Different Bases
const decimalNum=10;
const binaryStr=decimalNum.toString(2)
const hexStr=decimalNum.toString(16)
console.log(binaryStr)
// this displays 1010
console.log(hexStr)

//Working with BigInt
const bigIntNum=BigInt('97465671759845658552')
console.log(bigIntNum.toString())
