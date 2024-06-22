// Map() ::
// Accepts a "callback function" that Executes on Every Element of the Array, and
// Returns a "New Array" of "values of callback function", which it returns.

const rank = [1, 2, 3];

const rankRes = rank.map((el, i, arr) => {
  return el * 2;
});
console.log(rankRes);


function binary(x) {
  return x.toString(2);
};

const binaryRes = rank.map(binary);
console.log(binaryRes);



// ******* Polyfill for map() *******

Array.prototype.myMap = function (cb) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    const newVal = cb(this[i], i, this);
    newArr.push(newVal);
  };
  return newArr;
};

const arr = [1, 2, 3, 4];

const result = arr.myMap((el) => el * 2);
console.log(result);  // [ 2, 4, 6, 8 ]




//// Get OUTPUT  **********

// [
//   ["name": "Abhishek"],
//   ["age": 22]
// ]

//// Using Object.entries() 
const user1 = {
  name: 'Abhishek',
  age: 22
};
console.log(Object.entries(user1));

//// Create a Method instead  of Object.entries();
const user = {
  name: "Ram",
  age: 33
};

function getObjctEntries(obj) {
  const objKeys = Object.keys(obj);
  const result  = objKeys.map(key => {
    const value = obj[key];
    return [key, value]
  })
  console.log(result);
};

getObjctEntries(user);