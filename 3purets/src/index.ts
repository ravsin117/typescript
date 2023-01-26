class User {
    protected _courseCount = 1; // accessibe in this and child class
    email: string 
    name : string // by default public 
    private readonly city:string ='Delhi'
    constructor(email:string,name:string){
        this.email = email;
        this.name = name;
    }
    get getAppleID():string{ // getter functions ->returns some property of class
        return `apple${this.email}`
    }
    get courseCount():number{
        return this._courseCount;
    }
    set courseCount(courseNum){ // cant be of any return type 
        if(courseNum<=1){
            throw new Error('course count should be more than 1')
        }
        this._courseCount = courseNum;
    }    
    private deleteToken(){
        console.log('Token deleted')
    }
}

class SubUser extends User{
    isFamily : boolean = true ;
    changeCourseCount(){
        this._courseCount = 4; // protected member of parent class 
        // can be modified here 
    }
}
const hitesh = new User('h@h.com','hitesh');
// hitesh.city = 2// error
// hitesh.city = 'Delhi' // no error
// private members of class only accessible in class itself







