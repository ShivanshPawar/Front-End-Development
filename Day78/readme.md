# 🦁 Sheryians Coding School Cohort – Day78 Learnings

## 🧑‍💻 Code : [Class-Code](../Day70/code/src/App.jsx)

# 📒 Concepts Covered 

1. **React Hook Form** (`useForm`)
2. **Validation with Errors**
3. **React Toastify (Notifications)**

## 1. **React Hook Form (useForm)**

```jsx
const {
  register,
  handleSubmit,
  reset,
  formState: { errors }
} = useForm()
```

🔑 **What it does:**

* `register` → connects input fields to React Hook Form.
* `handleSubmit` → wraps your custom submit function.
* `reset` → clears the form after submission.
* `errors` → contains validation errors.

Example:

```jsx
<input
  {...register("title", { required: "Title can not be empty !" })}
  type="text"
/>
<small>{errors?.title?.message}</small>
```

* If input is empty, `errors.title.message` shows `"Title can not be empty !"`

✅ Benefit: Unlike `useState` controlled inputs, React Hook Form **reduces re-renders** → better performance.

---

## 2. **Form Validation**

* Inline validation rules:

```jsx
{ required: "Title can not be empty !" }
```

* You can add more like:

```jsx
{ 
  required: "Title is required",
  minLength: { value: 3, message: "Title must be at least 3 characters" },
  maxLength: { value: 50, message: "Title must be less than 50 characters" }
}
```

* Error messages shown dynamically:

```jsx
<small className="text-red-400">{errors?.title?.message}</small>
```

---

## 3. **Toast Notifications with React-Toastify**

You imported:

```jsx
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
```

### 🔹 Usage

* Success message:

```jsx
toast.success("Todo created !");
```

* Error message:

```jsx
toast.error("Todo deleted !");
```

* Other options:

```jsx
toast.info("Some info");
toast.warn("This is a warning");
toast("Default toast"); // neutral toast
```

### 🔹 ToastContainer

```jsx
<ToastContainer position="top-center" />
```

* Required for rendering notifications.
* You can customize:

```jsx
<ToastContainer
  position="bottom-right"
  autoClose={3000}     // auto disappear in 3s
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="dark"
/>
```

👉 `theme="dark" | "light" | "colored"`

---

## 4. **Better User Experience**

Before: when you created/deleted a todo → nothing told the user what happened.
Now: users see a **toast popup** confirming their action → more professional UX.

---

## 5. **Other Topics From This Code**

### 5.1 Controlled vs Uncontrolled Inputs

* With `useState` → controlled (value always tied to state).
* With `useForm` → uncontrolled under the hood, but RHF manages refs internally → fewer renders.

### 5.2 Error Handling UI

Instead of just logging `console.log(errors)`, you now:

```jsx
<small className="text-red-400">{errors?.title?.message}</small>
```

* Shows real-time validation feedback.

### 5.3 Resetting Form

```jsx
reset();
```

* Clears all input values after successful submission.

---

# 🎨 Toastify Styling Options

You can **style toasts** in multiple ways:

### 1. **Themes**

```jsx
<ToastContainer theme="dark" />
<ToastContainer theme="light" />
<ToastContainer theme="colored" />
```

### 2. **Positions**

* `"top-right"` (default)
* `"top-left"`
* `"top-center"`
* `"bottom-right"`
* `"bottom-left"`
* `"bottom-center"`

```jsx
<ToastContainer position="bottom-left" />
```

### 3. **Auto Close / Duration**

```jsx
toast.success("Todo Created!", { autoClose: 5000 }) // 5 sec
```

### 4. **Custom Styling**

* You can pass `className` or `style`:

```jsx
toast("Custom styled", {
  className: "bg-black text-white rounded-lg",
  bodyClassName: "font-bold text-lg",
  progressClassName: "bg-red-400"
});
```

### 5. **Custom Icons**

```jsx
toast.success("Saved!", { icon: "✅" });
toast.error("Error!", { icon: "❌" });
```

---

# 🚀 Extra Related Concepts You Should Note

1. **Toast as Feedback**

   * Always provide **feedback** to users when actions succeed/fail.
   * Alternatives: SweetAlert2, Notistack, Chakra/MUI Snackbars.

2. **Form Libraries**

   * You used `react-hook-form`. Other big ones are `Formik` + `Yup`.

3. **Error Handling**

   * Client-side validation (React Hook Form)
   * Server-side validation (API returns error → also show toast).

4. **UX Principles**

   * Form Validation (Don’t allow empty data).
   * Clear feedback (toast success/error).
   * Reset after success.

---

# 📌 Final Recap

✅ Added concepts in this version:

* `useForm` (React Hook Form)
* Validation with `errors`
* `reset` for clearing form
* **React-Toastify** (Success & Error notifications)

✅ Toastify Detailed Features:

* Themes: light, dark, colored
* Positions: top/bottom-left/right/center
* AutoClose, Hover Pause, Click Close
* Custom className/style for full styling control
* Custom Icons + Custom Messages

✅ Extra Takeaways:

* Controlled vs Uncontrolled inputs
* Why validation matters
* Feedback loops in UI (UX principles)
* Toastify vs other notification libs




## Created with ❤️ by Shivansh
