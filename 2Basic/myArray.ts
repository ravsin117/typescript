// const superheros = [] // array of type never
// superheros.push('spiderman'); // Argument of type 'string' is not assignable to parameter of type 'never'.

const superheros: string[] = [];
// const xp : number [] = [];
const xp : Array<Number> = [] // 2nd way of defining array of number
superheros.push('spiderman');
xp.push(9);

type user = {
    name : string 
    isActive:boolean
}
const allUsers: user[] = [];
// allUsers.push({}); //error empty object not of type user
allUsers.push({name :"",isActive:true})

// array of array 
const MLModel :number[][] = [
    [255,255,255],
    []
]


