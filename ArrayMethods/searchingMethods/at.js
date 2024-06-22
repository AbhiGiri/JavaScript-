//// at() ::
// accepts an integer(index), and
// returns the element, present at that index, in the array.

Array.prototype.myAt = function(idx) {
  if (idx >= 0) {
    return this[idx];
  } else {
    return this[this.length + idx];
  }
};

const arr = ["a", "e", "i", "o", "u"];

// for +ve
console.log(arr.myAt(3)); // o

// for -ve {(5 - 2) = 3}
console.log(arr.myAt(-2)); // o

// for interger out of range
console.log(arr.myAt(11)); // undefined

console.log(arr.at()); // a,  byDefault takes 0)