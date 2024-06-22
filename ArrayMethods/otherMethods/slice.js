// slice() method: (Used for both Array and String).
// returns "the portion of the array" lying between "start" and "end" index.
// It Does Not Modify "Original Array".
// It Accepts 2 Arguments :: "startIndex" (Including) & "endIndex" (Excluding).

Array.prototype.mySlice = function(start= 0, end = this.length) {
  const newArr = [];
  // for -ve start
  if(start < 0) {
    start = this.length + start;
  };

  // for -ve end
  if(end < 0 ) {
    end = this.length + end;
  };

  // for 
  if(end > this.length) {
    end = this.length
  };

  for(let i = start; i < end; i++) {
    newArr.push(this[i]);
  };

  return newArr;
};


//// Ex. 1 for Array ::

const arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.mySlice(2));
console.log(arr.mySlice(2, 6));
console.log(arr); // ['a', 'b', 'c', 'd', 'e'];


//// Ex. 2 for String ::
const str = 'Abhishek Kumar';
console.log(str.slice(2, 5))