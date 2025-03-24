# JavaScript
Learning JavaScript form Beginner to Advance

# My JavaScript Learning Journey

#Day 1

## 1. **What is JavaScript?**
- JavaScript is a programming language used to make websites interactive. It helps you add things like buttons, forms, and even games on websites!

## 2. **Variables and Data Types**
- **Variables**: Think of a variable as a container where you can store information. You can change the information inside it.
  - **`const`**:It is a constainer that store fixed values. For values that won't change.
  - **`let`**:It is a constainer that store changing values. For values that can change.

- **Data Types**:
  - **Strings**: Text inside quotes (e.g., `"Hello World"`).
  - **Numbers**: Whole numbers or decimal numbers (e.g., `10`, `45.6`).
  - **Booleans**: True or false (e.g., `true`, `false`).
  - **Undefined**: When a variable is declared but not given a value.
  - **Null**: A value that is intentionally empty.
  - **Objects**: A collection of related data (e.g., `{name: "John", age: 25}`).
  - **Arrays**: A list of values (e.g., `["apple", "banana", "cherry"]`).

## 3. **Converting Between Data Types**
- **String to Number**: You can turn a string into a number using `Number("123")`.
- **Number to String**: You can turn a number into a string using `String(123)`.
- **String Methods**: You can change text to all uppercase with `.toUpperCase()` and to lowercase with `.toLowerCase()`.

## 4. **Making Decisions with `if-else`**
- **`if-else`** lets you run different code depending on certain conditions. For example:
  ```javascript
  if (score >= 90) {
    console.log("You got an A!");
  } else {
    console.log("You didn't get an A.");
  }
