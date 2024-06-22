//// What is a Promises in JS ?
// "Promises" is an Object, and that is used to represent the eventual "Completion" or "Failure" of the "Async Operation" in JavaScript.
// JS executes first "Synchronous Code", then "Asynchronous Code".

//// [1]. Why We Need of Promises ?
// To Avoid "Callback Hells", We've "Promises" & "Async/Await".


//// [2]. Callbacks in Promises ?
// Two "Callbacks" are used for handling Promises::  
// .then()  Method : is used, when a promise is kept or broken. 
// .catch() Method : is used for handling the "Errors".


//// [3]. Where are Promises are used ?
// (i). API Calls (we have to wait for the response before manipulating it).
// (ii). Uploading images/files to the server.
// (iii).Reading files from the computer.
// (iv). Executing shell command inside Node.js to automate grunt work.


///// ******** Summary ******
//// (1). It prints start, coder, stop.
//// (2). Now, i want to return "name" after 1000ms, it prints: start, undefined, stop.
//// (3). ******* To fix above, use callbacks *********
//// (4). ******* Nested Callbacks ( Callback Hell ) *********
//// (5). ******* Simple Promise Example             *********
//// (6). ******* To Resolve Promise Directly        *********
//// (7). *******(i). To Avoid Callback Hell, use Promise ********
//// (7). *******(ii). Again, Pyramid Like Structure      ********
//// (8). ******* Promise Chaining (Again Lengthy process)********
//// (9). ******* Promise Combinators *************
//// (i).  Promise.all()          ***if any one of the promises fails, this will be failed. } LIKE (async/await)
//// (ii). Promises.race()        ***whichever will be fullfilled or rejected, the first function's "resolve()" / "reject()" will be logged. };
//// (iii).Promises.allSettled()  ***returns all the fullfilled and rejected promises together };
//// (iv). Promise.any()          ***Returns only one of the "fullfilled promise", and ignore all the rejected ones.}
////                              ***But if all promises are failed, then returns 
////                              ***AggregateError: All promises were rejected.
//// (10). ******* Async/Await ***If any one of the promises failed, returns error.
//// (11). ******* OUTPUT INTERVIEW QUESTIONS *****************



//// (1). It prints :: start, coder, stop.

console.log("Start"); 
function abc(name) {
  return name;  
};
console.log(abc("Coder")); 
console.log("Stop"); 


//// (2). Now, We want to return "name" after 1000ms, it prints :: "Start, undefined, Stop".

console.log("Start"); 
function abc2(name) {
  setTimeout(() => {
    return name;
  }, 1000);
};
console.log(abc2("Coder")); // undefined 
console.log("Stop"); 


//// (3). ******* To fix above, use Callbacks;  It prints :: Start, Stop, Coder **********

console.log("Start"); 
function abc3(name, cb) {
  setTimeout(() => {
    cb(name)
  }, 2000);
};
//// here, usign Callback as parameter with abc().
abc3("Coder", (naaam) => {
  console.log(naaam); // Coder
});
console.log("Stop"); // Stop


//// (4) ********** Nested Callbacks; OR Callback Hell **********
// :: 
// start, 
// stop, 
// cb1(after 2s), 
// cb2(after 4s), 
// cb3(after 0s)

console.log("Start");

function subscribe(channelName, cb) {
  setTimeout(() => {
    cb(`cb1 - subscribed ${channelName}`);
  }, 2000);
};

function like(video, cb) {
  setTimeout(() => {
    cb(`cb2 - liked ${video}`);
  }, 4000);                     //// it will execute and block the below func till 4000ms
};

function share(video, cb) {
  setTimeout(() => {
    cb(`cb3 - shared ${video}`);
  }, 0);
};

subscribe("Rodeside Coder", (msg) => {
  console.log(msg);
  like("JS Interview", (likedMsg) => {
    console.log(likedMsg);
    share("JS Interview", (shareMsg) => {
      console.log(shareMsg);
    });
  });
});

