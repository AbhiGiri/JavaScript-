//// "Shallow Copy" V/S "Deep Copy"

//// Shallow Copy::
// When a "Referance Variable" is copied into a "New Reference Variable" using the assignment operator (=),
// a shallow copy of the "Referenced object" is created.

// A shallow copy creates a "New Object or Array" that shares some of the original object's properties or elements. 
// It means that if you change a "Property or element" in the Copied Object, it will also reflect in the Original Object.

// *** Assignment Operator will Not Copy the value, instead Both Variable will Reference The Same Object in the Memory.
// *** (Sharing The Same Memory).

//  If you want to create a separate copy of the object, you'll need to use explicit copying mechanisms like Object.assign(), the spread operator (...), or JSON.parse(JSON.stringify()) for deep copying.


//// ******* Shallow Copy ( will impact on Parent Object ) *******

let originalObj = {
  id: 'E101',
  name: 'Elon Mask', 
  age: {
    original: 28
  },
  hobbies: ['reading', 'playing guitar']
};

let shallowCopy = originalObj;

//// ******(1). For flat Object, ******
shallowCopy.name = 'Smith';

console.log(originalObj.name); // Smith (sharing the same memory)
console.log(shallowCopy.name);   // Smith (sharing the same memory)

//// ******(2). For Nested Object,( ) ******

shallowCopy.age.original = 33;
console.log(originalObj.age.original); // 33 
console.log(shallowCopy.age.original);   // 33 

shallowCopy.hobbies.push('code');
console.log(originalObj.hobbies);
console.log(shallowCopy.hobbies);






//// ******* Deep Copy  ( will `NOT` Impact Parent Object ) *******


let employee2 = {
  id: 'E101',
  name: 'Elon Mask'
};

//// ****** [A]. For flat Object, ******

//// ****** "3 Ways of Deep Copy"  ******************

//// (i). Using "JSON.parse(JSON.stringify())";

let newEmp2 = JSON.parse(JSON.stringify(employee2));
newEmp2.name = 'Smith';

// console.log(employee2.name); // Elon Mask
// console.log(newEmp2.name);   // Smith


//// (ii). Using "Object.assign(targetObj, ...sourceObjs) method"....

//// Eg. (a).
// ***If we want to use Object.assign() method but we don’t want to alter any object, 
// ***we can use an empty object as the first argument, like:

// let newEmp2  = Object.assign({}, employee2);
// newEmp2.name = 'Smith';

// console.log(employee2.name); // Elon Mask 
// console.log(newEmp2.name);   // Smith

// Eg. (b).
// const targetObj = {a: 1, b: 2};
// const sourceObj = {b: 3, c: 4};
// const result = Object.assign(targetObj, sourceObj);
// console.log(result);    // { a: 1, b: 3, c: 4 }
// console.log(targetObj); // { a: 1, b: 3, c: 4 }
// console.log(sourceObj); // {b: 3, c: 4}

////The main difference is that "Object.assign()" mutates the "target object" while "spread syntax does not".
// const result = Object.assign({...targetObj, ...sourceObj});
// console.log(result);    // { a: 1, b: 3, c: 4 }
// console.log(targetObj); // { a: 1, b: 2 }
// console.log(sourceObj); // { b: 3, c: 4 }


//// (iii). Spread Operator ({...});
//  the spread operator helps in creating a shallow copy of the top-level object, it doesn't create new copies of nested objects. 

// let newEmp2 = {...employee2};
// newEmp2.name = 'Smith';

// console.log(employee.name); // Elon Mask
// console.log(newEmp.name);   // Smith



//// ****** [B]. For Nested Object, ******

//// Use "JSON.parse(JSON.stringify(object))". // For Deep Copy

// const person = {
//   name: 'abhi',
//   age: {
//     original: 28
//   }
// };

// let newPerson = {...person};                        //// impacting parent using "{...spread}".
// let newPerson = Object.assign({}, person);          //// impacting parent using "Object.assign({}, person)".
// let newPerson = JSON.parse(JSON.stringify(person)); //// "NOT" impacting parent using "JSON.parse(JSON.stringify)".
// newPerson.age.original = 30;

// console.log(person.age.original);    // 28
// console.log(newPerson.age.original); // 30



//// ******* DEEP CLONE *******

// let clone = { ...person };
// clone = {
//   ...clone,
//   age: {
//     ...clone.age,
//     original: 33
//   }
// };

// console.log(person.age.original); //28
// console.log(clone.age.original); //33
