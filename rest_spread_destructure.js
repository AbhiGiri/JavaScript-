//// "Rest Parameter" and "Spread Operator"....

//// [1]. Rest Parameter :: 

// Rest parameter has a prefix of 3 dots (...).
// A rest parameter allows us to represent "an indefinite number of arguments" (As an Array).

//// Eg. [i].
// function sum(...args) {
//   let total = 0;
//   for(let arg of args) {
//     total += arg;
//   }
//   return total;
// };
// console.log(sum(1, 2, 3)); // 6


//// Eg. [ii].
// function sum(...args) {
//   return args
//     .filter(e => typeof e === 'number')
//     .reduce((prev, curr) => prev + curr)
// };
// console.log(sum(10, 'hi', 'Hello', 20)); // 30


//// Eg. [iii]. Without ...args (using arguments objects of the function.)
// function sum() {
//   return Array.prototype
//     .filter
//     .call(arguments, e => typeof e === 'number')
//     .reduce((prev, curr) => prev + curr);
// };

// console.log(sum(10, 'hi', 'Hello', 20)); // 30



//// [2]. Spread Operator ::

// Sperad operator unpacks the "collected elements" into "single element".

// Eg. [i] unpacking....
// const colors = ['red', 'green', 'white'];
// const newColors = [...colors, 'blue', 'yellow'];
// console.log(newColors);    // [ 'red', 'green', 'white', 'blue', 'yellow' ]

// Eg. [ii] remaining....
// const [firstColor, ...remaining] = colors;
// console.log(firstColor);   // red
// console.log(...remaining); // green white


//// [3]. Destructure ::

const userInfo = {
  id: '22', 
  name: 'Sunil',
  address: {
    city: 'Rxl',
    pin: 845305
  }
};

const { name, address: {city} } = userInfo;
console.log(`${name} from ${city}`);   // Sunil from Rxl 

//// what happen if userInfo is null;
// const userInfo = null

// const {name, address} = {...userInfo};
// const {city} = {...address}
// console.log(`${name} from ${city}`); // undefined from undefined