/*
parseInt():Convert string to integer
Useful for arithmetic with text-based numbers

parseInt(): Takes string and optional radix
Default: Base 10, but specify different base with radix
Parsing from start until invalid digit encountered


*/

//converting User Input to Integer
const userInput1='42'
const userAge=parseInt(userInput1,10)
console.log(userAge)

// Extracting Price from a Text
const priceText="Price: 100 USD"
const extractedPrice=parseInt(priceText.replace("Price:","").replace("USD",""),10)
console.log(extractedPrice)

//Converting Binary Data from a sensor
const sensorData="1101"
const sensorDataDecimal=parseInt(sensorData,2)
console.log(sensorDataDecimal)
