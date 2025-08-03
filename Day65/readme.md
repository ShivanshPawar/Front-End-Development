# 🦁 Sheryians Coding School Cohort – Day65 Learnings


## 📦 Asynchronous JavaScript: Callback Hell & Promises


## 🌍 **Real-World Analogy – Food Delivery App**

Imagine you are using **a food delivery app** like Zomato or Swiggy. You want to:

1. **Place the order**
2. **Prepare the food**
3. **Deliver it to your home**

These 3 steps must happen **in order**, but **preparing the food or delivery takes time**. So, the app doesn’t freeze—it lets you use other features while the steps happen in the background.
That’s how **asynchronous programming** works.

---

## 🧠 What is Callback Hell?

> **Callback Hell** occurs when callbacks are nested within other callbacks many levels deep, making code hard to read and maintain.

### 🔁 Using the food delivery analogy:

```js
placeOrder(() => {
  prepareFood(() => {
    deliverOrder(() => {
      console.log("Food delivered!");
    });
  });
});
```

This is readable for 3 steps. But imagine 10-15 steps? It becomes a **"Pyramid of Doom"**—very hard to debug or scale.

---

### 📘 Callback Hell Example:

```js
function stepOne(cb) {
    console.log("Step One");
    cb();
}
function stepTwo(cb) {
    console.log("Step Two");
    cb();
}
function stepThree(cb) {
    console.log("Step Three");
    cb();
}

stepOne(() => {
    stepTwo(() => {
        stepThree(() => {
            console.log("All Step Completed");
        });
    });
});
```

🧩 **Explanation:**

* `stepOne()` runs first and logs `Step One`.
* Then it **calls `stepTwo()` inside its callback**, which logs `Step Two`.
* Then `stepThree()` runs in the same way.
* Finally logs `"All Step Completed"`.

💡 **Problem:**
As the number of steps increases, the nested code gets uglier and harder to manage.

---

## ✅ Solution: Promises

> A **Promise** is an object representing the eventual completion (or failure) of an asynchronous operation.

It has 3 states:

* `Pending` (default)
* `Fulfilled` (resolved)
* `Rejected` (error)

### 📘 Your Instagram Example:

```js
const pr = new Promise(function(res, rej) {
    console.log("get data from instagram");
    console.log("collecting data");
    console.log("data collected without any error");
    res();  // Resolving the promise
});

pr.then(function(){
    console.log("resolved");
}).catch(function(){
    console.log("rejected");
});
```

🧩 **Explanation:**

* `res()` is called → so `.then()` block runs → outputs `resolved`.
* If you had called `rej()` instead → `.catch()` would run → `rejected`.

💡 **Real-Life Use Case:**
Fetching data from an API (like Instagram) may take 1-2 seconds. During that time, JS **doesn’t block the page**. Instead, it registers a promise and waits.

---

## ⛓ Promise Chaining Example – StepOne/Two/Three

```js
function stepOne() {
    return new Promise(function(res, rej){
        console.log("Step One");
        res();
    });
}
function stepTwo() {
    return new Promise(function(res, rej){
        console.log("Step Two");
        res();
    });
}
function stepThree() {
    return new Promise(function(res, rej){
        console.log("Step Three");
        res();
    });
}

stepOne()
    .then(stepTwo)
    .then(stepThree)
    .then(function(){
        console.log("all steps done");
    });
```

🧩 **Explanation:**

* `stepOne()` runs and returns a Promise.
* `.then(stepTwo)` runs only when stepOne is **resolved**.
* Same for `stepThree`, and finally logs `"all steps done"`.

✅ **Benefits Over Callback Hell:**

* **Cleaner Code**
* **Flat Structure**
* **Better Error Handling** using `.catch()`

---

## 🧠 Summary Table

| Feature        | Callback Hell             | Promises                 |
| -------------- | ------------------------- | ------------------------ |
| Code Structure | Nested and hard to manage | Flat and clean           |
| Error Handling | Tricky                    | `.catch()` makes it easy |
| Readability    | Poor                      | Excellent with chaining  |
| Scalability    | Poor                      | Great for long workflows |

---

## 🚀 Final Thoughts

* Callback Hell is **common in older code** or quick scripts.
* Promises are **modern and readable**, and they pave the way for `async/await` (next level).
* In **production-grade apps**, you’ll always use Promises or async/await to avoid deeply nested callbacks.


---


## Created with ❤️ by Shivansh