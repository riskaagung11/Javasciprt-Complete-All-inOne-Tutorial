// Loop

// while
let Mynumber = 0;
while (Mynumber < 50) {
  Mynumber++;
  console.log(Mynumber);
}

let name = "Agung";
let counter = 0;
let myLetter;
while (counter <= 4) {
  myLetter = name[counter];
  console.log(myLetter);
  if (counter === 2) {
    counter += 2;
    continue;
  }
  if (myLetter === "n") break;
  counter++;
}
console.log(counter);

// do while
Mynumber = 50;
do {
  console.log(Mynumber);
} while (Mynumber < 50);

// for loop
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
name = "riska";
for (let i = 0; i <= name.length; i++) {
  console.log(name.charAt(i));
}
