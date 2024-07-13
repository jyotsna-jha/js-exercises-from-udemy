// String conversion
const num=42;
const strNum=String(num)
console.log(typeof num)
console.log(typeof strNum)
console.log(strNum+strNum)
console.log(num+num)

// convert a boolean to a string 
const boolVal=true
const strBool=String(boolVal)
console.log(typeof strBool)

// convert an array to a string
const arr=[1,2,3];
console.log(typeof String(arr))

// converting object to a string
const object={
    name:"ema",
    age:"21"
}
console.log(typeof object)
console.log(typeof String(object))

//converting null and undefined to a string

const strNull1=String(null)
console.log(strNull1)