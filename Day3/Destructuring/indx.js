// DeStructuring --> It is the process of unpacking the keys or properties from the array or from methods into a distinct variables.
// It is a concise and easy-to-read way of working with data structure. For Example:

// Destructing Array

// creating an array
const array = ["apple", "ball", 10, 20];
// destructuring the array
const [a, b, c, d] = array;
console.log(a);
console.log(b);
console.log(c);
console.log(d);

// There are various way of destructuring array like skiping items, rest method
// skipping Item
const itmes = ["apple", "ball", 10, 20];
// destructuring the array
const [, , item3, item4] = itmes;

console.log(c);
console.log(d);

// rest syntax method
const restItem = ["apple", "ball", 10, 20];
// destructuring the array
const [rItem1, rItem2, ...rest] = restItem;
console.log(a);
console.log(b);
console.log(rest);

// Destructing Object

const object = { //creating object
  name: "dip",
  age: 21,
};

const { name, age } = object; // destructing object
console.log(name);
console.log(age);
// for skipping and rest method are same 

// nested destructing of object
const nestedObject = {
  name: "dip",
  address:{
    province: 1,
    city : "Duhabi",
    Zip : 12345,
  }
};
// you can also give default value while destructing like below

const {firstName , Age=21, address:{province, city, zip}} = nestedObject;
console.log(firstName);
console.log(province);
console.log(city);
console.log(zip);

