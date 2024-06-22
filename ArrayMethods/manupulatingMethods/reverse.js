// reverse()::
// reverses the array.
// returns "the Reversed Array".
// mutates "original Array".


Array.prototype.myReverse = function() {
  let start = 0;
  let end = this.length -1;
  while(start < end) { // best
    // for (let i = start; i < end; i++) {
    let temp = this[start];
    this[start] = this[end];
    this[end] = temp;
    start++;
    end--;
  }
  return this;
};


const arr = [1, 2, 3, 4, 5];
console.log(arr.myReverse());// [5, 4, 3, 2, 1]
console.log(arr); // [5, 4, 3, 2, 1]
