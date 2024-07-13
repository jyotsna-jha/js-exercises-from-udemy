/*
-parseFloat():Convert string to floating point number
-Useful for arithemetic with decimal-based( strings

-parseFloat(): Takes string as argument
-No radix: Starts parsing from first character
-Continues until non-floating-point character encountered
*/

// Converting Price for an E-commerce checkout
const checkoutPrice="$99.99";
const checkoutPriceFloat=parseFloat(checkoutPrice.replace("$",""))
console.log(checkoutPriceFloat)

// Extracting Temperature Data from a Weather API
const apiTempData="Temperature: 23.5°C"
const actualTemperature=parseFloat(apiTempData.replace("Temperature:","").replace("°C",""))
console.log(actualTemperature)