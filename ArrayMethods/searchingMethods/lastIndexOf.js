//// lastIndexOf() ::
// accepts an element (string), & a fromIndex (integer), and 
// returns "the last index", at which the element is present, in the array.
// Otherwise -1.

Array.prototype.myLastIndexOf = function (el, fromIndex = this.length - 1) {
  for (let i = fromIndex; i >= 0; i--) {
    if (el === this[i]) {
      return i;
    }
  }
  return -1;
};

const arr = ["a", "d", "b", "c", "d", "e", "a"];
console.log(arr.myLastIndexOf("d")); // 4
console.log(arr.myLastIndexOf("a")); // 6
console.log(arr.myLastIndexOf("z")); // -1