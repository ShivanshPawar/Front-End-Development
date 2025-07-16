# 🦁 Sheryians Coding School Cohort – Day37 Learnings


# 📄 Introduction to the DOM


## 🌐 What is the DOM?

The **DOM (Document Object Model)** is the structured **representation of the HTML page** in a tree-like format, which JavaScript can access and manipulate.

* Every HTML element becomes a **node**
* JavaScript uses the DOM to **interact with the page**
* It allows dynamic changes to **content**, **style**, and **behavior**

---

## 🧱 DOM Structure and Tree

### 📌 DOM = Tree of Nodes

The HTML page becomes a **tree-like hierarchy**:

```
document
 └── html
      ├── head
      └── body
           ├── h1
           └── div
```

### 📌 Important Terms:

* **document**: The global object representing the entire HTML
* **nodes**: Any single unit in the DOM (element, text, comment)
* **elements**: Specific node types (tags like `div`, `h1`, `img`)

---

## 🧠 The 4 Pillars of DOM

### 1️⃣ **Selection**

Fetching the element from the DOM to work on it.

### 2️⃣ **Change HTML**

Update the content of the selected element.

### 3️⃣ **Change CSS**

Change styles of the selected element.

### 4️⃣ **Event Listeners**

React to user actions like clicks, typing, hovering, etc.

---

## 🧩 Fetching Elements from the DOM

### 🔹 1. `document.getElementById(id)`

* Selects a single element with a specific ID.

```js
let title = document.getElementById("main-heading");
```

---

### 🔹 2. `document.getElementsByTagName(tagName)`

* Returns a live **HTMLCollection** of all matching tag elements.

```js
let allPs = document.getElementsByTagName("p");
```

---

### 🔹 3. `document.getElementsByClassName(className)`

* Returns an **HTMLCollection** of elements with a given class.

```js
let cards = document.getElementsByClassName("card");
```

---

### 🔹 4. `document.querySelector(selector)`

* Returns the **first matching element** using **CSS-style selectors**.

```js
let firstBtn = document.querySelector(".btn");
```

---

### 🔹 5. `document.querySelectorAll(selector)`

* Returns a **NodeList** (not live) of **all** matching elements.

```js
let allButtons = document.querySelectorAll(".btn");
```
 
---

### Although a **NodeList** in JavaScript looks like an array, it’s **not** a real array. Let’s break it down clearly:

---

## 🔍 NodeList vs Array – Key Differences

| Feature / Behavior              | **NodeList**                     | **Array**                           |
| ------------------------------- | -------------------------------- | ----------------------------------- |
| Type                            | Not a real array                 | Real `Array` object                 |
| Data structure                  | Array-like object                | Native JavaScript array             |
| Indexed access (`nodelist[0]`)  | ✅ Yes                            | ✅ Yes                               |
| `length` property               | ✅ Yes                            | ✅ Yes                               |
| `forEach()`                     | ✅ Yes (modern browsers only)     | ✅ Yes                               |
| Array methods (`map`, `filter`) | ❌ Not available directly         | ✅ Fully supported                   |
| Modifiable (push, pop, etc)     | ❌ No                             | ✅ Yes                               |
| Returned by                     | `querySelectorAll`, `childNodes` | Created via `[]`, `Array()`         |
| Conversion needed               | ✅ Often converted to array       | ❌ Already array                     |
| Live vs Static                  | ❗ Depends on how it’s created    | Always static (doesn’t auto-update) |

---

### 🧪 Example:

```js
let items = document.querySelectorAll(".item"); // NodeList
let realArray = Array.from(items);              // Convert to Array

// Now you can use full array methods:
let upper = realArray.map(el => el.textContent.toUpperCase());
```

---

## 🧠 Types of NodeLists

* **Static NodeList**: Returned by `querySelectorAll()` – does NOT auto-update.
* **Live NodeList**: Returned by `getElementsByClassName()` or `getElementsByTagName()` – updates as DOM changes.

---

### ✅ How to Convert NodeList to Array?

```js
let nodelist = document.querySelectorAll("div");

// Option 1
let arr = Array.from(nodelist);

// Option 2
let arr2 = [...nodelist];
```

---

## 📌 TL;DR

> A **NodeList is not an Array**, but it’s **array-like**.
> You can loop through it, but to use advanced array methods, convert it using `Array.from()` or spread (`[...]`).


---

## ❓ Why Do We Link JavaScript **Before Closing `</body>`**?

### ✅ Answer:

To ensure the **HTML is fully loaded and parsed** before the JavaScript runs.

---

## 🧠 Detailed Reasoning:

### 1. **HTML Loads Top to Bottom**

* The browser reads HTML **line-by-line** from top to bottom.
* If your JS is at the top (in `<head>`), and it tries to access or modify elements that haven’t been created yet — **you’ll get errors or `null`**.

```html
<script>
  console.log(document.getElementById("btn")); // ❌ null (not yet rendered)
</script>
<button id="btn">Click Me</button>
```

---

### 2. **Placing `<script>` before `</body>` Ensures:**

* ✅ All elements (`div`, `button`, `form`, etc.) are already in the DOM.
* ✅ JS can now safely select and manipulate those elements.

```html
<button id="btn">Click Me</button>
<script>
  console.log(document.getElementById("btn")); // ✅ works!
</script>
</body>
```

---

### 3. **Faster Page Load Time**

* If JS is placed at the top, it **blocks rendering** (especially if it’s large or external).
* Putting JS at the end ensures HTML **loads and shows immediately**, improving user experience.

---

### 4. ✅ Modern Alternative: `defer` Attribute

Instead of moving JS to the bottom, you can also use the `defer` attribute in the `<head>`:

```html
<script src="script.js" defer></script>
```

* `defer` ensures the script **runs after HTML is fully parsed**, just like placing it before `</body>`.
* Cleaner if you want to organize scripts in the `<head>`.

| Placement             | DOM Ready? | Blocks Page Load? | Use Case                |
| --------------------- | ---------- | ----------------- | ----------------------- |
| Top of `<head>`       | ❌ No       | ❌ Yes             | Avoid unless necessary  |
| Bottom of `<body>`    | ✅ Yes      | ✅ No              | Common & safe practice  |
| `<head>` with `defer` | ✅ Yes      | ✅ No              | Modern, preferred style |


---

## 🎯 Summary

| Selector Method            | Returns        | Description                    |
| -------------------------- | -------------- | ------------------------------ |
| `getElementById()`         | Element        | Single element by ID           |
| `getElementsByClassName()` | HTMLCollection | All elements with a class      |
| `getElementsByTagName()`   | HTMLCollection | All elements of a tag          |
| `querySelector()`          | First Element  | First match using CSS selector |
| `querySelectorAll()`       | NodeList       | All matches using CSS selector |


---

#### 🧑‍💻 Code : [Class-Code](/Day37/Code)

---

## Project-Exercise

#### 🧑‍💻 Code : [AddFriend](/Day37/Project-Exercise/AddFriend)
#### 🧑‍💻 Code : [BulbON](/Day37/Project-Exercise/BulbON)

---

## Created with ❤️ by Shivansh