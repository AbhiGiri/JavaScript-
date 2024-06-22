//// ************* "let" :: "const" :: "var" *************
// (These are used to "Declare A Variable").

//// let::
// "let" has "Blocked Scope". "let" Respect block scopes {}.
// "let" is Hoisted without "initilization", and returns a "Reference Error": Cannot access 'x' before initialization.
// Using "let" keyword, "Global Variables" are Not Attached to the "Global/Window Object" as a Property.
// "let" with "Callback Function", in a "For Loop", Used To Create Another Scope, so that Each Callback Function referances a "New Variable".
// "let" Does Not allow to "Redeclare" a varable with_in the "same scope". It causes an "SyntexError": 'already declared'.
// "let" goes in the "Temporal_Dead_Zone" for the time being, till it is not 'initilized' some value.
// "let" with "Object":: "Properties of the Object" are mutable. But Not "Object" itself.
// "let" with "Array" :: "Properties of the Array"  are mutable. But Not "Array".


//// const::      // (immutable).
// "const" has also "Blocked Scope". "const" also Respect block scopes {}.
// "const" is also Hoisted without "initilization", and returns a "Referance Error".
// Using "const" keyword, "Global Variables" are also Not Attached to the "Global/Window Object" as a Property.
// "const" with "For Loop" will Not Work. Causes TypeError: Assignment to Constant Variable. But will work with "for_of".
// "const" also Does Not allow to "Redeclare" a variable with_in the "Same Scope".
// "const" also goes in the "Temporal Dead Zone" for the time being, till it is not "initilized" some value.
// "const" with "Object":: "Properties of the object" are mutable. But not object. (cannt redeclare).
/// Eg. 
// const person = [{age: 30}];    // const person = [ {age: 30} ];       // const person = Object.freeze({age: 30});
// person.age = 40;  // allowed   // person = {age: 40}; // TypeError... // person.age = 40; // TypeError...
// 
// "const" with "Array":: "elements of the Array" are mutable. But not Array. (cannt redeclare).
/// Eg. 
// const colors = ['red', 'green'];
// colors = []; // TypeError

//// var::
// "var" has "Global/Function-level Scope". "var" Does Not respect block scopes {}.
// "var" is  Hoisted, and initilized as " undefined ".
// using "var" keyword, "Global Variables" are Attached with Global/Window Object as a property.
// "var" with "For Loop" Doesnt create a New Scope. It loop through the same scope.
// "var" allows the "Redeclaration".
// "var" Does Not go in "Temporal_Dead_Zone".
// "var" with "Object":: are mutable along with its properties.
// "var" with "Array" :: are mutable along with its elements.


// ***When we use the "var" keyword to "Declare A Variable" within a "For Loop", 
// "the variable is Hoisted" to the "top of the Function / Global Scope", 
// rather than being block-scoped to the "for loop".
//
// This means that "Each Iteration of the for loop" Re-Assigns the Same Variable, 
// rather than creating a "New Variable" with Each Iteration. 
//
// This can cause unexpected behavior, and bugs in your code.


//// [1]. "const" Example:- ( const respect {} );

// const fruit = 'apple';
// {
//   const fruit = 'orange';
//   console.log(fruit); // orange
// };
// console.log(fruit);   // apple


//// [2]. "let" Example:- ( let respect {} );

// let fruit = 'apple';
// {
//   let fruit = 'orange';
//   console.log(fruit); // orange
// };
// console.log(fruit);   // apple


//// [3]. Reassinging will change the global one too. either "in block" or "in function".

// let fruit = 'apple';
// {
//   fruit = 'orange';
//   console.log(fruit); // orange
// };
// console.log(fruit);  // orange


// let fruit = 'apple';
// function faal() {
//   fruit = 'orange';
//   console.log(fruit); // orange
// };
// faal();
// console.log(fruit);   // orange


//// [4]. "var" Example:- ( var does not respect {} );

// var fruit = 'apple';
// {
//   var fruit = 'orange';
//   console.log(fruit); // orange
// }
// console.log(fruit);   // orange


// var fruit = 'apple';  // ( var respect function {} );
// function abc() {
//   var fruit = 'orange';
//   console.log(fruit); // orange
// }
// abc();
// console.log(fruit);  // apple



//// (a).********** Reassign 'const' variable. **********
// const a = 5;
// function abc() {
//   a = 6;             // "a = 6" get me an error, but "const a = 6" is ok.
//   console.log(a);    // TypeError: Assignment to constant variable.
// };
// abc();



//// (b).********** 'const' declarations must be initialized, with some value.**********

// const a;            // Uncaught SyntaxError: Missing initializer in const declaration
// function xyz() {
//   a = 6;            // TypeError: Assignment to constant variable.
//   console.log(a);
// };
// xyz();


//// (c). *** Using "let" & "const" declarations at "Global Variable" are not attached to the "Global-Object" as Property.**********
////      *** But "var" does.**********

// let x = 10;
// console.log(this.x); // undefined 

// const y = 10;
// console.log(this.y); // undefined 

// var z = 10;
// console.log(this.z); // 10 


// ****************
// b = 25;
// var b
// console.log(b); // 25


//// Temporal Dead Zone :: 
// TDZ is the time, in which, when a variable is declared with 'let' and 'const' keyword, 
// was hoisted and till it is not initilized some value, the time between them is TDZ.
// let and const are in the TDZ for the time being...