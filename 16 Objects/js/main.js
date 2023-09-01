// objects
// key-value pairs in curly braces
const myObj = { name: "Riska" };

console.log(myObj.name);

const anotherObj = {
  alive: true,
  answer: 42,
  hobbies: ["Eat", "Sleep", "Code"],
  beverage: {
    morning: "coffee",
    affternoon: "Iced Tea",
  },
  action: function () {
    // return "hello world!";
    return `time for ${this.beverage.morning}`;
  },
};

console.log(anotherObj.alive);
console.log(anotherObj.answer);
console.log(anotherObj.hobbies[2]);
console.log(anotherObj.beverage.affternoon);
console.log(anotherObj.action());

const vehicle = {
  wheels: 4,
  engine: function () {
    return "Vrrooom";
  },
};

const truck = Object.create(vehicle); //membuat objek baru, menggunakan objek yang sudah ada sebagai prototipe objek yang baru dibuat.
truck.doors = 2;
console.log(truck);
console.log(truck.wheels); //Inheritance
console.log(truck.engine()); //Inheritance

const car = Object.create(vehicle);
car.doors = 4;
car.engine = function () {
  return "Whooosshh!";
};
console.log(car.engine());
console.log(car.wheels);
const tesla = Object.create(car);
console.log(tesla.wheels);
console.log(tesla.engine());
tesla.engine = function () {
  return "Ssshhhh....";
};
console.log(tesla.engine());

const band = {
  vocals: "Robert Plant",
  guitar: "Jimmy Page",
  bass: "John Paul Jones",
  drums: "John Bonham",
};

console.log(Object.keys(band));
console.log(Object.values(band));

for (let job in band) {
  console.log(band[job]);
  console.log(`On ${job}, it-s ${band[job]}`);
}

// destructuring objects
// const { vocals, guitar, bass, drums } = band;
// console.log(vocals);
// console.log(guitar);
// console.log(bass);
// console.log(drums);

const sings = ({ vocals }) => {
  return `${vocals} sings!`;
};
console.log(sings(band));
