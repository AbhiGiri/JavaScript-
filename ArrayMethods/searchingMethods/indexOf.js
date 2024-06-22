//// indexOf() ::
// **** (indexOf() works for both Array & String).

// accepts an element (string), &/ a fromIndex (integer), and 
// returns "the first index", at which the element is present, in the array;
// otherwise -1.

Array.prototype.myIndexOf = function(el, fromIdx = 0) {
  for(let i = fromIdx; i < this.length; i++) {
    if(el === this[i]) 
      return i;
    }
  return -1;
}
const arr = ["a", "e", "i", "o", "u"];

console.log(arr.indexOf("e"));
console.log(arr.myIndexOf("r"));
console.log(arr.myIndexOf("a"));
console.log(arr.myIndexOf("a", 1));