console.log("Stop"); 


///////// To fix above, use Promise

// function subscribe(channelName) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Subscribed to ${channelName}`);
//       reject(`Failed to Subscribe the ${channelName}`);
//     }, 1000);
//   });
// };

// function like(video) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`liked ${video}`);
//       reject(`Failed to like the ${video} video`); // after reject, it will execute next func.
//     }, 4000);
//   });
// };

// function share(video) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`shared ${video}`);
//       reject(`Failed to share the ${video} video`);
//     }, 1000);
//   });
// };

//// 2ways to call
//// (1). calling nested using .then() &.cath(); 
//// Executes:: subscribe, like (after 4s), share.

// subscribe('RoadSide Coder').then(res => {
//   console.log(res);
//   like('React Project').then(res => {
//     console.log(res);
//     share('MERN App').then(res => {
//       console.log(res);
//     });
//   });
// });


//// (2). calling separately
//// Executes:: subscribe, share, like 

// subscribe('A').then(res => {console.log(res)});
// like('A')     .then(res => {console.log(res)});
// share('A')    .then(res => {console.log(res)});


//// eg (5) .******** Simple Promise Example; ********
//// ::
// start
// Promise <pending>
// stop
// subscribed (after 2000ms)

// console.log("Start");

// // create promise function
// const subscribe = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const result = true; // or, false
//     if(result) resolve("Subscribe to the channel");
//     else reject(new Error("Failed to subscribe"));
//   }, 2000);
// });

// subscribe
//   .then((res)  => { console.log(res)})  //// if the promise is "resolved", "Subscribe to the channel".
//   .catch((err) => { console.log(err)}); //// if the promise is "rejected",   [Error: Failed to subscribe].
  

// console.log(subscribe); //// Promise { <pending> }

// console.log("Stop");



//// eg (6). ******** To Resolve Promise Directly... *******

// const subscribe = Promise.resolve("Subscribe") 
// subscribe.then((res) => { console.log(res)});

// const subscribe1 = Promise.reject("UnSubscribe") 
// subscribe1.catch((err) => { console.log(err)});


//// eg (7). ********(i).  To Avoid Callback Hell, use Promise; ********

//// Rewriting callbacks with Promise.

// console.log("Start");

// function subscribe(channelName) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Subscribed to ${channelName}`);
//       // reject(`Failed to Subscribe the ${channelName}`);
//     }, 1000);
//   });
// };

// function like(video) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`You liked the ${video} video`);
//       // reject(`Failed to like the ${video} video`); // after reject, it will execute next func.
//     }, 1000)
//   });
// };

// function shareTheVideo(video) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // resolve(`You shared the ${video} video`);
//       reject(`Failed to share the ${video} video`);
//     }, 1000);
//   });
// };

//// eg (7). ********(ii). again, Pyramid Like Structure *************
//
// subscribe("Rodeside Coder").then(res => {
//   console.log(res);
//   like("JS Interview").then(res => {
//     console.log(res);
//     share("JS Interview").then(res => {
//       console.log(res);
//     })
//   })
// }).catch(err => {
//   console.log(err);
// });
  

//// eg (8). ********. Promise Chaining *************
//// Again Lengthy process

// subscribe("subscribe").then(res => {
//   console.log(res);
//   return likeTheVideo("Like the video")
// })
// .then(res => {
//   console.log(res);
//   return shareTheVideo("share the video")
// })
// .then(res => {
//   console.log(res);
// })
// .catch(err => {
//   console.log(err);
// });


//// eg (9). ******** Promise Combinators *************
//// (i). Promise.all() { if any one of the promises fails, this will be failed. } LIKE (async/await)

// Promise.all([
//   subscribe("impA"), 
//   likeTheVideo("like the video"), 
//   shareTheVideo("share the video")
// ]).then(res => {
//   console.log(res);
// }).catch(err => {
//   console.error(`error: one-of-the-"Promise"-Failed :- ${err}`);
// });


