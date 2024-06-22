// fill() method:: 
// fills / replaces (Not Reverse) the "elements of the Array" with a given value.
// accepts 3 arguments: "Value", "Start", & "End".
// returns the "New Array" with replaced elements.

// Test Case : 
// (i). No "Start & End" provided :: replaces "all the elements" with the given value.
// (ii). Negative indexes:: counts the index, "backward" (from the last element of the array).


Array.prototype.myFill = function (value, start = 0, end = this.length) {
  // for -ve start
  if(start < 0) {
    start = this.length + start
  };

  // for -ve end
  if(end < 0) {
    end = this.length + end;
  };

  for (let i = start; i < end; i++) {
    this[i] = value;
  };
  return this;
}
const arr = ["a", "b", "c", "d", "e"];
// const result = arr.myFill('*');          // ['*', '*', '*', '*', '*']
// const result = arr.myFill('*', -3);     // ['a', 'b', '*', '*', '*']
const result = arr.myFill("*", -3, -2); // ['a', 'b', '*', 'd', 'e']    //  for -ve:: -3 includes (start includes)
// const result = arr.fill("*", 3, 4);     // ['a', 'b', 'c', '*', 'e'] //  for +ve:: 4 includes (end includes)
console.log(result);