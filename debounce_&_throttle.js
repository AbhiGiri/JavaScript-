//// [1]. Debouncing:: 
// In debouncing, No matter how many times, the User fires the event, 
// the Attached Function will be executed only, after the Specific Time, 
// once the User Stops firing the event.

// Debounce Postpones the execution, until there is No Input change for the delay period of time. 
// If a change occurs, it cancels the previously scheduled execution, and create a New schedule.


//// [2]. Throttling:: 
// In throttling, No Matter How many times, the User fires the event, 
// the Attached Function will be executed Only Once, in a given `Time Interval`.

// Throttling is used to call a function, after Every millisecond, or a Particular Interval of Time
// only the first click is executed immediately.


//// Ex:(1).********************

function normalFun1() {
  console.log(`called after the specific interval i.e, 2sec, of Last Event Fire.`);
};

function debounceFunc(func, delay) {
  let timer;
  return function () {
    clearTimeout(timer)
    timer = setTimeout(() => {
     func.call(this); // call() is used to invoke 
    }, delay);
  }
};

let btn1 = document.getElementById('debounce');
btn1.addEventListener('click', debounceFunc(normalFun1, 2000));


//// Ex. (2). Window Listner *********

// function debouncFunc(func, delay) {
//   let timer;
//   return function () {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       func.apply(this); //// apply() is used to invoke
//     }, delay);
//   };
// };

// window.addEventListener('resize', debouncFunc(() => {
//   console.count('debounce, one the user stops firing the event.');
// }, 100));


//// Ex.(3) with input field (like Search input)

// function helloFunc(name) {
//   console.log("hello " + name);
// };

// const debounceFunc = (func, timeout=2000) => {
//   let timer;
//   return (...args) => {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       func(...args);
//     }, timeout);
//   };
// };

// const debouncedHello = debounceFunc(helloFunc);

// document.querySelector("input").addEventListener("input", (e) => {
//   debouncedHello(e.target.value)
// });


//// ******** Polyfill for debounce ********


// function normalFun(b) {
//   console.log(`normal function called by debouning with: ${b}`);
// };

// const debounceFunc = (func, delay) => {
//   let timerId;
//   return function () {
//     const context = this;
//     const args = arguments;
//     clearTimeout(timerId);
//     timerId = setTimeout(() => {
//       func.apply(context, args);
//     }, delay);
//   };
// };

// OR>>>>>

// function debounceFunc(func, delay) {
//   let timerId;
//   return function (...args) {
//     clearTimeout(timerId);
//     timerId = setTimeout(() => {
//       func(...args);
//     }, delay)
//   }
// };

// let a = 'new args';
// let btn = document.getElementById('debounce');
// btn.addEventListener('click', debounceFunc(() => normalFun(a), 2000));


//// *************************** Throttling *************************

function normalFunc() {
  console.log('normal func will be called immediately after a first click and later of delay(3s).');
};

function throttleFunc(func, limit) {
  let flag = true;

  return function () {
    if (flag) {
      func();
      flag = false;

      setTimeout(() => {
        flag = true
      }, limit);

    };
  };
};

let btn = document.getElementById('throttle');
btn.addEventListener('click', throttleFunc(normalFunc, 3000));

//// ****************** 2nd Way ************

// function normalFun() {
//   console.log('throttled');
// };

// function throttleFun(func, limit) {
//   let flag = true;
//   return function () {
//     if(flag) {
//       let context = this;
//       let args = arguments;
//       func.apply(context, args);
//       flag = false;
//       setTimeout(() => {
//         flag = true;
//       }, limit);
//     };
//   };
// };

// let throttle = document.getElementById('throttle');
// window.addEventListener('resize', throttleFun(normalFun, 5000))


// ******************3rd Way************
// function normalFunc() {
//   console.log('throttling');
// };

// function throttleFun(func, delay) {
//   let prev = 0;
//   return function (...args) {
//     let now = new Date().getTime();
//     if (now - prev > delay) {
//       prev = now;
//       return func(...args);
//     };
//   };
// };

// let btn = document.getElementById('throttle');
// btn.addEventListener('click', throttleFun(normalFunc, 2000));



//// ******** Polyfill for throttling ********

// const normalFunc = () => {
//     console.count('Normal Function');
// }

// window.addEventListener('resize', normalFunc);

//************//


// const loggerFunc = () => {
//   console.count('Throttle Function');
// }

// const throttle = (func, limit) => {
//   let flag = true;
//   return function() {
//     let context = this;
//     let args = arguments;
//     if(flag) {
//       func.apply(context, args);
//       flag = false;
//       setTimeout(() => {
//         flag = true;
//       }, limit)
//     }
//   }
// };

// const betterLoggerFunc = throttle(loggerFunc, 2000);
// window.addEventListener('resize', betterLoggerFunc);



