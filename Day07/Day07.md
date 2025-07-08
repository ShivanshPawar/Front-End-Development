# 🦁 Sheryians Coding School Cohort – Day07 Learnings


## 📚 Table of Contents

### 📱 Topic 1: Responsive Design Concepts  
1. [Mobile-First Approach](#📱-mobile-first-approach)  
2. [Media Queries](#📱-media-queries)  

### 🧱 Topic 2: CSS Grid Layout  
3. [Grid Basics](#🧱-grid-basics)  
4. [Responsive Photo Gallery with Grid](#🧱-responsive-photo-gallery-with-grid)  

### 💻 Project Exercise  
5. [Project Exercise 6: Responsive Photo Gallery](#💻-project-exercise-6-responsive-photo-gallery)

---

# 🧑‍💻 Resource Video link : 
01: https://youtu.be/HG10yrq1pbk?si=i9HPQK0-dVVZFjO_


# 📱 Topic 1: Responsive Design Concepts  
## 📱 Mobile-First Approach

**Purpose**:  
Prioritizes mobile user experience, improves performance, and keeps the codebase cleaner.

**Techniques**:
- Start styling for mobile devices first, **without media queries**
- Use `@media (min-width: value)` for larger screen styles

**Example:**

```css
/* Base mobile styles */
body {
  font-size: 14px;
}

/* Tablet and up */
@media (min-width: 768px) {
  body {
    font-size: 16px;
  }
}
```

---

## 📱 Media Queries

**Purpose**:  
Apply styles dynamically based on screen width or other device characteristics.

**Techniques**:
- `@media (min-width: value)` → Styles apply for screens wider than the given value
- `@media (max-width: value)` → Styles apply for screens narrower than the given value
- Define breakpoints as SCSS variables for better maintainability

**Example:**

```css
@media (max-width: 600px) {
  .container {
    padding: 10px;
  }
}
```

---

# 🧱 Topic 2: CSS Grid Layout  
## 🧱 Grid Basics

**Purpose**:  
Provides two-dimensional layouts with rows and columns for complex designs.

**Techniques**:
```css
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 10px;
```

**Example:**

```css
.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
```

---

## 🧱 Responsive Photo Gallery with Grid

### 📝 Description:

Build a responsive product showcase webpage using **HTML** and **CSS Grid**.  
The layout should adapt to different screen sizes, displaying products in a grid that adjusts the number of columns on **phones**, **tablets**, and **desktops**.  
Use **CSS Grid**, **media queries**, and **relative units** to ensure a seamless user experience across all devices — following a **mobile-first approach**.

---

### 💡 Hints:

#### 🔹 Mobile First
Style for phones first, then use media queries for larger screens.

#### 🔹 `grid-template-columns` is Key
Use:
```css
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
```
for responsive columns.

#### 🔹 Media Queries for Breakpoints
Use `min-width` media queries for:
- Tablets (768px+)
- Desktops (1024px+)

Adjust `grid-template-columns` inside media queries.

#### 🔹 Relative Units
Use `rem`, `em`, `%`, `vh`, `vw` instead of fixed `px` units.

#### 🔹 Test Responsively
Use browser dev tools (device toolbar) to test on different screen sizes.

---

## 💻 Project Exercise 6: Responsive Photo Gallery

### Desktop View:

- Multiple columns
- Wider layout
- Increased spacing

### Mobile View:

- 1 or 2 columns depending on screen size
- Compact layout
- Reduced padding/margins



---

## Created with ❤️ by Shivansh 