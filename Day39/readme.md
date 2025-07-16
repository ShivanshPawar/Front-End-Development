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

---

#### 🧑‍💻 Code : [AddFriend](/Day39/Project-Exercise/AddFriend)

---

## Created with ❤️ by Shivansh