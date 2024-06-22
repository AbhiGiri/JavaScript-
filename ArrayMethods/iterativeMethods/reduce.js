//// reduce() method:: 
// allows us to Apply "a function" to each element of an Array, and
// reduce the array to a Single Value. 

// It takes two arguments:
// (i).  A "callback function" that will be called for each element of the array.
// (ii). An optional "initial value" that will be used as, the initial value of an "Accumulator".

//// Syntax :: 
// reduce( (accumulator, currentValue, index, array), initialValue);

// (i). "accumulator":: accumulator is a value, returned by the previous invocation of the callback function, or the initial value, if this is the first invocation.
// (ii). "currentElement":: this is the current element being processed by the callback function.
// (iii)."index":: this is the index of the current element being processed.
// (iv). "array":: this is the array being processed.



//// [1]. Find the "sum" of all the values of the given array.

//// (i). Using "for()" loop :: 

// const arr = [1, 2, 3, 4, 5];
// function findSum(ar) {
//   let sum = 0;
//   for (let i = 0; i < ar.length; i++) {
//     sum += ar[i];
//   }
//   return sum;
// };
// console.log(findSum(arr));


//// (ii). Using "reduce() method":: 

// const arr = [1, 2, 3, 4, 5];
// const total_sum = arr.reduce((acc, curr, i, arr) => {
//   return acc += curr;
// }, 0);
// console.log(total_sum); // 15


//// [2]. Find the "maximum value" of the given array.

//// (i). Using "for() loop", 

// const arr = [8, 1, 2, 3, 4];
// function findMax(ar) {
//   let max = 0;
//   for (let i = 0; i < ar.length; i++) {
//     if(ar[i] > max) {
//       max = ar[i];
//     }
//   }
//   return max;
// };
// console.log(findMax(arr));


//// (ii). Using "reduce()" ::

// const arr = [8, 1, 42, 3, 4];
// const maxValue = arr.reduce((max, curr) => {
//   (curr > max) && (max = curr);
//   return max;
// }, null);

// console.log(maxValue);


//// [3]. Find the "number of users having same age" of the given array.

//// (i) Using "reduce()" ::

const users = [
  { fName: 'Swami',    lName: 'Ramdev',  age: 56 },
  { fName: 'Jaggi',    lName: 'Vasudev', age: 69 },
  { fName: 'Salman',   lName: 'Khan',    age: 56 },
  { fName: 'Narendra', lName: 'Modi',    age: 72 },
];

const res = users.reduce((acc, user) => {
  acc[user.age] ? acc[user.age]++ : acc[user.age] = 1;
  // if(acc[user.age]) 
  //   acc[user.age] = ++acc[user.age];
  // else 
  //   acc[user.age] = 1;
  return acc;
}, {});

console.log(res);


///// [4]. Find the "names" whose "age" are less than 70;

const names = users.reduce((acc, curr) => {
  if (curr.age < 70) {
    acc = [...acc, curr.fName];
  };
  return acc;
}, [])
console.log(names);

//// OR... Using Chaining (filter(), and map()) *******

// const names = users
//   .filter(user => (user.age < 70))
//   .map(name => name.fName);



//// [5]. Flatten an Array ::

//// (i). Using reduce() Method ::

// const arr = [ [2, 3, 5], [1, 2, 4], [8, 5, 5] ];
// const flattenArray = arr.reduce((acc, curr) => acc.concat(curr));
// console.log(flattenArray); // [ 2, 3, 5, 1, 2, 4, 8, 5, 5 ]

//// (ii). using flat() Method ::

// const flattenArray = arr.flat();
// console.log(flattenArray); // [ 2, 3, 5, 1, 2, 4, 8, 5, 5 ]


//// [6]. Find the maximum subarray sum of a given array;

// const maxSequence = (arr, sum = 0) => {
//   return arr.reduce((max, v) => Math.max(sum = Math.max(sum + v, 0), max), 0);
// }

// console.log(maxSequence([1, 2, 3, 4])); // 10


//// (x). JavaScript Reduce() method to make "[].groutBy()" like SQL.

// const products = [
//   { name: 'apples',   category: 'fruits'},
//   { name: 'oranges ', category: 'fruits'},
//   { name: 'potatoes', category: 'vegitables'}
// ];

// const groupByCategory = products.reduce((acc, prod) => {
//   (acc[prod.category] = acc[prod.category] || []).push(prod);

//   return acc;

// }, {});

// console.log(groupByCategory);


//// ************ Grouping by groupBy()***************

// require('core-js/actual/array/group-by');

// const arr = [1, 2, 3, 4, 5];

// const groupByEvenOdd = arr.groupBy(el => {
//   return el % 2 == 0 ? 'even' : 'odd';
// });

// console.log(groupByEvenOdd); // { odd: [ 1, 3, 5 ], even: [ 2, 4 ] }



//// ******* Polyfill for reduce() *******

// (1). Check if the reduce method is not already defined
if (!Array.prototype.reduce) { 
  // (2). Define a new reduce method on the Array prototype
  Array.prototype.reduce = function(callback, initialValue) { 
    // (3). Initialize the accumulator to the initialValue if it's provided, or to the first element of the array if not
    let accumulator = initialValue !== undefined ? initialValue : this[0];
    // (4). Loop through each element in the array using a for loop, starting from either the first or second 
    // element depending on whether an initialValue was provided.
    for (let i = initialValue !== undefined ? 0 : 1; i < this.length; i++) {
      // (5). Call the callback function with four arguments: the current value of the accumulator, 
      // the current element of the array, the index of the current element, and the array itself. 
      // Assign the return value of the callback to the accumulator variable.
      accumulator = callback(accumulator, this[i], i, this);
    }
    // (6). Return the final value of the accumulator after all elements in the array have been processed by the callback function
    return accumulator;
  };
};

///// shortest polyfill for reduce.
// Array.prototype.myReduce = function(cb, initVal) {
//   let prev = initVal;
//   for (let i = 0; i < this.length; i++) {
//     prev = prev ? cb(prev, this[i]) : this[i];
//   };
//   return prev;
// };


//// Ex. (1).
// const arr = [1, 2, 3, 4, 5];
// const sum = arr.myReduce((prev, curr) => prev + curr);
// console.log(sum);


//// Ex. (2).
// const arr = [1, 2, 3, 4, 5];

// const oddEvenCount = arr.reduce((prev, curr) => {
//   return curr % 2 == 0 
//     ? {...prev, even: prev.even + 1 } 
//     : {...prev, odd: prev.odd + 1 }
  
// }, { even: 0, odd: 0 });
 
// console.log(oddEvenCount); // { even: 2, odd: 3 }

