# 🦁 Sheryians Coding School Cohort – Day39 Learnings

## 🔧 Project Logic – Friend Request Toggle (with `setTimeout`)

This project simulates a social media **"Add Friend / Remove Friend"** feature with a delay to show realism.

---

### 🧠 Logic Flow Table

| 🧩 Condition  | 🕹️ User Interaction     | 🖥️ UI Changes (Step-by-Step)                                                                                      |
|--------------|--------------------------|-------------------------------------------------------------------------------------------------------------------|
| `flag == 0`  | Click on `Add Friend`    | 1. `<h3>` text becomes **"Requesting..."** (Red) <br> 2. After `3s` (via `setTimeout`): <br> &nbsp;&nbsp; ➤ `<h3>` updates to **"Friends"** (Green) <br> &nbsp;&nbsp; ➤ Button text becomes **"Remove Friend"** |
| `flag == 1`  | Click on `Remove Friend` | 1. `<h3>` text becomes **"Stranger"** (Red) instantly <br> 2. Button text changes back to **"Add Friend"**        |

---

### 🔁 Toggle Logic Summary

- Uses a `flag` variable (`0` = stranger, `1` = friend)
- Delays only when **adding a friend** using `setTimeout`
- Instantly reverts when **removing a friend**
- Simple UX with dynamic color and text updates

---

### 📌 Key Concepts

- `setTimeout()` – simulate a network request delay  
- DOM manipulation – `textContent`, `style.color`, `innerHTML`  
- Event Handling – `addEventListener()`  
- State Toggle – `flag` variable to switch state  

#### 🧑‍💻 Code : [AddFriend](/Day39/Project-Exercise/AddFriend)

<br>

---

<br>

# 📥 Download Progress Bar – JS Logic Breakdown

This project simulates a file download animation using a progress bar that fills from 0% to 100% over 5 seconds when the **"Download file"** button is clicked.

---

## 🧠 DOM Elements Selected

