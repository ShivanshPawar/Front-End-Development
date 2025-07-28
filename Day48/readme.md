# 🦁 Sheryians Coding School Cohort – Day48 Learnings



# 🌐 DOM & Browser Functionalities in JavaScript 


## 📊 JavaScript Execution Context & Call Stack 

JavaScript is a **single-threaded**, **synchronous      language**, which means it runs one command at a time in a specific order.

### 🔹 What is the Call Stack? 

* A **stack** that keeps track of function calls.
* Uses **LIFO** (Last In First Out) model.
* When a function is called, it's pushed onto the stack.
* When the function finishes, it’s popped off the stack.

```js
function greet() {
  console.log("Hello!");
} 
function main() {
  greet();
  console.log("End of program");
}
main();

// Stack:
// main()
// └── greet()
// └── console.log("End of program")
```

--- 

### 🔸 Global Execution Context (GEC)

* Created when the script first runs.
* Binds: 
 
  * Global object (`window` in browsers)
  * `this`
  * Allocates memory for variables/functions (hoisting).
 
### 🔸 Function Execution Context (FEC)
 
* Created when a function is invoked.
* Has its own memory space.
* Variables in FEC don’t leak to GEC unless returned.
 
---

## 🌐 Web APIs (Browser Provided)

Web APIs are **features provided by the browser**, not JavaScript itself.

Some Examples:

| Web API        | Purpose                               |
| -------------- | ------------------------------------- |
| `setTimeout`   | Delay execution of a function         |
| `DOM API`      | Manipulate HTML (add, change, delete) |
| `Fetch API`    | Make HTTP requests                    |
| `localStorage` | Store data persistently in browser    |
| `console`      | Output debug logs                     |
| `location`     | Control and get browser URL info      |

---

## 🪟 Window Object

The **`window`** object is the **global object** for browser JavaScript. It represents the browser window/tab.

```js
console.log(window); // Logs the entire browser global object

window.alert("Hello"); // Equivalent to alert("Hello");
```

---

## 📍 Location API

`window.location` gives access to the current URL and allows you to navigate or reload the page.

### Example:

```js
console.log(location.href);         // Prints current URL
location.reload();                  // Reloads the page
location.href = "https://example.com"; // Redirects to another site
```

---

## 💾 localStorage

**Stores key-value pairs in the browser that persist even after the tab is closed.**

### ✅ Methods:

```js
localStorage.setItem("theme", "dark");
console.log(localStorage.getItem("theme")); // "dark"
localStorage.removeItem("theme");           // Deletes the key
localStorage.clear();                       // Clears all keys
```

📌 Note: Values are always stored as **strings**.

---

## 📦 sessionStorage

* Works like `localStorage`, but data is lost when the browser/tab is closed.

```js
sessionStorage.setItem("token", "abc123");
console.log(sessionStorage.getItem("token"));
```

---

## 🍪 Cookies

**Cookies** are small pieces of data stored in the browser with optional expiry and are sent to the server with every request.

### Example:

```js
document.cookie = "user=guest; expires=Fri, 31 Dec 2025 23:59:59 GMT";
console.log(document.cookie); // Lists all cookies
```

📌 Cookies are smaller and can be **automatically sent to the server**, unlike local/session storage.

---

## 👁 DOM Tree & Nodes

The DOM represents your HTML page as a **tree structure** of objects.

* Everything in the HTML is a **node**:

  * Elements (tags)
  * Attributes
  * Text
  * Comments

### Example:

```html
<div id="box">
  <p>Hello</p>
</div>
```

```js
const box = document.getElementById("box");
console.log(box.childNodes); // NodeList of <p>Hello</p>
```

---

## 📚 `classList` API

Used to **add/remove CSS classes** dynamically.

```js
const btn = document.querySelector("button");

btn.classList.add("active");     // Adds a class
btn.classList.remove("active");  // Removes a class
btn.classList.toggle("active");  // Adds/removes depending on state
btn.classList.contains("active"); // Checks if class is present
```

---

## 💡 Extra Browser Features

### 1. `navigator` Object

Gives info about the browser/device.

```js
console.log(navigator.userAgent); // Browser version, OS
```

---

### 2. `history` Object

Used for navigation control (back/forward)

```js
history.back();     // Go back a page
history.forward();  // Go forward a page
```

---

### 3. `screen` Object

Gives screen resolution and size.

```js
console.log(screen.width, screen.height);
```

---

### 4. Popups: `alert`, `confirm`, `prompt`

```js
alert("Hi there!");                       // Popup
let confirmRes = confirm("Are you sure?");  // true/false
let name = prompt("Enter your name:");     // string
```

---

### 5. `console` Methods

```js
console.log("Info");
console.warn("Warning!");
console.error("Something went wrong");
console.table([{name: "Alice"}, {name: "Bob"}]);
```

---

## 🧠 Summary Table

| Feature           | Use Case                                |
| ----------------- | --------------------------------------- |
| `window`          | Browser's global object                 |
| `location`        | URL and redirection handling            |
| `localStorage`    | Long-term client-side key-value storage |
| `sessionStorage`  | Session-based key-value storage         |
| `document.cookie` | Server-interacting small data storage   |
| `navigator`       | Get browser/device info                 |
| `classList`       | CSS class manipulation for elements     |
| `childNodes`      | Access children of any DOM element      |

---



## Created with ❤️ by Shivansh