# 🦁 Sheryians Coding School Cohort – Day67 Learnings



## 🚀 GitHub API with `fetch()` – JavaScript Async Example

### ✅ Final Working Code:

```js
fetch("https://api.github.com/users/ShivanshPawar")
  .then(res => res.json())              // Convert response to JSON
  .then(data => {
    console.log(data.avatar_url);       // Log the avatar image URL
  });
```

---

## 📚 What Concepts Are Covered?

---

### 1. **What is `fetch()`?**

* `fetch()` is a built-in browser API used to make HTTP requests.
* It's used to get data from servers, such as APIs (e.g., GitHub API).

#### 🔧 Syntax:

```js
fetch("URL")
```

It returns a **Promise**, which resolves to a `Response` object.

---

### 2. **`.then()` and Chaining**

```js
fetch("URL")
  .then(res => res.json())
  .then(data => {
    console.log(data);
  });
```

* `.then()` is used to handle the result of a resolved Promise.
* You can **chain `.then()` calls** for step-by-step processing.

---

### 3. **`res.json()`**

* `fetch()` returns a `Response` object.
* We must convert it into a usable JavaScript object using `.json()`, which also returns a **Promise**.

---

### 4. **GitHub API**

You’re calling this API:

```url
https://api.github.com/users/ShivanshPawar
```

It returns **public user information** for the specified GitHub username.
Response includes:

```json
{
  "login": "ShivanshPawar",
  "id": 123456,
  "avatar_url": "https://...",
  "bio": "...",
  ...
}
```

---

### 5. **Accessing API Data**

```js
console.log(data.avatar_url)
```

* Once the data is fetched and converted to JSON, you can access any property using dot notation.
* In your case, you logged `avatar_url`, which gives the GitHub profile picture.

---

## 💡 Extra Context: How the Example Relates to Real Life

### 🧠 Real-Life Analogy:

Imagine:

* You **order** something from an online store (`fetch()`),
* You **wait** for the order to arrive (`.then()`),
* You **unwrap** the package (`res.json()`),
* You finally **use** the item inside (`console.log(data.avatar_url)`).

---

## 🔄 Bonus: Simulated Async Flow

```js
function getUserInfo() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res({ id: 1, name: "Harsh" });
    }, 1000);
  });
}

function getUserPics(id) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(["pic 1", "pic 2"]);
    }, 1000);
  });
}

getUserInfo()
  .then(data => {
    console.log(data);         // Output: { id: 1, name: "Harsh" }
    return getUserPics(data.id);
  })
  .then(data => {
    console.log(data);         // Output: ["pic 1", "pic 2"]
  });
```

### 📌 Concepts Used:

* **Custom Promises** using `new Promise()`
* **Simulated API delays** using `setTimeout`
* **Chained Promises** for stepwise logic

---

## ✅ Summary of Concepts Covered:

| Topic              | Explanation                                                           |
| ------------------ | --------------------------------------------------------------------- |
| `fetch()`          | Used to make HTTP requests                                            |
| Promises           | Asynchronous objects for handling delayed results                     |
| `.then()`          | Executes code after the Promise is resolved                           |
| `res.json()`       | Converts raw response to usable JavaScript object                     |
| GitHub API         | Real-world API to fetch public GitHub user data                       |
| Chaining `.then()` | Helps structure multiple asynchronous steps clearly                   |
| Accessing API Data | Using `data.propertyName` to get specific values (e.g., `avatar_url`) |

---


## Created with ❤️ by Shivansh