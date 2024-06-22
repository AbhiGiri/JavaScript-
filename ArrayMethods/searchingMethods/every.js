//// every()::
// accepts "a  callback function", that executes on every element of the Array, and
// returns "true", if Every elements fulfills the truthy value; 
// otherwise "false".

Array.prototype.myEvery = function(cb) {
  for (let i = 0; i < this.length; i++) {
    if (!cb(this[i])) {
      return false;
    }
  }
  return true;
};

// const arr = [10, 20, 30, 40, 50, 60];
// const isAllEven = arr.myEvery((el) => el % 2 === 0)
// console.log(isAllEven); // true

// const arr = [11, 21, 31, 41, 51, 61];
// const isAllOdd = arr.myEvery((el) => el % 2 !== 0)
// console.log(isAllOdd); // true

const arr = [11, 21, 31, 41, 51, 60];
const isAllOdd = arr.myEvery((el) => el % 2 !== 0)
console.log(isAllOdd); // false