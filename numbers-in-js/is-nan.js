/*

parseFloat(): Convert string to floating-point number
isNaN(): Check if value is NAN
validate and clean data,arithmetic conditions


isNAN():Takes one argument returns boolean
true if argument is NAN, false otherwise
Number.isNaN() : more reliable than global 'isNaN()'


*/


// calculating Grade point average (GPA)
const inputGPA="3.8";
const parsedGPA=parseFloat(inputGPA)

if(isNaN(parsedGPA)){
    console.log('Invalid GPA input')

}

else
{
    console.log(`Your GPA is ${parsedGPA}`)
}

// calculating savings after a transaction
const initialSavings='1000';
const withdrawal="Hello"
const newSavings=parseFloat(initialSavings) - parseFloat(withdrawal)

if(isNaN(newSavings)){
    console.log('Invalid Transaction')
}
else{
    console.log(`Your new savings amount is ${newSavings}`);
}

//computing the area of a circle
const radiusInput='7';
const radius=parseFloat(radiusInput) 
const area=Math.PI * Math.pow(radius,2);
if(isNaN(area)){
    console.log('Invalid radius')
}else{
    console.log(`Area of the circle is ${area.toFixed()}`)
}