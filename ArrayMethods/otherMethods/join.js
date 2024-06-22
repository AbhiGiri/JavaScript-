
// join() method 
// concatenates the array, and returns a string;
// if no separator argument passed: concatenates element using , a comma as a separator.
// if separator passed : concatenates elements using the separator provided.

Array.prototype.myJoin = function(separator = ',') {
  let result = '';

  for(let i = 0; i < this.length; i++) {
    if(i === this.length -1) {
      result += this[i];
    } else {
      result += this[i] + separator;
    }
  }
  return result;
};

// const arr = [1, 2, 3, 4, 5];
// console.log(arr.myJoin()); // output: 1,2,3,4,5 byDefaultcommaSeperatedString
// console.log(arr.myJoin("*")); // output: 1*2*3*4*5

const str = 'Abhishek Kumar';
// console.log(str.join()); // output: 1,2,3,4,5 byDefaultcommaSeperatedString
console.log(str.split(', ').join(" ")); // output: 1*2*3*4*5