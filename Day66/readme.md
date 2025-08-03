# 🦁 Sheryians Coding School Cohort – Day66 Learnings


## 🚀 **Concepts Covered**

### 🔁 What is a Promise in JavaScript?

A **Promise** is a JavaScript object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

---

## 🌍 **Real-World Analogy**

### 🍕 1. **Ordering Pizza (Success/Failure Simulation)**

Imagine you order food online:

* You **expect** it to be delivered in 2 minutes.
* There's a **70% chance** the order gets delivered (success).
* There's a **30% chance** the delivery fails (e.g., restaurant closed).

Just like this uncertainty, JavaScript Promises are used when **you don’t know yet whether an async operation will succeed or fail.**

---

## 🔄 Code 1: **Food Delivery Simulation**

```js
function oderFood() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            let chance = Math.random() < 0.7
            if(chance) res();
            else rej();
        }, 2000);
    });
}
```

### 🔍 Breakdown:

* `setTimeout()` simulates **waiting for delivery**.
* `Math.random()` gives a **random success/failure** chance.
* `res()` means **Pizza Delivered** (Promise fulfilled).
* `rej()` means **Delivery Failed** (Promise rejected).

### Output:

```js
🍕 Pizza Delivered!      // 70% chance
❌ Delivery failed!       // 30% chance
```

---

## 🔗 2. **Chained Promises – Getting User → Posts → Comments**

### 🌐 Real-Life Scenario:

* You **log in** to your app → You get the **user info**.
* Then you **fetch their posts** using user ID.
* Then you **fetch comments** on those posts.

These steps depend on each other: one must finish before the next begins → **chaining promises**.

---

### 📦 Code 2: Chained Promises

```js
getUser()
  .then(function(data){
      console.log(data);               // User info
      return getPosts(data.id);       // Get posts for that user
  })
  .then(function(titles){
      console.log(titles);            // Post titles
      return getComments("");         // Comments (could be on post id)
  })
  .then(function(cmt){
      console.log(cmt);               // Show comments
  })
  .finally(function(){
      console.log("all data fetched");
  });
```

### ⛓ Why use chaining?

* To **avoid callback hell**
* To ensure **order of execution**
* To pass **data from one function to the next**

---

## 📡 3. **Fake API Simulation with Delay**

This mimics real backend API behavior.

```js
function fakeApiCall(endpoint) {
    const data = {
        users: ["john", "ema", "amy"],
        posts: ["let's do it", "Make more impact", "Building things"]
    }

    let delay = Math.random()*2000+1000; // 1s - 3s delay

    return new Promise(function(res, rej){
        setTimeout(function(){
            res(data[endpoint])
        }, delay)
    });
}
```

### 🔍 What's going on?

* `fakeApiCall("users")` will fetch users after **random time delay**
* `fakeApiCall("posts")` will fetch posts with another random delay
* Simulates **real server delay/network lag**

---

## ✅ Key Learnings

| Concept         | Summary                                                  |
| --------------- | -------------------------------------------------------- |
| `Promise`       | Way to manage asynchronous code that may succeed or fail |
| `setTimeout`    | Simulates real-world delay                               |
| `.then()`       | Chain dependent tasks                                    |
| `.catch()`      | Handle errors                                            |
| `.finally()`    | Always runs, like cleanup after async                    |
| `Math.random()` | Simulates uncertainty (like in delivery success)         |

---

## 🧠 Mental Model:

```plaintext
You place an order → wait → it either succeeds or fails → based on that, you continue or show error.
```

This is **exactly what asynchronous programming** in JavaScript tries to model — **non-blocking behavior with dependent steps**.

---

## Created with ❤️ by Shivansh
