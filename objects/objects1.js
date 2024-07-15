/*

Javascript Objects: Group data and functions
Properties: Values or functions
Store,manipulate,send data in applications

Javascript objects: Key-value pairs, like dictionaries
Keys are property names, values various data types
Access with dot or bracket notation
Functions in objects known as methods
Objects are flexible, nestable for complex structures

*/


// Creating Objects using Object literals

// Define an object to represent a book in a bookstore

const book={

    title:"My book",
    author:"Jyotsna Jha",
    price:250,
    available:true,
    pages:45
}

console.log(book)

// Accessing object properties(DOT Notation)

const bookTitle=book.title
console.log(bookTitle)
console.log(book.price)

// Accessing object properties using Bracket Notation

const bookTitle1=book["title"]
console.log(bookTitle1)
console.log(book['available'])

// Properties with special characters
const Person={
    'first name':'Ben',
    'last name':'Joe'
}
// console.log(Person.first name)  // this will not work
console.log(Person["first name"])


// Using Expressions

const task={
    description:'Finish homework',
    isCompleted:false
}

const query='isCom' + 'pleted'
console.log(task[query]);

// Adding properties to objects

// Add user role
const userProfile={
    username:'Jyotsna',
    email:'jyotsna.jha003@gmail.com;',

    // nested objects
    // portfolio:{
    //     work1:'landing page',
    //     work2:'web app'
    // }
}

userProfile.role='admin';
// bracket notation
userProfile['isCode']=true
console.log(userProfile)


// Adding properties with special characters
const book1={
    title:'Harry potter',
}

book1['publication year']=2025;
console.log(book1)

// Adding nested properties
const employee={
    name:'Bob',
    department:'HR'
}
// add address

employee.address={
    city:'Anamnagar',
    state:'bagmati'
}

console.log(employee)
console.log(employee.address.city);