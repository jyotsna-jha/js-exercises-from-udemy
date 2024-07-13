/*

string.trim() removes whitespace from string edges
useful for data sanitization and text formatting
trim() returns a new,edge-whitespace-free string
Includes spaces ,tabs, Unicode whitespaces
Doesn't affect internal whitespace in string
original string remains unchanged
Aligns with JS's immutable string behavior


When to use?
-Removes spaces in form fields for cleaner user input.
-Prepares text for optimal display or storage
-Sanitizes data from files or databases with extra whitespace

-Use trim() to ensure accurate data comparisons
-Avoid trim() if whitespace are crucial for app logic.

Notes:
String.trim() takes no arguments
Returns new string,original remains unchanged
For specific cases,use 'trimStart()' or 'trimEnd()'
*/

// Trimming user Input

const userInput3=' emma@gmail.com '
const userInputtrim=userInput3.trim()
console.log(userInput3)
console.log(userInputtrim)


//Removing line Breaks
const stringsWithBreaks='\n\t Hello, World';
const cleanString=stringsWithBreaks.trim()
console.log(stringsWithBreaks)
console.log(cleanString)