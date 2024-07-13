// For loops

for(let i=0;i<5;i++){
    console.log(i)
}


const languagesCode=['C','C++','Java','Javascript']

for(let i=0;i<languagesCode.length;i++){
    console.log(languagesCode[i])
}

// Using break to exit the loop early

for(let i=0;i<=10;i++){
    if(i===4){
        break;
    }
    console.log(i);
    // prints 0,1,2,3

}

// using continue to skip the iteration

for(let i=0;i<=11;i++){
    if(i===6){
        continue;
    }
    console.log(i)
    // this skips 6 and prints rest
}

for(let i=5;i>0;i--){
    console.log(i);
}