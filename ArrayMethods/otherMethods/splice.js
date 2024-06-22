//// splice() method: 
// can be used to Add/Remove/Replace "Item" in an Array.
// It Mutates "Original Array".
// It Returns "Deleted Element" in an array. (Return value: Returns the extracted array based on the passed parameters).

//// Syntax::
// array.splice(index,      HowMany,     [addElement1][, ..., elementN]);
// array.splice(StartIndex, DeleteCount, (addItems1, addItems2, ...)).


//// Example ::
const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');      //// Inserts At index 1
// console.log(months);             // [ 'Jan', 'Feb', 'March', 'April', 'June' ]

// months.splice(1, 1, 'Feb');      //// Replace At index 1 with 'Feb' in place of "March"
// console.log(months);             // [ 'Jan', 'Feb', 'April', 'June' ]

// months.splice(3, 1, 'May');      //// Replaces 1 Element At index 3
// console.log(months);             // [ 'Jan', 'March', 'April', 'May' ]

months.splice(0, 2);             //// Delele 1 Element at index 2
console.log(months);             // [ 'Jan', 'March', 'June' ]
console.log(months.splice(0, 2))

//// ***** Polyfill of splice() method *******

if (!Array.prototype.customSplice) {
  Array.prototype.customSplice = function (startIndex, numItems) {
    let array = this;
    let endIndex = startIndex + numItems;

    let itemsBeforeSplice = []; // array till startIndex
    let splicedItems = [];      // removed items array
    let itemsAfterSplice = [];  // array from endIndex

    for (let i = 0; i < array.length; i++) {
      if (i < startIndex) { itemsBeforeSplice.push(array[i]); }
      if (i >= startIndex && i < endIndex) { splicedItems.push(array[i]); }
      if (i >= endIndex) { itemsAfterSplice.push(array[i]); }
    };

    // Insert all arguments/parameters after numItems
    for (let i = 2; i < arguments.length; i++) {
      itemsBeforeSplice.push(arguments[i]);
    };

    // Combine before/after arrays
    var remainingItems = itemsBeforeSplice.concat(itemsAfterSplice);

    // Rewrite array
    for (let i = 0, len = Math.max(array.length, remainingItems.length); i < len; i++) {
      if (remainingItems.length > i) {
        array[i] = remainingItems[i];
      } else {
        array.pop();
      }
    };
    return splicedItems;
  }

};

//// Implementation ::

//// (i). Declare an array
const arr = [1, 2, 3, 4, 5, 6];

//// (ii). Add elements
// arr.customSplice(2, 0, 9, 10);
console.log(arr);

//// (iii). Replace elements
arr.customSplice(2, 2, 8,9,10);
console.log(arr);

//// (iv). Delete elements
arr.customSplice(3, 1);
console.log(arr);


//// WAF to remove second highest value 
