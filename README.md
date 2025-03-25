# JavaScript

Learning JavaScript form Beginner to Advance

# My JavaScript Learning Journey

#Day 1 Introduction To JavaScript , Variable and Data Types

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
  ```

#Day 2 **Loops & Function**

## 1. Functions

-Function is block of code which can be used multiple time everywere in the program.
-A Function is a block of reusable code that can be executed whenever needed.
-For Example:

```javascript
function greet() {
  console.log("Hello, world!");
}
greet(); // Calling the function
```

### Function with Parameter

-A function can take inputs as parameter. For Example

```javascript
function greet(name) {
  //taking input(name) as parameter
  console.log(`Hello, ${name}!`);
}
greet("Dip"); //passing input(dip) as value to the parameter
```

### Function With Return Value

- A function can return some value when executed. for Example

```javascript
function returnValue(a, b) {
  // Taking (a, b) as parameter
  return a * b; // returning the value as (a * b)
}
const mul = returnValue(12, 2); // storing the return value in mul variable
console.log("Mul:", mul); // displaying the result
```

## Loops

- Loop is used to repeat a specific block of code to certain number of times. For Example
- ## Types of Loops
- There are various types of loops
- ## 1. for Loop
  - repeat a specific block of code untill the condition is fullfilled. For Example

```javascript
for (let i = 1; i <= 10; i++) {
  console.log(i); // Output: Numbers 1 to 10
}
```

- ## 2. while Loop

  - Repeats as long as a condition is true. For Example

  ```javascript
  let i = 1;
  while (i <= 10) {
    console.log(i);
    i++;
  }
  ```

- ## 3. Do-While Loop
  - Repeats code at least once, then continues as long as the condition is true. For Example

```javascript
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 10);
```

## Array

- An array is an collection fo multiple values. It can store multipal values of different data types. Such as :

```javascript
const fruits = ["apple", "banana", "cherry", 10, 24];
```

## Array Looping

- You can loop through arrays (a list of values) using loops. For Example

```javascript
const fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]); // Output: Each fruit in the array
}
```

## Exercises :

1️⃣ Write a function that takes two numbers and returns their sum.
2️⃣ Create a function that checks if a number is even or odd.
3️⃣ Write a function that takes a name and age, and prints a greeting like: "Hello, Dip! You are 21 years old.
4️⃣ Write an arrow function that multiplies three numbers.
