// In javascript, everything is an object and object are a collection of key-value pairs

// Prototype in the house 
// in javascript all objects have a prototype 
// and the prototype is an object that is used as a fallback source of properties
// if the object does not have a property, it will look for it in the prototype

// function Toffee(name, price) {
//   this.name = name;
//   this.price = price;
// }

// let t1 = new Toffee("alpenliebe",10);
// let t2 = new Toffee("munch",5);

// function Toffee(name, price) {
//   this.name = name;
//   this.price = 3;
// }

// let t1 = new Toffee("alpenliebe");
// let t2 = new Toffee("munch");

// function Toffee(name){
//     this.name = name;
// }

// Toffee.prototype.price = 3;

// let t1 = new Toffee("alpenliebe");
// let t2 = new Toffee("munch");

// console.log(t1.name, t1.price);
// console.log(t2.name, t2.price);


// function Factory(name, since ,city ){
//     this.name = name;
//     this.since = since;
//     this.city = "Madhya Pradesh"; // if you want to hardcode the city 
// }

// Factory.prototype.country = "India"; 
// Factory.prototype.city = "Mumbai"; // it just adds a property to the prototype for all the objects created from Factory , firstly it will look for the property in the object itself and if it is not found then it will look for it in the prototype


// let f1 = new Factory("Tata", 1868, "Mumbai");
// let f2 = new Factory("Reliance", 1950 ,"Mumbai");

// console.log(f1.name + " is in " + f1.city +" , " + f1.country+" and was established in " + f1.since);
// console.log(f2.name + " is in " + f2.city +" , "+f2.country+" and was established in " + f2.since)



// function Factory(name, since ,city ){
//     this.name = name;
//     this.since = since;
//     // this.city = "Madhya Pradesh";

// }

// Factory.prototype.country = "India";
// Factory.prototype.city = "Mumbai";";

// let f1 = new Factory("Tata", 1868, "Mumbai");
// let f2 = new Factory("Reliance", 1950 ,"Mumbai");

// console.log(f1.name + " is in " + f1.city +" , " + f1.country+" and was established in " + f1.since);
// console.log(f2.name + " is in " + f2.city +" , "+f2.country+" and was established in " + f2.since)



// function Toffee(name, price) {
//     this.name = "#)" + name; // always use this to refer to the current object
//     this.price = price; 
//     this.printMyName = function () {
//     };
//     console.log(name); 
//     console.log(this.name);
// }
// let t1 = new Toffee("kachha aam", 2);
// let t2 = new Toffee("mango bite", 1);

// console.log(t1.name, t1.price);
// console.log(t2.name, t2.price);


function Employee(name, age , id , salary){
    this.name = name;
    this.age = age;
    this.id - id;
    this.salary = salary;

}

Employee.prototype.printDetails = function(){
    console.log(`Name : ${this.name}, Age : ${this.age}, ID : ${this.id}, Salary : ${this.salary}`);
}

let e1 = new Employee("John Doe", 30 , 101, 50000);
