// Scope --> Scope in javascript refers to the context or environment in which we create or declera variables and can be accessed.
// Basically there are three types of Scopes used :
// 1. Global Scope --> Global scope means declearing variable outside the any function or those variables which can be accessed anywhere in the program. For example :

// const globalVariable = "This is decond variable";
// function myFunction() {
//   console.log(globalVariable);
// }

// this globalvairable is declared in global scope which can be accessed by any function, method in any where in the program

// 2. Local Scope(Fucntion Scope) --> In JavaScript, Local scope is like a private room within the building. In local scope variable is declared inside any function , methods , condtions & loops or in any block of code. This variable can only be accessed by those variables and cannot be used outside the funtion.
// Example:
// function myFunction2() {
//   const name = "Dip";
//   console.log(name);
// }
// myFunction2();
// console.log(name);
// Error is occure because name is declared inside the function scope which called local scope. The name variable can only be accessed insidthe function.

// Block Scope --> Block scope is a scope which is create inside {} can not be accessed outside. For Example :

// if (true) {
//   let blockVariable = "Hello I am block vairable";

//   console.log(blockVariable); // Works here
// }
// console.log(blockVariable); // ❌ Error: blockVar is not defined

// IN this above example the blockvariable inside the if{} condition is only accessable by with in the if condition

// Closure --> A Closure is combination of a function bundled togther(enclosed) with references surrounding state(lexial surrounding). In other words, A closure is function which "remembers" variables from its outer function even after the outer function is finished executing. Foe Example

// function outerFunction() {
//   let outerVar = "Hello! I am outer variable";

//   function innerFuncitn() {
//     // let innerVar = "Hi!, I am inner variable";
//     console.log(outerVar); // Inner function can access outerVar
//   }
//   // console.log(innerVar);

//   return innerFuncitn;
// }

// let myclosure = outerFunction(); // outerFunction runs and returns innerFunction
// myclosure(); // Still has access to outerVar!

// let create a counter function for real-world application
// function counter() {
//   let count = 0;

//   function counting() {
//     count++;
//     console.log(count);
//   }
//   return counting;
// }

// let mycounter = counter();
// mycounter(); // output 1
// mycounter(); // output 2
// mycounter(); // output 3

// Practice Set :
// 1 . Fix the Scope Error
// The following code throws an error. Can you fix it while keeping the variable message inside the function?

// function greet() {
//   if (true) {
//     let message = "Hello, World!";
//   }
//   console.log(message); // ❌ Error: message is not defined
// }

// greet();

// function greet() {
//   if (true) {
//     let message = "Hello, World!";
//     console.log(message);
//   }
// }

// greet();

// 2. Variable Shadowing
// What will be the output of the following code? Fix it so that console.log(x) inside the function prints 10 instead of 20.
// let x = 10;

// function test() {
//   let x = 20;
//   console.log(x); // Should print 10 instead of 20
// }

// test();

let x = 10;

function test() {
  let x = 20;
}
console.log(x);

test();

// 3. Create a Counter Function
// Write a function createCounter that returns another function. Each time the returned function is called, it should increase the count and return the updated value.

function createCounter(){
  let count = 0;
  function counter(){
    count++;
    console.log(count);
  }
  return counter;
}
const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// Multiply Using Closures
// Create a function multiply that takes a number x and returns another function. The returned function should take another number y and return the product of x and y.

function multiply(x) {
  function multiplier(y) {
    return x * y;
  }
  return multiplier;
}
const multiplyBy2 = multiply(2);
console.log(multiplyBy2(5)); // 10
console.log(multiplyBy2(10)); // 20

const multiplyBy3 = multiply(3);
console.log(multiplyBy3(4)); // 12

// 5. Private Variable Using Closures
// Create a function bankAccount that returns an object with two functions:
// deposit(amount): Adds money to the account.
// getBalance(): Returns the current balance.

function bankAccount(){
  let balance = 0;
 return {
   deposit: function (amount) {
    balance += amount;
    console.log(`Deposited: $${amount}`);
    
   },
   getBalance : function(){
    return balance;
   }
 };
}

const account = bankAccount();
account.deposit(100); // Deposited: $100
console.log(account.getBalance()); // 100
account.deposit(50); // Deposited: $50
console.log(account.getBalance()); // 150