//// "this" in JS ::

// "this" keyword refers to an "Object", 
// which object depends on how "this" is being invoked/called.

//// [i].  "this" in "Object's Function":: "this" refers to the "Parent Object".
//// [ii]. "this" in a "Function/Arrow" :: "this" refers to "Window Object" (by Default). But In "Strict Mode", "this" is "undefined".
//// [iii]."this" "Alone"               :: "this" refers to "Window Object". 
//// [iv]. "this" in an "Event Handler" :: "this" refers to "HTML Elemnt" that received "The Event".
//// [v].  "this" in "Call,Apply,Bind"  :: "this" refers to "Any Object".
//// [vi]. "this" in a "Class"          :: "this" refers to the "Constructor(){ All The Variables Present Inside }";


//// "this" in ANY (Normal/Arrow Function), ALWAYS refers to "Window Object".
//// Regular Functions and this:
// In regular functions, this refers to the global object (or undefined in strict mode) when not called as a method of an object.

//// Arrow Functions and this:
// Arrow functions inherit this from their enclosing lexical context.

//// [i]. "this" in an "Object Method":: "this" refers to the "Object".

// "use strict"
const employee = {
  id: '01',
  firstName: 'Elon',
  lastName: 'Mask',
  check1: this,
  check2: this.id,
  fullName: function() {
    return this.firstName + ' ' + this.lastName; // Elon Mask
  }
};
console.log(employee.fullName()); 
console.log(employee.check1); 
console.log(employee.check2); 


//// [ii]. "this" Alone :: "this" refers to "Window Object". 

// console.log(this); // {}


//// [iii]. "this" in a Function :: Refers to "Window Object" (by Default). But in "strict mode", "this" is undefined.

// const myFun = () => {
//   return this;
// };
// console.log(myFun()); // Window {window: Window, self: Window, document: document, name: '', location: Location, …}


//// [iv]. "this" in an "Event Handler":: "this" refers to "HTML Element", that received "The Event".

  // <button onclick="this.style.display = 'none'">
  //   Click Me To Remove
  // </button>


//// [v]. "this" in "call(), apply(), and bind() Methods":: Refers to "Any Object".

//// 2 Ways of Object Binding in JS::

//// (a). Implicite :: In an object, a function is invoked using Dot(.) Notation.

const calc = {
  total: 0,
  add(a) {
    this.total += a;
    return this;
  }
};

const result = calc.add(5);
console.log(result.total); // 5


//// (b). Explicit :: call(), and apply() both are use to "call an object method" with another object (as argument).

// const person = {
//   name: 'Abhishek'
// };

// function printName(city) {
//   return this.name + ' from ' + city;
// };

// const naam = printName.call(person, 'RXL');
// console.log(naam); // Abhishek from RXL

// const naam = printName.apply(person, ['RXL']);
// console.log(naam); // Abhishek from RXL

// const naamFn = printName.bind(person);
// console.log(naamFn('RXL')); // Abhishek from RXL



//// [vi]. "this" in a class:: refers to all the variables present inside the constructor(){...};




// (A). *************************************************

// 'this' in ANY Arrow Function, ALWAYS refers to 'Window object'.
// 'this' in "Normal-Function-of-an-OBJECT", refers to 'Parent Object'.



// (B). *************************************************

// using "let & const" declarations at "Global-Variable" are not attached to the "Global-Object" as property.

// let a = 10;
// console.log(this.a); //undefined 
// console.log(a); //10 

// const b = 20;
// console.log(this.b); //undefined 

//   // BUT... (var does)
// var c = 30;
// console.log(this.c); // 30 
// console.log(window.c); // 30


// (C). *************************************************

// 'this' in "Normal-Function" refers to "Window-Obj".

// var a = 34;
// function getParams() {
//   console.log(this.a); // here "this" will target to "parent-object" (getParams), and getParams will target to "Window-Object".
// }
// getParams(); // 34


// 'this' in "Normal-Function-of-an-OBJECT" refers to the "Parent_Object".

// var a = 34;
// var person = {
//   b: 55,
//   getParams() {
//     // return this.a + " _&_ " + this.b;  // undefined _&_ 55, bcoz there is no 'a' in person obj.
//     return this;  // "Person-Object"  {b: 55, getParams: ƒ}, Not "Window-Object".
//   }
// };
// console.log(person.getParams()); // undefined _&_ 55

