console.log("Hello typescript");
{

    //alias
    type productDesc = string;
    type productID = number;
    type finalProduct = {
        description: productDesc,
        id: productID
    }
    const productDescription: productDesc = "hi i am description";
    const productIdentity: productID = 1000092;
    const product: finalProduct = {
        description: productDescription,
        id: productIdentity

    }
    //interface
    interface car {
        model: string,
        id: number,
        version: string
    }
    interface newCar extends car {
        fuelType: string
    }

    const volvoCar: newCar = {
        model: "ASDF123",
        id: 100002,
        version: "v2.021",
        fuelType: "petrol"
    }
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
    abstract class Polygon{
        public abstract getArea():number
        public printSTring():void{
            console.log("from polygon");
        }
        side:number;
    }
    class Square extends Polygon{
        
        public constructor(a:number){
            super();
            this.side=a;
            
        }
        public getArea(): number {
            return this.side*this.side;
        }
    }


    interface Person{
        name:string;
        age:number;
    }

    function printPerson(personObj:Person,property: keyof Person){
        console.log(`${property}+"  "+${personObj[property]}`);
        
    }
    let person={
        name:"BVD",
        age:12
    }
    printPerson(person,"name")








    






}
