const score :Array<number> = [];
const names:Array<string> = [];

function identityOne(val:boolean | number):boolean | number{
    return val
}
function identityTwo(val:any):any{
    return val;
}
identityTwo(3)// taken any returns any

function identityThree<Type>(val:Type):Type{
    return val
}

identityThree(3) // take 3 return 3
identityThree("4") // takes '4' return '4'






