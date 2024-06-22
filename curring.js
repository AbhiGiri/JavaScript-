//// Curring :: 
// When a Function instead of taking All The "Arguments" at Once, 
// it takes The First Argument, and Returns a New Function,
// which takes The Second Argument., and Returns a New Function, 
// which takes The Third Argument, and so on...
// Untill All The Arguments have been Fullfilled.

//// Ex:- Add 2 to given number;

// function add(a, b) {
//   return (a + b);
// };

// console.log(add(2, 30)); // 32
// console.log(add(2, 40)); // 42


//// [1]. Function Curring using: "bind()".

function add(a, b) {
  return (a + b);
};

let getAdd = add.bind(this, 2);
console.log(getAdd)
// console.log(getAdd(33)); // 33+2=35

// console.log(getAdd); // returns func. add(){...}



//// [2]. Function Curring using: "closure".

// function add(a) {
//   return (b) => a + b;
// };

// let getAdd = add(2);
// console.log(getAdd(30)); // 32



//// [3]. Infinite Curring.

// function sum(a) {
//   return function (b) {
//     if (b) {
//      return sum(a + b);
//     };
//   return a;
//   }
// };
// console.log(sum(2)(3)()); // 5

 // or
// function sum(a) {
//   return (b) => b ? sum(a + b) : a;
// };
// console.log(sum(2)(3)()); // 5


//// ******* Or SHORTEST WAY **********

// let sum = a => b => b ? sum(a + b) : a

// console.log(sum(2)(3)());// 5
// console.log(sum(20)());  // 20
// console.log(sum(2)());   // 2



////  OUTPUT of Infinite Curring ???

// console.log(product(4)(5)(3)()); // 60
// function product(a) {
//   return function (b) {
//     if(b) {
//       return product(a * b);
//     };
//     return a;
//   }
// };
// console.log(product(5)(4)(3)()); // 60

console.log(product(4)(5)) //20
function product(a) {
  return function (b) {
    return a * b;
  }
};

console.log(product(4)(5));

// ************ 2nd way of Infinite Curring ***************
// let sum = a => b => {return b ? sum(a + b) : a}
// let prod = a => b => {return b ? prod(a * b) : a}

// console.log(sum(2)(20)(21)()); // 43
// console.log(prod(2)(2)(2)()); // 8



// function isDivisibleBy(divisor) {
//   return function(num) {
//     console.log(num % divisor === 0)
//     return num % divisor === 0;
//   }
// };

// function filter(arr) {
//   return function(predicate) {
//     console.log(predicate)
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (predicate(arr[i])) {
//         result.push(arr[i]);
//       }
//     }
//     return result;
//   }
// }
// const numbers = [1, 2, 3, 4, 5, 6];
// const filterNumbers = filter(numbers);
// const evenNumbers = filterNumbers(isDivisibleBy(2));
// console.log(evenNumbers); // Output: [2, 4, 6]