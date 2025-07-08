# 🦁 Sheryians Coding School Cohort – Day06 Learnings

## 📚 Table of Contents

### 🎭 Topic 1: Pseudo-Classes & Pseudo-Elements  
1. [What are Pseudo-Classes](#🎭-what-are-pseudo-classes)  
2. [What are Pseudo-Elements](#🎭-what-are-pseudo-elements)

### ⚡ Topic 2: Transitions  
3. [What are CSS Transitions](#⚡-what-are-css-transitions)  
4. [Transition Properties](#⚡-transition-properties)

### 🔄 Topic 3: Transformations  
5. [2D Transforms](#🔄-2d-transforms)  
6. [3D Transforms](#🔄-3d-transforms)

### 🎞️ Topic 4: Animations  
7. [What are CSS Animations](#🎞️-what-are-css-animations)  
8. [Animation Properties](#🎞️-animation-properties)

### 🧪 Project Exercise  
9. [Project Exercise 5: Style Your Form!](#🧪-project-exercise-5-style-your-form)

---

# 🧑‍💻 Resource Video link : 
01: https://youtu.be/K1naz9wBwKU?si=AfxZuSZUuvAj45ui  
02: https://youtu.be/kkOuRJ69BRY?si=wNurB-3gtlLdEAz2

---

# 🎭 Topic 1: Pseudo-Classes & Pseudo-Elements  



## 🎭 What are Pseudo-Classes

Pseudo-classes allow you to apply styles to elements based on their state or user interaction.  
They start with a colon `:`.

**Examples:**

```css
a:hover {
  color: red;
}
input:focus {
  border: 2px solid blue;
}
```

---

## 🎭 What are Pseudo-Elements

Pseudo-elements allow you to style specific parts of an element, such as inserting content before or after it.  
They start with double colons `::`.

**Examples:**

```css
p::before {
  content: "→ ";
}
p::after {
  content: " ✔";
}
```

---

# ⚡ Topic 2: Transitions  
## ⚡ What are CSS Transitions

CSS transitions allow property changes to occur smoothly over a specified duration instead of happening instantly.

**Example:**

```css
button {
  background-color: blue;
  transition: background-color 0.3s ease;
}
button:hover {
  background-color: green;
}
```

---

## ⚡ Transition Properties

- `transition-property`: Defines which property to animate (e.g., `color`, `background`, `all`)
- `transition-duration`: Specifies the time the transition takes (e.g., `0.5s`, `1s`)
- `transition-timing-function`: Defines the speed curve (`ease`, `linear`, `ease-in`, `ease-out`)
- `transition-delay`: Specifies a delay before the transition starts (e.g., `0.2s`)

---
# 🔄 Topic 3: Transformations  

## 🔄 2D Transforms

The `transform` property allows you to modify the appearance of an element by moving, rotating, scaling, or skewing it.

### Transform Functions:

- `translate(x, y)` → Moves the element  
- `rotate(deg)` → Rotates the element  
- `scale(x, y)` → Enlarges or shrinks the element  
- `skew(x, y)` → Skews the element along the X and Y axis

**Example:**

```css
.box:hover {
  transform: scale(1.2);
}
```

---

## 🔄 3D Transforms

3D transformations add depth and perspective to elements, making them appear more dynamic.

### 3D Transform Functions:

- `translate3d(x, y, z)` → Moves the element in 3D space  
- `scale3d(x, y, z)` → Scales the element in 3D  
- `rotate3d(x, y, z, angle)` → Rotates the element around a 3D axis  
- `perspective(value)` → Defines the depth effect

**Example:**

```css
.card:hover {
  transform: rotateY(20deg);
  perspective: 1000px;
}
```

---
# 🎞️ Topic 4: Animations  

## 🎞️ What are CSS Animations

CSS animations allow elements to change styles over time **without user interaction**.

---

## 🎞️ Animation Properties

- `@keyframes`: Defines the steps of the animation  
- `animation-name`: Specifies the animation name  
- `animation-duration`: Defines how long the animation lasts  
- `animation-timing-function`: Controls the speed curve  
- `animation-iteration-count`: Specifies how many times the animation runs (`infinite`, `1`, `2`, etc.)

**Example:**

```css
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

.button {
  animation-name: pulse;
  animation-duration: 1s;
  animation-iteration-count: infinite;
}
```

---

# 🧪 Project Exercise 5: Style Your Form!

### 📝 Description:

Make your form look good with CSS! Add colors, rounded corners, and make it interactive.  
Learn to style different parts of the form when someone uses it (like when they hover or click).


---

## Created with ❤️ by Shivansh 