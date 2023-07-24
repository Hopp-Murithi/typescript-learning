var cars = "volvo";
console.log(cars);
var inputs = document.querySelectorAll("input");
console.log(inputs);
inputs.forEach(function (obj) {
    console.log(obj);
});
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(7));
//explicit types
//arrays
var bikes = [];
bikes = ["bmx", "pamoja", "thorax"];
console.log(bikes);
//objects
var houses = {};
houses = {
    name: "Mansion",
    address: 66 - 10400,
    location: "Nturukuma",
};
console.log(houses);
//alternatively
var people;
people = {
    name: "Hope",
    age: 30,
    location: "Newyork",
    skills: ["javascript", "typescript", "php", "golang"],
};
console.log(people);
//mixed types
var address;
address = ["Nairobi", 2540, false];
console.log(address);
