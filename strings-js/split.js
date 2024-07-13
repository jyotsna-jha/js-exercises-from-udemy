/*
string.split(): Splits string into substring array
based on specified separator (string or regex)
original string remains unchanged

split(): Takes separator(string/regex) and optional limit
Returns array of substrings
Each substring between separators
Limit sets array size(or smaller)

When to use?
Use cases for split():
-Parsing CSV delimited text files
-Extracting keywords/commands from user input
-Converting string into array for individual manipulation 

Important Rules
1)Case-sensitive with string separator.
2)No separator: Array with full string.
3)Empty separator:Array of individual characters

Notes:
-Original string unchanged new array returned.
-Separator not included in substrings
-Separator at start/end creates empty string in array.
*/


//Simple split by space
const mySentence='Hello, World';
const words=mySentence.split(' ')
console.log(words)
// it's going to split by space making array 

//Limit number of split
const fruits='apple,banana,pear';
const limitedFruits=fruits.split(',',2) // by comma we me, it separates by comma and by 2 we mean it returns 2 results
console.log(limitedFruits)

//Split by multiple characters
const complexText="apple:banana;pear"
const mixedFruits=complexText.split(/[:;]/)
console.log(mixedFruits)

//split into characters
const word1='Jyotsna Jha'
const letters=word1.split("")
console.log(letters)