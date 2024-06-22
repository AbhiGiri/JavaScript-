//// forEach() :: 
// Accepts "a callback function", and Executes on Each Element of the Array.
// Returns "undefined".
// "forEach" can Modify the original array using "arr[i] = el * 2 ".
// The "callback function" is not executed on uninitialized elements.

//// Ex.1
// const rank = ['A', 'B', 'C'];
// const rank = [1, 2, 3];

// const res = rank.forEach((el, i) => {
//   // console.log(el * 2);
//   arr[i] = el * 2;
// });

// console.log(res, rank); // undefined,  [2, 4, 6]

// ******* Polyfill for forEach() *******
// Array.prototype.myForEach = function (cb) {
//   for (let i = 0; i < this.length; i++) {
//     if (typeof this[i] !== "undefined") { //// To avoid "undefined" use it.
//       cb(this[i], i, this);
//     }
//   }
// };

// const arr = [1, 2, 3, undefined];
// function double(x) {
//   console.log(x * 2);
// };

// arr.myForEach(double);  // 2 4 6 NaN (just have to pass the function in forEach());
// // OR,
// arr.myForEach(el => console.log(el * 20)); // 20 40 60 NaN
// // OR,
// arr.myForEach((element, index) => {
//   console.log({[index]: element}) // { 0: 1 }{ 1: 2 }{ 2: 3 }
// }); 

