function addTwo(num : number) : number{ // must specify what type of variable num is or it will be assumed of type any and even function will ill be of type any 
    return num + 2 ;
}

function getUpper(val:string){
    return val.toUpperCase();
}

function signUpUser(name:String , email:String , ispaid : boolean){

}

let loginUser = (name:string,email:string,isPaid:boolean=false) =>{

}

let myValue = addTwo(5);
getUpper('RAvinder')
signUpUser('Ravinder','r@test.com',false)
loginUser('r','r@r.com')
// --------------------------------------------------
// function getValue(myVal : number):boolean{
//     if(myVal>5)
//     return true 

//     return'200 ok'
// }

const getHello = (s:string):string=>{
    return 'hello'
}

const heros = ['thor','spiderman', 'ironman']
// const heros = [1,2,3]
heros.map((hero) : string=>{ // hero of type string known to ts smartly in case of map
    return `hero is ${hero}`
})

function consoleErr( errmsg :string):void{ //void- returns nothing 
    console.log(errmsg)
}

function handleErr(errmsg : string):never{
    throw new Error(errmsg)
    
}
// never type represennts value which are never observed . in a return type this means that the function throws an exception or terminates execution of the program 

export{}


