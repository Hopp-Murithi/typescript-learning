"use strict";
const cars = "volvo";
console.log(cars);
const inputs = document.querySelectorAll("input");
console.log(inputs);
inputs.forEach((obj) => {
    console.log(obj);
});
const circ = (diameter) => {
    return diameter * Math.PI;
};
console.log(circ(7));
//explicit types
//arrays
let bikes = [];
bikes = ["bmx", "pamoja", "thorax"];
console.log(bikes);
//objects
let houses = {};
houses = {
    name: "Mansion",
    address: 66 - 10400,
    location: "Nturukuma",
};
console.log(houses);
//alternatively
let people;
people = {
    name: "Hope",
    age: 30,
    location: "Newyork",
    skills: ["javascript", "typescript", "php", "golang"],
};
console.log(people);
//mixed types
let address;
address = ["Nairobi", 2540, false];
console.log(address);
//type any - allows you to change types of variable
let ninja = "super";
console.log(ninja);
ninja = 45;
console.log(ninja);
ninja = true;
console.log(ninja);
let scores;
scores = {
    name: 45,
    grade: "A++",
    points: 50,
};
console.log(scores);
//function
let greet;
greet = () => {
    console.log("Hello there bigman");
};
let add = (a, b, c) => {
    console.log(a + b);
    console.log(c);
};
add(17, 67);
let getuser = (user) => {
    console.log("this example shows type alliases");
};
//function signatures - blueprint for functions
let calc;
calc = (numberOne, numberTwo, action) => {
    if (action === "add") {
        return numberOne + numberTwo;
    }
    else {
        return numberOne - numberOne;
    }
};
