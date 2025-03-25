// Function --> A function is block of reusable code that can be use multiple times in anywhere in the program.

function greet() {
  //function decleration
  console.log("Hello!, I am Dip Narayan Mahara");
}
greet(); //function call

// function with parameter

function greeting(name) {
  // (name) passing name as na parameter
  console.log(`Hello!, I am ${name}`);
}
greeting("dip narayan mahara"); //passing value to the parameter

// function with retrun values

function returnValue(a, b) {
  return a * b;
}
const mul = returnValue(12, 2);
console.log("Mul:", mul);

// arrow fuinction --> it is an ES6 function which sort handed function to write any function

const add = (a, b) => {
  return a + b;
};
const sum = add(10, 5);
console.log("sum : ", sum);

// Excersie
// 1.Write a function that takes two numbers and returns their sum.

function Add(a, b) {
  return a + b;
}
const result = Add(10, 2);
console.log("sum: ", result);

// 2️⃣ Create a function that checks if a number is even or odd.

function evenOrOdd(num) {
  if (num % 2 == 0) {
    console.log("The number is even");
  } else {
    console.log("The number is Odd");
  }
}
evenOrOdd(610);

// 3️⃣ Write a function that takes a name and age, and prints a greeting like: "Hello, Dip! You are 21 years old."

function greeting(name, age){
  console.log(`Hello! My name is ${name} and I am ${age} years old`)
}
greeting("dip", 21)

// 4️⃣ Write an arrow function that multiplies three numbers.

const multiply =(a,b,c)=>{
  return a*b*c;
};
let Answer = multiply(2,3,6);
console.log("Product of the numbers :", Answer);
