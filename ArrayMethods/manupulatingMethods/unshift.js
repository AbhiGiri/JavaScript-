// unshift()::
// adds elements to the "Beginning" of the Array.
// returns the "New Length" of the Array.
// mutates the "Original" Array.
// but, "push() method" adds elements to the "END" of the Array.

// const arr = [1, 2, 3, 4];
// const arrLength = arr.shift(21, 22, 23);
// console.log(arrLength);  // 7
// console.log(arr); // [21, 22, 23, 1, 2, 3, 4]


// ******* Polyfill for unshift() *******

// Array.prototype.myUnshift = function() {
//   if(arguments.length > 0) {
//  
//     //// move element ahead (arr = [2, 4]; length = 2); 
//     //// (i = 1; i >= 0; i--); 
//     for (let i = this.length-1; i >= 0; i--) {
//      ////  this[1 + 1] = this[2] = this[1]
//       this[i + arguments.length] = this[i];
//     };
//
//     ///// add the args elements at the start.
//     for (let i = 0; i < arguments.length; i++) {
//       this[i] = arguments[i];
//     };
//   };
//   return this.length;
//};

const arr = [1, 2, 3, 4];
const arrLength = arr.myUnshift(21, 22, 23);
console.log(arrLength); // 7
console.log(arr);