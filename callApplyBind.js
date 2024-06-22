//// call(), apply(), and bind() Methods::

// These are used for "Function Borrowing" in JS. 
// In these, we can use "methods of an object", on different object, without copying of that methods.

//// [1]. call():: 
// "call()" method is a "built-in Function" in JavaScript, 
// that is used to "Call / Invoke a function" with a specific "this" value, and
// allows us to pass arguments One-By-One.      
// SYNTEX:: functionName.call(thisArg, arg1, arg2, ...);

//// [2]. apply() ::
// "apply()" is similar to the "call() method", and also used to "call a function" with a given "this" value,
// but allows us to pass arguments as an Array[].
// SYNTEX:: functionName.apply(thisArg, [arg1, arg2, ...]);

//// [3]. bind() :: 
// returns a "New Function", which can be "Called / Invoked Later" by passing arguments One-By-One.


//// (1). call() Method ***********

// const emp = {
//   fName: 'Abhishek',
// };

// function printNameAddr(hometown, state) {
//   console.log(`${this.fName} from ${hometown}, ${state}.`);       //// Abhishek from RXL, Bihar.
// };

// printNameAddr.call(emp, 'RXL', 'Bihar');


//// ******** Polyfill for call() *********

// if (!Function.prototype.call) {
//   Function.prototype.myCall = function(obj, ...args) {
//     context = obj || window;             // "uses global in NodeJS."
//     context.fn = this;
//
//     const result = context.fn(...args);
//     delete context.fn;
//
//     return result;
//   };
//
//   printNameAddr.myCall(emp, 'RXL', 'Bihar');
// };

//// shortest
Function.prototype.myCall = function(obj, ...args) {
  obj.fnToCall = this;
  obj.fnToCall(...args)
};


//// *** oR ***
Function.prototype.myCall = function(...args) {
  const context = args[0];
  context.fnToCall = this;
  const params = args.slice(1);
  context.fnToCall(...params);
};


//// (2). apply() method,***********

// const emp = {
//   fName: 'Abhishek',
//   lName: 'Kumar',
// };

// function printFullName(hometown, state) {
//   console.log(`${this.fName} ${this.lName} from ${hometown}, ${state}.`);
// };

// printFullName.apply(emp, ['Raxaul', 'Bihar']);


//// ********* Polyfill for apply() *********

Function.prototype.myApply = function(obj, argArr) {
  obj.fn = this;
  obj.fn(...argArr)
};

// printFullName.myApply(emp, ['Rxl', 'Bihar']);



//// (3). bind() method ***********

// let emp = {
//   name: 'Abhishek Kumar'
// };

// function printFullName(hometown) {
//   return `${this.name} from ${hometown}`;
// };

// let result = printFullName.bind(emp);
// console.log(result('RXL'));


//// ********* Polyfill for bind() *********
Function.prototype.myBind = function(obj) {
  obj.fn = this;
  return function(...args) {
    return obj.fn(...args);
  };
};

// let res = printFullName.myBind(emp);
// console.log(res('India'));


// ************Practice*************
Function.prototype.myCalll = function(obj, ...args) {
  obj.fn = this;
  obj.fn(...args);
};

Function.prototype.myApplyy = function(obj, argsArr) {
  obj.fn = this;
  obj.fn(...argsArr);
};

Function.prototype.myBindd = function(obj) {
  obj.fn = this;
  return function(...args) {
    return obj.fn(...args);
  };
};