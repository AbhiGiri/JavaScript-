//// Recursion ::
// Recursion is a programming technique, in which, a function calls itself to solve a problem.
// It can be used to solve problems, that can be broken down into smaller, simpler versions of the same problem.
// Recursion can be a powerful tool in programming, 
// but it's important to use it carefully to avoid "stack overflow errors" and other problems.


//// Ex:: 01
//// Factorial of given number.

function factorial(n) {
  if (n < 0) {
    return "Input must be non-negative";
  } else if (n === 0) {     //// When n is 0, the function returns 1, which is the base case.           
    return 1;        //// The base case is necessary to prevent "infinite recursion".
  } else {
    return n * factorial(n-1);
  }
};

console.log(factorial(5)); // outputs 120
console.log(factorial(-2)); // outputs Input must be non-negative



//// Ex: 02
//// Sum of nth natural number using Recursion.

function sum(n) {
  if(n <= 1) {
    return n;
  };
  return n + sum(n - 1);
};

console.log(sum(5)); // outputs 15 (5+4+3+2+1)

//// Ex: 03.1
//// nth number in the Fibonacci sequence.

function nthFibonacciNumber(n) {
  if(n <= 1) {
    return n;
  }
  return nthFibonacciNumber(n - 1) + nthFibonacciNumber(n - 2);
};

console.log(nthFibonacciNumber(0)); // 0
console.log(nthFibonacciNumber(1)); // 1
console.log(nthFibonacciNumber(6)); // 8


//// Ex: 03.2
//// Fibonacci sequence

function fibonacciSeriesOfN(n) {
  let sum = 0
  const arr = [0, 1];
  for (let i = 0; i < n; i++) {
    sum = arr[i] + arr[i+1];
    arr.push(sum);
  }
  return arr;
};

console.log(fibonacciSeriesOfN(5));


//// Ex. 04
//// Reverse a string.
//// (i). Using Recursion
function reverseString(str) {
  if(str === "" ) { 
    return "";
  };

  return reverseString(str.substr(1)) + str.charAt(0)
};
console.log(reverseString('hello')); // olleh 

///// (ii). Using split, reverse, join
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString('hello')); // olleh 

//// (iii). Using for loop
function reverseString(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str.charAt(i);
  }
  return reversedStr;
}
console.log(reverseString("hello")); // outputs "olleh"

//// (iv). Using spread [...] and reverse()
function reverseString(str) {
  return [...str].reverse().join("");
};
console.log(reverseString("hello")); // outputs "olleh"


//// Ex. 05
//// find the maximum number in an array.
//// (i). Using Recursion.
function findMax(arr) {
  if(arr.length === 1)
   return arr[0];
  
  const maxRest = findMax(arr.slice(1));
  return (arr[0] > maxRest) ? arr[0] : maxRest;
};

console.log(findMax([1, 3, -5, 2, 4])); // 4

//// (ii). Most optimized way...
// function findMax(arr) {
//   let max = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }

// console.log(findMax([1, 3, -5, 2, 4])); // outputs 4

