# 🦁 Sheryians Coding School Cohort – Day20 Learnings




## 📚 Table of Contents – Arrays & Objects in JavaScript

### 🧮 Arrays

1. [What are Arrays and How to Create Them](#1-what-are-arrays-and-how-to-create-them)
2. [Accessing Elements in an Array](#2-accessing-elements-in-an-array)
3. [Functions on Arrays](#3-functions-on-arrays)
4. [Iterating Over Arrays](#4-iterating-over-arrays)

### 🗃️ Objects

5. [What are Objects (Key-Value Pairs)](#5-what-are-objects-key-value-pairs)
6. [Creating, Accessing & Deleting Object Properties](#6-creating-accessing--deleting-object-properties)
7. [Nested Objects](#7-nested-objects)
8. [Storage and Traversal of Objects](#8-storage-and-traversal-of-objects)
9. [Array as Object](#9-array-as-object)

### ⏱️ Timing Events

10. [setTimeout(), setInterval(), clearTimeout(), clearInterval()](#10-settimeout-setinterval-cleartimeout-clearinterval)

### 🧩 Object Operations

11. [freeze(), seal(), destructuring, object methods, this keyword](#11-freeze-seal-destructuring-object-methods-this-keyword)

# 🧑‍💻 Resource Video link : 
01: https://youtu.be/a-wVHL0lpb0?si=WEa1ZAUhAlWzmxM-      
02: https://youtu.be/kkOuRJ69BRY?si=wNurB-3gtlLdEAz2      
03: https://youtu.be/htznIeWKgg8?si=1Gj6S3plYgmNXHNf  
04: https://youtu.be/EgDmCbhmstU?si=lTqL1OSD80TWKH8l

## 🧮 Arrays

### 1. What are Arrays and How to Create Them

Arrays are **ordered collections** of elements.

```js
let fruits = ["Apple", "Banana", "Cherry"];
let numbers = new Array(1, 2, 3, 4);
```

* Can hold multiple data types.
* Index starts from `0`.

---

### 2. Accessing Elements in an Array

Use bracket `[]` notation:

```js
console.log(fruits[0]); // Apple
console.log(fruits[2]); // Cherry
```

---

### 3. Functions on Arrays

| Method                | Purpose                          | Example                                 |
| --------------------- | -------------------------------- | --------------------------------------- |
| `push()`              | Add element at end               | `fruits.push("Mango")`                  |
| `pop()`               | Remove last element              | `fruits.pop()`                          |
| `shift()`             | Remove first element             | `fruits.shift()`                        |
| `unshift()`           | Add element at beginning         | `fruits.unshift("Orange")`              |
| `indexOf()`           | Find index of value              | `fruits.indexOf("Banana")`              |
| `slice()`             | Returns selected portion         | `fruits.slice(1,3)`                     |
| `reverse()`           | Reverses array                   | `fruits.reverse()`                      |
| `sort()`              | Sorts alphabetically/numerically | `fruits.sort()`                         |
| `join()`              | Converts array to string         | `fruits.join(", ")`                     |
| `toString()`          | Converts array to string         | `fruits.toString()`                     |
| `map()`               | Transforms each element          | `arr.map(x => x * 2)`                   |
| `filter()`            | Filters elements                 | `arr.filter(x => x > 10)`               |
| `some()`              | Checks if **any** match          | `arr.some(x => x > 5)`                  |
| `reduce()`            | Reduces to a single value        | `arr.reduce((a, b) => a + b)`           |
| `array destructuring` | Assigns array items to variables | `const [a, b] = arr`                    |
| `spread operator`     | Expands array                    | `let newArr = [...fruits, "Pineapple"]` |

---

### 4. Iterating Over Arrays

#### `for loop`:

```js
for(let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

#### `forEach`:

```js
fruits.forEach((fruit, index) => {
  console.log(index, fruit);
});
```

---

## 🗃️ Objects

### 5. What are Objects (Key-Value Pairs)

Objects store **data in key-value pairs**.

```js
const person = {
  name: "John",
  age: 25,
  isStudent: true
};
```

---

### 6. Creating, Accessing & Deleting Object Properties

```js
// Accessing
console.log(person.name);     // John
console.log(person["age"]);   // 25

// Adding
person.city = "Mumbai";

// Deleting
delete person.isStudent;
```

---

### 7. Nested Objects

Objects can contain other objects:

```js
const student = {
  name: "Shivansh",
  marks: {
    math: 90,
    science: 88
  }
};
console.log(student.marks.math); // 90
```

---

### 8. Storage and Traversal of Objects

```js
const car = { brand: "Toyota", model: "Innova" };

// Traverse keys
for (let key in car) {
  console.log(key, car[key]);
}
```

---

### 9. Array as Object

Arrays are also objects with numeric keys:

```js
typeof [1, 2, 3]; // "object"
```

You can add properties to arrays (not recommended):

```js
let arr = [1, 2];
arr.name = "MyArray";
console.log(arr.name); // "MyArray"
```

---

## ⏱️ Timing Events

### 10. `setTimeout`, `setInterval`, `clearTimeout`, `clearInterval`

```js
// setTimeout
let timeoutId = setTimeout(() => {
  console.log("Hello after 2 seconds");
}, 2000);

// clearTimeout
clearTimeout(timeoutId);

// setInterval
let intervalId = setInterval(() => {
  console.log("Repeating every 1 second");
}, 1000);

// clearInterval
clearInterval(intervalId);
```

---

## 🧩 Object Operations

### 11. `freeze()`, `seal()`, `destructuring`, `object methods`, `this keyword`

#### `Object.freeze()`

Prevents any change to the object.

```js
const user = Object.freeze({ name: "Max" });
user.name = "John"; // ❌ Won’t change
```

#### `Object.seal()`

Prevents adding/removing keys but allows modification of existing keys.

```js
const user2 = Object.seal({ age: 30 });
user2.age = 31; // ✅
```

#### `Object Destructuring`

Extract values from object into variables.

```js
const { name, age } = person;
```

#### Object Methods

```js
const user = {
  name: "John",
  greet() {
    return `Hello, ${this.name}`;
  }
};
console.log(user.greet()); // Hello, John
```

#### `this` Keyword

`this` refers to the object calling the method.

```js
const obj = {
  name: "Code",
  getName: function() {
    return this.name;
  }
};
```

---

## Created with ❤️ by Shivansh 
