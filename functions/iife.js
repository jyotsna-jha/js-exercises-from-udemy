// Immediately invoked function expression(IIFI)

/*
IIFE(immediately invoked function expression())
execute function upon defination
for data privacy,scope isolation, initialization code

IIFE: Function expression defined and executed immediately
creates new scope,isolating variables
avoids polluting global scope
parentheses enclosure followed by immediate execution
Adresses javascript's lack of block-level scope.

*/

(
    function(){
        console.log('Jyotsna')
    }
)();

(
    function(){
       const number_y=5;
       const square_number=number_y*number_y
       console.log(square_number)

    }
)();

(
    function(){
        const str1="Hello"
        const str2="World"
        const result_string=str1+ " "+ str2;
        console.log(result_string)
    }
)()