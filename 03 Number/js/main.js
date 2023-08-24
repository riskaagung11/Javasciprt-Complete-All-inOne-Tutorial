// Numbers

// Integer adalah bilangan bulat
let myNumber = 42;

console.log(myNumber);

// Angka dengan titik desimal adalah float yang merujuk ke "Floating point"
let myFloat = 42.0;
console.log(myFloat);
console.log(myNumber === myFloat);

myFloat = 42.01;
console.log(myFloat);
let myString = "42";
console.log(myString);
console.log(myNumber === myFloat);
console.log(myNumber === myString);
console.log(myString + 3);
console.log(Number(myString) + 3);
console.log(Number(myString) === myNumber);
console.log(+myString + 3);
console.log(+myString === myNumber);

console.log(Number(true));
console.log(Number(false));

// Number Methods
// Metode Number.IsInteger() menentukan apakah nilai yang dilewatkan adalah bilangan bulat
console.log(Number.isInteger(myFloat));
console.log(Number.isInteger(myString));
console.log(Number.isInteger(+myString));

// Metode Number.parseFloat() mem-parsing sebuah argumen dan mengembalikan sebuah angka floating point. jika sebuah angka tidak dapat diparsing dari argumen, metode ini akan mengembalikan NaN.
console.log(Number.parseFloat(myFloat));
console.log(Number.parseFloat(myNumber));
myString = "42.123abcf";
console.log(Number.parseFloat(myString));

// Metode toFixed() memformat angka sesuai dengan berapa banyak titik desimal yang Anda berikan sebagai parameter.
console.log(Number.parseFloat(myString).toFixed(2));
console.log(typeof Number.parseFloat(myString));
myFloat = 42.0151;
console.log(myFloat.toFixed(2));
console.log(Number.parseInt(myString));

// Method toString() mengembalikan sebuah string yang merepresentasikan angka
console.log(myFloat.toString());

// Chaining = menggunakan beberapa metode yang dirangkai bersama
console.log(Number.parseFloat("4.237abcd").toFixed(2).toString());

// NaN adalah singkatan dari Not a Number
console.log(Number("Riska"));

// Metode Number.isNaN() menentukan apakah nilai yang dilewatkan adalah NaN DAN tipenya adalah Number.
console.log(Number.isNaN("Riska"));
console.log(isNaN("Riska"));
