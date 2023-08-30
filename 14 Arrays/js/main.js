// Arrays

const myArray = [];

// add elements to an array
myArray[0] = "Riska";
myArray[1] = 1001;
myArray[2] = true;

// refer to an array
console.log(myArray);

// length property
console.log(myArray.length);

// last element in array
console.log(myArray[myArray.length - 1]);

console.log(myArray[1]);

// adds new items to the end of an array
myArray.push("school");
console.log(myArray);

// adds new elements to the beginning of an array
myArray.unshift(17);
console.log(myArray);

// removes the last element of an array.
myArray.pop();
console.log(myArray);

// removes the first item of an array
myArray.shift();
console.log(myArray);

// adds and/or removes array elements.
myArray.splice(1, 1);
console.log(myArray);

myArray.splice(1, 1, false);
console.log(myArray);

myArray.splice(1, 0, 1171);
console.log(myArray);

const myArray2 = ["A", "B", "C", "D", "E", "F"];

// returns selected elements in an array, as a new array.
const newArray = myArray2.slice(2);
console.log(newArray);
const newArray2 = newArray.slice(1, 3);
console.log(newArray2);

// reverses the order of the elements in an array
myArray2.reverse();
console.log(myArray2);

// returns an array as a string
const newString = myArray2.join();
console.log(newString);
console.log(typeof newString);

// splits a string into an array of substrings
const newArray3 = newString.split(",");
console.log(newArray3);

// concatenates (joins) two or more arrays.
const myArrayA = ["A", "B", "C", "D"];
const myArrayB = ["E", "F", "G", "H"];

const newArrayAB = myArrayA.concat(myArrayB);
console.log(newArrayAB);

//! spread operator
const newArrayAB2 = [...myArrayA, ...myArrayB];
console.log(newArrayAB2);

// Array Exercise

const equipShelfA = ["baseball", "football", "volleyball"];
const equipShelfB = ["basketball", "golf balls", "tennis balls"];

const clothesShelfA = ["tank tops", "t-shirts", "jerseys"];
const clothesShelfB = ["sweat tops", "sweat pants", "hoodies"];

const equipDept = [equipShelfA, equipShelfB];
const clothesDept = [clothesShelfA, clothesShelfB];

console.log(equipDept[0][1]);
console.log(clothesDept[1][2]);

const sportsStore = [equipDept, clothesDept];
console.log(sportsStore);
console.log(sportsStore[0][1][2]);
console.log(sportsStore[1][0][1]);
