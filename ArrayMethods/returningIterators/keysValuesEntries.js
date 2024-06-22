// [1]. keys() method creates and returns 'an array iterator object with the key' for each item in the array.
Array.prototype.myKeys = function() {
  const keys = [];
  for (let i = 0; i < this.length; i++) {
    keys.push(i)
  };

  function* iterator() {
    yield keys
  };
  return iterator();
};

const arr = ['a', 'b', 'c'];
console.log(arr.myKeys());
console.log(arr.myKeys().next().value); // [0, 1, 2]
// OR
for (let key of arr.myKeys()) {
  console.log(key); //[0, 1, 2]
};



//// [2]. values() method creates and returns 'an array iterator object with the value' for each item in the array.

// Array.prototype.myValues = function() {
//   const values = [];
//   for (let i = 0; i < this.length; i++) {
//     values.push(this[i]);
//   };

//   function* iterator() {
//     yield values
//   };
  
//   return iterator();
// };

const arr2 = ['x', 'y', 'z'];
// console.log(arr2.myValues().next().value); // ['x', 'y', 'z'];
console.log(arr2.values().next().value);      // x;


//// [3]. entries() method creates and returns 'an array iterator object with the key-value pairs' for each item of the array.
// Array.prototype.myEntries = function() {
//   const entries = [];
//   for(let i = 0; i < this.length; i++) {
//     entries.push([i, this[i]])
//   }

//   function* iterator() {
//     yield entries
//   }

//   return iterator()
// };

const arr3 = ['m', 'n', 'o', 'p'];
const result3 = arr3.entries();
console.log(result3.next().value);
console.log(result3.next().value);
console.log(result3.next().value);

////Or

for (let entry of arr3.entries()) {
  console.log(entry);
}