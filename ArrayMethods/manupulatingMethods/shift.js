// shift()::
// removes the "First Element" of the Array.
// returns the removed element.
// mutates the original array.
// but, pop() REMOVES the "Last Element" of the Array.
//
// Empty array, returns "undefined".
// Non-empty array, returns "array with new length".

// const arr = [12, 22, 32, 42];
// const arr = [];
// const result = arr.shift();
// console.log(result); // 12 Or, undefined
// console.log(arr);    // [22, 32, 42] or, []


// ******* Polyfill for shift() *******

// Array.prototype.myShift = function() {
//   if (this.length > 0) {
//     const firstEl = this[0];                 // to return the first element.
//     for (let i = 0; i < this.length; i++) {
//       this[i] = this[i + 1];                 // shift element ahead
//     }
//     this.length -= 1;                        // decrease length by 1;
//     return firstEl;
//   }
// };


const arr = [12, 22, 32, 42];
// const arr = [];
const result = arr.myShift();
console.log(result); // undefined
console.log(arr);    // []