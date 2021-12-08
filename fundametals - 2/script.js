// Lecture - 2 (Strict Mode)
"use strict";
//strict mode will allow you to write secure javascript code and helps to introduce bugs in the code

// LEACTURE-3 (Functions)


let haslicense = false;
const passTest = true;

if (passTest) haslicense = true;
if (haslicense) console.log("I can drive");


// Apart from that strict mode will also introduce reserve words which are stored for later use. 
// const interface = "john";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// lecture-4 (FUNCTION DECLARATION)


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

// LEACTURE-5 (ARROW FUNCTION)

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

// LECTURE-6 (Functions Calling Other Functions)

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

// LECTURE - 7 (REWIEWING FUNCTION)

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

// LECTURE - 8 (IT WAS JUST A CODING CHALLENGE)
// LECTURE- 9 (ARRAYS)


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

// LECTURE- 10 (METHODS)

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


///////////////////////////////////////////////////////////////////////////////////////////////////////////

// LECTURE- 11 (IT WAS JUST A CODING CHALLENGE)

// LECTURE- 12 (Introduction To Objects)

// Difference between Array and Objects.

// 1) There is no way of giving elements a name in arays. We can only refereence them by their order number not by reference name.
// 2) In Objects order of values doesnot matter when we want to retrieve them. But in order of values matters a lot.S
// 2) In Objects we use key value pairs which helps o give name to each elements that wee use.
// 3) In Objects we are using curly braces " {} ".

// Below is Array Code

const DiljitArray = ["Diljit",
    "Array",
    2021 - 1991,
    "Singer",
    ["Honey", "Kunal", "Anuj"]
];

//Below is Obejcts Code

const Diljit = {
    firstName: "Diljit",
    lastName: "Array",
    Age: 2021 - 1991,
    Job: "Singer",
    Friends: ["Honey", "Kunal", "Anuj"]
};

// The values in here are called properties. For Example - firstName, LastName ,Job.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Lecture - 13 (Dot vs Bracket Notation)

const Karan = {
    firstName: "Karan",
    lastName: "Aujla",
    Age: 2021 - 1999,
    Job: "Warrior",
    Friends: ["Honey", "Kunal", "Anuj"]
};
console.log(Karan);

// First way of getting a property from a object is by Dot Notation and Second is Bracket Notation.
console.log(Karan.lastName);
console.log(Karan["lastName"]);

// The main difference between two is that in Bracket Notation we can put any expression (not just Strings) and also we can compute it from some other operation.
const nameKey = "Name";
console.log(Karan["first" + nameKey]);
console.log(Karan["last" + nameKey]);

// Another Examples

const interestedIn = prompt(` What do you  want to know about Karan? Choose betwwen firstName, lastName, Job, Age and Friends.`);
console.log(Karan[interestedIn]); // bracket notation will only work.

// now lets see how we can add new properties with dot and bracket notation.
Karan.location = "Paris";
Karan["Twitter"] = "@Karan";
console.log(Karan);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Lecture - 14 (Object Methods)

// functions are like values that means that can be added to objects. Below we will see how.

const Henry = {
    firstName: "Henry",
    lastName: "Ford",
    Age: 1999,
    Job: "Warrior",

    // calcAge: function (Age){ // here we are using function in the form of a property
    //     return 2037 - Age;
    // }

    //another and easy way of doing is by introducing "this" Keyword.
    calcAge: function (){
        return 2037 - this.Age;
    }
 };

// console.log(Henry["calcAge"](1991));
console.log(Henry.calcAge());

/////////////////////////////////////////////////////////////////////////////////////////

// LECTURE - 15 (IT WAS JUST A CODING CHALLENGE)
// LECTURE - 16 (Ileration_ The FOR LOOPS)

/*  lOOPS ARE SOMETHING WHICH ALLOW YOU TO DO REPETITIVE TASKS */

for (let rep =1; rep<=10; rep++){
    console.log(`Lifting weights repition ${rep}`);
}

