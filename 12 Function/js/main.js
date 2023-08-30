// Functions

// Function Declaration Syntax

function sum(num1, num2) {
  console.log(num1);
  console.log(num2);

  if (num2 === undefined) {
    return num1 + num1;
  }

  return num1 + num2;
}

console.log(sum(2, 8));

/*function getUserNameFromEmail(email) {
  return email.slice(0, email.indexOf("@"));
}*/

// anonymous function
const getUserNameFromEmail = function (email) {
  return email.slice(0, email.indexOf("@"));
};

console.log(getUserNameFromEmail("riskaagung@gmail.com"));
console.log(getUserNameFromEmail("agung@github.com"));

// Arrow functions
const toProperCase = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

console.log(toProperCase("juli"));
