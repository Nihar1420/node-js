// Javascript is a single threaded asynchronous language . This means that there is no synchronous execution of data in JS and in order to handle this we can use methods like - Callbacks , Promises aur Async/Await .

// Lets see about all these methods in detail -

// The most common case of asynchronous JS is fetching data or API calling or any function that takes some time to get executed -

let a = 10;
let b = 20;

// Here if we set b = 30 in the set timeout then it will not print as 40 in the console rather it will print 30 taking the value of b as 20

// setTimeout(() => {
//     b = 30;
// }, 2000);

// 1] PROMISE

// Here we are creating a promise using the new keyword -
// let newValPromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     res(30);
//   }, 2000);
// });

// Now we will be using the .then() and .catch() blocks for getting the promise value
// newValPromise.then((val) => {
//   b = val;
//   console.log(a + b);
// });

// Here above we can see that we are getting the value of b as 30 and printing 40 as the output 
