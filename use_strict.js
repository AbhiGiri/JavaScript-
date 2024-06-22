//// use strict::
// It defines that JS code should be executed in "strict mode".

// [1]. variable/object without declaration, is not allowed.
// [2]. If the "object" is not specified ::
//    (i). functions in "strict mode" will return "undefined", and 
//    (ii).functions in "normal mode" will return "global object". (window)

// [3]."this" keyword refers to "the object that called the function".

//// Eg.(1).
// "use strict"
// x = 3.14;     // x is not defined.
// y = {         // y is not defined.
//   0: 'AA', 
//   1: 'bb' 
// }; 

//// Eg.(2).
"use strict";
function myFunction() {
  return console.log(this); // undefined // otherwise window
}
myFunction();


//// Eg.(3).
"use strict"
const obj = {
  empNo: 0,
  name: function () {
    return this;       // always refers to object.
  }
};

console.log(obj.name());
