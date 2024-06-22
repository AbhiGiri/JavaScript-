// pop() methods::
// removes the "LAST Element" of the Array.
// mutates the "original" Array.
// returns the "Removed Element".

Array.prototype.myPop = function () {
  if (this.length > 0) {
    let lastEl = this[this.length - 1];
    this.length -= 1;
    return lastEl;
  }
};

const arr = ["a", "b", "c", "d", "e"];
// const arr = [];

console.log(arr.myPop()); // e or undefined for [].
console.log(arr); // ["a", "b", "c", "d"]