// ORRRRR.....

// var cal = {
//   total: 10,
//   subtract(a) {
//     this.total -= a;
//     return this;       // refers to "cal-OBJECT".
//     return this.total; // 7
//   }
// };

// console.log(cal.subtract(3)); // refers to "cal-OBJECT".


// 4). ***************************************************************

// 'this' in "Arrow-Function" refers to "Window-Object". and Normal function too.

// var a = 34;
// const getParams = () => {
//   return this.a;
// }
// console.log(getParams()); // 34

// 'this' in "Arrow-Function-of-an-Object" refers to the "Window-Obj" ALWAYS.

// this.a = 34;
// var person = {
//   b: 55,
//   getParams: () => {
//     return this.a + " _&_ " + this.b;  // 34 _&_ undefined
//     return this;  // Only "Window-object" NOT "Person-Object".
//   }
// };
// console.log(person.getParams()); // 34 _&_ undefined

// ORRRR........

// var cal = {
//   total: 10,
//   subtract: (a) => {
//     this.total -= a;
//     return this.total;
//     // return this.total; // NaN, bcoz here 'this' always refers to Window Object and there is no 'total' variable.
//   }
// };
// console.log(cal.subtract(3)); // "Window-Object"


// 5). ***************************************************************

// 'this' refers to Immediate "Parent-Object" in "Normal-Function-of-Nested-Object".

// var user = {
//   name: "Abhishek",
//   age: 22,
//   childObj: {
//     newName: 'Yogi',
//     getDetails() {
//       return this.name + " _&_ " + this.newName; //undefined _&_ Yogi
//     }
//   }
// };
// console.log(user.childObj.getDetails());

// ..........ORRRR..............

// 'this' in "Arrow-Function-of-Nested-Object" refers to "Window-Object", and not pointing to object hence gets empty.

// var user = {
//   name: "Abhishek",
//   age: 22,
//   childObj: {
//     newName: 'Yogi',
//     getDetails: (old) => {
//       var gold= 'Hira'
//       // return this; // "Window-Object" 
//       // return this.name; // empty (already defined in window obj: name: " ")
//       // return this.age;  // undefined
//       // return this.newName; // undefined
//       // return this.old; // undefined
//       // return old; // pintu
//       // return this.gold; // undefined
//       return gold; // Hira
//     }
//   }
// };
// console.log(user.childObj.getDetails('pintu'));

// ..........ORRRR............

// 'this' in "Arrow-Function-of-nested-function-object" refers to its "Immeditate-Parent-Object".

// var user = {
//   name: "Abhishek",
//   age: 22,
//   childObj: {
//     newName: 'Yogi',
//     getDetails() {
//       abc = 'gogo';
//       const nestedArrow = () => {
//         console.log(this, abc ) //{newName: 'Yogi', getDetails: ƒ} 'gogo'
//       }
//       nestedArrow();
//     }
//   }
// };
// user.childObj.getDetails();


// 6). ***************************************************************
// 'this' inside the "class" refers to "User-Object" or all the variables of the constructor().

// class User {
//   constructor(n) {
//     this.address = 'Anhad';
//     this.name = n;
//   };

//   getName() {
//     console.log(this, this.name); // "User-Object i.e, User {name: 'Abhishek'}"  and, Abhishek
//   };
// };

// const user = new User('Abhishek');
// user.getName();


// 7). O/P Based Question **********************************

// (a).*********************

// const firstName = "Ajit_const"; 
// // let firstName = "Ajit_let";
// // var firstName = "Ajit_var";

// const user = {
//   firstName: 'Abhishek',
//   getName() {                   // ***Normal Function***
//     const firstName = "Ajit_2"
//     console.log(this.firstName); // Abhishek //here 'this' will refer to the "user-object".
//     console.log(firstName); // Ajit_2 //here local property
//   },
//   getName2: () => {              // ***Arrow Function***
//     console.log(this.firstName); // Ajit_1; //// here 'this' will ALWAYS refer to the "Window-object", but property must be defined with "var" keyword.
//     console.log(this.firstName); // undefined; //// here 'this' will ALWAYS refer to the "Window-object", but property is defined with "let/const" keyword.
//     console.log(firstName);      // Ajit_1; //// here 'firstName' ALWAYS refer to the property of "Window-object" i.e, is either defined by "let/const/var" keyword.
//   }
// };

