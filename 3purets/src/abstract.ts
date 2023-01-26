abstract class TakePhoto{
    constructor(
        public cameraMode :string,
        public filter:string
    ){}
    abstract getSepia():void 
    getReelTime():number{
        return 8;
    }
}
//1) we cannot create instace/object of abstract class
// const hc = new TakePhoto("test","test");

class Instagram extends TakePhoto{
    constructor(public cameraMode:string,
    public filter :string,
    public burst:number){
        super(cameraMode,filter)
    }
    getSepia(): void {
        console.log('sepia')
    }
    // we can override getReelTime
}

// we can create object of class that inherits form abstarct class     
const hc = new Instagram("test","test",3);

export{}