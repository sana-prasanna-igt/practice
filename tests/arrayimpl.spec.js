// This is a test file for array implementation in javascript
let intarray = [1, 2, 3, 4, 5];
let strarray = ['a', 'b', 'c', 'd', 'e'];

// adding new element to the array using push method
let newarray = intarray.push(6);

//below code is used to print the values of the array after adding new element
console.log("intarray values:", intarray);
console.log("newarray values:", newarray);
// adding new element to the array using concat method
let strarraynew = strarray.concat('f');
//below code is used to print the values of the array after adding new element
console.log("strarray values:", strarray);
console.log("strarraynew values:", strarraynew);

console.log('-----additional new elements');

// below code is used to remove the last element from the array using pop method
console.log("pop validation:", intarray.pop());

console.log("-----pop validdation ends---")
// below code is used to print the values of the array after removing last element
const newdata = intarray.map(num =>  num * 2);
console.log("newdata values:", newdata);
//