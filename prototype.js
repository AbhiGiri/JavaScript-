//// [1]. What is a prototype in JavaScript?
// A prototype is an object, that is associated with every object created using a "constructor function" or the "Object.create()" method. 
// The "prototype object" contains "properties" & "methods", that are shared by all instances of the object type. 
// When a "property" or "method" is accessed on an instance of an object, 
// JavaScript first looks for it on the "instance itself", and if it is not found, it looks for it on the "instance's prototype". 
// This is known as the prototype chain, and it allows for efficient code "reuse" and "inheritance" in JavaScript.

//// Example [1]. using "Constructor Function".

//// i). Define a constructor function for a Person object.
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// };

//// ii). Add a method to the Person object's prototype.
// Person.prototype.greet = function() {
//   console.log("Hello, my name is " + this.name + " and I'm " + this.age + " years old.");
// };

//// iii). Create two instances of the Person object.
// var john  = new Person("John", 30);
// var sarah = new Person("Sarah", 25);

//// iv). Call the greet method on both instances.
// john.greet();  // Outputs: "Hello, my name is John  and I'm 30 years old."
// sarah.greet(); // Outputs: "Hello, my name is Sarah and I'm 25 years old."



//// Example [2]. using "Object.create()" Method.
//// [i]. Define a prototype object for a Person.
// var personPrototype = {
//   greet: function() {
//     console.log("Hello, my name is " + this.name + " and I'm " + this.age + " years old.");
//   }
// };

//// [ii]. Create a new object with the personPrototype as its prototype
// var john = Object.create(personPrototype);
// john.name = "John";
// john.age = 30;

// var sarah = Object.create(personPrototype);
// sarah.name = "Sarah";
// sarah.age = 25;

//// [iii]. Call the greet method on both objects
// john.greet(); // Outputs: "Hello, my name is John and I'm 30 years old."
// sarah.greet(); // Outputs: "Hello, my name is Sarah and I'm 25 years old."



//// Example [3]. Using "Object.setPrototypeOf()" Method.
// This method sets the prototype (i.e., [[Prototype]]) of one object to another object. 

// var personPrototype = {
//   greet: function() {
//     console.log("Hello, my name is " + this.name + " and I'm " + this.age + " years old.");
//   }
// };

// var john = {
//   name: "John",
//   age: 30
// };

// Object.setPrototypeOf(john, personPrototype);

// john.greet(); // Outputs: "Hello, my name is John and I'm 30 years old."



//// [2]. What is prototypal inheritance in JavaScript?
// Prototype inheritance is a mechanism, by which 
// JS Objects can inherit "the features" from one another. And
// we can also add "the properties" to "the object".

// JS is a "Prototype based language".
// So, whenever, we create an object/array/function, JS Engine adds a "Prototype Property" inside them.

// "Prototype Property" is basically an "Object",  (i.e, Prototype Object)
// where we can attach "Methods and Properties" in a protptype object,
// which enables all the "other Objects" to inherit these "Methods and Properties".

//// Example (1). for Objects *************************

// object.__proto__          => Object.prototype{}
// object.__proto__.proto__  => null

//// Example-01

// let obj1 = {
//   name: 'Abhishek',
//   city: 'RXL'
// };

// let obj2 = {
//   name: 'Ajit'
// };

// obj2.__proto__ = obj1;
// console.log(obj2.city); // RXL   // obj2 inheriting "city" property from obj1.
// console.log(obj2.name); // Ajit
// console.log(obj1.name); // Abhishek


//// Example- 02

// let obj1 = {
//   name: 'Ramesh',
//   age: 30
// };

// let obj2 = {
//   name: 'Suresh',
//   age: 32,
//   fun1: function () {
//     console.log(this.name);
//   }
// }

// console.log(obj2.__proto__); // before (constructor fn)
// obj2.__proto__ = obj1
// console.log(obj2.name);      // Suresh (first it will search 'name' in 'obj2', if not found, go to 'obj1')
// console.log(obj2.__proto__); // after
// console.log(obj2.name);      // Suresh


//// Example :: (2). for Arrays *************************

//// arr.__proto__                     => Array.prototype{}
//// arr.__proto__.__proto__           => Object.prototype{}
//// arr.__proto__.__proto__.__proto__ => null

// Array.prototype.sum = function() {
//   var total = 0;
//   for (var i = 0; i < this.length; i++) {
//     total += this[i];
//   }
//   return total;
// }

// var myArray = [1, 2, 3];
// console.log(myArray.sum()); // Output: 6



//// Example :: (3). for Functions *************************

//// fun.__proto__                     => Function.prototype{}
//// fun.__proto__.__proto__           => Object.prototype{}
//// fun.__proto__.__proto__.__proto__ => null

//// Example -01
// console.log(Function);
// console.log(Function.prototype); 

// Function.prototype.myFunc = function () {
//   console.log('my prototype function');
//   return 10;
// }

// function abc() {

// }
// console.log(abc.__proto__);
// console.log(abc.myFunc());

//// Example -02
// function Student(fName, lName) {
//   this.firstName = fName;
//   this.lastName = lName;
// };

// // class Student {
// //     constructor(fName, lName) {
// //         this.firstName = fName;
// //         this.lastName = lName;
// //     }
// // }

// let student1 = new Student('Ramesh', 'Singh');
// let student2 = new Student('Suresh', 'Soni');

// console.log(student1);
// console.log(student2);

// Student.prototype.nationality = 'Indian';

// console.log(student1.nationality);
// console.log(student2.nationality);


//// Example -03
// let emp = {
//   fName: 'Abhishek',
//   lName: 'Kumar',
// };

// function printFullName(hometown, state) {
//   console.log(`${this.fName} ${this.lName } from ${hometown} ${state}`);
//   // or return
//   // return `${this.fName} ${this.lName } from ${hometown} ${state}`;
// };

//// ***** Polyfill for call() *********
// Function.prototype.myCall = function(obj, ...args) {
//   obj.fnToCall = this;
//   obj.fnToCall(...args)
// };
// printFullName.myCall(emp, 'RXL', 'Bihar');