// flat() ::
// concatenates "the sub-array elements" into "original array" upto a given depth;
// It returns the "New flattened Array".

Array.prototype.myFlat = function (depth = 1) {
  const result = [];
  (function flatten(arr, depth) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i]) && depth > 0) {
        flatten(arr[i], depth - 1);
      } else {
        result.push(arr[i])
      }
    }
  })(this, depth)
  return result;
};

Array.prototype.myDeppFlat = function () {
  const result = [];
  (function flatten(arr) {
    for (let i = 0; i < arr.length; i++) {
      if(Array.isArray(arr[i])) {
        flatten(arr[i])
      } else {
        result.push(arr[i])
      }
    }
  })(this);
  return result;
};

const arr = [10, 20, [["a", "b"]]];
console.log(arr.myFlat()); // [10, 20, ["a", "b"]] 
console.log(arr.myFlat(1)) // [10, 20, ["a", "b"]]
console.log(arr.myFlat(2)) // [10, 20, ["a", "b"]]
console.log(arr.myDeppFlat()); 

const arr2 = [[2, 3, 5], [[1, 2, 4], [8, 5, 5]]];
console.log(arr2.flat(2))
console.log(arr2.flatMap((el) => (el % 2 === 0 ? [] : [el])))
// const flattenArray = arr.reduce((prev, curr) => prev.concat(curr));
// console.log(flattenArray);