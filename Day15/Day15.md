# 🦁 Sheryians Coding School Cohort – Day15 Learnings

## 📚 Table of Contents

### 📦 Topic 1: JavaScript Data Types

1. [Primitive Data Types](#📦-primitive-data-types)
2. [Reference Data Types](#📦-reference-data-types)
3. [JavaScript Data Types Summary](#📦-javascript-data-types-summary)
4. [Important Values in JavaScript](#📦-important-values-in-javascript)

### 🧮 Topic 2: JavaScript Operators

5. [Basic Operators](#🧮-basic-operators)
6. [Comparison and Logical Operators](#🧮-comparison-and-logical-operators)

### 🧠 Topic 3: JavaScript Concepts

7. [Variable Hoisting](#🧠-variable-hoisting)
8. [Condition Operators](#🧠-condition-operators)
9. [Loops](#🧠-loops)

### 📝 Topic 4: Assignments & Exercises

10. [Real-World Practice Assignments](#📝-real-world-practice-assignments)

# 🧑‍💻 Resource Video link : 
01: https://youtu.be/a-wVHL0lpb0?si=WEa1ZAUhAlWzmxM-      
02: https://youtu.be/kkOuRJ69BRY?si=wNurB-3gtlLdEAz2      
03: https://youtu.be/htznIeWKgg8?si=1Gj6S3plYgmNXHNf  
04: https://youtu.be/EgDmCbhmstU?si=lTqL1OSD80TWKH8l     
05: https://youtu.be/ks4MFTHLfyg?si=f2HVsPdksedGo4Eq

## 📦 Primitive Data Types

Primitive data types are **immutable** and stored **directly in memory**.

### ✅ List of Primitive Data Types:

1. **Number** – Integer or Floating-point

   ```js
   let num = 42;
   ```

2. **String** – Text enclosed in quotes

   ```js
   let str = "Hello";
   ```

3. **Boolean** – `true` or `false`

   ```js
   let isOnline = true;
   ```

4. **Null** – Represents an empty or non-existent value

   ```js
   let data = null;
   ```

5. **Undefined** – Declared but not assigned a value

   ```js
   let notDefined;
   ```

6. **Symbol** – Unique and immutable value

   ```js
   let sym = Symbol("id");
   ```

7. **BigInt** – Used to handle large integers beyond `Number.MAX_SAFE_INTEGER`

   ```js
   let big = 1234567890123456789012345678901234567890n;
   ```

---

## 📦 Reference Data Types

Reference types are stored **by reference** and are **mutable**.

### ✅ Common Reference Data Types:

1. **Object** – Collection of key-value pairs

   ```js
   let obj = { name: "Shiv", age: 19 };
   ```

2. **Array** – Ordered list of values

   ```js
   let list = [1, 2, 3, 4];
   ```

---

## 📦 JavaScript Data Types Summary

JavaScript has **8 data types**, categorized into:

* **Primitive Types**: Number, String, Boolean, Null, Undefined, Symbol, BigInt
* **Reference Types**: Object, Array

---

## 📦 Important Values in JavaScript

1. `undefined` – Declared but not initialized

2. `null` – Intentionally empty

3. `NaN` – Result of invalid math operations

   ```js
   let result = "hello" / 5; // NaN
   ```

4. `Infinity` – Represents infinity

   ```js
   let inf = 1 / 0; // Infinity
   ```

---

## 🧮 Basic Operators

### 1. Arithmetic Operators:

| Operator | Description    | Example       |
| -------- | -------------- | ------------- |
| `+`      | Addition       | `5 + 2` = 7   |
| `-`      | Subtraction    | `5 - 2` = 3   |
| `*`      | Multiplication | `5 * 2` = 10  |
| `/`      | Division       | `5 / 2` = 2.5 |
| `%`      | Modulus        | `5 % 2` = 1   |
| `++`     | Increment      | `count++`     |
| `--`     | Decrement      | `count--`     |

### 2. Assignment Operators:

| Operator | Example  |
| -------- | -------- |
| `=`      | `x = 10` |
| `+=`     | `x += 5` |
| `-=`     | `x -= 2` |
| `*=`     | `x *= 3` |
| `/=`     | `x /= 2` |
| `%=`     | `x %= 2` |

---

## 🧮 Comparison and Logical Operators

### Comparison Operators:

| Operator | Description         | Example     |
| -------- | ------------------- | ----------- |
| `==`     | Equal to            | `5 == "5"`  |
| `===`    | Strict equal to     | `5 === "5"` |
| `!=`     | Not equal to        | `5 != 3`    |
| `!==`    | Strict not equal    | `5 !== "5"` |
| `>`      | Greater than        | `5 > 3`     |
| `<`      | Less than           | `3 < 5`     |
| `>=`     | Greater or equal to | `5 >= 5`    |
| `<=`     | Less or equal to    | `3 <= 5`    |

### Logical Operators:

| Operator | Description |    |            |
| -------- | ----------- | -- | ---------- |
| `&&`     | Logical AND |    |            |
| \`       |             | \` | Logical OR |
| `!`      | Logical NOT |    |            |

---

## 🧠 Variable Hoisting

**Hoisting** moves variable and function declarations to the top before code execution.

### With `var`:

```js
console.log(x); // undefined
var x = 5;
```

### With `let` and `const`:

* They are hoisted **but not initialized**.
* They remain in the **Temporal Dead Zone (TDZ)** until declared.

```js
console.log(y); // ReferenceError
let y = 10;
```

---

## 🧠 Condition Operators

### 1. `if-else` Statement:

```js
let age = 20;
if (age < 18) {
  console.log("Minor");
} else {
  console.log("Adult");
}
```

### 2. Ternary Operator:

```js
let result = (age >= 18) ? "Adult" : "Minor";
```

---

## 🧠 Loops

### 1. `for` Loop

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

### 2. `while` Loop

```js
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

### 3. `do...while` Loop

```js
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```

---

## 📝 Real-World Practice Assignments

1. **Age Category Message** – Print Minor, Adult, or Senior based on age.
2. **Even or Odd Sum** – Prompt two numbers; print if sum is even or odd.
3. **Character Case Checker** – Identify if input is uppercase, lowercase, or neither.
4. **Largest of Three Numbers** – Input 3 numbers, print the largest.
5. **Leap Year Checker** – Input a year, determine if it’s a leap year.
6. **Simple Calculator** – Input 2 numbers and an operator (+, -, \*, /).
7. **Positive, Negative, or Zero** – Check the nature of an input number.
8. **User Greeting** – Greet user based on time (morning, afternoon, etc.).
9. **Traffic Light System** – Input "red", "yellow", or "green"; show matching message.
10. **Multiplication Table** – Input a number and print its table.
11. **Grade Calculator** – Assign grades based on marks.
12. **Simple Login System** – Check credentials and print success/fail message.
13. **Swap Without Third Variable** – Swap 2 numbers using arithmetic.
14. **FizzBuzz** – Check if number is divisible by 3, 5, or both.
15. **Number Reversal** – Reverse a 3-digit number.
16. **Sum of Digits** – Input a number and sum all its digits.
17. **Palindrome Checker** – Check if input word reads same forward and backward.
18. **Reverse Without `.split()`** – Reverse a number without string methods.
19. **Find Second Largest** – Find second largest among 3 numbers without sort.
20. **First Non-Repeating Character** – From a string, print first non-repeating char.
21. **Even Digit Counter** – Count even digits in a number.
22. **Nested Condition Challenge** – Based on age and salary print messages.
23. **Toggle Case** – Toggle case for every character in a word.
24. **Find Missing Number** – From a list with one missing number, find it.
25. **Convert Number to Words** – Input digit and print in words (e.g., 1 → One).

---


## Created with ❤️ by Shivansh 
