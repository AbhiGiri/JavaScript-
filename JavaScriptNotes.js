//// [1]. JavaScript ::
// JavaScript is an Object-based/oriented Scripting Language, which is "Lightweight & Cross-Platform".
// A Scripting Language is a type of Programming Language, "Designed for a Runtime System", to Automate the Execution of Tasks.
// JavaScript Follows the "Syntax & Structure of the C PL", thus, it is a Structured PL.
// JavaScript is an "Object-Oriented PL", that uses "Prototypes" rather than using "Classes" for **Inheritance**.


//// [2]. Java v/s JavaScript ::
// As Programming Languages use a "Compiler", hence, "the complete program" is converted into "Machine Code" in One Shot. 
// Whereas, 
// Scripting languages use an "Interpreter",  hence, "the complete program" is converted into "Machine Code" Line-By-Line.
 

//// [3]. ES6 Features :: 
// i).   let, 
// ii).  const, 
// iii). Rest Parameter, 
// iv).  Spread Operator, 
// v).   Destrucuring, 
// vi).  Template Literal, 
// vii). Arrow Function, 
// viii).Generator Function


//// [A]. Data Types and Variables ::
// [1]. "Primitive Data Types" ? Inadev 
// [2]. "null" v/s "undefined" .
// [3]. "var", "let", & "const".
// [4]. "Dynamic Typing" & "Static Typing" ?
// [5]. How do you "check the type of a variable" ?
// [6]. Explain the concept of "Type Coercion"? Provide examples of "implicit" & "explicit" Type Coercion.
// [7]. How do you convert a "string to a number" ? What about converting a "number to a string"?
// [8]. Diff. b/ == and === ? Give examples to illustrate their differences.

//// [B]. Functions and Scope ::
// [9].  What is the diff b/ "function Declarations" and "Function Expressions"?
// [10]. Explain the concept of "Lexical Scoping". How does it determine variable Access & Resolution?
// [11]. What are "Higher-Order Functions"? Explain its purpose.
// [12]. Explain the concept of "Closures". How do they work, & why are they useful?
// [13]. How do you handle "Asynchronous" Operations using callbacks?
// [14]. Discuss the diff b/ function scope, block scope, and global scope.
// [15]. How do you pass arguments to a JavaScript function? Explain the diff b/ call by value and call by reference.
// [16]. What are Arrow functions? How do they differ from regular functions?
// [17]. Explain the concept of hoisting. How does it affect variable and function declarations?
// [18]. How do you create and use immediately-invoked function expressions (IIFEs)?

//// [D]. Asynchronous programming in JavaScript:
// [30] What is asynchronous programming in JavaScript, and why is it important?
// [30] What are callbacks in JavaScript? How do you handle asynchronous operations using callbacks?
// [30] What are promises in JavaScript? How do they simplify asynchronous programming compared to callbacks?
// [30] Explain the concept of async/await in JavaScript. How does it make asynchronous code appear more synchronous?
// [30] What is the purpose of the event loop in JavaScript? How does it handle asynchronous operations?
// [30] What are the differences between setTimeout, setInterval, and requestAnimationFrame functions in JavaScript?
// [30] How do you handle errors in asynchronous JavaScript code? Explain the use of try/catch and error-first callbacks.
// [30] Discuss the concept of Promisification and how it converts callback-based APIs into promise-based APIs.
// [30] What are async functions in JavaScript? How do they work, and how do they relate to promises?
// [30] Explain the concept of concurrency and parallelism in JavaScript asynchronous programming.


//// [E].  Arrays and Iteration in JavaScript:
// [40] How do you create an array in JavaScript? Provide an example.
// [40] Explain the difference between an array and an object in JavaScript.
// [40] How do you access and modify elements in an array?
// [40] What are some useful array methods in JavaScript? Provide examples of their usage.
// [40] Explain the concept of iteration in JavaScript. How do you iterate over an array?
// [40] What is the difference between the forEach method and a for loop for iterating over an array?
// [40] How do you filter elements in an array using the filter method? Provide an example.
// [40] What is the map method in JavaScript? How does it work and what does it return?
// [40] How do you reduce an array to a single value using the reduce method? Provide an example.
// [40] Discuss the concept of array destructuring in JavaScript. How does it work and what is it used for?


