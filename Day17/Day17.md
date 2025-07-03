# 🦁 Sheryians Coding School Cohort – Day17 Learnings



## 📚 Table of Contents: JavaScript Functions

1. [✅ What is a Function?](#1-what-is-a-function)
2. [🤔 Why Use Functions?](#2-why-use-functions)
3. [📌 Why Do We Need Functions?](#3-why-do-we-need-functions)
4. [🛠️ How to Create a Function](#4-how-to-create-a-function)
5. [📞 How to Call a Function](#5-how-to-call-a-function)
6. [📤 How to Pass a Parameter to a Function](#6-how-to-pass-a-parameter-to-a-function)
7. [📥 How to Pass an Argument to a Function](#7-how-to-pass-an-argument-to-a-function)
8. [🔢 Types of Functions in JavaScript](#8-types-of-functions-in-javascript)

---

# 🧑‍💻 Resource Video link : 
01: https://youtu.be/a-wVHL0lpb0?si=WEa1ZAUhAlWzmxM-      
02: https://youtu.be/kkOuRJ69BRY?si=wNurB-3gtlLdEAz2      
03: https://youtu.be/htznIeWKgg8?si=1Gj6S3plYgmNXHNf  
04: https://youtu.be/EgDmCbhmstU?si=lTqL1OSD80TWKH8l

## 1. ✅ What is a Function?

A **function** is a reusable block of code designed to perform a specific task.

```js
function greet() {
  console.log("Hello!");
}
```

### ✅ Key Points:

* Helps avoid code repetition
* Organizes logic into meaningful chunks
* Makes debugging easier

---

## 2. 🤔 Why Use Functions?

Using functions brings:

* **Modularity**: Split complex logic into smaller parts.
* **Reusability**: Write once, use multiple times.
* **Readability**: Clean and understandable code.

Example:

```js
function welcome() {
  console.log("Welcome to my site!");
}
welcome();
welcome(); // called again
```

---

## 3. 📌 Why Do We Need Functions?

### 🎯 Real-life Use:

Imagine needing to calculate the area of multiple rectangles.

Without function:

```js
let area1 = 5 * 10;
let area2 = 6 * 7;
```

With function:

```js
function calcArea(length, width) {
  return length * width;
}
console.log(calcArea(5, 10)); // 50
console.log(calcArea(6, 7));  // 42
```

🔁 You avoid repetition and make your code dynamic.

---

## 4. 🛠️ How to Create a Function

### Syntax (Function Declaration):

```js
function functionName(parameter1, parameter2) {
  // code block
}
```

### Example:

```js
function sayHello(name) {
  console.log("Hello " + name);
}
```

---

## 5. 📞 How to Call a Function

Once you define a function, **you need to call it** to execute.

```js
sayHello("Shivansh"); // Output: Hello Shivansh
```

---

## 6. 📤 How to Pass a Parameter to a Function

**Parameters** are placeholders used during function declaration.

```js
function multiply(x, y) { // x and y are parameters
  return x * y;
}
```

---

## 7. 📥 How to Pass an Argument to a Function

**Arguments** are the actual values passed when calling the function.

```js
console.log(multiply(3, 4)); // Arguments are 3 and 4 → Output: 12
```

### ❗ Note:

* Parameters are like variables **defined** in the function.
* Arguments are like **values passed** when calling the function.

---

## 8. 🔢 Types of Functions in JavaScript

| Type                                               | Description                                                 | Example                                          |
| -------------------------------------------------- | ----------------------------------------------------------- | ------------------------------------------------ |
| **Named Function**                                 | Traditional declaration                                     | `function add(a, b) { return a + b; }`           |
| **Function Expression**                            | Assigned to a variable                                      | `const add = function(a, b) { return a + b; };`  |
| **Arrow Function**                                 | ES6 short syntax                                            | `const add = (a, b) => a + b;`                   |
| **Anonymous Function**                             | Function with no name (usually in expressions or callbacks) | `setTimeout(function() { alert("Hi"); }, 1000);` |
| **IIFE (Immediately Invoked Function Expression)** | Runs immediately after defining                             | `(function(){ console.log("Run!"); })();`        |
| **Callback Function**                              | Passed as an argument to another function                   | `arr.map(function(item){ return item * 2; });`   |
| **Constructor Function**                           | Used with `new` to create objects                           | `function Person(name) { this.name = name; }`    |

---


## Created with ❤️ by Shivansh 
