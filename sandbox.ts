const cars = "volvo";

console.log(cars);

const inputs = document.querySelectorAll("input");
console.log(inputs);

inputs.forEach((obj) => {
  console.log(obj);
});

const circ = (diameter: number) => {
  return diameter * Math.PI;
};
console.log(circ(7));

//explicit types
//arrays
let bikes: string[] = [];
bikes = ["bmx", "pamoja", "thorax"];

console.log(bikes);

//objects
let houses: {} = {};
houses = {
  name: "Mansion",
  address: 66 - 10400,
  location: "Nturukuma",
};
console.log(houses);


//alternatively
let people: {
  name: string;
  age: number;
  location: string;
  skills: string[];
};

people = {
  name: "Hope",
  age: 30,
  location: "Newyork",
  skills: ["javascript", "typescript", "php", "golang"],
};

console.log(people);

//mixed types
let address: (string | number | boolean)[];
address = ["Nairobi", 2540, false];

console.log(address);
