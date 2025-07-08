# 🦁 Sheryians Coding School Cohort – Day03 Learnings



## 📚 Table of Contents

###  📘 Topic 1: HTML Basics
1. [Understanding HTML and Its Use Cases](#understanding-html-and-its-use-cases)  
2. [Creating Your First HTML Page in VS Code](#creating-your-first-html-page-in-vs-code)  
3. [Understanding HTML Structure](#understanding-html-structure)  
4. [Understanding HTML Tags](#understanding-html-tags)  
5. [Working with HTML Lists](#working-with-html-lists)  
6. [HTML Attributes](#html-attributes)  
7. [Navigating Between Pages & Sections](#navigating-between-pages--sections)

### 📗 Topic 2: HTML Layout & Semantics 
8. [Understanding & Using `<div>` Tag](#understanding--using-div-tag)  
9. [Understanding Semantic Tags](#understanding-semantic-tags)

### 📙 Topic 3: HTML Forms 
10. [Creating a Simple Form](#creating-a-simple-form)  
11. [Types of Input Fields](#types-of-input-fields)  
12. [Form Attributes](#form-attributes)

<br>
<br>

---
# 🧑‍💻 Resource Video link : 
01: https://youtu.be/4dprtEzunIk?si=HfbC5NarR9amyN5M   
02: https://youtu.be/kkOuRJ69BRY?si=wNurB-3gtlLdEAz2

## 📘 Topic 1: HTML Basics

### Understanding HTML and Its Use Cases
- HTML = HyperText Markup Language  
- Defines page structure with tags  
- Used for:
  - Web pages
  - Web apps
  - Emails
  - Embedding media (audio, video, images)

---

### Creating Your First HTML Page in VS Code
Steps:
1. Open VS Code
2. Create `index.html`
3. Write HTML boilerplate
4. Install Live Server extension
5. Right-click → Open with Live Server

---

### Understanding HTML Structure
Components of HTML Document:
- `<!DOCTYPE html>`
- `<html>`
- `<head>` (includes `<title>`, meta info, links)
- `<body>` (contains visible content)

---

### Understanding HTML Tags
- `<h1>` to `<h6>` — Headings
- `<p>` — Paragraph
- `<a>` — Link
- `<img>` — Image
- `<br>` — Line break
- `<hr>` — Horizontal line

---

### Working with HTML Lists
- `<ol>` — Ordered List
- `<ul>` — Unordered List
- Nested Lists — One list inside another

---

### HTML Attributes
Common ones:
- `id`, `class`, `style`
- `href`, `src`, `alt`, `title`, `placeholder`

---

### Navigating Between Pages & Sections
Link another page:
```html
<a href="about.html">About Us</a>
```
Jump to section:
```html
<h2 id="contact">Contact</h2>
<a href="#contact">Go to Contact</a>
```
---

## 📗 Topic 2: HTML Layout & Semantics


### Understanding & Using `<div>` Tag

- `<div>` is a **block-level**, **non-semantic** HTML tag.
- Used as a **container** for grouping other HTML elements.
- Helps in **styling**, **structuring**, and **layout control**.

#### 🧠 Use Cases:
- Wrapping multiple elements
- Creating grid/column layouts with CSS
- Applying common styles with `class`

#### 💡 Example:
```html
<div class="section">
  <h2>Welcome</h2>
  <p>This is a section using a div.</p>
</div>
```


---


### Understanding Semantic Tags

Semantic tags describe **what the content means**, not how it looks.  
They improve:
- **SEO**
- **Accessibility (screen readers)**
- **Code readability**

#### 📑 Common Semantic Tags:

| Tag        | Purpose                          |
|------------|----------------------------------|
| `<header>` | Top of the page or section       |
| `<nav>`    | Navigation links/menu            |
| `<main>`   | Main document content            |
| `<section>`| Thematic grouping of content     |
| `<article>`| Self-contained content like blog |
| `<aside>`  | Sidebar, extra content           |
| `<footer>` | Bottom section                   |

#### 💡 Example:
```html
<header>
  <h1>My Blog</h1>
</header>

<nav>
  <a href="#home">Home</a>
  <a href="#contact">Contact</a>
</nav>

<main>
  <section>
    <h2>Latest Post</h2>
    <article>
      <h3>HTML Tips</h3>
      <p>Use semantic tags!</p>
    </article>
  </section>
</main>

<footer>
  <p>© 2025 My Blog</p>
</footer>
```

<BR>


## 📙 Topic 3: HTML Forms 


### Creating a Simple Form

HTML forms collect user data and send it to a server.

#### 💡 Example:
```html
<form action="/submit" method="post">
  <label for="name">Name:</label>
  <input type="text" id="name" name="username" placeholder="Enter your name" required>

  <input type="submit" value="Submit">
</form>
```


---

#### ✅ Types of Input Fields


### Types of Input Fields

HTML supports various `input` types for user data:

| Type         | Purpose                          |
|--------------|----------------------------------|
| `text`       | Single-line input                |
| `password`   | Hidden characters                |
| `email`      | Requires email format            |
| `checkbox`   | Multiple selections              |
| `radio`      | Choose one from many             |
| `file`       | Upload a file                    |
| `number`     | Only numeric input               |
| `range`      | Slider (e.g., volume)            |
| `date`       | Select date from calendar        |
| `submit`     | Submit button                    |
| `reset`      | Reset all form fields            |

#### 💡 Example:
```html
<form>
  <input type="email" placeholder="Enter your email" required>
  <input type="checkbox" id="agree">
  <label for="agree">I agree to terms</label>
  <input type="submit">
</form>
```

<br>


---

#### ✅ Form Attributes


### Form Attributes

| Attribute      | Description                                |
|----------------|--------------------------------------------|
| `action`       | URL where data is sent                     |
| `method`       | HTTP method (`get` or `post`)              |
| `name`         | Field identifier (used on backend)         |
| `placeholder`  | Hint text inside the input                 |
| `required`     | Makes field mandatory                      |
| `readonly`     | Field is viewable but not editable         |
| `disabled`     | Field is inactive and not submitted        |
| `value`        | Sets a default value                       |
| `autocomplete` | Enables browser auto-suggestions           |

#### 💡 Example:
```html
<input type="text" name="city" placeholder="Enter city" required autocomplete="on">
```
<br>

## Created with ❤️ by Shivansh