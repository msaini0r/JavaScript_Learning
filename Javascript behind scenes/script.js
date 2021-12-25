"use strict";

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `${firstName},You are ${age}, born in ${birthYear}`; // scope chain is looking for age and birthyear
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const str = `oh you are a millenial,${firstName}`; // block scope is in the brackets only
      console.log(str);
    }
    console.log(millenial);
  }

  printAge();

  return age;
}

const firstName = " Mohit"; // Global Function
calcAge(1991);
