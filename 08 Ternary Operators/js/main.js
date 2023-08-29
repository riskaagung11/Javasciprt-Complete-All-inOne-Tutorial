// Conditionals : Tenary Operators

//syntax
// condition ? ifTrue : ifFalse;

let soup = "Chicken Noodle Soup";
let response = soup ? "Yes, we have soup." : "Sorry, no soup today.";
let isCustomerBanned = false;
let soupAccess = isCustomerBanned ? "Sorry, no soup for you!" : soup ? `Yes, we have ${soup} today.` : "sorry, no soup today.";

console.log(response);
console.log(soupAccess);

let testScore = 79;
let myGrade = testScore > 89 ? "A" : testScore > 79 ? "B" : testScore > 69 ? "C" : testScore > 59 ? "D" : "F";

console.log(`My test grade is a ${myGrade}`);

let playerOne = "rock";
let computer = "rock";
let result =
  playerOne === computer
    ? "Tie game!"
    : playerOne === "rock" && computer === "paper"
    ? "computer wins!"
    : playerOne === "paper" && computer === "scissors"
    ? "computer wins!"
    : playerOne === "scissors" && computer === "rock"
    ? "computer wins!"
    : "playerOne wins!";

console.log(result);
