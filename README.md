# JavaScript

Learning JavaScript form Beginner to Advance

# My JavaScript Learning Journey

#### Day 1 Introduction To JavaScript , Variable and Data Types

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

## Day 2 **Loops & Function**

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

- 1️⃣ Write a function that takes two numbers and returns their sum.
- 2️⃣ Create a function that checks if a number is even or odd.
- 3️⃣ Write a function that takes a name and age, and prints a greeting like: "Hello, Dip! You are 21 years old.
- 4️⃣ Write an arrow function that multiplies three numbers.

#### Day 3 (Part 1) -> Array And Objects

# Array (map, filter and reduce)

- An array is a varibale tha can store multiple values of different data types.
- Exapmle :

```javascript
const array = ["apple", "dip", true, 123, null];
console.log(array);
```

```javascript
//  Array (map, filtes .....)
// -- An array is a variable which store multiple data in order list. An array can store multiple data of different data types.

// for example ;

// Create an array with multiple valuse of different data types
const array = ["apple", "dip", true, 123, null];
console.log(array);
console.log(array.length);

// adding new value to array at the end
array.push("grapes");
console.log(array);

// deleting last value of an array
array.pop();
console.log(array);

// adding new value to array at the begining
array.unshift("grapes");
console.log(array);

// deleting the first value of an array
array.shift();
console.log(array);

// looping through the array

array.forEach((array) => {
  console.log(array);
});
```

# Objects :

- An object is an collection of key-value pairs Which means an object has pair of properties and its value. For Example :

```Javascript
const details = {
  // name is property(key) and "dip" is its value
  name: "dip", //string value
  age: 21, // number value
  isStudent : true //boolean value
};
```

# JavaScript Object and Array Manipulation Challenges

## Introduction

This repository contains a series of JavaScript exercises that focus on working with objects and arrays. The exercises cover basic object manipulation, array operations, as well as advanced methods like `.map()`, `.filter()`, `.reduce()`, and handling deeply nested objects.

## Learning Objectives

- Understand how to manipulate and work with objects and arrays in JavaScript.
- Learn to use array methods such as `.map()`, `.filter()`, and `.reduce()`.
- Work with deeply nested objects and apply various object manipulations.

## Challenges Solved

### 1. **Object Basics**

We created an object `student` and performed various operations:

- Added new properties to an object.
- Updated properties.
- Deleted properties.

#### Code Example:

```javascript
const student = {
  name: "Dip Narayan Mahara",
  age: 21,
  grade: "A+",
};

student.subject = "Math";
student.grade = "A";
delete student.age;

console.log(student);
```

#### Here is the Advance challanges:

### Challenge 1: Deeply Nested Object Manipulation

## 👉 Task: Given the following object, update the zip code to "12345", delete the city property, and add a new property phone: "9876543210" inside address.

```javascript
const person = {
  name: "John Doe",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
    zip: "10001",
  },
};

// Your Code Here

console.log(person);
```

### 🔥 Challenge 2: Transform an Array of Objects using .map()

## 👉 Task: Convert the given products array into an array of strings where each string follows the format:"Product: [name] costs $[price]"

```javascript
const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 300 },
];

// Your Code Here

console.log(productDetails);
```

### 🔥 Challenge 3: Filter and Sort an Array

## 👉 Task: From the given students array:

## 1️⃣ Filter out students who scored less than 70.

## 2️⃣ Sort them in descending order based on their score.

```javascript
const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 67 },
  { name: "Charlie", score: 90 },
  { name: "David", score: 72 },
];

// Your Code Here

console.log(topStudent);
```

### 🔥 Challenge 4: Count Occurrences using .reduce()

## 👉 Task: Count how many times each word appears in the given array.

```javascript
const words = ["apple", "banana", "apple", "orange", "banana", "apple"];

// Your Code Here

console.log(wordCount);
```

### 🔥 Challenge 5: Find the First Repeated Character in a String

## 👉 Task: Find the first character that appears more than once in a string.

```javascript
function firstRepeatedChar(str) {
  // Your Code Here
}

console.log(firstRepeatedChar("abcdefa")); // Expected Output: "a"
console.log(firstRepeatedChar("hello")); // Expected Output: "l"
console.log(firstRepeatedChar("world")); // Expected Output: null
```

### Answer is in the folder of Day 3.

#### Todays Conclusion

In this series of exercises, we have learned how to manipulate objects and arrays in JavaScript, use array methods (map, filter, reduce), and work with deeply nested data structures. We also explored how to manipulate both simple and complex data types effectively in JavaScript.

