## 💻 Project Exercise 2: Contact Us Form

### 📚 Topic Covered:
**HTML Forms**

---

### 📝 Description:
Create a **"Contact Us"** form that captures user information and includes proper form structure and basic validation.

---

### ✅ Requirements:

#### 📥 Input Fields:
- **Name**: `<input type="text">`
- **Email**: `<input type="email">`
- **Phone Number**: `<input type="tel">`
- **Message**: `<textarea>`

#### 🕹️ Button:
- **Submit**: `<button type="submit">`

#### ✅ Validation Rules:
- All fields must be **required** using the `required` attribute
- Email must use `type="email"`
- Phone number must use `type="tel"`

---

### 💡 Suggested Structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Contact Us</title>
</head>
<body>

  <h1>Contact Us</h1>
  
  <form action="/submit" method="post">
    <label for="name">Name:</label><br>
    <input type="text" id="name" name="name" required><br><br>

    <label for="email">Email:</label><br>
    <input type="email" id="email" name="email" required><br><br>

    <label for="phone">Phone Number:</label><br>
    <input type="tel" id="phone" name="phone" required><br><br>

    <label for="message">Message:</label><br>
    <textarea id="message" name="message" required></textarea><br><br>

    <button type="submit">Send Message</button>
  </form>

</body>
</html>
```

## Created with ❤️ by Shivansh 