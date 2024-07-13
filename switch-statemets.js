/*
They are used to perform different actions based on different conditions. 
The 'switch' statement is used to select one of many code blocks to be executed. It's a better alternatives to 'if-else' when
dealing with multiple conditions.

*/



/* suppose you are building a calendar application and you need to display the 
day of the week based on the number provided (0-6,Sunday-Saturday).
*/


let dayNumber=4;

switch(dayNumber){
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("No day")
}