/*

Function declaration is hoisted: Can be used before definition


*/
sayHello() // can be used before declaration, thus hoisted

function sayHello(){
    console.log("Hello functions!")
}

function greetings(){
    console.log('Hello')
}

function showDate(){
    const currentDate=new Date()
    console.log(`Today's date is ${currentDate}`)
}

showDate()


