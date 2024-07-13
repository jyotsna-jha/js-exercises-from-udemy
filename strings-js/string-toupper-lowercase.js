// To uppercase
const myName='Jyotsna'
const capitalizeMyname=myName.toLocaleUpperCase()
console.log(capitalizeMyname)

//To lowercase
const myBook='BHAGWATGEETA'
const lowercasebook=myBook.toLocaleLowerCase()
console.log(lowercasebook)

//Mixing both methods
const mixStr='Hello,WORLd'
// const result=mixStr.toLocaleLowerCase();
const result=mixStr.toLocaleUpperCase()
console.log(result)

// case-insensitive comparison
const string1='Javascript';
const string2='javascript';

if(string1.toLocaleLowerCase()===string2.toLocaleLowerCase()){
    console.log('The strings are equal,ignoring the case');
}

// Note on non-enlgish characters
const accentedStr=' óóóóóóá'
const uppercaseofaccented=accentedStr.toLocaleUpperCase()
console.log(uppercaseofaccented)

