interface User{
    readonly dbId : number , // cant be changed 
    email:string ,
    userId :number,
    googleId? :string, // optional field 
    // startTrial:()=>string
    startTrial():string, // startTrial returns string 
    getCoupon(couponName:string,value:number):number
}
//reopening interface -> adding a new property in interface 
interface User{
    githubtoken :string
}

interface Admin extends User{// all properties Of User available here
    role : "admin"|"ta"|"learner" 
}

const hitesh :User = {dbId : 22, email:'h@h.com',userId:12324,startTrial :()=>{
return 'sample string'
} ,
getCoupon:(name='discount',value=10)=>{
    return 10 
},
githubtoken:'wkfwufuwohfoiwhfkjjknckqjcpqwiehdoqxmcl'
}

export{}