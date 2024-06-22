//// Hoisting ::

// When "JS Engine" executes the "JS Code", it creates a "Global-Execution-Context".
// It has 2 phases: "Memory Creation Phase" & "Code Execution Phase".
// During "Memory Creation Phase", JS Engine Moves all the "Variables" & "Function's Declarations" at the top of the scope.
// JS Engine, Doesn't Hoist "Function Expression" & "Arrow Function".
// "var" is Hoisted, and Initilized as "undefined".
// "let" & "const" are Also Hoisted, but WithOut Initilization, and Returns a 'ReferenceError'.
// for the time being, let & const go to TDZ.

//// *****************[1]*******************

//// [a].
// var x;
// console.log(this.x);   // undefined (x is hoisted with undefined).
// console.log(x);        // undefined (x is hoisted with undefined).

//// [b].
// console.log(this.x);   // undefined (x is hoisted with undefined).
// console.log(x);        // undefined (x is hoisted with undefined).
// var x;

//// [c].
// var x = 10;
// console.log(this.x);   // 10
// console.log(x);        // 10

//// [d].
// console.log(this.x);   // undefined
// console.log(x);        // undefined
// var x = 10;

//// [e].
// let x;                 // using "let", 
// console.log(this.x);   // undefined (Global Variables are Not Attached to the "Global Object" as a property.)
// console.log(x);        // undefined (since x is declared but not initialized)

//// [f].
// console.log(this.x);   // undefined
// console.log(x);        // ReferenceError: Cannot access 'x' before initialization.
// let x;
// const x;

//// [g].
// let x = 10;            // using "let",   Global Variables are not attached to the "global object" as a property.
//// const x = 10;        // using "const", Global Variables are not attached to the "global object" as a property.
// console.log(this.x);   // undefined 
// console.log(x);        // 10


////  *****************.[2]. using var ***********************
//// [2.1].

// var x = 10;
// function getName() {
//   x = 20;
//   return 'Namaste JavaScript' + x;
// };

// console.log(getName()); // Namaste JavaScript
// console.log(x);         // 20 //( update the global variable )

//// [2.2]. (var respect Function Block).
// var x = 10;
// function getName() {
//   var x = 20
//   return 'Namaste JavaScript ' + x;
// };

// console.log(getName()); // Namaste JavaScript 20 (var respect Function Block)
// console.log(x);         // 10 (x is defined in GV).


//// ***************.[3]. using let *******************
//// [3.1].

// let x = 10;
// function getName() {
//   x = 20
//   return 'Namaste JavaScript ' + x;
// };

// console.log(getName()); // Namaste JavaScript 20
// console.log(x);         // 20


//// [3.2].
// let x = 10;
// function getName() {
//   let x = 20
//   return 'Namaste JavaScript';
// };

// console.log(getName()); // Namaste JavaScript
// console.log(x);         // 10  // (let also respect the block).


//// ****************.[4]. using const***************
//// [4.1].

// const x = 10;           // Declare a constant variable x and initialize it to 10.

// function getName() {
//   x = 20;               // This line will cause a TypeError because x is a constant
//   return 'Namaste JavaScript ' + x;
// };

// console.log(getName()); // This line will not be executed due to the error above
// console.log(x);         // This line will not be executed due to the error above

//// [4.2].
// const x = 10;
// function getName() {
//   const x = 20          // "let", "const", "var" All Respect Function Block.
//   return 'Namaste JavaScript ' + x;
// };

// console.log(getName()); // Namaste JavaScript 20
// console.log(x);         // 10


//// *****************.[5].*********************

// var x = 1;
// abc();
// xyz();
// console.log(x);

// function abc() {
//   var x = 10;
//   console.log(x); 
// };

// function xyz() {
//   var x = 100;
//   console.log(x);
// };

// console.log(x);    /// "var" respect function block means only within will change not outside.

// output: 1 10 100


//// *******************.[6].********************

