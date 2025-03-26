// Exercises :

//  Exercise 1: Object Basics
// Create an object named student with the following properties: name (string), age (number), grade (string)

const student = {
  name: "Dip Narayan Mahara",
  age: 21,
  grade: "A+",
};

// Add a new property subject with a value of "Math".
student.subject = "Math";

// Update the grade to "A".
student.grade = "A";

// Delete the age property.
delete student.age;

// Print the final student object.
console.log(student);

// Exercise 2 -> Create an object called calculator with a method add that takes two numbers as parameters and returns their sum.

const calculator = {
  add: function (a, b) {
    return a + b;
  },
};
// Call calculator.add(5, 3) and print the result.
console.log(calculator.add(5, 3));
// Add another method multiply that multiplies two numbers.
calculator.multiply = function (a, b) {
  return a * b;
};
// Test the multiply method.
console.log(calculator.multiply(5, 3));

// Exercise 3 -> Create an array called colors with values "Red", "Green", "Blue".
const colors = ["Red", "Green", "Blue"];

// Add "Yellow" to the end of the array.
colors.push("Yellow");
// Remove the first element.
colors.shift();
// Print the length of the array.
console.log(colors.length);
// Print all elements using a forEach loop.
colors.forEach((color) => {
  console.log(color);
});

//  Array Methods (map, filter, reduce)
// Exercise 4 --> Create an array numbers = [1, 2, 3, 4, 5].
const numbers = [1, 2, 3, 4, 5];
//Use .map() to create a new array that doubles each number.
const double = numbers.map((num) => num * 2);

//Use .filter() to create a new array with only even numbers.
const evenNumber = numbers.filter((num) => num % 2 === 0);

//Use .reduce() to find the sum of all numbers in the array.

const sum = numbers.reduce((acc, num) => acc + num, 0);
// Print all the results.
console.log(numbers, double, evenNumber, sum);

// Exercise 5: Combining Objects and Arrays.
// Create an array people with 3 objects, each representing a person with: name (string), age(number)
const people = [
  {
    name: "Dipesh",
    age: 20,
  },
  {
    name: "alisha",
    age: 21,
  },
  {
    name: "dip",
    age: 22,
  },
];
// Loop through the people array and print each person's name and age.
people.forEach((people) => {
  console.log(`Name : ${people.name} Age: ${people.age}`);
});
// Find and print the oldest person.
const oldest = people.reduce((prev, current) =>
  prev.age > current.age ? prev : current
);
console.log(`oldest person is ${oldest.name} and ${oldest.age} years old.`);

// Exercise 6 -> Create an object called book with properties: title (string), author (string), year (number).

const book = {
  title: "Harry Potter",
  author: "Dip",
  year: 2003,
};

// Add a new property called genre
book.genre = "Action";
// Update the year properties
book.year = 2004;
// delete the author properties
delete book.author;
// print the final object
console.log(book);
