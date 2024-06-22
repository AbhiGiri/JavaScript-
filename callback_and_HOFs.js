//// [1]. Callback Function :: 

// A "Callback function" is a Function, that is passed to Another Function as an Argument,
// which can be invoked inside the function to perform some action.
// The Purpose of the "Callback Function" is to "Provide A Way" to "Customize The Behavior of the Function", that receives it.

//// Advantage:: 
// Callbacks are a powerful tool in programming, and are used in many different scenarios, such as 
// (i).  Event Handling, 
// (ii). Asynchronous Programming, and 
// (iii).Functional Programming.

//// Issues-with-Callback ::
// (i). Callback Hell.         ( Callback inside callback; Nested Callback). To avoid it, We've "Promise" & "Async/Await".
// (ii).Invension of Control.  ( We may lose the control of our program).


//// [2]. HOFs (Higher Order Functions) ::

// A "HOF" is a function, that takes one or more Functions as arguments, and/or returns a Function as its Result.
// The "HOFs" are used to Abstract the "common patterns" and "behaviors". (such as mapping or filtering over a collection of data.)
// It means that we can use HOFs to write functions that Encapsulate certain behavior in a way, that makes it more "Reusable" and "Easier" to work with.

// Some examples of HOFs include map(), filter(), reduce() in JavaScript.
// These functions take another function as an argument, and apply them to "each element of an array" to perform some operation on the data.


//// *********** function abc() is callback fn.***********

// function xyz(y) {
//   console.log('x'); // x
//   y();
// };

// xyz(function abc() {
//   console.log('y'); // y
// });

////  OR...Using Arrow Function
// xyz(y = () => {
//   console.log('y');
// });


//// *********** here, isEven() & isOdd() are callback functions.***********

// Because here, the hOFs() function accepts "a function" as an argument,
// it’s called a high-order function.

// function hOFs(arr, cbfn) {
//   let result = [];

//   //// **** Using for-of ****

//   // for (let num of arr) {
//   //   if (cbfn(num)) {
//   //     result.push(num);
//   //   }
//   // };

//   //// **** Using map() method ****

//   arr.map(num => {
//     if(cbfn(num)) {
//       result.push(num)
//     }
//   });

//   return result;

// };

// //// callbacks
// function isEvenCB(num) {
//   return num % 2 == 0;
// };

// function isOddCB(num) {
//   return num % 2 != 0;
// };


// arr = [1, 2, 3, 4];
// console.log(hOFs(arr, isEvenCB)); // [ 2, 4 ]
// console.log(hOFs(arr, isOddCB));  // [ 1, 3 ]


// *********** (3)***********
//// Can you give an example of how callbacks are used in asynchronous programming?
// When you use a callback to continue code execution after an asynchronous operation, 
// the callback is called an asynchronous callback.

// let url = 'https://wwww.javascripttutorial.net/pic.jpg';

// function download(url, cbf) {
//   setTimeout(() => {
//     console.log(`downloading ${url}`);
//     cbf(url)
//   }, 1000);
// };

// function process1(url) {
//   console.log(`picture processsed1: ${url}`);
// };
// process1(url);

// download(url, function process (url) {
//   console.log(`picture processsed: ${url}`);
// });


//// *********** (4) handling error ***********

// function download(url, success, failure) {
//   setTimeout(() => {
//     // console.log(`Downloading the picture from ${url} ...`);
//     !url ? failure(url) : success(url);
//   }, 1000);
// };

// let url = 'https://wwww.javascripttutorial.net/pic.jpg';

// download('',
//   (url) => console.log(`Processing the picture ${url}`),
//   (url) => console.log(`The '${url}' is not valid`)
// );


//// *********** (5). setTimeout + closure ***********

// function abc() {
//   let x = 10;

//   setTimeout(function () {
//     console.log(x);
//   }, 0);

//   console.log('Namaste JS');

// };

// abc(); // Namaste JS, 10


//// ___"var"___using_____"for loop"________ 

// function abc() {
//   for (var i = 0; i <= 4; i++) {

//     setTimeout(() => {
//       console.log(i); // 5X 5 (var i = 0;)
//     }, i * 1000);  

//     console.log(i);   // 0, 1, 2, 3, 4
//   }
// };

// abc();                // first 0, 1, 2, 3, 4 then 5 5 5 5 5


//// Using 'let', "'let' creates a new lexical scope in each iteration."

// function abc() {
//   for (let i = 1; i <= 4; i++) {
//     setTimeout(() => {
//       console.log(i);      // 1, 2, 3, 4 (let i = 1);
//     }, i * 1000);
//   }
//   console.log('Namaste');  // Namaste
// };
// abc();                     // first Namaste then 1, 2, 3, 4



//// Wrapping setTimeout() within "close()" function to create new lexical scope.

