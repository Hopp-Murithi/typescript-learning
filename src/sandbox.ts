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

//type any - allows you to change types of variable
let ninja: any = "super";

console.log(ninja);
ninja = 45;
console.log(ninja);
ninja = true;
console.log(ninja);

let scores: { name: any; grade: any; points: number };

scores = {
  name: 45,
  grade: "A++",
  points: 50,
};
console.log(scores);

//function
let greet: Function;

greet = () => {
  console.log("Hello there bigman");
};

let add = (a: number, b: number, c?: number | string) => {
  console.log(a + b);
  console.log(c);
};

add(17, 67);

//type aliases - define types to avoid repetition or parameter overspilling

type stringOrNum = string | number;
type objWithNameAndId = {
  name: string;
  uuid: stringOrNum;
};

let getuser = (user: objWithNameAndId) => {
  console.log("this example shows type alliases");
};

//function signatures - blueprint for functions

let calc: (a: number, b: number, action: string) => number;

calc = (numberOne:number, numberTwo: number , action: string) => {
   if( action === "add"){
    return numberOne + numberTwo
   } else{
    return numberOne - numberOne
   }
};
