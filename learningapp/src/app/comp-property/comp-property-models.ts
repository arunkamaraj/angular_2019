export class MyClass {
    public name: string = 'MyClass Instance';
    public dt: Date = new Date();
    public time: number;
    public num: number;
    constructor(){
        this.time = this.dt.getTime();
        this.num = Math.floor(Math.random() * 1000)
    }
}