//// [F].  DOM Manipulation and Events in JavaScript :
// What is the Document Object Model (DOM) in JavaScript?
// How do you access and manipulate DOM elements using JavaScript?
// Explain the difference between innerHTML and textContent properties in DOM manipulation.
// How do you create new HTML elements dynamically using JavaScript?
// How do you add and remove classes from DOM elements using JavaScript?
// What are event listeners in JavaScript? How do you attach event listeners to DOM elements?
// Explain the concept of event propagation (bubbling and capturing) in JavaScript.
// How do you prevent the default behavior of an event in JavaScript?
// What is event delegation in JavaScript? How does it work and why is it useful?
// Discuss the concept of event delegation in JavaScript. How does it work and why is it useful?


//// [G]. Error Handling and Debugging in JavaScript :
// What are some common types of errors in JavaScript?
// How do you handle errors in JavaScript? Discuss the use of try/catch blocks.
// Explain the concept of error propagation and how it can be managed in JavaScript.
// How do you create custom errors in JavaScript using the Error constructor?
// What are some debugging techniques and tools available in JavaScript?
// How do you use console.log() to debug JavaScript code?
// Explain the concept of breakpoints and how they can be used for debugging.
// How do you use the JavaScript debugger statement to pause code execution?
// What are some best practices for effective error handling and debugging in JavaScript?
// How do you handle asynchronous errors in JavaScript?


//// [H]. JavaScript Storage Related ::
// [70]. What are the diff. types of "Storage" mechanisms available in JavaScript?
// [71]. What is  the diff b/ "localStorage" and "sessionStorage"?
// [72]. How can you Store Data in "localStorage" in a React App?
// [73]. How can you handle the "removal or clearing" of stored data in "localStorage"?
// [74].`localStorage` v/s `sessionStorage` v/s `cookies`.
// [75]. Why cookies are still favored in certain scenarios?



//// [1]. What are the "Primitive Data Types" ?

// 1. "string", 2. "number", 3. "boolean", 4. "null", 5. "undefined", and 6. "symbol".


//// [2]. Explain the diff b/ "null" & "undefined" .

//  "null" is an "Assignment Value", that represents the Intentional Absence of Any Object Value, while 
// "undefined" is a "Default Value", that is automatically assigned to variables that have been declared, But Not Assigned a Value.


//// [3]. Discuss the diff. b/ "var", "let", and "const".

// "var" has Function Scope, and can be Redeclared & Reassigned. 
// "let" has Block Scope, and can be Reassigned but Not Redeclared. 
// "const" also has Block Scope, but cannot be Reassigned or Redeclared, making it a constant.


//// [4]. What is the diff. b/ "dynamic typing" & "static typing" ?

// "Dynamic typing" means that "Variables are Not Bound to a 'Specific Type' at Compile-Time", and can change their Type During Runtime.
// "Static typing", requires variables to be Explicitly Declared with their Types, and enforces 'Type Checking at Compile-Time'.


//// [5]. How do you "Check the Type of a Variable" ?

// typeof "Hello" would return "string", 
// typeof 42      would return "number", and 
// typeof true    would return "boolean".


//// [6]. Explain the concept of "Type Coercion" . Provide examples of "implicit" & "explicit" Type Coercion.

// "Type coercion" refers to the "Automatic Conversion of Values" From "One Type" To "Another". 
// "Implicit Type Coercion" occurs when JavaScript Converts Values behind the scenes, while 
  const result = 5 + "10";
  console.log(result); // "510"

