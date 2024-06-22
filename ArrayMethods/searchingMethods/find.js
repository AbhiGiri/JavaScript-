//// find()::
// accepts a callback function, that executes on every element of the Array.
// returns the "first element", for which the callback function returns a "TRUTHY" value.
// otherwise "undefined".


Array.prototype.myFind = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) 
      return this[i];
  }
};

const arr = [85, 10, 33, 5];

const result = arr.myFind((el) => el % 5 === 0);
console.log(result); // 85

//// ******* map vs find vs filter*******
console.log(arr.map((el) => el % 5 === 0));  // [ true, true, false, true ] // All
console.log(arr.find((el) => el % 5 === 0));  // 85                         // First only
console.log(arr.filter((el) => el % 5 === 0));  // [ 85, 10, 5 ]            // All which fulfilled


//// Ex. 02
const countries = [
  { id: 1, name: "USA", cities: ["New York", "Los Angeles", "Chicago"] },
  { id: 2, name: "Canada", cities: ["Toronto", "Vancouver", "Montreal"] },
  { id: 3, name: "UK", cities: ["London", "Manchester", "Birmingham"] }
];

console.log(countries.find(country => country.name === "USA"));
console.log(countries.find(country => country.name === "USA").cities);

console.log(countries.filter(country => country.name === "USA").map(city => city.cities))