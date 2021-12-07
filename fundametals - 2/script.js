"use strict";
//strict mode will allow you to write secure javascript code and helps to introduce bugs in the code

// LEACTURE-2


let haslicense = false;
const passTest = true;

if(passTest) haslicense = true;
if(haslicense) console.log("I can drive"); 


// Apart from that strict mode will also introduce reserve words which are stored for later use. 
// const interface = "john";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// leacture-3


function logger () {
    console.log("My name is Mohit")
}

// calling a function / running a funvtion /invoking a function.

logger();
logger();
logger();


function fruitProcessor(apples,oranges) {
    console.log(apples,oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

//here what happen is the value of the juice get retuned with 5,0 we basically have to store it in console.logto show it.
console.log(fruitProcessor(5,0));

// we can use multiple valuesto get different output this is basically known as power of function.
console.log(fruitProcessor(4,2));


//////////////////////////////////////////////////////////////////////////////////////

// LEACTURE-4