// function abc() {
//   for (var i = 1; i <= 5; i++) {
//     function close(a) {
//       setTimeout(() => {
//         console.log(a);
//       }, a * 1000);
//     };
//     close(i);
//   }

//   console.log('Dell');
// };

// abc();

//// OR... using IIFE
// function abc() {
//   for (var i = 1; i <= 5; i++) {

//     (function(a) {
//       setTimeout(() => {
//         console.log(a);
//       }, a * 1000);
//     }
//     )(i);
//   }

//   console.log('Dell');
// };

// abc();


//// ************************************

// console.log('Script Starts');
// setTimeout(() => {
//   console.log('setTimeout');
// }, 0);

// Promise.resolve()
//   .then(() => console.log('Promise1'))
//   .then(() => console.log('Promise2'));

// console.log('Script Ends'); //// Start Promise1 Promise2 setTimeout


//// ************************************
// console.log('a');
// setTimeout(() => {
//   console.log('b');
// }, 1000);
// setTimeout(() => {
//   console.log('c');
// }, 0);
// console.log('d');   // a d c b(after 1sec)


// ************************************HOF************************

// ******* Simple Function  with an array*******
// const radiusArr = [3, 5, 1, 2];

//// ******calculate Area (Pi.r.r)*******
// function calculateArea(arr) {
//   const output = [];
//   // for (let i = 0; i < arr.length; i++) {
//   //   output.push(Math.PI * arr[i] * arr[i]);
//   // }
//   arr.map(r => {
//     output.push(Math.PI * r * r)
//   })
//   return output;
// }
// console.log(calculateArea(radiusArr));


//// ******calculate Circumference (2.Pi.r)*******
// const calculateCircumference = function (arr) {
//   const output = [];
//   arr.map(r => {
//     output.push(2 * Math.PI * r);
//   })
//   return output;
// };
// console.log(calculateCircumference(radiusArr));


// // ******calculate diameter (2.r) *******
// const calculateDiameter = function (arr) {
//   const output = [];
//   arr.map(r => {
//     output.push(2 * arr[i]);
//   });
//   return output;
// };
// console.log(calculateDiameter(radiusArr));


//// Remove Duplicate code of 'for loop'/ 'arr.map()' (using HOF) and separating methods and an array **

// //// ****** Area Method ********
// function area(r) {
//   return Math.PI * r * r;
// };

// /// ***** Circumference Method ******
// function circumference(r) {
//   return 2 * Math.PI * r;
// };

// //// ****** Diameter Method ******
// function diameter(r) {
//   return 2 * r;
// };  

//// **** HOF ***** this function behave like a polyfill for map() ******
// function calculate(rdsArr, func) {
//   const output = [];
//   // for(i = 0; i < rdsArr.length; i++) {
//   //   output.push(func(rdsArr[i]));
//   // };

//   //// Or using map()
//   rdsArr.map(r => {
//     output.push(func(r));
//   });
//   return output;
// };

// console.log(calculate(radiusArr, area));
// console.log(calculate(radiusArr, circumference));
// console.log(calculate(radiusArr, diameter));


//// *********** Array Prototype **********

// let radius = [3, 5, 1, 2];
// // ****** Area Method********
// let area = (r) => {
//   return Math.PI * r * r;
// };

// // ******* Circumference Method******
// let circumference = (r) => {
//   return 2 * Math.PI * r;
// };

// // ********Diameter Method******
// let diameter = (r) => {
//   return 2 * r;
// };

// // **** HOF *****
// Array.prototype.calculate = function (func) {
//   const output = [];
//   for (i = 0; i < this.length; i++) {
//     output.push(func(this[i]));
//   }
//   return output;
// };
// console.log(radius.map(area));
// console.log(radius.calculate(area));
// console.log(radius.calculate(circumference));
// console.log(radius.calculate(diameter));


// // console.log(radius.calculate(area));
// // console.log(radius.map(area));

// function multiplyBy(num, callback) {
//   return function (x) {
//     const result = num * x;
//     return callback(result);
//   };
// };

// const multiplyBy3AndAdd2 = multiplyBy(3, num => num + 2);
// const result = multiplyBy3AndAdd2(5);
// console.log(result); // 17 (5 * 3 + 2)

// function sumOfEvens(numArr, callback) {
//   let sumOfNums = 0;
//   for(let num of numArr) {
//     if(callback(num)) {
//       sumOfNums += num;
//     }
//   }
//   return sumOfNums;
// };

// const result = sumOfEvens([1, 2, 3, 4, 5], num => num % 2 === 0);
// console.log(result); // 6

//// using reduce method
// function sumOfEvens(arr, callback) {
//   return arr.reduce((acc, num) => {
//     if(callback(num)) {
//       acc += num;
//     };
//     return acc;
//   }, 0);

// };

// const result = sumOfEvens([1, 2, 3, 4, 5], num => num % 2 === 0);
// console.log(result);// 6
