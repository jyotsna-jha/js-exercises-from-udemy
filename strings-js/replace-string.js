/* 

.replace() method in string

-String.replace(): Replace substring/pattern
-Returns new string with replacements

replace(): Takes substring/regex to replace,replacement string/function
Default: Replaces only first occurence
For all occurences,use regex with 'g' flag

-Rename variables/labels in code/strings
-Reformat user input(spaces to hyphens in URL)
-Change units(meters to feet)
-Personalize strings(replace"{name}" with actual names)

-Mind case sensitivity;default in case-sensitive
-Global replacements: Regex with 'g' flag.
-Use special replacements patterns cautiously(e.g.,`$$`,`$&`,`$1`)

Notes:
Non-destructive:`replace()` returns new string
Function as 2nd arg:Function's return is replacement
String:Replaces only first occurence. Regex for multiples.

replace method is case sensitive--remember that..

*/


//Basic usage
const originalText='This is an old text.';
const updatedText=originalText.replace('old','new') 
console.log(updatedText)

//Replace all occurances
const repititiveText='old text with old words'
// const replaceAll=repititiveText.replace('old','new')
// with this only first old gets replaced with new
const replaceAll=repititiveText.replace(/old/g,'new') // regualar expression
// with this all the old gets replaced with new
