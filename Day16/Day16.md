# 🦁 Sheryians Coding School Cohort – Day16 Learnings


## 📚 Table of Contents

1. [Working with Strings in JavaScript](#1-working-with-strings-in-javascript)
2. [Conditional Operators in JavaScript](#2-conditional-operators-in-javascript)
3. [Loops in JavaScript](#3-loops-in-javascript)
4. [Functions in JavaScript](#4-functions-in-javascript)
5. [Scoping & Closures in JavaScript](#5-scoping--closures-in-javascript)


# 🧑‍💻 Resource Video link : 
01: https://youtu.be/a-wVHL0lpb0?si=WEa1ZAUhAlWzmxM-      
02: https://youtu.be/kkOuRJ69BRY?si=wNurB-3gtlLdEAz2      
03: https://youtu.be/htznIeWKgg8?si=1Gj6S3plYgmNXHNf  
04: https://youtu.be/EgDmCbhmstU?si=lTqL1OSD80TWKH8l     
05: https://youtu.be/ks4MFTHLfyg?si=f2HVsPdksedGo4Eq

### 1. Working with Strings in JavaScript

JavaScript provides various methods to manipulate and work with strings.
**Important:** Strings are immutable in JavaScript. This means any modification results in a new string.

#### ✅ Common String Methods:

| Method                 | Description                    | Example                               |
| ---------------------- | ------------------------------ | ------------------------------------- |
| `.length`              | Returns the length of a string | `"hello".length → 5`                  |
| `.toUpperCase()`       | Converts string to uppercase   | `"hello".toUpperCase() → "HELLO"`     |
| `.toLowerCase()`       | Converts string to lowercase   | `"HELLO".toLowerCase() → "hello"`     |
| `.includes(substring)` | Checks if substring exists     | `"hello".includes("ell") → true`      |
| `.indexOf(substring)`  | Returns index of first match   | `"hello".indexOf("l") → 2`            |
| `.slice(start, end)`   | Extracts part of string        | `"hello".slice(1, 3) → "el"`          |
| `.replace(old, new)`   | Replaces substring             | `"hello".replace("l", "L") → "heLlo"` |
| `.split(separator)`    | Splits string into array       | `"a,b,c".split(",") → ['a','b','c']`  |
| `.trim()`              | Removes whitespaces from ends  | `"  hi  ".trim() → "hi"`              |

---

### 2. Conditional Operators in JavaScript

Conditional operators help to make decisions in code using logical evaluations.

#### ✅ Types:

1. **if / else / else if**

   ```js
   let age = 20;
   if (age >= 18) {
     console.log("Adult");
   } else {
     console.log("Minor");
   }
   ```

2. **Ternary Operator**

   ```js
   let score = 90;
   let result = score > 40 ? "Pass" : "Fail";
   console.log(result); // Pass
   ```

3. **Logical Operators**

   * `&&` (AND)
   * `||` (OR)
   * `!` (NOT)

   ```js
   let a = true, b = false;
   console.log(a && b); // false
   console.log(a || b); // true
   console.log(!a);     // false
   ```

---

### 3. Loops in JavaScript

Loops help us to **execute a block of code multiple times**.

#### ✅ Types of Loops:

1. **for loop**

   ```js
   for (let i = 0; i < 5; i++) {
     console.log(i);
   }
   ```

2. **while loop**

   ```js
   let i = 0;
   while (i < 5) {
     console.log(i);
     i++;
   }
   ```

3. **do...while loop**

   ```js
   let i = 0;
   do {
     console.log(i);
     i++;
   } while (i < 5);
   ```

4. **for...of loop (used with arrays)**

   ```js
   let arr = [1, 2, 3];
   for (let val of arr) {
     console.log(val);
   }
   ```

5. **for...in loop (used with objects)**

   ```js
   let obj = {a:1, b:2};
   for (let key in obj) {
     console.log(key, obj[key]);
   }
   ```

---

### 4. Functions in JavaScript

Functions are **blocks of code designed to perform a task**.

#### ✅ Types of Functions:

1. **Function Declaration**

   ```js
   function greet(name) {
     return `Hello, ${name}`;
   }
   console.log(greet("Shivansh"));
   ```

2. **Function Expression**

   ```js
   const add = function(a, b) {
     return a + b;
   };
   console.log(add(2, 3));
   ```

3. **Arrow Function**

   ```js
   const multiply = (a, b) => a * b;
   console.log(multiply(2, 3));
   ```

4. **Default Parameters**

   ```js
   function greet(name = "Guest") {
     return `Hello, ${name}`;
   }
   console.log(greet());
   ```

---

### 5. Scoping & Closures in JavaScript

#### 🔹 **Scope**

Scope determines the **accessibility of variables**.

* **Global Scope** – Accessible anywhere
* **Function Scope** – Only inside the function
* **Block Scope (let/const)** – Inside `{}` blocks

```js
let x = 10; // Global
function test() {
  let y = 5; // Function scope
  if (true) {
    let z = 2; // Block scope
  }
  // z is not accessible here
}
```

#### 🔹 **Closures**

A closure is **a function that remembers its outer variables even after the outer function has finished executing**.

```js
function outer() {
  let counter = 0;
  return function inner() {
    counter++;
    console.log(counter);
  };
}

const count = outer();
count(); // 1
count(); // 2
```

Closures help in **data privacy**, **encapsulation**, and **callback handling**.

---

## Created with ❤️ by Shivansh 