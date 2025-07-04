# 🦁 Sheryians Coding School Cohort – Day14 Learnings



## 📚 Table of Contents

### 🧠 Topic 1: Introduction to JavaScript

1. [What is JavaScript & Its Uses](#🧠-what-is-javascript--its-uses)

### 🔗 Topic 2: Linking JavaScript

2. [Including an External JavaScript File](#🔗-including-an-external-javascript-file)
3. [Using the `<script>` Tag](#🔗-using-the-script-tag)

### 🧪 Topic 3: Logging & Interaction

4. [Console Logging Types](#🧪-console-logging-types)
5. [User Interaction: Prompt, Alert, Confirm](#🧪-user-interaction-prompt-alert-confirm)

### 📝 Topic 4: Variables & Keywords

6. [var, let, const](#📝-var-let-const)
7. [Declaration, Initialization, Updating](#📝-declaration-initialization-updating)

### 🔍 Topic 5: Syntax & Semantics

8. [Statements and Semicolons](#🔍-statements-and-semicolons)
9. [Adding Comments](#🔍-adding-comments)

### 📐 Topic 6: Expressions & Operators

10. [Expressions vs Statements](#📐-expressions-vs-statements)
11. [Arithmetic Operators](#📐-arithmetic-operators)
12. [Increment & Decrement Operators](#📐-increment--decrement-operators)

---

# 🧑‍💻 Resource Video link : 
01: https://youtu.be/a-wVHL0lpb0?si=WEa1ZAUhAlWzmxM-      
02: https://youtu.be/kkOuRJ69BRY?si=wNurB-3gtlLdEAz2      
03: https://youtu.be/htznIeWKgg8?si=1Gj6S3plYgmNXHNf  
04: https://youtu.be/EgDmCbhmstU?si=lTqL1OSD80TWKH8l     
05: https://youtu.be/ks4MFTHLfyg?si=f2HVsPdksedGo4Eq

## 🧠 What is JavaScript & Its Uses

**JavaScript** is a **high-level, versatile** programming language used for web development.

### ✅ Uses of JavaScript:

* **DOM Manipulation**: Dynamically update HTML/CSS.
* **Event Handling**: Respond to user events like clicks or key presses.
* **Asynchronous Communication**: Fetch/send data using APIs or AJAX.
* **Full Stack Development**: Used in both frontend and backend (via Node.js).
* **Cross-Platform Development**: Used for web, mobile (React Native), and desktop apps (Electron.js).

---

## 🔗 Including an External JavaScript File

To include an external JS file, use the `<script>` tag with the `src` attribute.

```html
<script src="script.js"></script>
```

### ✅ Best Practices:

* Place `<script>` **before the closing `</body>` tag** for faster loading.

* Use `defer` for scripts that depend on the HTML content.

  ```html
  <script src="script.js" defer></script>
  ```

* Use `async` for independent scripts.

  ```html
  <script src="script.js" async></script>
  ```

---

## 🧪 Console Logging Types

### 1. `console.log()`

General purpose logging (debug or status output).

```js
console.log("This is a log message");
```

### 2. `console.info()`

Highlights informational messages.

```js
console.info("Info: Application started");
```

### 3. `console.warn()`

Logs warnings in yellow.

```js
console.warn("Warning: Deprecated function used");
```

### 4. `console.error()`

Logs errors in red.

```js
console.error("Error: Something went wrong");
```

---

## 🧪 User Interaction: Prompt, Alert, Confirm

### 5. `prompt()`

Asks the user for input via a popup.

```js
let name = prompt("Enter your name:");
```

### 6. `alert()`

Shows a simple alert message.

```js
alert("Welcome to the site!");
```

### 7. `confirm()`

Displays confirmation dialog (OK/Cancel).

```js
let confirmDelete = confirm("Do you want to delete this?");
```

---

## 📝 var, let, const

| Keyword | Scope    | Redeclaration | Updating | Notes                                 |
| ------- | -------- | ------------- | -------- | ------------------------------------- |
| `var`   | Function | ✅ Yes         | ✅ Yes    | Hoisted to top of scope.              |
| `let`   | Block    | ❌ No          | ✅ Yes    | Safer alternative to `var`.           |
| `const` | Block    | ❌ No          | ❌ No     | Must be initialized and can’t change. |

```js
var a = 10;
let b = 20;
const c = 30;
```

---

## 📝 Declaration, Initialization, Updating

### 1. Declaration

```js
let x;  // declared
```

### 2. Initialization

```js
let y = 5; // initialized
```

### 3. Updating

```js
y = 10; // updated
```

> ✅ `var` and `let` allow updates.
> ❌ `const` cannot be updated or redeclared.

---

## 🔍 Statements and Semicolons

### Statements

A **statement** is a complete JavaScript instruction.

```js
let message = "Hello";
alert(message);
```

### Semicolons

* Optional but **recommended** to avoid automatic semicolon insertion issues.
* Especially helpful when writing multiple statements on one line.

---

## 🔍 Adding Comments

### Single-line comment:

```js
// This is a single-line comment
```

### Multi-line comment:

```js
/* 
  This is a 
  multi-line comment 
*/
```

---

## 📐 Expressions vs Statements

### Expression

Produces a value.

```js
5 + 3
name = "Shivansh"
```

### Statement

Performs an action.

```js
let name = "Shivansh"; // variable declaration = statement
```

---

## 📐 Arithmetic Operators

| Operator | Symbol | Example  | Output |
| -------- | ------ | -------- | ------ |
| Addition | `+`    | `2 + 3`  | `5`    |
| Subtract | `-`    | `7 - 2`  | `5`    |
| Multiply | `*`    | `4 * 2`  | `8`    |
| Divide   | `/`    | `10 / 2` | `5`    |
| Modulus  | `%`    | `7 % 2`  | `1`    |

---

## 📐 Increment & Decrement Operators

### Increment `++`

Increases the value by 1.

```js
let count = 1;
count++; // now count = 2
```

### Decrement `--`

Decreases the value by 1.

```js
let score = 5;
score--; // now score = 4
```

---

## Created with ❤️ by Shivansh 