// "Explicit Type Coercion" involves "Explicitly Converting values" using "Functions or Operators".
  const num = Number("42");
  console.log(num); // 42


  //// [7]. How do you convert a "string to a number" ? What about converting a "number to a string"?

  // To convert a "string to a number", we can use the "parseInt()" or "parseFloat()" Functions. 
  // To convert a "number to a string", we can use the "toString() method" or "concatenate" the number with an Empty String.


  //// [8]. What is the diff. b/ == and === ? Give examples to illustrate their differences.

  // The "=="  operator performs "Loose Equality Comparison", allowing Type Coercion, while
  // the "===" operator performs "Strict Equality Comparison", Without Type Coercion.

  console.log(5 == "5"); // true (loose equality, coerces string to number)
  console.log(5 === "5"); // false (strict equality, different types)


//// [9]. What is the diff b/ "Function Declarations" and "Function Expressions"?

// Function Declarations :: They are Defined using the "function" keyword, and are "Hoisted to the top of their scope". They can be "Accessed & Invoked" Anywhere in their Scope.
  sayHello(); // Can be invoked before declaration

  function sayHello() {
    console.log("Hello!");
  };

// Function Expressions  :: They are "Assigned to Variables" or Used as Anonymous Functions. They are "Not Hoisted", and can only be Accessed after the Assignment.
  sayHi(); // Error: Cannot access before initialization

  var sayHi = function() {
    console.log("Hi!");
  };


//// [10]. Explain "Lexical Scoping". How does it determine "variable Access & Resolution"?

// "Lexical scoping" refers to "How Variable Names are Resolved" at Author-Time, based on the Location where they are defined in the Source Code.
//  It determines variable access, by looking up, the Variable's Scope Chain.

function outer() {
  const x = 10;

  function inner() {
    console.log(x); // Accesses the variable 'x' from the outer scope
  }
  inner(); // Invokes the 'inner' function
}
outer();   // Invokes the 'outer' function

// The "inner function" is defined inside the "outer function". 
// "Lexical scoping" allows the "inner function", to Access the variable "x", from its outer scope (the outer function scope). 
// This is possible because the "inner function", RETAINS,  " a Reference to the variables" in its "Lexical Environment", even after the "outer function" has finished executing.
// When the inner function is invoked, it prints the value of x, which is 10, as it has access to the variable from its outer scope due to "Lexical Scoping". 
// The concept of "Lexical Scoping" enables, Functions, to Access Variables in their Enclosing Scopes, 
// creating a hierarchical structure for variable access and resolution.


//// [11]. What are "Higher-Order Functions"? Explain its purpose.



//// [70]. What are the diff. types of "Storage" mechanisms available in JavaScript?

// JS provides several storage mechanisms, including "localStorage", "sessionStorage", and "cookies". 
// These mechanisms allow us to "store data "on the client-side for various purposes.


//// [71]. What is the diff b/ "localStorage" & "sessionStorage"?

// The main diff b/ "localStorage" & "sessionStorage" is the "Lifespan of the Stored Data". 
// "localStorage" persists The Data across Browser sessions, and remains available until explicitly cleared, whereas 
// "sessionStorage" stores Data for the duration of the Current Session only. When The User closes the "Browser or Tab", The Data stored in "sessionStorage" is cleared.


//// [72]. How can you store Data in "localStorage", in a React App?

// In a React app, We can access the "localStorage Object" to Store Data. 
// We can use  
"localStorage.setItem()" Method to set      a value,  
"localStorage.getItem()" Method to retrieve a stored value.


//// [73]. How can you handle the "removal or clearing" of stored data in "localStorage"?

// To "remove or clear" stored data in localStorage, you can use the 
"localStorage.removeItem(key)" Method to remove a specific item, or 
"localStorage.clear()"         Method to remove all items stored in localStorage.


//// [74]. `localStorage` v/s `sessionStorage` v/s `cookies`.

