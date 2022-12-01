var user = {
    name: 'Ravinder',
    email: 'r@r.com',
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.ispaid;
}
createUser({ name: 'Ravinder', ispaid: true });
function createCourse() {
    return { name: 'Rav', isPaid: 0 };
}
function createUsers(user) {
    return { name: 'r', email: 'r@r.com', isActive: false };
}
var myUser = {
    _id: '1234',
    name: 'r',
    email: 'r@r.com',
    isActive: false
};
myUser.email = 'ra.r.com'; // allowed 
// myUser._id = '23';//Cannot assign to '_id' because it is a read-only property.
