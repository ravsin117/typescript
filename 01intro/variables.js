"use strict";
exports.__esModule = true;
var greetings = 'Ravinder';
// greetings = 2 // error -> Type 'number' is not assignable to type 'string'.
console.log(greetings);
var myNum = 6;
greetings.toLowerCase();
console.log(greetings.toLowerCase()); // Ravinder
// ----------------------------------------------------------
// number 
var userId = 334466;
// userId = 33455.6 // bad practise dont do
userId.toFixed();
// boolean 
var isLoggedIn = false;
console.log(isLoggedIn.valueOf()); // false 
// ------------------------------------------------------
// any -> we can use whwnever we dont want a particular value to cause typechecking errors
var hero; // implicitly this variable is of type any
//any is not tye checked .
function getHero() {
    return 'thor';
}
hero = getHero(); // hero is of type any 