// function abc() {
//   let b = 100;
//   let a = 10;          //// "let" se "var" nahi chalega.
//   if (true) {
//     // var a = 12;     //// Error: idendtifier 'a' has been already defined. if above uncommented.
//     let a = 12;     
//     let b = 122;
//     console.log(a); // 12
//     console.log(b); // 122
//   }
// };

// abc();


//// *******************.[7].***********************

//// [7.1]. Re-Declaration NOT posible with first "let" then with "var".

// let b = 100;
// if(true) {
//   var b = 111; 
//   console.log(b); // SyntaxError :: Identifier 'b' has already been declared
// }
// console.log(b);


////  [7.2]. Re-Declaration variable "var" To "var" is posible. 

//// [a]. ("var" does not respect block; Can update outside variable).

// var b = 100;
// if(true) {
//   var b = 111;
//   console.log(b); // 111
// }
// console.log(b);   // 111


//// [b]. ("var" respect Function block; Can't update outside variable). 

// var b = 100;
// function x() {
//   var b = 111;
//   console.log(b); // 111
// };
// x();
// console.log(b);   // 100


// [c]. Re-Declare of "let" within scope is posible, but not outside. ( "let" & "const" Respect block but Not "var").

// let b = 100;
// if(true) {
//   let b = 111;
//   console.log(b); // 111
// }
// console.log(b); // 100


////  *******.[8]. JS Engine doesnt hoist "Function Expression" & "Arrow Function".***********************

//// [a]. With "let"

// let x = function () {
//   return 'hi';
// };
// console.log(this.x);     // undefined
// console.log(x());        // hi


//// [b]. with "const".

// const x = function () {
//   return 'hi';
// };
// console.log(this.x);   // undefined
// console.log(x());      // hi
// console.log(this.x()); // TypeError: this.x is not a function


//// [c]. diff ans with 'var'...

var x = function () {
  return 'hi'
};
console.log(x());       // hi...
console.log(this.x);    // "function exp."    // ƒ () { return 'hi'} 
console.log(this.x());  // hi...



//// *********************.[9].*****************************

for (var i = 0; i < 5; i++) {   //// It will print 5x 5, bocz of "var i = 0".
  setTimeout(() => {
      console.log(i);
  }, i*1000);
};

// The reason for this is, when the "setTimeout" callback function is executed, 
// it will reference the variable "i" from the parent scope, 
// which is the global scope in this case, Since "var" variables are function-scoped, not block-scoped. 
// By the time, the callback function is executed, the "for loop" has already completed, and the value of "i" is 5.

// So, each time the callback function is executed (after a delay of 1 second), 
// it will print the current value of i, which is 5. 
// This happens five times because the "for loop" iterates five times, so the output will be 5 5 5 5 5.

// To achieve the desired behavior of printing the numbers 0, 1, 2, 3, and 4, 
// We can create "a New Closure for each iteration" of the "for loop" by using an Immediately Invoked Function Expression (IIFE) 
// and passing in the current value of i as an argument. 

// Here's how you can modify the code to achieve this:

//// Fix using "let" ::

// for (let i = 0; i < 5; i++) {     // it will print 0 1 2 3 4, bocz of 'let i = 0'.
//   setTimeout(() => {
//       console.log(i);
//   }, i*1000);
// };

//// Fix using "Immediate_Invoked_Function_Expression".

// for(var i = 0; i < 5; i++) {
//   (function (j) {
//     setTimeout(() => {
//       console.log(j);
//     }, i*1000)
//   })(i)
// };


//// **************.[10].*****************

//// [10.1]. JS Engine DOESN'T hoist "Function Exp." & "Arrow func".

// bar();                   //// ReferenceError: Cannot access 'bar' before initialization
// //// using "let".
// let bar = () => {      
//   console.log('i am bar...');
// };

// //// using "const".
// const bar = () => {      //// JS Engine DOESN'T hoist "Arrow func".
//   console.log('i am bar...');
// };

// //// using "var".
// var bar = function() {     //// JS Engine DOESN'T hoist "Function Exp".
//   console.log('i am bar...');
// };


//// [10.2]. Function Declaration hoisted on the top.

// bar();     
// function bar() {             
//   console.log('i am foo...');  // i am foo...
// };