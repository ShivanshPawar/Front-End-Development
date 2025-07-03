
# 🦁 Sheryians Coding School Cohort – Day18 Learnings



## 📚 Table of Contents (Advanced JavaScript Topics)

1. [Rest Parameters](#1-rest-parameters)
2. [Hoisting](#2-hoisting)
3. [IIFE (Immediately Invoked Function Expression)](#3-iife-immediately-invoked-function-expression)
4. [HOFs (Higher-Order Functions)](#4-hofs-higher-order-functions)
5. [Callback Functions](#5-callback-functions)
6. [First-Class Functions](#6-first-class-functions)
7. [Pure Functions](#7-pure-functions)
8. [Impure Functions](#8-impure-functions)
9. [Global Scope](#9-global-scope)
10. [Local Scope](#10-local-scope)
11. [Closures](#11-closures)

---
# 🧑‍💻 Resource Video link : 
01: https://youtu.be/a-wVHL0lpb0?si=WEa1ZAUhAlWzmxM-      
02: https://youtu.be/kkOuRJ69BRY?si=wNurB-3gtlLdEAz2      
03: https://youtu.be/htznIeWKgg8?si=1Gj6S3plYgmNXHNf  
04: https://youtu.be/EgDmCbhmstU?si=lTqL1OSD80TWKH8l

## 1. Rest Parameters

Rest parameters allow you to represent an **indefinite number of arguments as an array**.

```js
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4)); // 10
```

🧠 **Use case:** When you don’t know how many arguments will be passed.

---

## 2. Hoisting

Hoisting is JavaScript's behavior of **moving declarations to the top** of the current scope (not initializations).

```js
console.log(x); // undefined
var x = 5;
```

🔍 **Only `var` declarations and function declarations are hoisted.**
Let/const are hoisted but in a "temporal dead zone."

```js
greet(); // Hello!
function greet() {
  console.log("Hello!");
}
```

---

## 3. IIFE (Immediately Invoked Function Expression)

An IIFE is a function that runs **as soon as it's defined**.

```js
(function () {
  console.log("I'm an IIFE");
})();
```

🛡️ Used to **create a private scope** and **avoid polluting the global scope**.

---

## 4. HOFs (Higher-Order Functions)

A Higher-Order Function is a function that:

* **Takes another function as a parameter**, or
* **Returns another function**

```js
function greet(name) {
  return function(message) {
    console.log(`${message}, ${name}`);
  };
}
greet("Shivansh")("Good Morning");
```

Examples: `map`, `filter`, `reduce` are all HOFs.

---

## 5. Callback Functions

A callback function is **passed as an argument to another function** and is called **later**.

```js
function greet(name, callback) {
  callback(name);
}

function sayHi(name) {
  console.log("Hi, " + name);
}

greet("Shivansh", sayHi);
```

🧠 Used in asynchronous code like `setTimeout`, event listeners, or API calls.

---

## 6. First-Class Functions

In JavaScript, functions are **first-class citizens**, meaning:

* They can be assigned to variables
* Passed as arguments
* Returned from other functions

```js
const sayHi = function(name) {
  return "Hi " + name;
};

console.log(sayHi("Dev"));
```

---

## 7. Pure Functions

A Pure Function:

* Always returns the **same output** for the same input.
* Has **no side effects** (like modifying global variables or DOM).

```js
function add(a, b) {
  return a + b;
}
```

✅ Reliable, testable, and doesn't change outside state.

---

## 8. Impure Functions

An Impure Function:

* Depends on or modifies something **outside its own scope**.

```js
let counter = 0;
function increment() {
  return ++counter;
}
```

⚠️ Output depends on external variables → harder to test/debug.

---

## 9. Global Scope

Variables declared **outside any function or block** have global scope.

```js
let globalVar = "I'm global";
function printGlobal() {
  console.log(globalVar);
}
```

🌍 Accessible from **anywhere** in your code.

---

## 10. Local Scope

Variables declared **inside functions or blocks** are local to that scope.

```js
function test() {
  let localVar = "I'm local";
  console.log(localVar);
}
```

🔒 Cannot be accessed outside the function/block.

---

## 11. Closures

A closure is a function that **remembers variables from its outer scope**, even after that scope has finished executing.

```js
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}

const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2
```

🧠 Used for **data encapsulation**, **private variables**, and **functional programming**.

---

## Created with ❤️ by Shivansh 
