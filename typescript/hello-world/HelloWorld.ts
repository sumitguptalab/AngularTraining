let hw: string = "Hello, World";
let myName: string = "Sumit";
let arr:string[] = [];
const val=0;

arr.push("1");

enum color {Red = 5, white = 3, yellow, green = 7, blue}
console.log(hw, myName);
console.log(arr);
console.log(color.Red);
console.log(color.blue);
console.log(color.yellow);

console.log(typeof arr);
console.log(typeof hw);
console.log(typeof myName);
console.log(typeof color);

class Thing {
    x : string;
    z: string;

    constructor(x : string, y: string){
        this.x = x;
        this.z=y;
    }
}

class List<T> {
    arr: T[] = [];
    add(t:T) : void {
        this.arr.push(t);
    }
}