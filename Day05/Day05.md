# 🦁 Sheryians Coding School Cohort – Day05 Learnings


## 📚 Table of Contents

### 🖼️ Topic 1: Background Properties
1. [Background-size](#-background-size)  
2. [Background-image](#-background-image)  
3. [Background-repeat](#-background-repeat)  
4. [Background-position](#-background-position)  
5. [Linear Gradient](#-linear-gradient)  
6. [Radial Gradient](#-radial-gradient)  

### 📏 Topic 2: CSS Units
7. [px vs %](#-px-vs-)

###  Topic 3: Positioning & Transform
8. [Position: Absolute](#-position-absolute)  
9. [Position: Relative](#-position-relative)  
10. [Transform: Translate](#-transform-translate)

### 🧩 Topic 4: Flexbox
11. [Introduction to Flexbox](#-introduction-to-flexbox)  
12. [Two-Column Layout with Flexbox](#-two-column-layout-with-flexbox)

### 💻 Project Exercises
14. [Project Exercise 4: Two-Column Layout with Flexbox](#-project-exercise-4-two-column-layout-with-flexbox)



---

# 🧑‍💻 Resource Video link : 
01: https://youtu.be/K1naz9wBwKU?si=AfxZuSZUuvAj45ui  
02: https://youtu.be/kkOuRJ69BRY?si=wNurB-3gtlLdEAz2

---

## 🖼️ Topic 1: Background Properties

### 🔹 background-size

Defines how a background image is scaled within an element:

- `background-size: cover;` → The image covers the entire element, maintaining its aspect ratio.
- `background-size: contain;` → The image scales to fit inside the element while maintaining its aspect ratio.
- `background-size: 50% 50%;` → The image is resized to 50% of the width and height of the element.

---

### 🔹 background-image

Used to set an image as the background of an element.

```css
background-image: url("image.jpg");
```

---

### 🔹 background-repeat

Controls whether the background image repeats and how:

- `background-repeat: repeat;` (default) → Image repeats both horizontally and vertically.
- `background-repeat: no-repeat;` → Image does not repeat.
- `background-repeat: repeat-x;` → Image repeats horizontally.
- `background-repeat: repeat-y;` → Image repeats vertically.

---

### 🔹 background-position

Defines the starting position of a background image:

- `background-position: center;` → Centers the image.
- `background-position: top left;` → Positions the image at the top-left.
- `background-position: 50% 50%;` → Places the image in the middle.

---

### 🔹 linear-gradient

Creates a smooth transition of colors in a straight line.

```css
background: linear-gradient(to right, red, yellow);
```

---

### 🔹 radial-gradient

Creates a circular gradient effect.

```css
background: radial-gradient(circle, red, yellow);
```

---

## 📏 Topic 2: CSS Units

### 📏 px vs %

- `px` (Pixels): A fixed unit of measurement. Useful when you need precise control over an element’s size.
- `%` (Percentage): Relative to the parent container. Useful for responsive designs.

---

##  Topic 3: Positioning & Transform

### 🔸 position: absolute

Removes the element from the normal document flow and positions it relative to the nearest positioned ancestor (or the viewport if no positioned ancestor exists).

```css
position: absolute;
```

---

### 🔸 position: relative

Positions an element relative to its normal position.

```css
position: relative;
```

---

### 🔸 transform: translate

Moves an element without affecting surrounding elements.

```css
transform: translate(50px, 100px);
```

---

## 🧩 Topic 4: Flexbox

### 📦 Introduction to Flexbox for Alignment & Structure

Flexbox is a powerful layout system in CSS that helps in aligning and distributing elements efficiently.

```css
display: flex;
justify-content: center;
align-items: center;
```

---

## 💻 Project Exercise 4: Two-Column Layout with Flexbox

Use Flexbox to create a two-column layout:

- Apply `display: flex` on the parent container.
- Use properties like `flex-direction`, `justify-content`, and `flex-grow`.



---

## Created with ❤️ by Shivansh 