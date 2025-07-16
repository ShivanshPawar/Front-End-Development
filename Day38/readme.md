# 🦁 Sheryians Coding School Cohort – Day38 Learnings



## 🎨 RGB-RUSH – Random Color Generator

### 💡 What is the developer logic behind it?

### 👉 Logic Flow

1. **User clicks the "Generate" button**
2. JavaScript generates 3 random numbers between `0–255` using:
   ```js
   Math.floor(Math.random() * 256)


3. These values are stored as `r`, `g`, and `b`.
4. Form a string:

   ```js
   const rgb = `rgb(${r}, ${g}, ${b})`;
   ```
5. Change:

   * The color of the "Random" text using `element.style.color = rgb`
   * The inner text of the RGB value below to show the new `rgb(...)`

---

#### 🧑‍💻 Code : [RGB-Rush](/Day38/Project-Exersice/RGB-Rush)

---

## Created with ❤️ by Shivansh