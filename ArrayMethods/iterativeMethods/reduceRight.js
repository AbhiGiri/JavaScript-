//// reduceRight() ::
// reduceRight() is the same as the reduce() method, 
// the only difference being that it executes the reducer/callback function backward 
// from the last element of the array.
//
Array.prototype.myReducerRight = function (cb, initialValue) {
  let prev = initialValue;
  for (let i = this.length -1; i >= 0; i--) {
    console.log(this[i]); // backward 5 4 3 2 1
    prev = prev ? cb(prev, this[i]) : this[i];
  };
  return prev;
};

const arr = [1, 2, 3, 4, 5];
const result = arr.myReducerRight((prev, curr) => prev + curr);
console.log(result)