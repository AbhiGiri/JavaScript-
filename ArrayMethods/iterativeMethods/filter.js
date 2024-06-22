//// filter() Method ::
// Accepts, a "callback function", that executes on Every Element of the Array, and
// Returns, a "New Array", that "Contains Only Those Elements, for which "callback function", returns a Truthy Value";
// otherwise Empty Array [];

//// Ex. 01
const arr = [1, 2, 3, 4];

function isOdd(el) {
  return el % 2;
};

const res1 = arr.filter(isOdd); 
console.log(res1); // [1, 3]
// OR...
const res2 = arr.filter(el => el % 2 );
console.log(res2); // [1, 3]


//// Ex. 02
function isEven(x) {
  return x % 2 !== 0;
};

const res3 = arr.filter(isEven);
console.log(res3); // [2, 4]
console.log(arr); // [2, 4]


//// Ex. 03
const arr3 = [1, 2, 3, 4, 5, 6];
function greaterThan4(x) {
  return x > 4;
};

const res4 = arr3.filter(greaterThan4);
console.log(res4); // [ 5 ]



// ******* Polyfill for filter() *******

Array.prototype.myFilter = function(cb) {
  let newArr = [];

  for (let i = 0; i < this.length; i++) {
    if(cb(this[i], i, this)) {
      newArr.push(this[i]);
    }
  };

  return newArr;

};

const arr5 = [1, 2, 3, 4, 5];
const res5 = arr5.myFilter(el => el % 2 === 0);

console.log(res5); // [2, 4]

