// push() method:: 
// adds the elements to the "END of the Array".
// mutates the "original" Array.
// retruns the "new length" of the array.


Array.prototype.myPush = function() {
  for (let i = 0; i < arguments.length; i++) {
    this[this.length] = arguments[i];
  }
  return this.length;
};

const arr = ["A", "b", "C"];

const result = arr.myPush(555);

console.log(result); // 4
console.log(arr); // ["A", "b", "C", 555]