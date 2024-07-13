/*
-String.lastIndexOf(): Find position of last substring occurence
-Returns index of last match, or '-1' if not found

lastIndexOf():Takes substring and optional start index
Returns index of last occurence or '-1' if not found

When to use?
-Last occurence of word/phrase in text
-End position for text manipulation(extract)
-Implementing features needing last match of a pattern

Important Rules
-lastIndexOf() is case-sensitive('apple'!='Apple')
-Negative FromIndex wraps search from string end
FromIndex >string length searches whole string

-lastIndexOf() is non-destructive
 Searches from right to left
 Inefficient for large strings or loops


*/

// String lastIndexOf
//Basic usage
const myText='apple orange, apple, banana';
const lastIndx=myText.lastIndexOf('apple')
console.log(lastIndx)

// Specifying the from index

const myresult1=myText.lastIndexOf('apple',12)
console.log(myresult1)