// [i]. **localStorage:**
// - Purpose           :: `localStorage` is designed for long-term storage of data, on the client-side.
// - Lifespan          :: The data stored in `localStorage` persists even when the browser is closed and reopened.
// - Shared across tabs:: Data in `localStorage` is shared across tabs/windows of the same origin.
// - Capacity          :: Typically, `localStorage` provides a larger storage capacity (5-10MB) compared to other options.
// - Access            :: Data in `localStorage` can be accessed by any JavaScript code running on the same origin.
// - Usage example     :: Storing user preferences, caching application data.

// [ii]. **sessionStorage:**
// - Purpose           :: `sessionStorage` is designed for storing data that should only persist within a single session.
// - Lifespan          :: The data stored in `sessionStorage` is available as long as the session is active. It is cleared when the browser or tab is closed.
// - Shared across tabs:: Isolated  Each tab/window has its own separate `sessionStorage` instance, and data is not shared across tabs.
// - Capacity          :: Similar to `localStorage`, `sessionStorage` provides a larger storage capacity (5-10MB) compared to cookies.
// - Access            :: Data in `sessionStorage` can be accessed by any JavaScript code running on the same origin.
// - Usage example     :: Usage Storing temporary session data, preserving state during navigation within a session.

// [iii]. **Cookies:**
// - Purpose           :: Cookies are primarily used for storing small pieces of data on the client-side.
// - Lifespan          :: Cookies can have an expiration time, or they can be session cookies that persist until the browser is closed.
// - Shared across tabs:: Cookies are shared across tabs/windows of the same origin.
// - Capacity          :: Cookies have a limited storage capacity (usually around 4KB).
// - Access            :: Cookies can be accessed by both client-side and server-side code, making them suitable for storing data that needs to be sent to the server with each request.
// - Usage example     :: Storing user authentication tokens, session identifiers.


// When choosing between `localStorage`, `sessionStorage`, and cookies, consider the specific requirements of your application. 
// If you need long-term storage or larger data capacity, `localStorage` or `sessionStorage` may be more appropriate. 
// If you require data to be sent to the server with each request, cookies can be a suitable option.
// Additionally, consider the Lifespan and Shared nature of the data, to determine which option aligns with your use case.


//// [75]. Why "cookies" are still favored in certain scenarios?

// [i]. Server-side accessibility :: 
// "Cookies" can be accessed and manipulated by both "Client-side JS code" & "Server-side code". 
// This makes them suitable for scenarios where, "Data needs to be sent to the Server", with each request, as including "Session Tokens" or "Authentication Information" in the "Request headers".

// [ii]. Cross-domain communication :: 
// Cookies can be shared across different subdomains and domains, allowing for cross-domain communication and sharing of data.
// This can be beneficial in scenarios where multiple applications or services need to access and share the same data.

// [iii]. Legacy support :: 
// Cookies have been around for a long time and are widely supported across different browsers and platforms. 
// They have a long history of usage and compatibility, making them a preferred choice in scenarios where backward compatibility is crucial.

//// However, there are also reasons why "local storage" may be preferred in certain cases ::

// [i]. Simpler API :: 
// The API for using local storage is generally simpler and more straightforward compared to cookies. 
// It provides a simple "key-value storage mechanism" without the need to manually manage expiration dates or worry about cookie attributes.

// [ii]. Larger storage capacity :: 
// Local storage typically provides a larger storage capacity compared to cookies. 
// This can be advantageous when dealing with larger sets of data or when needing to store more complex data structures.

// [iii]. Performance :: 
// Local storage operations are generally "Faster" compared to Cookie operations, since cookies are sent with every request, increasing the data transfer overhead. 
// Local storage, on the other hand, is purely client-side, and does not add to the network traffic.

// Ultimately, the choice between "cookies" and "local storage" depends on the specific requirements and constraints of your application.
// It's important to consider factors such as 
//"data size", 
//"server-side accessibility", 
//"cross-domain communication", and 
//"compatibility" 
// when making a decision.





