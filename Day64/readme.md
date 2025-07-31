# 🦁 Sheryians Coding School Cohort – Day64 Learnings


# Asynchronous JavaScript (with Real-Life Analogies)


## 🔁 Synchronous JavaScript (The Old-School Way)

### 🧾 What is it?

JavaScript is **single-threaded**, meaning **only one thing happens at a time** — like standing in a line at the ATM. You can't do anything else until the person in front of you finishes.

### 📌 Example:

```js
console.log("1");
console.log("2");
console.log("3");
```

### 🧠 Analogy:

Imagine a single cashier and a queue of customers. Each customer is processed **one by one** — no jumping ahead.

---

## ⏳ Asynchronous JavaScript

### 🧾 What is it?

Asynchronous JS **lets long-running tasks happen in the background** while the main code keeps running. It's like multitasking.

### 📌 Example:

```js
console.log("Start");

setTimeout(() => {
  console.log("Inside Timeout");
}, 2000);

console.log("End");
```

### 🧠 Output:

```
Start
End
Inside Timeout
```

### 🔥 Analogy:

You put a pizza in the oven (setTimeout), and instead of standing there waiting for it, you clean your room (next code lines). When the oven timer beeps (callback), you go back and take the pizza out.

---

## 🔄 The Event Loop

### 🧾 What is it?

The **Event Loop** is the **traffic cop** that checks:

* Is the call stack empty?
* Is there anything waiting in the **message queue**?
  If yes → move the message to the **call stack**.

### 📌 Example:

```js
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

console.log("C");
```

### ✅ Output:

```
A
C
B
```

### 💭 Why?

Even with 0ms delay, `setTimeout` goes into the queue, not the call stack. `C` runs before `B`.

---

## 📞 Callbacks

### 🧾 What are they?

A **callback** is a function passed as an argument to another function to be **executed later**, especially when a task finishes.

### 📌 Example:

```js
function downloadFile(file, callback) {
  console.log("Downloading " + file);
  setTimeout(() => {
    console.log(file + " downloaded");
    callback();
  }, 2000);
}

downloadFile("movie.mp4", () => {
  console.log("Now playing movie");
});
```

### 🧠 Analogy:

You're baking a cake. After it's baked (after 20 mins), the **callback** is frosting it.

---

## 🧵 Main Thread

### 🧾 What is it?

It's like **the main kitchen** — where all cooking (JS code) happens. Only **one chef** is allowed (single-threaded), so long tasks can **block** others.

---

## 🗂 Call Stack

### 🧾 What is it?

Think of it as a **stack of plates**: the last one added is the first to be removed (**LIFO** - Last In First Out).

### 📌 Example:

```js
function greet() {
  console.log("Hello");
}
function intro() {
  greet();
  console.log("My name is JS");
}
intro();
```

### 🧠 Stack Order:

* intro() → greet() → greet ends → back to intro → done

---

## 📩 Message Queue

### 🧾 What is it?

It holds all async operations (timers, API calls, events) waiting for their **turn** once the **call stack is empty**.

---

## 💥 Promises

### 🧾 What is it?

A **Promise** is an object that represents a value that **may not be available yet**, but **will be** in the future.

### 📌 Example:

```js
let p = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Success!");
  } else {
    reject("Failed!");
  }
});

p.then((res) => console.log(res)).catch((err) => console.log(err));
```

### 🧠 Analogy:

You're ordering food online. It's either:

* Delivered ✅ → `resolve()`
* Cancelled ❌ → `reject()`

---

## ⏳ Async/Await

### 🧾 What is it?

A **cleaner way** to write promises — it looks **synchronous**, but works **asynchronously** under the hood.

### 📌 Example:

```js
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function loadData() {
  console.log("Start");

  await wait(2000);
  console.log("Data Loaded");

  console.log("End");
}

loadData();
```

### 🔥 Output:

```
Start
(wait 2s)
Data Loaded
End
```

### 🧠 Analogy:

You **pause** at a red light (`await`) — but only inside an **async** function (car).

---

## 🔁 Summary of Execution Flow (Visual)

```
Main Thread:
 └── Call Stack
        └── Executes code
        └── Pauses async (e.g., setTimeout)
        └── Moves async task to Queue

Event Loop:
 └── Checks stack is empty
 └── Moves queued task into stack
```

---

## 🔍 Bonus Browser Features

| Feature             | Description                            |
| ------------------- | -------------------------------------- |
| `window`            | Global object (browser APIs live here) |
| `location.href`     | Gets/sets the current URL              |
| `location.reload()` | Reloads the current page               |
| `localStorage`      | Store data in the browser permanently  |
| `sessionStorage`    | Stores data per tab/session            |
| `setTimeout`        | Executes a function after a delay      |
| `setInterval`       | Repeats a function every few ms        |

---

## 🧠 Tying It All Together

### 🌍 Real Life Example:

**You open Netflix → click a movie → buffering → watching**

* UI (Main Thread) stays responsive
* Buffering runs in background (Async)
* When ready, video starts (Callback or Promise resolved)

---


## Created with ❤️ by Shivansh