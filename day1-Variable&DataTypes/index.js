//  Variable and Data Types

// Exercise 1

const city = "London";
let temperature = 72.3;
let isRaining = true;

console.log(city, temperature, isRaining);


// exercise 2

const Car = {
  brand : 'BMW',
  model : 'BMW Supra',
  year: 2015
}

console.log(Car)

// Exercise 3

const string = '123';
const boolean = true;
const x = undefined;

console.log(string)
console.log(Math.floor(Number(string)))
console.log(boolean.toString())
console.log(typeof x)

// Exercise 4 - Age Calculator

const birthYear = 2003;
const currentYear = 2025;

const age = currentYear - birthYear;

console.log(`I am ${age} years old`);

// exercise 5 - Favorite Color

const FavoriteColor = "blue"
console.log(FavoriteColor.toUpperCase());
console.log(FavoriteColor.toLocaleLowerCase());


// Exercise 6 - Simple Calculator

const num1 = 40;
const num2 = 20;

const operator = "+";

let result;

switch(operator){
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  
  case "*":
      result = num1 * num2;
      break;

  case "/":
    result = num1 / num2;
    break;

  default:
    result = "Invalid operator"
}
console.log(`The result of ${num1} ${operator} ${num2} is ${result}`)

// Exrercise 7 -> String Concatenation

const firstName = "Dip"
const middleName = "Narayan"
const lastName = "Mahara"
console.log(firstName + " " + middleName + " " + lastName + " ");

// Exercise 8 -> Grade Checker

const Score =90;

if (Score >= 90) {
  console.log("A");
} else if (Score >= 80 && Score <= 89) {
  console.log("B");
} else if (Score >= 70 && Score <= 79) {
  console.log("C");
} else if (Score<70) {
  console.log("F");
}

// Exercies 9 -> Array Operator

const fruits = ['apple','banana','grapes','mango','pineapple'];

for (let index = 0; index < fruits.length; index++) {
  
  console.log(fruits[index])
}
console.log(fruits.length)
fruits.push("strawberry")
console.log(fruits)

// Exerices 10 -> Convert String to Number and add 5 to the number

const str = '123'
console.log(Math.floor(Number(str)))
console.log(Math.floor(Number(str))+5);
