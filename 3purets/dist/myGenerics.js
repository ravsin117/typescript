"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
identityTwo(3); // taken any returns any
function identityThree(val) {
    return val;
}
identityThree(3); // take 3 return 3
identityThree("4"); // takes '4' return '4'
