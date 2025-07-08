# 🦁 Sheryians Coding School Cohort – Day04 Learnings

## 📚 Table of Contents

### 🎨Topic 1: Introduction to CSS
1. [What is CSS & Why It’s Important](#🎨-what-is-css--why-its-important)  
2. [CSS Syntax & Structure](#🧱-css-syntax--structure)  
3. [CSS Selectors](#🎯-css-selectors)

### 🧩Topic 2: Applying CSS
4. [Adding CSS to HTML](#🧩-adding-css-to-html)  
5. [Selector Precedence (Specificity)](#⚖️-selector-precedence-specificity)

### ✍️Topic 3: Text & Font Styling
6. [Font Properties](#✍️-font-properties)  
7. [Text Properties](#✏️-text-properties)

### 🎨Topic 4: Colors & Units
8. [Color Representation](#🎨-color-representation-in-css)  
9. [CSS Units](#📏-css-units)

### 📦Topic 5: Box Model & Layout
10. [Box Properties](#📦-box-properties-box-model)  
11. [Borders](#🖊️-borders)

### 🖼️Topic 6: Background & Shadows
12. [Background Properties](#🖼️-background-properties)  
13. [Shadow Effects](#🧊-shadow-effects)

### 💻 Project Exercise
14. [Project Exercise 3: Styling the Page](#💻-project-exercise-3-styling-the-page)

---
<br>
<br>

# 🧑‍💻 Resource Video link : 
01: https://youtu.be/K1naz9wBwKU?si=AfxZuSZUuvAj45ui  
02: https://youtu.be/kkOuRJ69BRY?si=wNurB-3gtlLdEAz2


<br>

# 🎨Topic 1: Introduction to CSS
## 🎨 What is CSS & Why It’s Important

CSS stands for **Cascading Style Sheets**.  
It controls how elements on a web page **look** and **feel**.

- Used for styling fonts, colors, spacing, layout
- Separates **structure (HTML)** and **presentation (CSS)**
- Makes websites more attractive and responsive

---

## 🧱 CSS Syntax & Structure

A CSS rule includes:

```css
selector {
  property: value;
}
```

* **Selector** – Targets the HTML element
* **Property** – What you want to style
* **Value** – How you want it to look

---

## 🎯 CSS Selectors

| Type             | Example     | Selects                   |
| ---------------- | ----------- | ------------------------- |
| Element selector | `p`         | All `<p>` elements        |
| Class selector   | `.box`      | Elements with class "box" |
| ID selector      | `#main`     | Element with ID "main"    |
| Group selector   | `h1, h2, p` | All h1, h2, and p         |
| Descendant       | `div p`     | `<p>` inside a `<div>`    |

---
<br>
<br>

# 🧩Topic 2: Applying CSS
## 🧩 Adding CSS to HTML

**1. Inline CSS**

```html
<h1 style="color: red;">Hello</h1>
```

**2. Internal CSS**

```html
<style>
  h1 { color: blue; }
</style>
```

**3. External CSS**

```html
<link rel="stylesheet" href="style.css">
```

---

## ⚖️ Selector Precedence (Specificity)

| Rule                       | Strength        |
| -------------------------- | --------------- |
| Inline Styles              | 🔥 Highest      |
| ID Selectors `#id`         | 🔥🔥 High       |
| Class Selectors `.class`   | 🔥 Medium       |
| Element Selectors `p, div` | Low             |
| `!important`               | Forces override |

---

<br>
<br>

# ✍️Topic 3: Text & Font Styling
## ✍️ Font Properties

* `font-family`: Defines font style (e.g., Arial)
* `font-size`: Sets font size (e.g., 16px)
* `font-weight`: `normal`, `bold`, `lighter`
* `font-style`: `normal`, `italic`, `oblique`

---

## ✏️ Text Properties

* `color`: Text color
* `text-align`: `left`, `center`, `right`, `justify`
* `line-height`: Vertical spacing between lines
* `letter-spacing`: Space between letters
* `text-transform`: `uppercase`, `lowercase`, `capitalize`
* `text-decoration`: `underline`, `line-through`, `none`

---
<br>
<br>

# 🎨Topic 4: Colors & Units
## 🎨 Color Representation in CSS

* Named: `red`, `blue`
* HEX: `#ff0000`
* RGB: `rgb(255, 0, 0)`
* RGBA: `rgba(255, 0, 0, 0.5)` (50% transparent)
* HSL: `hsl(0, 100%, 50%)`

---

## 📏 CSS Units

### Absolute Units:

* `px`, `cm`, `mm`, `in`

### Relative Units:

* `%`, `em`, `rem`

### Viewport Units:

* `vw` (viewport width)
* `vh` (viewport height)

---
<br>
<br>

# 📦Topic 5: Box Model & Layout
## 📦 Box Properties (Box Model)

Each element has:

* `content` – actual text/image
* `padding` – space inside border
* `border` – outlines the padding
* `margin` – space outside the border

---

## 🖊️ Borders

```css
border: 2px solid black;
border-radius: 10px;
```

You can customize:

* `border-width`
* `border-style`: solid, dashed, dotted
* `border-color`

---
<br>
<br>

# 🖼️Topic 6: Background & Shadows
## 🖼️ Background Properties

* `background-color`: Set background color
* `background-image`: Add background image
* `background-size`: `cover`, `contain`
* `background-repeat`: `no-repeat`
* `background-position`: `center`, `top`, `left`
* `linear-gradient()`: Add gradients

---

## 🧊 Shadow Effects

* `box-shadow`: Add shadow around boxes

```css
box-shadow: 4px 4px 10px rgba(0,0,0,0.3);
```

* `text-shadow`: Shadow on text

```css
text-shadow: 1px 1px 3px gray;
```

---
<br>
<br>

# 💻 Project Exercise 3: Styling the Page

### 📝 Description:

Style the **HTML blog page** from Project 1 using CSS.

---

### ✅ What to Style:

* **Headings** and **paragraphs** (colors, fonts, sizes)
* Add **padding**, **margin**, and **backgrounds**
* Style links with hover effects
* Use **box model** for layout control

---

### 🛠 Skills Covered:

* Text formatting
* Box model usage
* Spacing and layout
* Basic design aesthetics

---

## Created with ❤️ by Shivansh 