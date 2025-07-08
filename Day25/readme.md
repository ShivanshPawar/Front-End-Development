# 🦁 Sheryians Coding School Cohort – Day25 Learnings



## 📘 Advanced HOFs, Callbacks, and Closures


## 1️⃣ Repeating a Function at Intervals (Using Callbacks)

### 🔹 Concept:

A **callback function** is passed as an argument to another function.
Using `setInterval()`, you can **execute a function repeatedly** at specified intervals.

### 🔧 Implementation:

```js
function repeatFunction(callback, interval) {
  setInterval(callback, interval * 1000);
}

// Example usage
repeatFunction(() => {
  console.log("Repeating...");
}, 2);
```

### 📌 Explanation:

* `repeatFunction` accepts a `callback` and `interval` in seconds.
* `setInterval()` runs the callback every given interval.
* Output logs `"Repeating..."` every 2 seconds.

---

## 2️⃣ Creating a Function with a Preset Greeting (Using Closures)

### 🔹 Concept:

A **closure** allows a function to "remember" variables from its outer scope, even after that outer function has completed.

### 🔧 Implementation:

```js
function greetUser(greeting) {
  return function (name) {
    return `${greeting}, ${name}!`;
  };
}

// Example usage
const greetHello = greetUser("Hello");
console.log(greetHello("Alice")); // Hello, Alice!
```

### 📌 Explanation:

* `greetUser` returns a new function.
* The returned function retains access to the outer variable `greeting` due to closure.
* Result: "Hello, Alice!"

---

## 3️⃣ Executing a Function Only Once (Using HOF + Closure)

### 🔹 Concept:

Restrict a function to execute **only one time**, even if it’s called multiple times.

### 🔧 Implementation:

```js
function once(fn) {
  let executed = false;
  return function (...args) {
    if (!executed) {
      executed = true;
      return fn(...args);
    }
  };
}

// Example usage
const init = once(() => console.log("Initialized"));
init(); // Output: Initialized
init(); // No output
```

### 📌 Explanation:

* The inner function checks if it was already executed.
* After first call, `executed = true` and all further calls are ignored.
* Useful for one-time setup/initialization.

---

## 4️⃣ Throttling a Function (Using HOF + Closure)

### 🔹 Concept:

**Throttling** ensures a function runs **at most once** in a given time frame.
Useful in **event-heavy environments** like scroll, resize, etc.

### 🔧 Implementation:

```js
function throttle(fn, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall >= delay) {
      lastCall = now;
      return fn(...args);
    }
  };
}

// Example usage
const throttledLog = throttle(() => console.log("Throttled!"), 2000);
window.addEventListener("scroll", throttledLog);
```

### 📌 Explanation:

* `lastCall` tracks the last time `fn` was run.
* If current time minus `lastCall` is greater than `delay`, run the function.
* Prevents performance issues on rapid events.

---



#### 🧑‍💻 Code : [Class-Code](/Day25/script.js)

## Created with ❤️ by Shivansh