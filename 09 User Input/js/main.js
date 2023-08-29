// User Input
alert("Hello World!");

let myBoolean = confirm("Ok === True\nCancle === false");
console.log(myBoolean);

let name = prompt("Enter your name.");
if (name) {
  console.log(name.length);
  console.log(name.trim().length);
  console.log(name.trim());
} else {
  console.log(name ?? "You didn't enter your name");
}