#### Day 3 (Part 2)

### JavaScript Scope, Closures & Destructuring

## 1️⃣ Scope
Scope determines where variables are accessible in your code. There are three main types:

### **Types of Scope**

#### **1. Global Scope**
Variables declared outside any function are accessible anywhere.
```js
let globalVar = "I am global";

function showGlobal() {
  console.log(globalVar); // ✅ Accessible
}

showGlobal();
console.log(globalVar); // ✅ Accessible
```

#### **2. Function (Local) Scope**
Variables declared inside a function are only accessible within that function.
```js
function localScope() {
  let localVar = "I exist only here";
  console.log(localVar); // ✅ Accessible inside function
}

localScope();
console.log(localVar); // ❌ Error: localVar is not defined
```

#### **3. Block Scope (`let` & `const`)**
Variables inside `{}` using `let` or `const` exist only within that block.
```js
if (true) {
  let blockVar = "I exist only inside this block";
  console.log(blockVar); // ✅ Accessible
}

console.log(blockVar); // ❌ Error: blockVar is not defined
```

### **Scope Chain**
If a variable is not found in the current scope, JavaScript looks up parent scopes.
```js
let a = "Global";

function outer() {
  let b = "Outer";
  
  function inner() {
    let c = "Inner";
    console.log(a, b, c); // ✅ Accessible
  }
  
  inner();
  console.log(a, b); // ✅ Accessible
}

outer();
console.log(a); // ✅ Accessible
```

---

## 2️⃣ Closures
A **closure** is a function that **remembers** the variables from its parent scope even after the parent function has finished executing.

### **Example 1: Counter Function**
```js
function createCounter() {
  let count = 0;

  return function() {
    count++;
    console.log(count);
  };
}

const counter = createCounter();

counter(); // 1
counter(); // 2
counter(); // 3
```

### **Example 2: Private Variables with Closures**
Closures can be used to create private variables.
```js
function bankAccount() {
  let balance = 0;

  return {
    deposit(amount) {
      balance += amount;
      console.log(`Deposited: $${amount}`);
    },
    getBalance() {
      return balance;
    }
  };
}

const account = bankAccount();
account.deposit(100);
console.log(account.getBalance()); // 100
account.deposit(50);
console.log(account.getBalance()); // 150
```

---

## 3️⃣ Destructuring
Destructuring allows you to **extract values from arrays and objects** and store them in variables.

### **Array Destructuring**
```js
const numbers = [1, 2, 3];
const [a, b, c] = numbers;
console.log(a, b, c); // 1 2 3
```

#### **Skipping Elements**
```js
const [, second, , fourth] = [10, 20, 30, 40];
console.log(second, fourth); // 20 40
```

#### **Rest Operator**
```js
const [first, ...rest] = [100, 200, 300, 400];
console.log(first); // 100
console.log(rest);  // [200, 300, 400]
```

#### **Swapping Variables**
```js
let x = 5, y = 10;
[x, y] = [y, x];
console.log(x, y); // 10 5
```

### **Object Destructuring**
```js
const person = { name: "John", age: 30 };
const { name, age } = person;
console.log(name, age); // John 30
```

#### **Renaming Variables**
```js
const { name: firstName, age: personAge } = person;
console.log(firstName, personAge); // John 30
```

#### **Default Values**
```js
const user = { name: "Alice" };
const { name, age = 25 } = user;
console.log(age); // 25 (default value)
```

#### **Rest Operator in Objects**
```js
const car = { brand: "Tesla", model: "Model 3", year: 2022 };
const { brand, ...otherDetails } = car;
console.log(brand); // Tesla
console.log(otherDetails); // { model: "Model 3", year: 2022 }
```

#### **Nested Object Destructuring**
```js
const user = {
  name: "Michael",
  address: { city: "Berlin", zip: "10115" }
};
const { address: { city } } = user;
console.log(city); // Berlin
```

#### **Function Parameter Destructuring**
```js
function greet({ name, age }) {
  console.log(`Hello, ${name}. You are ${age} years old.`);
}
greet({ name: "Sam", age: 28 });
```

---

## 🔥 Key Takeaways
✅ **Scope** defines where variables can be accessed (Global, Local, Block Scope).  
✅ **Closures** allow functions to "remember" their surrounding scope even after execution.  
✅ **Destructuring** makes it easier to extract values from arrays and objects into variables.  

---

## Note there is a bit more explanation to each topic in each files.