```js
let btn = document.querySelector('button');      // Selects the download button
let prog = document.querySelector('#grow');      // Green inner progress bar
let percent = document.querySelector('#percent'); // Percentage text (e.g. 50%)
````


---

## 🧩 Breakdown – Step by Step

| Step 🔢 | Description                                                               |
| ------- | ------------------------------------------------------------------------- |
| 1️⃣     | `grow` initialized to 0                                                   |
| 2️⃣     | On button click → `setInterval` starts, increments width by 1% every 50ms |
| 3️⃣     | Progress bar and `%` text update in real-time                             |
| 4️⃣     | `setTimeout` runs after 5 seconds:                                        |
|         | — Stops interval (`clearInterval`)                                        |
|         | — Updates button text to `"Downloaded"`                                   |
|         | — Makes button semi-transparent and disables it                           |

---

## ⏱️ Timing Logic

* 100% download takes 5 seconds (100 × 50ms)
* `setInterval` → runs every 50 milliseconds
* `setTimeout` → stops interval after 5000 milliseconds (5s)

---

## 🎯 Outcome (Final Result):

```html
Progress Bar → Full Width
Text → 100%
Button → Disabled + Says "Downloaded"
```

---



#### 🧑‍💻 Code : [SongDownloader](/Day39/Project-Exercise/SongDownloader)

---
---

# 📚 100 Important Tailwind CSS Classes

<details>
<summary>🎨 Colors</summary>

| Class                 | Description                                |
| --------------------- | ------------------------------------------ |
| `text-red-500`        | Sets the text color to red shade 500.      |
| `bg-blue-200`         | Sets background color to blue shade 200.   |
| `border-green-400`    | Sets border color to green shade 400.      |
| `text-white`          | Makes text color white.                    |
| `bg-black`            | Sets background color to black.            |
| `text-gray-700`       | Applies dark gray text color.              |
| `bg-gradient-to-r`    | Creates a gradient from left to right.     |
| `from-purple-400`     | Sets starting gradient color.              |
| `to-pink-600`         | Sets ending gradient color.                |
| `hover:bg-yellow-300` | Changes background to yellow-300 on hover. |
</details>

<details>
<summary>📏 Spacing (Margin & Padding)</summary>

| Class       | Description                              |
| ----------- | ---------------------------------------- |
| `m-4`       | Applies margin `1rem` on all sides.      |
| `p-6`       | Applies padding `1.5rem` on all sides.   |
| `mt-2`      | Adds margin-top of `0.5rem`.             |
| `mb-4`      | Adds margin-bottom of `1rem`.            |
| `pl-3`      | Adds padding-left of `0.75rem`.          |
| `pr-2`      | Adds padding-right of `0.5rem`.          |
| `mx-auto`   | Auto margin left & right (center align). |
| `space-x-4` | Horizontal spacing between flex items.   |
| `space-y-2` | Vertical spacing between stacked items.  |
| `gap-4`     | Gap between grid/flex items.             |
</details>

<details>
<summary>📐 Layout (Flex & Grid)</summary>

| Class             | Description                              |
| ----------------- | ---------------------------------------- |
| `flex`            | Applies flexbox layout.                  |
| `inline-flex`     | Flexbox layout inline.                   |
| `items-center`    | Aligns items vertically center.          |
| `justify-between` | Spaces children with space between them. |
| `flex-col`        | Stack children vertically.               |
| `flex-row`        | Stack children horizontally.             |
| `flex-wrap`       | Allows items to wrap to next line.       |
| `grid`            | Applies CSS Grid layout.                 |
| `grid-cols-3`     | Creates 3 equal columns.                 |
| `gap-x-4`         | Horizontal gap between grid columns.     |
</details>

<details>
<summary>📦 Box Model & Sizing</summary>

| Class           | Description                              |
| --------------- | ---------------------------------------- |
| `w-full`        | Width: 100%                              |
| `w-1/2`         | Width: 50%                               |
| `max-w-sm`      | Max width: small.                        |
| `h-screen`      | Height: 100vh.                           |
| `min-h-[200px]` | Minimum height: 200px (arbitrary value). |
| `aspect-square` | 1:1 aspect ratio box.                    |
| `box-border`    | Includes border in size calculation.     |
| `box-content`   | Excludes border/padding in size.         |
| `overflow-auto` | Adds scroll when content overflows.      |
| `truncate`      | Truncates long text with ellipsis.       |
</details>

<details>
<summary>🔠 Typography</summary>

| Class             | Description                                        |
| ----------------- | -------------------------------------------------- |
| `text-xl`         | Extra large font size.                             |
| `text-sm`         | Small font size.                                   |
| `font-bold`       | Makes text bold.                                   |
| `font-light`      | Applies light font weight.                         |
| `uppercase`       | Transforms text to uppercase.                      |
| `capitalize`      | Capitalizes first letter of each word.             |
| `tracking-wide`   | Increases letter spacing.                          |
| `leading-relaxed` | Adjusts line height for readability.               |
| `line-clamp-2`    | Limits lines to 2 and truncates overflow (plugin). |
| `text-center`     | Aligns text center.                                |
</details>

<details>
<summary>🎯 Positioning</summary>

| Class             | Description                                       |
| ----------------- | ------------------------------------------------- |
| `relative`        | Sets position to relative.                        |
| `absolute`        | Absolutely positions element inside relative one. |
| `fixed`           | Fixes element to viewport.                        |
| `top-0`           | Positions top edge at 0.                          |
| `left-1/2`        | Moves element to horizontal center.               |
| `translate-x-1/2` | Moves element by half its width (centering).      |
| `z-10`            | Sets z-index to 10.                               |
| `inset-0`         | Sets top, right, bottom, left to 0.               |
| `sticky`          | Makes element stick on scroll.                    |
| `bottom-4`        | 1rem gap from bottom.                             |
</details>

<details>
<summary>🧱 Borders & Radius</summary>

| Class           | Description                          |
| --------------- | ------------------------------------ |
| `border`        | Adds border.                         |
| `border-2`      | Border width 2px.                    |
| `border-dashed` | Dashed style border.                 |
| `rounded`       | Small border radius.                 |
| `rounded-lg`    | Larger border radius.                |
| `rounded-full`  | Fully rounded (circle).              |
| `border-t-4`    | Adds 4px border to top.              |
| `divide-y-2`    | Adds vertical borders between items. |
| `ring-2`        | Adds outline ring (focus state).     |
| `outline-none`  | Removes outline on focus.            |
</details>

<details>
<summary>🧊 Effects & Transformations</summary>

| Class             | Description                     |
| ----------------- | ------------------------------- |
| `shadow`          | Adds subtle box shadow.         |
| `shadow-lg`       | Adds large shadow.              |
| `hover:shadow-xl` | On hover, increases shadow.     |
| `transition`      | Adds default smooth transition. |
| `duration-300`    | Transition lasts 300ms.         |
| `ease-in-out`     | Ease-in-out animation curve.    |
| `transform`       | Enables transformation.         |
| `scale-105`       | Scales element to 105%.         |
| `rotate-12`       | Rotates element by 12 degrees.  |
| `hover:scale-110` | Enlarges element on hover.      |
</details>

<details>
<summary>📱 Responsive Design</summary>

| Class             | Description                                    |
| ----------------- | ---------------------------------------------- |
| `sm:text-sm`      | Text size small on small screens.              |
| `md:w-1/2`        | Width: 50% on medium screens.                  |
| `lg:flex-row`     | Horizontal flex direction on large screens.    |
| `xl:grid-cols-4`  | 4-column grid on extra-large screens.          |
| `hidden`          | Hides element on all screens.                  |
| `md:block`        | Makes element visible from medium screen size. |
| `lg:hidden`       | Hides element on large screens.                |
| `sm:rounded-none` | Removes rounded on small screens.              |
| `xl:items-center` | Centers flex items on xl screens.              |
| `2xl:gap-8`       | Gap 2rem on extra extra large screens.         |
</details>


---
---

## Created with ❤️ by Shivansh