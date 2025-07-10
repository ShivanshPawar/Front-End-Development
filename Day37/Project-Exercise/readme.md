

# 🧠 DOM Manipulation: Visual & Detailed Notes (JavaScript)

*🦁 Sheryians Coding School*

---

## 📌 Topic: Selecting Elements in the DOM

### ✅ Use Case:

* The first step in DOM manipulation is selecting HTML elements.
* JavaScript provides several methods to access and work with different parts of the DOM.

### 🔍 Selection Types:

#### 🔹 Select Single Element

> **Example Use Case:** Highlighting a header.

#### 🔹 Select Multiple Elements

> **Example Use Case:** Targeting all buttons for applying event listeners or dynamically styling a group of elements.

---

## 🧠 Interview Q\&A: Changing HTML Content

### ❓ Q: What is the difference between `getElementById()` and `querySelector()`?

**A:**

* `getElementById()` selects by ID only
* `querySelector()` is more flexible and allows CSS-style selectors like `.class`, `#id`, `tag`

---

### ❓ Q: What's the difference between `querySelectorAll()` and `getElementsByClassName()`?

**A:**

* `querySelectorAll()` returns a **static NodeList**
* `getElementsByClassName()` returns a **live HTMLCollection** that updates with the DOM

---

### 🧩 Definition:

JavaScript allows dynamic content updates using `innerText` and `innerHTML`.

### 💡 Use Cases:

* Displaying messages after form submission
* Updating part of a page without reloading (e.g., AJAX results)

---

## 🎨 Interview Q\&A: Changing CSS with JavaScript

### ❓ Q: When should you use `innerText` vs `innerHTML`?

**A:**

* Use `innerText` for **plain text**
* Use `innerHTML` when you want to **render HTML tags/elements**

---

### 🧩 Definition:

You can dynamically update the appearance of elements using the `.style` property.

### 💡 Use Cases:

* Highlighting active menu items
* Changing themes or styling during runtime
* Visual feedback for user interaction

---

### ❓ Q: How do you dynamically change the background color of an element using JS?

**A:**
Use the `.style` property:

```js
element.style.backgroundColor = "yellow";
```

---

## 💡 Project: Bulb Application

### ❓ Q: Can you attach multiple event listeners to a single element?

**A:**
Yes. You can attach as many event listeners as needed to the same element for different or even the same events.

---

### ❓ Q: Name some commonly used DOM events.

**A:**

* `click`, `mouseover`, `mouseout`, `keydown`, `keyup`, `submit`, `scroll`

---

### 🧩 Definition:

A mini-project that toggles a **bulb image** on button click using DOM manipulation and events.

---

### 💡 Use Case:

Demonstrates how JavaScript updates DOM attributes and handles toggle logic.

---

### ❓ Q: How do you change the `src` attribute of an image dynamically?

**A:**
By setting the `.src` property:

```js
bulb.src = "bulb-on.jpg";
```

---

### ❓ Q: How do you track toggle state in such apps?

**A:**
By using a **boolean flag**, for example:

```js
let isOn = false;
```

Update this flag with each interaction to keep track of state.

---
