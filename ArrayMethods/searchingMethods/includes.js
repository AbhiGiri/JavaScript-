// includes() method :: 
// **** (includes() works for both Array & String).
// checks whether the given element is present.
// if present, returns "TRUE" else "FALSE";

Array.prototype.myIncludes = function(el) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === el) {
      return true;
    }
  }
  return false;
};

const arr = ["A", "A", "C"];
console.log(arr.myIncludes("A")); // true
console.log(arr.myIncludes("b")); // false

const str = "Hello, world!";
console.log(str.includes("world")); // Output: true
console.log(str.includes("foo"));  // Output: false


console.log(arr.find(el => el === 'A'));   // Returns First Element "Obj"
console.log(arr.filter(el => el === 'A')); // Return "Array" of Truthy Elements