//// (ii). Promises.race() { whichever will be fullfilled or rejected, the first function's "resolve()" / "reject()" will be logged. };

// Promise.race([
//   subscribe("impA"),
//   likeTheVideo("like the video"),
//   shareTheVideo("share the video"),
// ]).then(res => {
//   console.log(res);
// }).catch(err => {
//   console.error(`error: Promise Failed, ${err}`);
// });


//// (iii). Promises.allSettled() { returns all the fullfilled and rejected promises together };

// Promise
//   .allSettled([
//     subscribe("Namaste JS"),
//     likeTheVideo("PROMISE"),
//     shareTheVideo("PROMISE"),
//   ])
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => {
//     console.error(`error: Promise Failed, ${err}`);
//   });

// { status: 'fulfilled', value: 'Subscribed to Namaste JS' }
// { status: 'rejected',  reason: 'Failed to like the PROMISE video' }
// { status: 'fulfilled', value: 'You shared the PROMISE video' }


//// (ii). Promises.race() { whichever will be fullfilled or rejected, the first function's "resolve()" / "reject()" will be logged. };
//// (iii). Promises.allSettled() { returns all the fullfilled and rejected promises together };//// (iv). Promise.any() { Returns only one of the "fullfilled promise", and ignore all the rejected ones.}
//// But if all promises are failed, then returns 
//// ***** AggregateError: All promises were rejected.*****

// Promise.any([
//   subscribe("impA"),
//   likeTheVideo("like the video"),
//   shareTheVideo("share the video"),
// ]).then(res => {
//   console.log(res);
// }).catch(err => {
//   console.error(`error: Promise Failed, ${err}`);
// });


//// (ii). Promises.race() { whichever will be fullfilled or rejected, the first function's "resolve()" / "reject()" will be logged. };
//// (iii). Promises.allSettled() { returns all the fullfilled and rejected promises together };//// (iv). Promise.any() { Returns only one of the "fullfilled promise", and ignore all the rejected ones.}
//// But if all promises are failed, then returns 
//// ***** AggregateError: All promises were rejected.*****//// Eg (10). ********. Async / Await { If any one of the promises failed, returns error} *********

// const result = async () => {
//   try {
//     const message1 = await subscribe("Roadside Coder");
//     // console.log(message1); // if first will resolve, it will print other wise will stop proceding next
//     const message2 = await likeTheVideo("Like Roadside Coder");
//     const message3 = await shareTheVideo("Share Roadside Coder");
//     //// console.log({ message1, message2, message3 });
//   } catch (error) {
//     console.error("promises failed ", error);
//   }
// };

// result();

// console.log("Stop"); 


////  (11). ******** OUTPUT INTERVIEW QUESTIONS *****************

// follows sequence::
// (i).  console.log().   All consoles first then others
// (ii). Synchronous Code in Promise().
// (iii).Promise.resolve().
// (iv). setTimeout().
// (v).  fetch().


//// (1). ****************

// console.log('start');
// const promises1 = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve('Two')
// });
// promises1.then(res => {       // .then() Async Operation.
//   console.log(res);
// });
// console.log('stop'); 

//// output: start, 1, stop, 2



//// (2). ******************

// console.log('start');
// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve(2)
//   console.log(3);
// });
// promise1.then(res => {
//   console.log(res);
// });
// console.log('stop');

//// output: start, 1, 3, stop, 2



//// (3). *****************

// console.log('start');
// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
//   console.log(3);
//   // resolve(200);
//   reject(404)
// });
// promise1
//   .then(res => {
//     console.log("Result: " + res); // wont print bcoz no resolve().
//   })
//   .catch((err) => {
//     console.log('Error: ' + err);
// });
// console.log('end');

//// Output:: start, 1, 3, "Result: 200" / "Error: 404"



//// (4). **************

// console.log('start');

// const fn = () => new Promise((resolve, reject) => {
//   console.log(1);
//   resolve('success');
// });

// console.log('middle');

// fn().then(res => {
//   console.log(res);
// });

// console.log('end');

//// Output:: start, middle, 1, end, success


//// (5). *************
// console.log('start');
// function job() {
//   return new Promise((resolve, reject) => {
//     // resolve();
//     // reject();
//   });
// };

// let promise1 = job();
// promise1
//   .then(() => {
//   console.log('success1');
// }).then(() => {
//   console.log('success2');
// }).catch(() => {
//   console.log('failed'); //// since we'r not returning anything so it will go further.
// }).then(() => {
//   console.log('success3');
// });

// console.log('stop');

//// Output:: start, stop, success1, success2, success3
//// Output:: start, stop, falied, success3



// (6). ******************
// console.log('start');
// function job(state) {
//   return new Promise((resolve, reject) => {
//     if(state) {
//       resolve('success');
//     } else {
//       reject('failed');
//     }
//   })
// };

// let promise1 = job(true);
// promise1
//   .then((data) => {
//     console.log(data);
//     return job(false);
//   })
//   .catch((err) => {
//     console.log(err);
//     return 'Error Caught'
//   })
//   .then((data) => {
//     console.log(data);
//     return job(true);      //// returning resolve() but we dont have .then(). So execution stops here.
//     // return job(false);  //// returning reject(), we have .catch(). So it will print "failed", and execution stops here.
//   })
//   .catch((err) => {
//     console.log(err)
//   })

// console.log('end');

//// Output:: start, stop, success, failed, Error Caught
//// Output:: start, stop, success, failed, Error Caught, failed



// (7). ****************

// function job(state) {
//   return new Promise((resolve, reject) => {
//     if(state) {
//       resolve("success")
//     } else {
//       reject("Error")
//     }
//   })
// };

// let promise1 = job(true);
// promise1
//   .then((res) => {
//     console.log(res)
//     return job(true);
//   })
//   .then(res => {
//     if(res !== 'victory') {
//       throw "Defeat";   //// throwing error, so it go to catch())
//     }
//     return job(true);
//   })
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => {
//     console.log(err); /// Defeat 
//     return job(false)
//   })
//   .then(res => {
//     console.log(res);
//     return job(true)
//   })
//   .catch(err => {
//     console.log(err)
//     return "error caught";         /// resolve() promise, it will go to .then()
//   })
//   .then(res => {
//     console.log(res);
//     return new Error("test error") /// resolve() promise, it will go to .then()
//   })
//   .then(res => {
//     console.log('success', res.message); //// success test error and execution stops here.
//   })
//   .catch(res => {
//     console.log('error', res.message)
//   });


//// (8). Promises Chaining

// const firstPromise = new Promise((resolve, reject) => {
//   resolve("first !!");
// });

// const secondPromise = new Promise((resolve, reject) => {
//   resolve(firstPromise);
// });

// secondPromise.then(res => {
//   return res;
// })
// .then(res => {
//   console.log(res)
// });


//// (9). Rewrite the code using "async/await" instead of "".then/.catch".

// function loadJson(url) {
//   return fetch(url).then(res => {
//     if(res.status == 200) return res.json()
//     else throw new Error(res.status)
//   });
// };

// const loadJson = async(url) => {
//   const res = await fetch(url);
//   if(res.status == 200) return res.json()
//   else throw new Error(res.status)
// };

// loadJson('https://fakeurl.com/no-such-user.json')
//   .catch(err => console.log(err)
// );


//// (10). ********* Solve Promise Recursively ************

// function subscribe(userName) {
//   return new Promise((resolve, reject) => {
//     setTimeout((
//       resolve(userName)
//     ), 1000)
//   })
// };

// function likeTheVideo(video) {
//   return new Promise((resolve, reject) => {
//     setTimeout((
//       // resolve(video)
//       reject(`rejected: ${video}`)
//     ), 2000)
//   })
// };

// function shareTheVideo(video) {
//   return new Promise((resolve, reject) => {
//     setTimeout((
//       resolve(video)
//     ), 5000)
//   })
// };

// function promResursive(funcPromises) {
//   if(funcPromises.length == 0) return;
//   const currPromise = funcPromises.shift();

//   currPromise
//     .then(res => console.log(res))
//     .catch(err => console.log(err))

//   promResursive(funcPromises);
// };

// promResursive([
//   subscribe("Roadside Coder"),
//   likeTheVideo("Promises Interview"),
//   shareTheVideo("Promises Interview")
// ]);


//// ***********Polyfill for Promises*************

// function MyPromise(executor) {
//   let onResolve, onReject, value;
//   let isFullfilled = false, isRejected = false, isCalled = false,
//     
//   function resolve(val) {
//     isFullfilled = true;
//     value = val;
//     if (typeof onResolve === 'function') {
//       onResolve(val);
//       isCalled = true;
//     }
//   };

//   function reject(val) {
//     isRejected = true;
//     value = val;
//     if(typeof onReject === 'function') {
//       onReject(val);
//       isCalled = true;
//     }
//   };

//   this.then = function (callback) {
//     onResolve = callback;
//     if(isFullfilled && !isCalled) {
//       isCalled = true;
//       onResolve(value)
//     }
//     return this;
//   };

//   this.catch = function (callback) {
//     onReject = callback;
//     if(isRejected && !isCalled) {
//       isCalled = true;
//       onReject(value)
//     }
//     return this;
//   };

//   try{
//     executor(resolve, reject);
//   } 
//   catch(error) {
//     reject(error);
//   };

// };

// const promise1 = new MyPromise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('resolved...')
//     // reject('error: 2')
//   }, 1000);
// });

// promise1.then(res => {
//   console.log(res); // resolved...
// })
// .catch(err => {
//   console.error(err)
// });


//// ***** Promise.resolve() *******

// MyPromise.resolve = (val) => {
//   return new MyPromise(function executor(resolve, reject) {
//     resolve(val);
//   });
// };

//// ***** Promise.reject() *******

// MyPromise.reject = (val) => {
//   return new MyPromise(function executor(resolve, reject) {
//     reject(val);
//   });
// };


//// (11). ********* polyfill for Promise.all() *************

// Promise.allPolyfill = (promises)  => {
//   return new Promise((resolve, reject) => {
//     const results = [];
//     if(!promises.length) {
//       resolve(results);
//       return;
//     };

//     let pending = promises.length;
//     promises.forEach((promise, idx) => {
//       Promise.resolve(promise).then(res => {
//         results[idx] = res;
//         pending--;
//         if(pending === 0) {
//           resolve(results);
//         };
//       }, reject);
//     });
//   });
// };

// Promise.allPolyfill([
//   subscribe("Roadside Coder"),
//   likeTheVideo("Promises Interview"),
//   shareTheVideo("Promises Interview")
// ])
// .then(res => console.log(res))
// .catch(err => console.error(err));




// practice... polyfill for promise
function PromisePolyfill(executor) {
  let onResolve, onReject;
  let isFullFilled = false, isRejected = false, isCalled = false;
  let value;

  function resolve(val) {
    isFullFilled = true;
    value = val;
    if(typeof onResolve === 'function') {
      onResolve(value);
      isCalled = true;
    }
  };

  function reject(val) {
    isRejected = true;
    value = val;
    if(typeof onReject === 'function') {
      onReject(value);
      isCalled = true;
    }
  };

  this.then = function(callback) {
    onResolve = callback;
    if(isFullFilled && !isCalled) {
      isCalled = true;
      onResolve(value);
    }
    return this;
  };

  this.catch = function(callback) {
    onReject = callback;
    if(isFullFilled && !isCalled) {
      isCalled = true;
      onReject(value);
    }
    return this;
  };

  executor(resolve, reject);
};

let Promise3 = new PromisePolyfill((resolve, reject) => {
  // setTimeout(() => {
    resolve('Resolved...');
    // reject('Rejected...');
  // }, 1000);
});

Promise3.then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
});