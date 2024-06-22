// some() method 
// accepts "a callback function", and
// returns TRUE, if it fulfills the given condition, at least one element in the array.

Array.prototype.mySome = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) {
      return true;
    }
  }
  return false;
};

const arr = ["A", "B", "C"];
console.log(arr.mySome((el) => el === "A")); //true
console.log(arr.mySome((el) => el === "a")); //false
