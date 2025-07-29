// console.log("OOPs in JavaScript");

// let obj1 = {
//     name: "John",
//     age: 30,
//     greet: function() {
//         console.log("Hello, my name is " + this.name);
//     }
// };

// let obj2 = {
//     name: "Jane",
//     age: 25,
//     greet: function() {
//         console.log("Hello, my name is " + this.name);
//     }
// };

// console.log(obj1.greet())




// function IceCream(flavor, price){
//     this.flavor = flavor;
//     this.price = price;
// }

// let IC =  new IceCream("Chocolate", 50);
// let IC2 =  new IceCream("Vanila", 30);

// console.log(IC);
// console.log(IC2);


class IceCream {
    constructor(flavor, price) {
        this.flavor = flavor;
        this.price = price;

    }
}

let I1 = new IceCream("Chocolate", 50);
let I2 = new IceCream("Vanila", 30);
let I3 = new IceCream("Strobary", 60);

console.log(I1);
console.log(I2);
console.log(I3);

