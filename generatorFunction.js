//// Generator Function :::
// A Generator Function is a Special Type of Function, that can be used to define an "Iterator Object".
// Unlike Regular Function, which Returns a `Single Value and then Exit`,
// Generator Functions can yield `Multiple Values`, and then Pause Execution until the Next Value is Requested.

// Generator Functions are a Powerful Tool for working with `Iterables` in JS, and 
// can be used to write `Efficient & Concise` code for tasks, such as Data Processing, Iteration, and more.


//// (1). ******** Get Multiple Values **********

function getMultipleValues1() {
  return 10;
  return 20;
};
console.log(getMultipleValues1()); // 10

//// To Fix Above Using Generator Function

function* getMultipleValues2() {
  yield 10,       //// the "yield" statement is used to generate each value, 
  yield 20        
};
const result = getMultipleValues2();
console.log(result.next().value); // 10  //// the "next()" method is used to retrieve the next value in the sequence.
console.log(result.next().value); // 20
console.log(result.next().value); // undefined

//// or...
// for (let val of result) {
//   console.log(val); // 10, 20
// };

//// Generator functions can also receive arguments, which can be used to modify their behavior.

//// (2). ******** Sequence of Fibonacci numbers up to a certain limit: **********
function* fibonacci(limit) {
  let a = 0, b = 1;
  for(let i = 0; i < limit; i++) {
    yield a;
    [a, b] = [b, a + b];
  }
};

let g = fibonacci(10);
for (let value of g) {
  console.log(value);
};
// 0 
// 1 
// 1 
// 2 
// 3 
// 5 
// 8 
// 13 
// 21 
// 34