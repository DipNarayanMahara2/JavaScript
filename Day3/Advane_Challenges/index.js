// Challenge 1: Deeply Nested Object Manipulation
// 👉 Task: Given the following object, update the zip code to "12345", delete the city property, and add a new property phone: "9876543210" inside address.

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

person.address.zip = 12345;
delete person.address.city;
person.address.phone = 9876543210;

console.log(person);

// 🔥 Challenge 2: Transform an Array of Objects using .map()
// 👉 Task: Convert the given products array into an array of strings where each string follows the format:"Product: [name] costs $[price]"

const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 300 },
];

// Your Code Here
const productDetails = products.map(
  (product) => `Product : ${product.name} costs ${product.price}`
);
console.log(productDetails);

// 🔥 Challenge 3: Filter and Sort an Array
// 👉 Task: From the given students array:
// 1️⃣ Filter out students who scored less than 70.
// 2️⃣ Sort them in descending order based on their score.

const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 67 },
  { name: "Charlie", score: 90 },
  { name: "David", score: 72 },
];

// Your Code Here
const topStudent = students
  .filter((student) => student.score >= 70)
  .sort((a, b) => b.score - a.score);

console.log(topStudent);

// 🔥 Challenge 4: Count Occurrences using .reduce()
// 👉 Task: Count how many times each word appears in the given array.
const words = ["apple", "banana", "apple", "orange", "banana", "apple"];

// Your Code Here
const wordCount = words.reduce((acc, word) => {
  if (acc[word]) {
    acc[word] += 1;
  } else {
    acc[word] = 1;
  }
  return acc;
}, {});

console.log(wordCount);

// 🔥 Challenge 5: Find the First Repeated Character in a String
// 👉 Task: Find the first character that appears more than once in a string.

function firstRepeatedChar(str) {
  // Your Code Here
  let seenChar = new Set();

  for (let char of str) {
    if (seenChar.has(char)) {
      return char;
    }
    seenChar.add(char);
  }
  return null;
}

console.log(firstRepeatedChar("abcdefa")); // Expected Output: "a"
console.log(firstRepeatedChar("hello")); // Expected Output: "l"
console.log(firstRepeatedChar("world")); // Expected Output: null
