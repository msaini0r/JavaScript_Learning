// let js = "Amazing";
// // js is basically variable name here

// if (js === "Amazing") alert("Javascript is fun");
// console.log(41 + 5 + 21 - 6);

// console.log("Mohit");
// console.log(23);

// let firstname = "Karan";
// // firstname is variable here.
// // if we change the firstname, it will change the variable name from other parts as well. like - karan to sidhu

// console.log(firstname);
// console.log(firstname);
// console.log(firstname);

// // Naming Convention

// // 1) try to use CamelCase
// // 2) new and function cannot be used as variable names.

// /* There are seven Types of Data Types in JavaScript 

// 1) Numbers - there is no special types of float is used to point about decimals like in other languages. Only numbers are used.

// 2) String - Used to explain abou the text

// 3) Boolean - used to tell abut the true or false.

// 4) Undefined -  It means the value of the variable has not been defined yet =. Like "let firstname"

// 5) NUll - Also means "Empty value".

// 6) Symbol - value is unique andcannot be changed [not used now].

// 7) BigInt - Larger integers than the numbertype can hold. 

// Javascript has dynamic programming it means it automatically defines the datatype.
// We dont have to specify the datatype particularly.

// */

// let javascriptIsFun = true;
// console.log(javascriptIsFun)

// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 54);
// console.log(typeof "kashish");

// //typeof null will return object. This a bug error in javascript which have not been removed due to lagecy reasons.
// console.log(typeof null)

// /* 
// Var is a old keyword to define the variables.
// In new JavaScript version ES6 "let" and "const" were introduced.

// 'let' keyword can be used when we can mutate the varibale. For Example - 
// */
// let age = 30;
// age = 31;

// //here we have changed the age from 30 to 31. It means we have mutated the value.

// //On the other hand const used be used when we dont want to mutate or change the value. For Example - 

// const birth = 1991;
// // birth = 1990;

// // const job;
// //we always have to define the value of const, otherise it will show us a error.

// /* HINT :- TRY TO ALWAYS USE CONST AS IT WILL MINIMISE THE CHANCES OF ERROR & ONLY USE LET IN CASE YOU HAVE TO CHANGE THE VALUE.*/

// // Var keyword should be avoided but it works somehow similar to let.

// var job = "programmer";
// job = "teacher";
// console.log(job);

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// /* OPERATORS */

// //Subtraction
// const now = 2031;
// const ageJonas = now - 1991;
// const ageAndy = now - 2019;
// console.log(ageJonas , ageAndy);

// //Multipication , Divide , Power
// console.log(ageJonas *2 , ageJonas/10, 2**3)
// // 2**3 means 2 to the power of 3. 2*2*2=8

// //Addition.
// // The addition operator can be used to concatination.

// const firstName = "Mohit";
// const lastName = "Saini";
// console.log(firstName + " " + lastName);

// // Assignment Operator ' = '
// let x= 10 + 5;
// x += 10; // it means i am saying add 10 to previous 15.
// x *= 4; // it means multiply previous 25 with 4.
// x++; // it means increment value by 1.
// x--; // it means decrement value by 1.
// x--; // it means decrement value by 1. we do this step again to show that answer is 99.
// console.log(x);

// // Comparison Operator
// console.log(ageJonas > ageAndy); //different operators are >, <, >=, <=
// console.log(ageAndy >=18)

// // right way of doing it practical life.
//  const isFullAge = ageAndy >=18;

//  //another way
//  console.log(now-1991 > now-2019)
//  //the subtraction occur first then the comparison happen. This is because of set of parenthesis(rules).

 /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 /* STRINGS */

//  const employName = "Mohit";
//  const job = "Software Developer";
//  const birthYear = 2002;
//  const year = 2021;

//  const Mohit = "I'm " + employName + ",a " + (year - birthYear) + " old "+ job;
//  console.log(Mohit);

//  /// USE TEMPLETE LITERALS TO STOP WORRYING ABOUT THE SPACING BETWEEN THE WORDS. 
//  // which basiically means to use back ticks like this " ` " and put the variable name in " ${} ".

//  const MohitNew = `I'm ${employName} ,a ${year-birthYear} old ${job}`;
//  console.log(MohitNew);

// // Another case withourt using templete literals.
//     console.log("String with \n\
//     multile \n\
//     lines");

//     // WITH TEMPLETE LITERALS

//     console.log(`String with
//     multiple
//     lines`);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// /* STATEMENTS OR CONTROL STRUCTURE*/

// const age = 17;
// const isOldEnough = age >=18;

// if (isOldEnough){
//     console.log("Mohit can start driving 🚗.");
// } else {
//     const yearsLeft = 18 -age;
//     console.log(`Mohit is too young , he should wait ${yearsLeft} more year!!`)
// }

// // ANOTHER EXAMPLE

// const birthYear = 1998;
//  let centuary;
//  if(birthYear <= 2000){
//      centuary = 20;
//  } else {
//      centuary = 21
//  }
//  console.log(centuary)


////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* TYPE CONVERSION VS TYPE COERSION */

// const inputYear = "1991";
// console.log(Number(inputYear) , inputYear);
// console.log(Number(inputYear)+ 18);

// console.log(Number("Jonas"));
// console.log(typeof NaN);

// console.log(String(23) , 23);

// //type coercion

// console.log('I am ' + 23 + 'years old');    // here javascript it automatically converting everything.
// console.log(`I am ` + `23` + ` years old`);
// console.log("23"+"12"+54); // only in + sign it is doing catination.
// console.log("45"-12-"3")
/* 
Type Conversion is baically used when we want to manually tell what datatype we have used.
Type Coercion is basically used when we the programming language automatically detects what datatype has been used.
 */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Switch statement

// const day = "friday";

// switch(day) {
//     case "monday": // day === monday
//     console.log("plan your course");
//     break;
//     case "tuesday": 
//     console.log("Eat your meal.");
//     break;
//     case "wednesday": 
//     case "thursday": 
//     console.log("buy grocery.");
//     break;
//     case "friday": 
//     console.log("go to gym.");
//     break;
//     case "saturday": 
//     case "sunday": 
//     console.log("give water to plants");
//     break;
//     default:
//         console.log("Not a valid day");
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Conditonal Statement

const age = 23;

const drink = age >= 18 ? "wine" : "water";
console.log(drink);
