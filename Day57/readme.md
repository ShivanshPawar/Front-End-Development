# 🦁 Sheryians Coding School Cohort – Day57 Learnings



# 🧠 **Object-Oriented Programming (OOPs) in JavaScript**



## 🔷 What is OOP?

**Object-Oriented Programming (OOP)** is a programming paradigm that organizes code around **objects** and **classes**, rather than functions and logic alone.

Each object represents a **real-world entity** and contains:

* **Properties** (data/state)
* **Methods** (functions/behavior)

---

## 📌 Why Use OOP?

| Feature              | Benefit                                               |
| -------------------- | ----------------------------------------------------- |
| 🧩 **Modularity**    | Code is divided into smaller pieces (classes/objects) |
| 🔁 **Reusability**   | Classes and objects can be reused                     |
| 🧼 **Cleaner Code**  | Easy to manage and maintain                           |
| 🧬 **Encapsulation** | Data hiding and access control                        |
| 🔄 **Inheritance**   | Share logic across multiple classes                   |
| 👮 **Abstraction**   | Only expose necessary details                         |
| 🧠 **Polymorphism**  | Same method name, different behaviors                 |

---

## 🔍 What To Do in OOP?

1. **Model real-world entities as classes**
2. Define:

   * Properties → characteristics (e.g., name, age)
   * Methods → behaviors (e.g., walk(), eat())
3. Use principles like:

   * Encapsulation
   * Inheritance
   * Polymorphism
   * Abstraction

---

## 🧪 Example of Real-World Modeling

```js
class Car {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.brand} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.brand} slowed down to ${this.speed} km/h`);
  }
}
```

---

## 🛠 Old Way (Before ES6): Constructor Function

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
};

const p1 = new Person("Alice", 25);
p1.greet();
```

---

## ✅ New Way (ES6+): Using `class` Keyword

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, I'm ${this.name}, and I'm ${this.age} years old.`);
  }
}

const p1 = new Person("Alice", 25);
p1.greet();
```

✔ Cleaner and more intuitive syntax
✔ `class` under the hood still uses prototypes

---

## 🧱 Important Concepts of OOP in JavaScript

---

### 1. **Encapsulation**

> Hiding internal details and showing only necessary things

```js
class BankAccount {
  #balance = 0; // private field

  deposit(amount) {
    if (amount > 0) this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount();
account.deposit(1000);
console.log(account.getBalance()); // ✅ 1000
// console.log(account.#balance); ❌ Error: private field
```

---

### 2. **Inheritance**

> Child class inherits properties/methods from parent

```js
class Animal {
  speak() {
    console.log("Animal speaks");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Dog barks");
  }
}

const d = new Dog();
d.speak(); // inherited
d.bark();  // own method
```

---

### 3. **Polymorphism**

> One method, different behavior

```js
class Shape {
  area() {
    return "Area not defined";
  }
}

class Circle extends Shape {
  area() {
    return Math.PI * 3 * 3;
  }
}

class Square extends Shape {
  area() {
    return 4 * 4;
  }
}

const shapes = [new Shape(), new Circle(), new Square()];
shapes.forEach(shape => console.log(shape.area()));
```

---

### 4. **Abstraction**

> Hide implementation, expose only required functionality

```js
class Vehicle {
  startEngine() {
    this.#fuelCheck();
    console.log("Engine started");
  }

  #fuelCheck() {
    console.log("Checking fuel...");
  }
}

const car = new Vehicle();
car.startEngine(); // ✅ OK
// car.#fuelCheck(); ❌ Error
```

---

## 🔄 Planning and Plotting OOP Projects

1. Identify **entities** (User, Product, Car, etc.)
2. Define **classes** for them
3. Add **constructor** and **methods**
4. Reuse via **inheritance** if needed
5. Use **encapsulation** for secure data
6. Write **test cases** for each class

---

## 🧠 Async Programming vs OOP

| Feature          | OOP                         | Async Programming                         |
| ---------------- | --------------------------- | ----------------------------------------- |
| Design Paradigm  | Structure of code (objects) | Flow of code (timing)                     |
| Focus            | Reusability, Modularity     | Responsiveness, Non-blocking              |
| Example Concepts | Inheritance, Encapsulation  | Promises, Callbacks, Async/Await          |
| When to Use      | Building models, large apps | API calls, DB requests, UI responsiveness |

---


## Created with ❤️ by Shivansh