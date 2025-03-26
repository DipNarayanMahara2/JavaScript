// Object -> object is collection of properties where each properties has its own value. You can also store multiple related valuse together
//in an object we can store multple valuse of different data type.
// creating an object
const details = {
  // name is property(key) and "dip" is its value
  name: "dip", //string value
  age: 21, // number value
  isStudent : true //boolean value
};

//ading new properties to the object
details.address = "Duhabi";
// updating existing properties
details.name = "Dip Narayan Mahara";

console.log(details);

// Object Method -> object method is function inside an object.

const car = {
  modal : "BMW",
  //creating function 
  start: function(){
    console.log("car is starting.....")
  }
};
//displaying function 
car.start();

//  Example :
// 1. Create an object called book with properties: title (string) author (string) year (number)
const book = {
  title: "Harry Potter",
  author : "Dip",
  year : 2002
};
// 2️⃣ Add a new property genre.
book.genre = "adventure";

// 3️⃣ Update the year property.
book.year = 2003;
// 4️⃣ Delete the author property.
delete book.author;
// 5️⃣ Print the final object.
console.log(book);