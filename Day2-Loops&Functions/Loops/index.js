// Loops --> loops helps to run same code multiple times untill the condition is fullfilled

// for (let i = 0; i <=10; i++) {
//  console.log(i)
// }
// let i = 0 -> initilizing the loop to start form 1
//  i<=10 --> run the code untile i is equal to 10.
// i++ --> increment the value of i by 1 each time the loops runs

// types of Loop ->
// 1. for Loop
// 2. While Loop
// 3. Do while Loop

// Excerise

// 1. To print number from 1 to 10

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2. To print even number form 2 to 20 usind while loop

let i = 1;
while (i <= 10) {
  let result = i * 2;
  i++;
  console.log(result);
}

// 3. Loop through an array of your favorite movies and print them.

const array = [
  "Deadpool",
  "Captain America",
  "hulk",
  "Iron Man",
  "Thor",
  "What if",
];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// 4. Use a do-while loop to count down from 5 to 1.

let num = 5;

do {
  console.log(num)
  num--;
} while (num >= 1);
