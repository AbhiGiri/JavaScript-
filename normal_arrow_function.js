//// "Normal/Regular" V/S "Arrow" Function...

// (1). "Normal functions" are created using "Function Declaration/Expression", and these are "construtable" and "callable".
// (2). Arrow Function doesnt have their own "this".
// (3). Arrow Function doesnt have "arguments" object.
// (4). Arrow Funtion has "implicit" return.


//// Q. When We Should Not Use Arrow Function ?

//   [i]. As an Event Handler.
//  [ii]. In an Object Methods.
// [iii]. In Prototype Methods.
//  [iv]. Function that uses the "arguments" object.


//// Examples ::

//// [1]. Normal functions are created using "Function Declaration/Expression", and these are "construtable" and "callable".

//// (a). Regular Function or Constructor Function.

function car(name) {
  this.brand = name;
};
let carName = new car("Tesla");
console.log(carName);       
console.log(carName.brand); 


//// (b) Arrow Function.

const Bus = (name) => {
  this.brand = name;
};
let BusName = new Bus('BMW'); // Bus is not a constructor
console.log(BusName);



//// [2]. Arrow Function Doesnt Have Their Own "this".

///Eg.
let userInfo = {
  name: 'Abhishek',
  normalFun() {
    function test() {
      console.log(this.name);    // undefined
    };

    // const test = () => {
    //   console.log(this.name);      // Abhishek
    // };

    test();

    return this.name + ' Normal_Function.';
  },
  arrowFun: () => {
    // function test(){
    //   console.log(this.name);          // undefined
    // };

    // const test = () => {
    //   console.log(this.name);      // undefined
    // };

    // test();
    return this.name + ' Arrow_Function.';
  }
};

console.log(userInfo.normalFun()); // Abhishek Normal_Function
console.log(userInfo.arrowFun());  // undefined Arrow_Function.



//// [3]. Arrow Function Doesnt Have "arguments" Object.

//// (a). Normal Function

function add(a, b) {
  console.log(arguments);    // { [Iterator]  0: 2, 1: 5 }
  console.log(arguments[0]); // 2
  console.log(arguments[2]); // 8

  return a + b;
};
console.log(add(2, 5, 8)); // 7

//// (b). Arrow Function

const sum = (a, b) => {
  console.log(arguments); // ReferenceError: arguments is not defined
  return a + b;
};
console.log(sum(2, 5));    // 7



//// [4]. Arrow Function Has "Implicit" return.

//// (a). Normal Function.

// function add(a, b) {
//   a + b;
// };
// console.log(add(2, 5)); // undefined


//// (b). Arrow Function.

// const add = (a, b) => a + b;
// console.log(add(2, 5)); // 7




//// Q. When We Should Not Use Arrow Function ?

//// [i]. As an Event Handler ::

const greeting = document.querySelector('#greeting');
const userName = document.querySelector('#userName');

userName.addEventListener('keyup', () => {
  greeting.textContent = 'Hello ' + this.value; // Hello undefined
});

userName.addEventListener('keyup', function() {
  greeting.textContent = 'Hello ' + this.value; // Hello Abhishek
});


//// [ii]. In an Object Methods

///// using ***ARROW function......
// const counter = {
//   count: 0,
//   current: () => this.count,
//   next: () => ++this.count
// };

// console.log(counter.current()); // undefined
// console.log(counter.next()); // NaN

//// using ***NORMAL function........
// const counter = {
//   count: 0,
//   current() {
//     return this.count;
//   }, 
//   next() {
//     return ++this.count;
//   }
// };

// console.log(counter.current()); // 0
// console.log(counter.next());    // 1


//// [iii]. in Prototype Methods....

// function Counter() {
//   this.count = 0;
// };

// Counter.prototype.current = () =>{
//   return this.count;
// };
// Counter.prototype.current = function () {
//   return this.count;
// };
// Counter.prototype.next = () => {
//   return ++this.count;
// };
// Counter.prototype.next = function () {
//   return ++this.count;
// };

// const cc = new Counter();
// console.log(cc.current()); // 0
// console.log(cc.next());    // 1


//// [iv]. Function that use the "arguments" object.

const add1 = (a, b) => {
  console.log(arguments); // arguments are not defined.
  return a + b;
};
console.log(add1(10, 20));


function add(a, b) {
  console.log(arguments);
  return a + b;
};

console.log(add(10, 20));