// // Normal Function => 'Window Object'
// function getName3() {
//   console.log(this)
// };

// // Arrow Function => ' Window Object'
// const getName4 = () => {
//   console.log(this)
// };

//// Calling methods
// user.getName();
// user.getName2();
// getName3();
// getName4();

// (b). ******************************

// function makeUser() {
//   return {
//     name: "Abhishek",
//     ref: this         //here "this" refers to "Window object" because this function's parent object is "Window Object".
//   };
// };

// console.log(makeUser().ref); // 'Window Object
// console.log(makeUser().ref.abc); // undefined
// console.log(makeUser().ref.name); // Empty String... Not null
// console.log(makeUser().name); // Abhishek

// ******** To FIX THIS, need to create 'ref()' function *************

// function makeUser() {
//   return {
//     name: "Abhishek",
//     ref() {
//       return this;   //// "this" will refer to "Parent-OBJECT"; i.e, name='Abhishek'
//     } 
//   };
// };
// console.log(makeUser().ref().name); // Abhishek

// (c). ******************************

// const user = {
//   nam: 'Abhi',
//   name: 'Abhi',
//   getName() {
//     console.log(this.nam); // undefined
//     console.log(this.name); // empty string
//   }
// };
// setTimeout(user.getName, 1000); // here "setTimeout" takes "user.getName()" as a paramerter i.e callback(), 
                                // which refers to "window.cb()"
// user.getName(); // Abhi Abhi 

// TO FIX, need to wrap "user.getName()" inside a callback.

// 
// setTimeout(() => {
//   user.getName()
// }, 1000)


// (d).***************************

// const user = {
//   naam: 'Abhishek',
//   name: 'Abhishek',
//   greet() {
//     console.log(`Hello ${this.naam}`); // Hello Abhishek
//   },
//   goodbye: () => {
//     console.log(`Goodbye ${this.naam}`); // Goodbye undefined
//     console.log(`Goodbye ${this.name}`); // Goodbye _________ (empty bcoz of name: ' ')
//   },
// };

// user.greet(); //Hello Abhishek
// user.goodbye(); //Goodbye _________
  
// (e). **************************

// Create an Object Calculator.

// const calculator = {
//   read() {
//     this.a = +prompt("a = ", 0);
//     this.b = parseInt(prompt("b = ", 0));
//   }, 

//   sum() {
//     return this.a + this.b;
//   },

//   mul() {
//     return this.a * this.b;
//   }
// };

// calculator.read();
// console.log(`sum: ${calculator.sum()}`);
// console.log(`mul: ${calculator.mul()}`);

// (f). ********************************

// var length = 42;
// function anyCallback() {
//   console.log(this);
// };

// const anyObj = {
//   name: 'Abhi',
//   length: 5,

//   anyMethod(cb) {
//     cb() // this cb will call the above function, and that will refer to "window-Object"
//   }

// };

// anyObj.anyMethod(anyCallback); // 42

// MODIFIED Above Question ************

// var length = 22;
// function callback() {
//   console.log('a');         // a
//   console.log(this.length); // 4 here 'this' will target to array object and array has property length 4 thats why 4;
// };

// const object = {
//   length: 35,
//   method() {  // arguments [callback, 21, 25, 33]  
//               // this array is itself an object. so calling the callback will target 
//               // to its parent object which is array itself and prototype of this array 
//               // has a property called 'length' so length of this array is 4. so output 4.
//     arguments[0]()
//     console.log(arguments[1]);
//   }
// };

// object.method(callback, 21, 25, 33); //4 parameters


// (g). ********************************

// const calObj = {
//   total: 0,
//   add(a) {
//     this.total += a;
//     return this;
//   },
//   mul(b) {
//     this.total *= b;
//     return this;
//   },
//   sub(c) {
//     this.total -= c;
//     return this;
//   }
// }
// const result = calObj.add(10).mul(2).sub(2).add(3);
// console.log(result.total); // 21
