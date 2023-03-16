var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("Hello typescript");
{
    var productDescription = "hi i am description";
    var productIdentity = 1000092;
    var product = {
        description: productDescription,
        id: productIdentity
    };
    var volvoCar = {
        model: "ASDF123",
        id: 100002,
        version: "v2.021",
        fuelType: "petrol"
    };
    //union
    // function customFunction(inputGiven:string|number|newCar){
    //     console.log(`my input is ${inputGiven.toUpperCase()}`);
    // }
    //     function tests1(a:number,b:string):string{
    //         return "XFDFSDFSFD";
    //     }
    //    console.log( tests1(1223,"SDFDSFSF"));
    // function tests1(a: number, b: string="DFSFSDFDS", c?: string): string {
    //     return b;
    // }
    // console.log( tests1(1223,"angular"));
    // type Negate=(value:number)=>number;
    // const functionA:Negate=(value)=>value*-1;
    // console.log(functionA(1922));
    // let x="ASDASDASD"
    // console.log(((x as unknown) as string).length);
    //classes
    // class Person{
    //     name:string
    //     private age:number;
    //     public constructor(private persName:string){
    //         this.name=persName;
    //                 }
    //     public getAge(){
    //         return this.age;
    //     }
    //     public setAge(age:number){
    //         this.age=age;
    //     }
    // }
    // // const person=new Person("Mohan");
    // // person.setAge(10)
    // // console.log(person.mjsdvsjkdfbjkfdjfdbv(),person.name);
    // class Person1 extends Person{
    //     address:string;
    //     sayDetails(){
    //         console.log(this.address+this.getAge()+this.name);
    //     }
    // }
    // class Person2 extends Person1{
    //     gender:string
    //     public override sayDetails(): void {
    //         console.log(this.address+this.getAge()+this.name+this.gender);
    //     }
    // }
    // const person=new Person2("Mohan");//parameterised constructor && inheritence
    // person.setAge(22231);//setting via access modifiers
    // person.address="Banglore";//via implementation
    // person.gender="Male"
    // person.sayDetails();
    var Polygon = /** @class */ (function () {
        function Polygon() {
        }
        Polygon.prototype.printSTring = function () {
            console.log("from polygon");
        };
        return Polygon;
    }());
    var Square = /** @class */ (function (_super) {
        __extends(Square, _super);
        function Square(a) {
            var _this = _super.call(this) || this;
            _this.side = a;
            return _this;
        }
        Square.prototype.getArea = function () {
            return this.side * this.side;
        };
        return Square;
    }(Polygon));
    function printPerson(personObj, property) {
        console.log("".concat(property, "+\"  \"+").concat(personObj[property]));
    }
    var person = {
        name: "BVD",
        age: 12
    };
    printPerson(person, "name");
}
