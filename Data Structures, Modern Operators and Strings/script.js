'use strict';

const restaurant = {
    names: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu: {
          open: 12,
          close: 22,
        },
        fri: {
          open: 11,
          close: 23,
        },
        sat: {
          open: 0, // Open 24 hours
          close: 24,
        },
      },
    

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },

};
/* ----------------------------Destructing Arrays (lecture-3) ------------------------- */
// destructing basically means to breeak a complex data structure ddown into a small data structure like a variable.

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);


// IN order to skip the second element we use only commas and the second element willl become third.
let [first, , second] = restaurant.categories;
console.log(first, second);

// Inorder to switch two elements we use this code below and there is other way also by creating a temp variable but here we are not using it.

[first, second] = [second, first]
console.log(first, second);

// returns 2 values from a function
const [starter, maincourse] = restaurant.order(2, 0);
console.log(starter, maincourse);

// nested basically means array in array.
const nested = [2, 4, [7, 8]];
// const [i, ,j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

/*---------------------------------Destructuring Objects (lec-4)------------------------------*/

// here order does not matter
const { names, openingHours, categories} = restaurant;
console.log(names, openingHours, categories);

// to change the names

const{
    names: restaurantName,
    openingHours: Hours,
    categories: tags,
} = restaurant;
console.log(restaurantName,Hours,tags);

// we can create custom elemnts also

const { drinks = ['coke','pepsi']} = restaurant;
console.log(drinks);

// Mutating variables
let d = 111;
let f = 99;
const obj = {d:23, f:7, c:45};
({d,f} = obj);
console.log(a,b);

// Nested Objects

const{
    fri: {open, close} } = openingHours;
console.log(open, close);

/* <-----------------------------------------Leacture 5 (The Spread Operator) ------------------------------>*/

//// In order to add a value we use something known as spread operator

const arrValue = [7,8,9];
const newbad = [1,2, arrValue[0],arrValue[1],arrValue[2]];
console.log(newbad);

const oldarr = [1,2,...arrValue]
console.log(oldarr);

// Two important us cases of spread operaters are creating a shallow copy of arrays and two merge two arrays together.

// Copy Arrary
const mainMenuCopy = [...restaurant.starterMenu];

// Merge Array
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]
console.log(menu);

/// Iterables:arrays,strings, map, sets. Not Objects
const str = 'jonas';
const letters = [...str, " ","S."];
console.log(letters);

// Acording to the latest ES8 the spread operator works with objects also even though they are not iterables.

// Objects

const newRestraunt = {founderIn: 1998,...restaurant,founder: "mohit"}
console.log(newRestraunt);

/* <---------------------------- Rest Pattern and parameters ( Lecture -6 ) ------------------->  */

// The basic syntax of spread operator as rest pattern but 
// the function of rest pattern is to unpack where as spread operator is used to pack the elements/array.
// just make sure the spread operator is at last in rest pattern becuase it will collect all the other.

const [g,h, ...others] = [1,2,3,4,5];
console.log(g,h,others);

// Objects
const {sat, ...weekdays} = restaurant.openingHours;
console.log(weekdays);

