// sort() ::
// sorts the array.
// By default, it converts the elements to "strings", and sort them in "Ascending Order";


function defaultComparator(a, b) {
  a = a.toString();
  b = b.toString();

  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
};

Array.prototype.mySort = function (cb = defaultComparator) {
  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j < this.length; j++) {
      // console.log(cb(this[i], this[j]))
      if (cb(this[i], this[j]) > 0) {  // if (1 > 0); then swap
        let swap = this[i];
        this[i] = this[j];
        this[j] = swap;
      }
    }
  }
};

const arr = [999, 30, 2, 9, 1000, 43, 0];
// const arr = ["g",'a', 'c', 'b', 'e', 'd'];

arr.mySort();                    // Ascending (by default for string) [0, 2, 30, 43, 9]  // ['a', 'b', 'c', 'd', 'e']
// arr.mySort((a, b) => a - b);  // Ascending for numberes  // [0, 2, 9, 30, 43] (No Change for strings Array)
// arr.mySort((a, b) => b - a);  // Descending for numberes // [43, 30, 9, 2, 0] (No Change for strings Array)

console.log(arr);1
