"use strict";
//strict mode will allow you to write secure javascript code and helps to introduce bugs in the code

// LEACTURE-2


let haslicense = false;
const passTest = true;

if (passTest) haslicense = true;
if (haslicense) console.log("I can drive");


// Apart from that strict mode will also introduce reserve words which are stored for later use. 
// const interface = "john";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// leacture-3


function logger() {
    console.log("My name is Mohit")
}

// calling a function / running a funvtion /invoking a function.

logger();
logger();
logger();


function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

//here what happen is the value of the juice get retuned with 5,0 we basically have to store it in console.logto show it.
console.log(fruitProcessor(5, 0));

// we can use multiple valuesto get different output this is basically known as power of function.
console.log(fruitProcessor(4, 2));


//////////////////////////////////////////////////////////////////////////////////////

// LEACTURE-4

// Normal function

const calage = birthyear => 2037 - birthyear;
const age = calage(1991);
console.log(age);

// Arrow function
const Retirement = (birthyear, firstname) => {
    const age = 2037 - birthyear;
    const Retirement = 65 - age;
    return `${firstname} retires in ${Retirement} years`;
}

console.log(Retirement(1991, "John"));
console.log(Retirement(2001, "Andy"));

// HINT: TRY TO ALWAYS USE NORMAL FUNCTIONS

/////////////////////////////////////////////////////////////////////////////////////////////////

// LECTURE-5 (Functions Calling Other Functions)

// Here we have made a another function called cutpieces which get called by function fruit.
const cutpieces = function (fruit) {
    return fruit * 4;
}


const fruit = function (apples, oranges) {
    const applepieces = cutpieces(apples);
    const orangepieces = cutpieces(oranges);

    const juice = `Juice made with ${apples} apple pieces & ${oranges} orange pieces.`;
    return juice;
}

console.log(fruit(2, 4));


/////////////////////////////////////////////////////////////////////////////////////////////////////////

// LEATURE - 6 (REWIEWING FUNCTION)

const calcAge = function (birthyear) {
    return 2037 - birthyear;
}

const yearsRetirement = function (birthyear, firstperson) {
    const age = calcAge(birthyear);
    const yearsRetirement = 65 - age;


    if (yearsRetirement > 0) {
        console.log(`${firstperson} has retired in ${birthyear} years.`)
        return yearsRetirement;

    } else {
        console.log(`${firstperson} has already retired `)
        return -1;
    }
}

console.log(yearsRetirement(1991, "jonas"));
console.log(yearsRetirement(1950, "sara"));


//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// LEATURE -7 (IT WAS JUST A CODING CHALLENGE)
// LEACTURE- 8 (ARRAYS)


/* Arrays are like big containers in which we can store the variables and we can later reference/use them */

// General way of storing data without an Array.
const friend1 = "Michel";
const friend2 = "Steven";
const friend3 = "Peter";

// First way to store data in from of a Array.
const friends = ["Michel", "Steven", "Peter"];
console.log(friends);

// Second way to store data in from of a Array.
const years = new Array(1991, 1992, 1999, 2001);
console.log(years);

// In order to get specific variable/data from the Array.
console.log(friends[0]);
console.log(friends[2]);
console.log(years[1]);
console.log(years[3]);

// In order to get length of the Array.
console.log(friends.length);

// In order to get last variable from the Array.
console.log(friends.length - 1);

// In order to change the specific variable from the Array.
friends[2] = "Jay";
console.log(friends);

years[3] = "2007";
console.log(years);

// Arrays in Javascript can store multiple datatypes in a single array.

const Mohit = ["Mohit", 2021 - 2002, true];
console.log(Mohit);


///////////////////////////////////////////////////////////////////////////////////////////////////////

// Methods

/* Operations in Array is kNown as Methods. */

// The method .push basically adds elements to the end of an Array.

/* ADD ElEMENTS */
const friend = ["Michel", "Steven", "Peter"];
friend.push("Abhi");
console.log(friend);

// The method .unshift basically adds elements to the beginning of an Array.
friend.unshift("Gagan");
console.log(friend);

/* REMOVE ELEMENTS */

// The method .pop basically remove elements at the end of an Array.
friend.pop(); // we are not adding any element because it is removing above element abhi.
console.log(friend);

// The method .shift basically removes elements to the beginning of an Array.
friend.shift(); // we are not adding any element because it is removing above element gagan.
console.log(friend);

// The method .indexOf basically tells us the position of a specific element in the Array.
console.log(friend.indexOf("Steven"));
console.log(friend.indexOf("Bob")); // this name is not in the array that why it show -1.

// Their is better version of indexOf which tell us that whether that element is in Array or not by telling true or false.
console.log(friend.includes("Steven"));
console.log(friend.includes("Bob"));