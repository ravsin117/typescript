let score: number | string | boolean = 33 ;
// '|' sign for defining union of different datatypes 

score ='thirty three'

score = false;

type User = {
    name :string,
    id :number
}

type Admin = {
    username :string ,
    id : number
}

let Ravinder :User| Admin = {name:'Ravinder', id:233}

// now Ravinder is admin then 

Ravinder = {username:'hc',id:323}

//------------ union with function 

// read about union narrowing 
function getDbId(id:number|string){
    console.log(`Db id is ${id}`)
    if(typeof id == 'string') return id.toLowerCase()
    return id +2;
}
getDbId(2);
getDbId('2')


//--------------------

const data :number[] = [1,2,3,4];
const data2 : string[] = ['1','2','3'];
const data3 : (string | number)[] = ['1',1]// either string or number can be added in array 
let data4: string[] | number [] = [1,2,3,4] // either all string or all number 
data4 = ['1','2','3'] 




