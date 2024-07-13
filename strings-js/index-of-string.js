/*
indexOf() is a string method
string.indexOf(): Find postion of first substring occurence
Returns index of match,or '-1' if not found

indexOf(): Takes substring to search for,optional start index.
Returns index of first occurence, or '-1' if not found.

When to use?
-Checking existence of word/phrase in text
-Starting point for text manipulation(Extract,replace)
-Implementing search in a larger string

Important Rules
-Case-sensitive:"apple" and 'Apple' are different
-For multiple occurences,use loop and update index
-Search starts at 'FromIndex',including it in search

Notes:
-Non-destructive:original string unchanged.
-Inefficient for very large strings:regex may be better.
-Distinct from 'Array.indexOf()' for arrays.
*/

// Basic usage
const sentences3='Hello, world';
//const index=sentences3.indexOf('Hello') // returns 0
const index=sentences3.indexOf('hello') // returns -1 that is hello does not exist

console.log(index)

