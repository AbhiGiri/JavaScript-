//// (1). Event Loop :: 
// The job of "Event Loop" is to Continue Watch the "CallStack", to check whether it is Empty or Not. 
// As soon as, it finds Empty, it Popped the "Microtask Callbacks" from the "Microtask Queue", and pushed them to the "CallStack" for Execution.
// Once the "Microtask Queue" gets Empty, then it starts Popping Up the Callbacks from the "Callback Queue", and pushed to the "CallStack" for further Execution.

// (2). When does the "Event Loop" actullay starts?
// It is running ALWAYS, and keeps doing its job.

// (3). Are only Async "WebAPI Callbacks" are registered in the "WebAPI Environment"?
// Yes.

// (4). Does the "WebAPI Environment" stores only the Callback functions, and pushes them to Queue/Microtask Queue?
// Yes, the "Callback Functions" are stored, and a Reference is scheduled in the Queue.
// Moreover, in the case of "Event Listener", the original Callbacks stay in the WebApi Environment Forever,
// that's why, it is adviced to explicitly 'Remove' the listeners when they are not in use.
// so the "Garbage Collection" does its job.

// (5). What could go in th "Microtask Queue"?
// All the "Callback Functions", which comes through the "Promises" will go inside the "Microtask Queue".
// And something known as "Mutation Observer". It keeps checking, there is a mutation is the "DOM Tree" or not.
// If there is a  mutation in the "DOM Tree", it can execute some Callback functions.
// But, all other Callback functions, through the "setTimeOut", "DOM APIs", "Event Listeners" all goes inside the "Callback Queue".
// *** "Promises" and "Mutation Observer" have More Precedence/Priority than "setTimeout" and all.

// (6). How does it matter, if we delay for setTimeout, would be 0ms? Then the callback function will move to the Queue without any wait?
// Yes, it will immediately be pushed into the "Callback Queue".
// However, Event Loop will only move it to the "CallStack", when it finds empty.

// JavaScript is a "Synchronous" Single-Threaded-Language.
// but due to some functions ("setTimeout", "Callback Functions", and "AJAX")
// it behaves Asynchronously in order to speed up the process.
// Example::

// // 1
// console.log('starts...');

// // 2
// setTimeout(() => {
//   console.log('CB setTimeout');
// }, 2000); // 0

// // 3
// fetch('https://api.netflix.com')
//   .then(function cbF() {
//     console.log('CB Netflix ');
//   })
//   .catch(err => console.log(err.message));

// // 4
// console.log('Ends...');  

// (i).  console.log
// (ii). Sync Code in Promise()
// (iii).Promise.resolve()
// (iv). setTimeout()
// (v).  fetch()

fetch('https://dandkim.com/js-data-structure-cheat-sheet/').then(() => console.log('fetch method')); // 5th fetch()

console.log('start sync code');                                                         // 1st console.log

setTimeout(() => console.log('setTimeout'), 0);                                         // 4th setTimeout()

// Promise.resolve(1).then(() => console.log('Promise & Mutation Obs'));                 // 3rd Promise.resolve()
const promises1 = new Promise((resolve, reject) => {
  console.log('sync code in Promise'); 
  resolve('resolved Async code in Promise');
});
promises1.then(res => { // it will check if there any sync operation (console.log(100)), then will go for async operation.
  console.log(res);
});
console.log('End sync code');                                                           // 2nd console.log
