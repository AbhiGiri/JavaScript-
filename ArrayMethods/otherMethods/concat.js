// concat() method 
// merges two/more Arrays/Strings values;

Array.prototype.myConcat = function() {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(this[i]);
  };
  for (let i = 0; i < arguments.length; i++) {
    if(Array.isArray(arguments[i])){
      const dummyArr = arguments[i];
      for(let i = 0; i < dummyArr.length; i++) {
        newArr.push(dummyArr[i]);
      }
    } else {
      newArr.push(arguments[i]);
    }
  }
  return newArr;
};


// const arr1 = [1, 2, 3];
// const arr2 = ['a', 'b', 'c'];
// const arr3 = ['x', 'y', 'z'];
// const str = 'M'

// const arr4 = arr1.myConcat(arr2, arr3, str);
// console.log(arr4); // [ 1, 2, 3, 'a', 'b', 'c', 'x', 'y', 'z', 'M' ]


//// **** For Strings too...
const str1 = 'Abhishek ';
const str2 = 'Kumar';
console.log(str1.concat(str2)); //Abhishek Kumar