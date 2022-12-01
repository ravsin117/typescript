const user = {
    name : 'Ravinder',
    email: 'r@r.com',
    isActive :true
}

function createUser({name:string ,ispaid:boolean}){}

createUser({name :'Ravinder',ispaid:true})

function createCourse():{name:string,isPaid:number}{// function returns {}
    return {name:'Rav',isPaid:0}
}
//---------------------------
// creating a new datatype by -> type

type User = {
    name:string,
    email:string,
    isActive:boolean
}
function createUsers2(user:User):User{ // user is of type User and the function returns User type data 
    return {name:'r',email:'r@r.com',isActive:false}

}
// readonly paramter : its value cant be changed 
type User2 = {
    readonly _id : string ,
    name : string ,
    email : string ,
    isActive: boolean,
    cardDetails?: number // optional field notation -> '?' 
}
let myUser : User2 = {
    _id :'1234',
    name :'r',
    email :'r@r.com',
    isActive:false
}
myUser.email = 'ra.r.com';// allowed 
// myUser._id = '23';//Cannot assign to '_id' because it is a read-only property.

// combining multiple different types
type cardNumber  = {
    cardNumber : number
}
type cardDate = {
    cardDate : string
}
type cardDetails = cardNumber & cardDate &{
    cvv :number
}


export {}








