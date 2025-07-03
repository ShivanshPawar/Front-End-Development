# 🦁 Sheryians Coding School Cohort – Day21 Learnings


## 📚 Table of Contents

### 1️⃣ Console & Basic Operations

1. [Log "Hello, JavaScript!" to the console in 3 different ways](#1-log-hello-javascript-to-the-console-in-3-different-ways)
2. [Perform arithmetic operation and log result](#2-perform-arithmetic-operation-and-log-result)
3. [Log data types using `typeof`](#3-log-data-types-using-typeof)
4. [Swap values of two variables](#4-swap-values-of-two-variables)
5. [Use `console.group()` to organize logs](#5-use-consolegroup-to-organize-logs)

### 2️⃣ Variables & Data Types

6. [Modify properties of a `const` object](#6-modify-properties-of-a-const-object)
7. [Convert a string to number using 3 methods](#7-convert-a-string-to-number-using-3-methods)
8. [Check substring existence without `.includes()`](#8-check-substring-existence-without-includes)
9. [Sum array elements using `.reduce()`](#9-sum-array-elements-using-reduce)
10. [Difference between `undefined`, `null`, and `NaN`](#10-difference-between-undefined-null-and-nan)

---

## 1️⃣ Console & Basic Operations

### 1. Log "Hello, JavaScript!" to the console in 3 different ways

```js
// Method 1: Using console.log()
console.log("Hello, JavaScript!");

// Method 2: Using console.warn()
console.warn("Hello, JavaScript!");

// Method 3: Using console.error()
console.error("Hello, JavaScript!");
```

---

### 2. Perform arithmetic operation and log result

```js
let result = 35 * 2 - (10 / 2) + 7;
console.log(result); // Output: 74
```

---

### 3. Log data types using `typeof`

```js
console.log(typeof "123");  // string
console.log(typeof 123);    // number
console.log(typeof true);   // boolean
console.log(typeof null);   // object (JavaScript quirk)
```

---

### 4. Swap values of two variables

```js
let a = 10, b = 20;
console.log("Before Swap:", "a =", a, ", b =", b);

// Using a temporary variable
let temp = a;
a = b;
b = temp;
console.log("After Swap (Method 1):", "a =", a, ", b =", b);

// Using array destructuring
[a, b] = [10, 20];
[a, b] = [b, a];
console.log("After Swap (Method 2):", "a =", a, ", b =", b);
```

---

### 5. Use `console.group()` to organize logs

```js
console.group("User Info");
console.log("Name: John Doe");
console.log("Age: 25");
console.log("City: New York");
console.groupEnd();

console.groupCollapsed("Collapsed Group Example");
console.log("This content is collapsed by default.");
console.groupEnd();
```

---

## 2️⃣ Variables & Data Types

### 6. Modify properties of a `const` object

```js
const person = { name: "Alice", age: 25, city: "New York" };
console.log("Before update:", person);

// Modifying properties
person.age = 26;
person.city = "Los Angeles";

// Adding a new property
person.country = "USA";

console.log("After update:", person);
```

🧠 **Note:** You can modify properties of a `const` object, but **not reassign the entire object**.

---

### 7. Convert a string to number using 3 methods

```js
let str = "50";

// Method 1: Using Number()
let num1 = Number(str);
console.log(num1, typeof num1); // 50 "number"

// Method 2: Using parseInt()
let num2 = parseInt(str);
console.log(num2, typeof num2); // 50 "number"

// Method 3: Using Unary `+` Operator
let num3 = +str;
console.log(num3, typeof num3); // 50 "number"
```

---

### 8. Check substring existence without `.includes()`

```js
let str = "JavaScript";

// Method 1: Using .indexOf()
console.log(str.indexOf("Script") !== -1); // true

// Method 2: Using .search()
console.log(str.search("Script") !== -1); // true
```

---

### 9. Sum array elements using `.reduce()`

```js
let numbers = [10, 20, 30, 40, 50];
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum:", sum); // Sum: 150
```

---

### 10. Difference between `undefined`, `null`, and `NaN`

| Concept     | Meaning                            | Example                         |
| ----------- | ---------------------------------- | ------------------------------- |
| `undefined` | Variable declared but not assigned | `let x; console.log(x);`        |
| `null`      | Intentional absence of value       | `let y = null; console.log(y);` |
| `NaN`       | Invalid math operation result      | `console.log("hello" / 2);`     |

```js
let a;
console.log(a); // undefined

let b = null;
console.log(b); // null

let c = "hello" / 2;
console.log(c); // NaN
console.log(typeof NaN); // number (weird JS quirk)
```

---

## Created with ❤️ by Shivansh 

