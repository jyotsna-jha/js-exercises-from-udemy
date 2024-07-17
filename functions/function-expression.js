/*
function expression: Define a function assigned to a variable
Unlike function declarations, function expression are not hoisted
*/

// function expression

//greet() // we cannot call it here, since function expression is not hoisted

const greet=function(){
    console.log("Hello Jyotsna!")

}

// invoke()
greet()


const checkEvenorOdd=function(){
    const number=90;
    if(number%2===0){
        console.log('This is an even number');
    }
    else{
        console.log('This is an odd number')
    }
}
checkEvenorOdd()

