// findLast()::
// accepts a testing callback function, and
// returns "the last element" which fulfills the testing function.
// otherwise -1;

Array.prototype.myFindLast = function (cb) {
  for (let i = this.length - 1; i >= 0; i--) {
    if (cb(this[i])) {
      return this[i];
    }
  }
  return -1;
};

const arr = [10, 20, 31, 44, 55, 67];

const result = arr.myFindLast((el) => el % 4 == 0);
console.log(result);