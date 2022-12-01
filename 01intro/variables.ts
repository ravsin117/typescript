let greetings : string = 'Ravinder'
// greetings = 2 // error -> Type 'number' is not assignable to type 'string'.

console.log(greetings);

let myNum = 6 ;

greetings.toLowerCase();
console.log(greetings.toLowerCase()) // Ravinder

// ----------------------------------------------------------
// number 
let userId : number  = 334466
// userId = 33455.6 // bad practise dont do

userId.toFixed()

// boolean 

let isLoggedIn: boolean = false
console.log(isLoggedIn.valueOf()) // false 

// ------------------------------------------------------
// any -> we can use whwnever we dont want a particular value to cause typechecking errors

let hero ; // implicitly this variable is of type any
//any is not tye checked .

function getHero(){
    return 'thor';
}

hero = getHero(); // hero is of type any 

// read about noimplicitany from documentation
//----------------------------------------------------



export{}

