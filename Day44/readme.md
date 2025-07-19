# 🦁 Sheryians Coding School Cohort – Day44 Learnings


# 📸 – Image Swap on Button Click

A simple and interactive mini project where clicking a button **swaps two images** and **changes the button gradient background**.

---

## 🎯 Goal

- Swap two image elements’ `src` attributes
- Toggle button gradient direction and colors on each click

---

## 🧠 Project Logic

### 🔁 Toggle Functionality Table

| 🔢 Condition   | 🕹️ On Click Behavior                                                                 |
|---------------|----------------------------------------------------------------------------------------|
| `isTrue == 0` | - Change button gradient to `yellow → green`<br>- Swap images `img1` and `img2`<br>- Set `isTrue = 1` |
| `isTrue == 1` | - Change button gradient to `green → yellow`<br>- Swap images again<br>- Set `isTrue = 0` |

---

## ⚙️ How It Works (Code Explained)

### ✅ 1. **Query Elements**

```js
let img1 = document.querySelector('#img1');
let img2 = document.querySelector('#img2');
let btn = document.querySelector('button');
````

* `img1`, `img2` → two images to be swapped
* `btn` → the button that triggers the swap

---

### ✅ 2. **Store Image Paths Before Swap**

```js
let img1src = img1.getAttribute('src');
let img2src = img2.getAttribute('src');
```

* Stores the original image `src` so that they can be swapped correctly

---

### ✅ 3. **Gradient Toggle + Image Swap**

```js
if (isTrue == 0) {
    btn.style.background = 'linear-gradient(45deg, #FFFF00 0%, #7FFF00 100%)';
    isTrue = 1;
} else {
    btn.style.background = 'linear-gradient(45deg, #7FFF00 0%, #FFFF00 100%)';
    isTrue = 0;
}
```

* Every click flips the direction and color of the gradient
* Alternates `isTrue` flag for the next toggle

---

### ✅ 4. **Swap Image Sources**

```js
img1.setAttribute('src', img2src);
img2.setAttribute('src', img1src);
```

* Literally exchanges the image `src` attributes between the two images

---

## 🧩 Concepts Practiced

* `getAttribute()` and `setAttribute()` for DOM manipulation
* Image source swapping logic
* Gradient styling with `linear-gradient`
* Boolean toggle logic with a flag (`isTrue`)

---

#### 🧑‍💻 Code : [Class-Code](/Day44/Code/ImageSwap)

---



# 🎉 Sticker Bomb Generator

This project randomly places **cute sticker images** on the screen with **random rotation and position** every time the **button** is clicked. It also changes the button's background color dynamically with random RGB values.

---

## 📦 DOM Selections

```js
let btn = document.querySelector('button'); // Button to trigger sticker drop
let main = document.querySelector('#main'); // Main container to append stickers
````

---

## 🎴 Image Array

```js
let arr = [
  "assets/Sticker-1.png",
  "assets/Sticker-2.png",
  "assets/Sticker-3.png",
  "assets/Sticker-4.png",
  "assets/Sticker-5.png",
  "assets/Sticker-6.png",
  "assets/Sticker-7.png",
  "assets/Sticker-8.png"
];
```

An array of image paths for 8 different stickers.

---



## 📌 Visual Behavior – Step-by-Step

| Step  | Description                                         |
| ----- | --------------------------------------------------- |
| 🔢 1  | Random number `0–7` is selected to choose an image  |
| 📐 2  | Random `(x, y)` position in `%` for image placement |
| 🔄 3  | Random rotation (`0–360deg`) applied                |
| 🖼️ 4 | `<img>` element created with random attributes      |
| 🎯 5  | Image appended to the `#main` container             |
| 🎨 6  | Button color changes to a **random RGB** color      |

---

## 📍 Result

* Stickers drop **randomly** at different angles and positions on the screen
* Button color changes **every time** it is clicked

---

#### 🧑‍💻 Code : [Class-Code](/Day44/Code/RandomElem)


## Created with ❤️ by Shivansh