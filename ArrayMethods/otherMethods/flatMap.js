//flatMap() :
// It executes "the callback function" on every element of the array, 
// flattens the result to depth 1, and returns the newly formed array.

Array.prototype.myFlatMap = function(cb) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    let cbRes = cb(this[i], i, this);
    console.log(cbRes)
    if(Array.isArray(cbRes)) {
      for (let i = 0; i < cbRes.length; i++) {
        result.push(cbRes[i])
      }
    } else {
      result.push(cbRes)
    }
  }
  return result;
};

const arr = [10, 21, [30, 42], 50];
console.log(arr.myFlatMap((el) => (el % 10 === 0 ? [] : [el])));
console.log(arr.flatMap((el) => (el % 10 === 0 ? [] : [el])));
console.log(arr.filter((el) => el % 10 !== 0)); // output: [21, 42];