"use strict";
class User {
    constructor(email, name) {
        this._courseCount = 1; // accessibe in this and child class
        this.city = 'Delhi';
        this.email = email;
        this.name = name;
    }
    get getAppleID() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error('course count should be more than 1');
        }
        this._courseCount = courseNum;
    }
    deleteToken() {
        console.log('Token deleted');
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4; // protected member of parent class 
        // can be modified here 
    }
}
const hitesh = new User('h@h.com', 'hitesh');
// hitesh.city = 2// error
// hitesh.city = 'Delhi' // no error
// private members of class only accessible in class itself
