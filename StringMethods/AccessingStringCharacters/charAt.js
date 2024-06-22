//// charAt()::
// The charAt() method is used to return the character at a specified index within a string.
// The index starts from 0, which means the first character of the string is at index 0,
// the second character is at index 1, and so on. 
// If the index is out of range (i.e., less than 0 or greater than or equal to the length of the string),
// charAt() returns an empty string.

/// Ex. [1].

// const str = 'hello world';
// let index = 3;
// console.log(str.mycharAt(index)); // l



//// ********* Polyfill for charAt() *********

// if(!String.prototype.charAt) {
  String.prototype.MycharAt = function(index) {
    if(index < 0 || index >= this.length) {
      return '';
    }
    return this[index];
  }
// };

const str = 'hello world';
let index = 0;
console.log(str.MycharAt(index)); // h
console.log(str.MycharAt(100)); // '' [empty string]