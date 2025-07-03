# 🦁 Sheryians Coding School Cohort – Day08 Learnings


## 📚 Table of Contents

### 🧮 Topic 1: SCSS (Sassy CSS)
1. [Relative Units](#🧮-relative-units)  
2. [Nesting](#🧮-nesting)  
3. [Variables](#🧮-variables)  
4. [Mixins](#🧮-mixins)  
5. [Partials & @import](#🧮-partials--import)

### 🚀 Topic 2: Performance Optimization
6. [Optimize Images](#🚀-optimize-images)  
7. [Lazy Loading](#🚀-lazy-loading)

---
# 🧑‍💻 Resource Video link : 
01: https://youtu.be/_a5j7KoflTs?si=tHo-yWA1kl_DoNde

---

# 🧮 Topic 1: SCSS (Sassy CSS)


---

### 🔹 **Basic Overview**

> **SCSS (Sassy CSS)** is a **CSS preprocessor syntax** used in **Sass**, which adds powerful features like **variables, nesting, mixins, functions**, and **modular file imports** to standard CSS, making stylesheets more organized and maintainable.

---

### 🔹 **Developer-Friendly Syntax**

> SCSS is a **superset of CSS**, meaning all valid CSS code is also valid SCSS. It enhances the styling workflow by allowing developers to write cleaner, reusable, and more dynamic CSS.

---

### 🔹 **Why Use SCSS**

> SCSS helps in writing **DRY (Don't Repeat Yourself)** code in large-scale projects. With features like **variables** and **mixins**, it makes theme management and responsive design easier and scalable.

---

### 🔹 **Difference from Sass**

> SCSS is a newer and more CSS-like syntax of **Sass (Syntactically Awesome Stylesheets)**. While **Sass (indented syntax)** uses no braces or semicolons, SCSS uses the familiar CSS syntax, making it easier for beginners to adopt.

---

### 🔹 **Use Case**

> SCSS is ideal for projects where **code reusability**, **modularity**, and **maintainability** are crucial. It is often used in modern front-end development frameworks like **Bootstrap**, **Angular**, and **React** projects.

---


## 🧮 Relative Units

**Purpose**:  
Ensures scalable and responsive typography and spacing.

**Techniques**:
- `%` → Percentage relative to parent  
- `rem` → Root `em`, relative to `<html>` font size (**preferred for global scaling**)  
- `em` → Relative to the current element’s font size

**Example:**

```scss
.container {
  font-size: 1.5rem;
  padding: 2em;
}
```

---

## 🧮 Nesting

**Purpose**:  
Improves readability by grouping related styles together.

**Techniques**:
- Nest selectors following HTML structure
- Limit nesting depth (maximum 3–4 levels)

**Example:**

```scss
.navbar {
  ul {
    list-style: none;

    li {
      display: inline-block;
    }
  }
}
```

---

## 🧮 Variables

**Purpose**:  
Store reusable values for consistency and easy updates.

**Techniques**:
- Define global variables in `_variables.scss`
- Syntax: `$variable-name: value;`

**Example:**

```scss
$primary-color: #3498db;

button {
  background-color: $primary-color;
}
```

---

## 🧮 Mixins

**Purpose**:  
Create reusable blocks of CSS code for flexibility.

**Techniques**:
- Define using `@mixin`
- Use with `@include`
- Pass parameters for customization

**Example:**

```scss
@mixin center-flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  @include center-flex;
}
```

---

## 🧮 Partials & @import

**Purpose**:  
Helps organize and modularize SCSS files.

**Techniques**:
- Store styles in partials like `_variables.scss`, `_mixins.scss`, etc.
- Import using `@import 'filename';` (without `.scss`)

**Example:**

```scss
@import 'variables';
@import 'mixins';

body {
  font-family: $main-font;
}
```

---
# 🚀 Topic 2: Performance Optimization
## 🚀 Optimize Images

**Purpose**:  
Reduces file size for faster loading and better performance.

**Techniques**:
- Use tools like [TinyPNG](https://tinypng.com), ImageOptim
- Choose appropriate formats: **JPEG**, **PNG**, **WebP**, **SVG**
- Resize images based on screen sizes
- Use `srcset` for responsive images

**Example:**

```html
<img 
  src="small.jpg" 
  srcset="large.jpg 1024w, medium.jpg 768w, small.jpg 480w" 
  alt="Product">
```

---

## 🚀 Lazy Loading

**Purpose**:  
Defers loading of offscreen images to speed up initial page load.

**Techniques**:
- Add `loading="lazy"` to `<img>` and `<iframe>` tags
- For advanced cases, use JavaScript's **Intersection Observer API**

**Example (HTML):**

```html
<img src="image.jpg" loading="lazy" alt="Lazy loaded image">
```

**Example (JavaScript):**

```js
const images = document.querySelectorAll('img[data-src]');
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.src = entry.target.dataset.src;
      observer.unobserve(entry.target);
    }
  });
});
images.forEach(img => observer.observe(img));
```

---
## Created with ❤️ by Shivansh 
