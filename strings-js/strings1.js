/*

various operations can be performed on srings such as slicing,searching,concatenation and much more
Strings in Javascript are immutable, meaning that once a string is created,it's contents cannot be 
altered directly. However, we can always create a new string based on an existing one by manipulating it.

*/

/*
ways of creating strings
1.single quotes
2.double quotes
3.string contructor
4.template literal

*/

// using the string contructor
const strinConstructor =new String(
    "THis is a string using the string constructor quotes"
)
console.log(strinConstructor)

// template literals

// basic usage
const greeting=`Hello Jyotsna`

//string interpolation
const username="Emma";
const welcomeMessage=`Hello,${username}! Welcome to our website`;
console.log(welcomeMessage);


// for multiple lines
const poem=`
Roses are red,
Violets are blue,
Sugar is sweet,
And so are you?
`;
console.log(poem)

// expression evaluation
const price=10;
const tax=0.05;
const total=`The price:${price*(1+tax)}`;
console.log(total)

// escaping backtics
const stringWithBacktick=`He's a backtick \``;
console.log(stringWithBacktick)

//Escape charaters in strings

//using backslashes before escaping
const quote='He said,"Hello,world"'

//newlines and tabs
const multiline="Line 1\nLine 2\tTabbed"
console.log(multiline)

// escaping backslashes
const filePath="c:\\Program files\\App"
console.log(filePath)

// using the template literals
const anotherQuote=`He said,"That's awesome"`
console.log(anotherQuote)

//unicode characters
const heart="I \u2764 Javascript"
console.log(heart)

// EscapeSequence for a DOllar sign and curly braces in Template literals
const metaString=`The syntax for variable is \${variableName}`
console.log(metaString);