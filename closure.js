//// Closure :: 
// "Closure" is a Function.
// A Function bundled with its "Lexical Environment" is known as a "Closure".
// OR... 
// A "Closure is a function, that Remember their Lexical Environment.

// "Lexical Environment" means 'An Environment in which the function was declared'".

//// "Closures" are useful for "Encapsulation", "Data Privacy", and "Creating Functions with Persistent State".


//// Use of Closure::-
// (i).  Curring
// (ii). Function like once (executes only one time)
// (iii).Memorize
// (iv). setTimeout()
// (v).  Iterators
// (vi). maintaing 'State' in async world
// (VII).Module Design Pattern.


//// Eg. The "child() Function" is bind to "a variable of the parent() Function", forms a Closure.
// Child has access to its "parent's lexical scope".

function parent() {            
  var a = 10;
  function child() {
    console.log(a); // 100
  };
  a = 100;
  return child;
};

var z = parent();
// 1000 of lines...... here after returning y, z has lexical scope of x with all variables.(remember referance of a)
z();

//// But if we return 'y' before 

function x3() {
  var a = 10;
  return function y() {
    console.log(a); // 10
  }
  a = 100;
};

var res = x3();
res(); 


//// [1]. ***********************************

//// (a). using curring

function parent1() {
  let a = 10;
  return function child() {
    return a;  
  };
};
console.log(parent1()()); // 10


//// (b).

function parent2() {
  let a = 3;
  function child() {
    a = 4;          // here, reassign/overrides "a = 3" to "a = 4".
    console.log(a); // 4
  };
  child();
  console.log(a); // 4 re-assigned 
};
parent2();


//// "let" Respect block scope ::

function parent3() {
  let a = 3;
  function child() {
    let a = 4;          
    console.log(a); // 4
  };
  child();
  console.log(a); // 3 
};
parent3();


//// [2].***********************************

function outer(x) {
  var a = 10;
  return function inner(y) {
    console.log(a, x, y); // 10 outerCall innerCall
  }
};
outer('outerCall')('innerCall');


//// [3].***********************************

function outest() {
  var c = 30;
  return function outer(a) {
    var b = 20;
    return function inner() { // returning function will still maintain their lexical scope i.e, 'b = 20'
      console.log(a, b, c); // 999 20 30
    }
  };
};
var b = 200;
outest()(999)(); 


//// [5] ***********************************

//// (a).

var a = 3;
function xyz() {
  console.log(a); // 3
}
xyz();

//// (b).

var a1 = 3;
function xyz1() {
  console.log(a1);  //// "undefined", bcoz 'a' inside of the "Function" overrides the Global "var a = 3".
  var a1 = 2;
  console.log(a1);  //// 2
}
xyz1();


//// (c).(i)

function xyz2() {
  var a = 3;
  function abc() {
    console.log(a); // 3
  }
  return abc;
};
var z2 = xyz2();
console.log(z2); // abc func.
z2(); 

//// (c).(ii)
function xyz3() {
  var a = 3;
  function abc() {
    console.log(a);
  }
  a = 101;  // Reassigned a = 101
  return abc;
};
var z3 = xyz3();
console.log(z3); // abc func.
z3(); 

//// ******** Another Way ********

// function xyz3() {
//   var a = 3;
//   return function abc() {
//     console.log(a);  //3
//     a = 12;
//   }
// }
// var z3 = xyz3();
// console.log(z);
// z3();


//// (c).(iii)

function xyz4() {
  var a = 1;
  function abc() {
    console.log(a); // 1
    a = 100;
  }
  return abc;
}
var b = xyz4();
b(); 


//// (c).(iv)

function x() {
  var a = 1;
  function y() {
    var b = 2;
    function z() {
      var c = 3;
      console.log(a, b, c); // 1 2 3
    }
    z();
  }
  y();
}
x();

// function x() {
//   var a = 1;
//   return function y() {
//     var b= 2;
//     return function z() {
//       var c = 3;
//       console.log(a, b, c); // 1 2 3
//     };
//   };
// };
// x()()();

//// [6]. *********************

// obj = {
//   a: 20,
//   b: 21
// };

// if (true) obj;
// console.log(obj.a); // 20

function xyz5() {
  var a = 30;
  function abc() {
    var b = 40;
    console.log(a); // 30
  }
  abc();
  console.log(b);  // 'b' is Not Defined.
};
xyz5(); 


//// [6].**************************

//// OUTPUT Infinite Curring ::

console.log(product(4)(5)(3)() ); // 60
function product(a) {
  return function (b) {
    if (b) {
      return product(a * b);
    };
    return a;
  }
};
console.log(product(5)(4)(3)()); // 60


console.log(product1(4)(5)) //20
function product1(a) {
  return function (b) {
      return a * b;
  }
};
// console.log(product1(4)(5)(3));


//// ************ 2nd way of Infinite Curring ***************

let sum  = a => b => { return b ? sum(a + b)  : a };
let prod = a => b => { return b ? prod(a * b) : a };

console.log(sum(2)(20)(21)()); // 43
console.log(prod(2)(2)(2)()); // 8


//// [7]. ************************

// Write a Function that returns an array of functions, that increment numbers, 
// but each returned function should only increment the number by its original index in the array. 
//// Eg. the first returned function should increment the number by 1, 
// the second returned function should increment the number by 2, and so on.

function createIncrementFunctions(numFunctions) {
  const functionsArr = [];

  for (let i = 0; i < numFunctions; i++) {
    functionsArr.push(((index) => {
      return function() {
        return ++index;
      }
    })(i));
  }
  return functionsArr;
};

var funcs = createIncrementFunctions(3);

console.log(funcs[0]()); // 1
console.log(funcs[1]()); // 2
console.log(funcs[2]()); // 3

////

function createFunctions() {
  var result = [];
  for (var i = 0; i < 5; i++) {
    result[i] = function() {
      console.log(i);
    };
  }
  return result;
};

var functions = createFunctions();
for (let j = 0; j < functions.length; j++) {
  functions[j]();
};

//// Each "Function" inside the Loop is a "closure", that captures the value of "i" at the time of creation, 
// but since all the functions are created inside the same scope, 
// they all capture the final value of i, which is 5. 
// Therefore, when each of the functions is called, 
// they all return the same value of 5.

function xyz(arr) {
  let newArr =[];
  for(let word of arr) {
    if(word.length >= 3) {
      newArr.push(word);
    }
  }
  return newArr
}

const wordFun = xyz(['apple', 'cat', 'ox']);
console.log(wordFun)