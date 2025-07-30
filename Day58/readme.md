# 🦁 Sheryians Coding School Cohort – Day58 Learnings


Great! Let’s break down the entire **Day 58: JavaScript – Prototypes and OOPs** class into detailed, beginner-to-advanced explanations with examples to make sure you fully understand each concept:

---

## 🔁 JavaScript: Everything is an Object

In JavaScript:

* Arrays, functions, objects — all are objects.
* Objects are collections of **key-value pairs**.

```js
const person = {
  name: "Alice",
  age: 25
};
```

---

## 🧬 Prototypes in JavaScript

### What is a Prototype?

Every JavaScript object has a **prototype**, which is another object it inherits properties and methods from.

If a property/method is not found on the object, JavaScript looks **up the prototype chain**.

```js
const obj = {};
console.log(obj.toString()); // Comes from Object.prototype
```

---

### 👷 Constructor Function and Prototypes

Let’s say you want to create multiple toffee objects:

```js
function Toffee(name) {
  this.name = name;
}
```

If you define a method like this:

```js
this.print = function() {
  console.log(this.name);
}
```

It gets **copied** into every object (not efficient). Better:

```js
Toffee.prototype.price = 3;
```

Then all instances get access to `price` via prototype:

```js
let t1 = new Toffee("alpenliebe");
console.log(t1.price); // 3 (from prototype)
```

✅ Prototype makes memory-efficient sharing of methods and properties possible.

---

## 🧱 Constructor Function + Prototype Example

```js
function Factory(name, since, city) {
  this.name = name;
  this.since = since;
  this.city = city;
}

Factory.prototype.country = "India";

let f1 = new Factory("Tata", 1868, "Mumbai");
console.log(f1.country); // "India"
```

If `city` is set inside constructor, that value **overrides** prototype.

---

### 🔍 Object Property Lookup Order

```js
console.log(f1.city); // First looks in the object
console.log(f1.country); // Then in prototype
```

---

## 🔄 Overriding Prototype Values

```js
Factory.prototype.city = "Delhi";

let f2 = new Factory("Reliance", 1950, "Bangalore");
console.log(f2.city); // "Bangalore" → instance value
```

If `city` wasn’t passed or set in constructor, then prototype value will be used.

---

## 🧪 Example: Employee Object with Prototypes

```js
function Employee(name, age, id, salary) {
    this.name = name;
    this.age = age;
    this.id = id;
    this.salary = salary;
}

Employee.prototype.printDetails = function () {
    console.log(`Name: ${this.name}, Age: ${this.age}, ID: ${this.id}, Salary: ${this.salary}`);
};

const e1 = new Employee("John", 30, 101, 50000);
e1.printDetails();
```

### Key Takeaways:

* `printDetails` is **not duplicated** in every object.
* It's shared through prototype = efficient.

---

## 🔁 Prototype Chain Visualization

```
e1 ---> Employee.prototype ---> Object.prototype ---> null
```

If `e1.printDetails` isn’t found → JS checks up the chain.

---

## 🧰 Object.create() in Depth

### Use case: Create an object with a given prototype

```js
const carPrototype = {
  start: function () {
    console.log("Car started");
  }
};

const myCar = Object.create(carPrototype);
myCar.start(); // Car started
```

✔ You can set prototype manually.

---

## 🔄 Composition vs Inheritance

| Feature     | Inheritance                    | Composition                             |
| ----------- | ------------------------------ | --------------------------------------- |
| Concept     | “is a”                         | “has a”                                 |
| Example     | Dog **is a** Animal            | Engine **has a** Fuel                   |
| Flexibility | Less flexible (tight coupling) | More flexible (loose coupling)          |
| Usage       | Extending classes              | Using multiple small objects inside one |

---

## 🧩 Inheritance Chain in JS (Class Syntax)

```js
class Animal {
  constructor(name) {
    this.name = name;
  }
  sound() {
    console.log("Some sound");
  }
}

class Dog extends Animal {
  bark() {
    console.log(`${this.name} barks`);
  }
}

const d = new Dog("Tommy");
d.sound(); // from Animal
d.bark();  // from Dog
```

---

## 🧪 `this` Keyword in Classes

* Refers to the **current object**.
* Depends on how the function is **called**, not where it’s defined.

```js
class Fruit {
  constructor(name) {
    this.name = name;
  }

  printName() {
    console.log(this.name);
  }
}

const apple = new Fruit("Apple");
apple.printName(); // Apple
```

---

## 🏗 Real World Project Class Structure

```js
// utils/Product.js
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  printDetails() {
    console.log(`${this.name} costs ₹${this.price}`);
  }
}

export default Product;

// index.js
import Product from './utils/Product.js';

const p1 = new Product("Laptop", 50000);
p1.printDetails();
```

This modular structure is common in **real-world frontend/backend apps**.

---


## Created with ❤️ by Shivansh