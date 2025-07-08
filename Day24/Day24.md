# 🦁 Sheryians Coding School Cohort – Day24 Learnings


## 🎨 Notes – JavaScript HOFs, Callbacks & Closures


## 🔁 Higher-Order Functions (HOFs)

### 📌 Definition:

A **Higher-Order Function** is a function that:

✅ Takes another function as an argument
✅ OR returns a function as output

### 🧠 Example:

```js
function greet(callback) {
  callback(); // HOF calls another function
}
```

---

## 📞 Callbacks

### 📌 Definition:

A **Callback** is a function passed to another function to be executed later.

### 🧠 Real-life Analogy:

> "Order pizza 🍕 → Callback when it arrives 📞"

### 🔧 Example:

```js
setTimeout(() => {
  console.log("Called after 3 seconds");
}, 3000);
```

---

## 🔂 Challenge 1: HOF + Callback

### 🎯 Task:

Call a function **after 3 seconds** using `setTimeout`.

```js
function delayedExecution(callback) {
  setTimeout(callback, 3000);
}
delayedExecution(() => console.log("Done ✅"));
```

🧠 **Learning**: Async control using HOF + callback

---

## 🧭 Challenge 2: Custom `.map()` Function

### 🎯 Task:

Recreate the `.map()` method.

```js
function customMap(arr, cb) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(cb(arr[i], i, arr));
  }
  return result;
}
```

📌 Usage:

```js
customMap([1, 2, 3], x => x * 2); // ➡️ [2, 4, 6]
```

🧠 **Learning**: Understand how native array methods work

---

## 🔒 Closures

### 📌 Definition:

A **Closure** is:

> "A function bundled with its lexical scope (variables around it)."

### 🎯 Why Use It?

✅ Private variables
✅ Encapsulation
✅ Persistent state across calls

---

## 🔂 Challenge 3: Counter Using Closure

```js
function createCounter() {
  let count = 0;
  return function () {
    return ++count;
  };
}

const counter = createCounter();
counter(); // 1
counter(); // 2
```

🧠 **Learning**: Closure remembers `count` even after `createCounter()` finishes execution.

---

## 🔐 Challenge 4: Limit Function Calls (Closure + HOF)

### 🎯 Task:

Limit a function so it runs only `N` times

```js
function limit(fn, max) {
  let called = 0;
  return function () {
    if (called < max) {
      called++;
      fn();
    }
  };
}

const sayHi = limit(() => console.log("Hi!"), 2);
sayHi(); // Hi!
sayHi(); // Hi!
sayHi(); // No output
```

🧠 **Learning**: Restrict behavior using persistent `called` variable in closure.

---

## 🧠 Summary Cheatsheet

| Concept  | Key Idea                      | Example Keyword |
| -------- | ----------------------------- | --------------- |
| HOF      | Accepts or returns a function | `map`, `filter` |
| Callback | A function passed as argument | `setTimeout()`  |
| Closure  | Retains scope after execution | `counter()`     |

---

#### 🧑‍💻 Code : [Class-Code](/Day24/script.js)


## Created with ❤️ by Shivansh