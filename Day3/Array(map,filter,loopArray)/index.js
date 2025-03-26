

  //  Array (map, filtes .....)
  // -- An array is a variable which store multiple data in order list. An array can store multiple data of different data types.

  // for example ;

  // Create an array with multiple valuse of different data types
  const array = ['apple', 'dip', true, 123, null];
  console.log(array);
  console.log(array.length);

  // adding new value to array at the end
  array.push('grapes');
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
