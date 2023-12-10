// Here we will see whats node js and how it actually works -

/*
    1] Node js is a javascript runtime which consists V8 as its js engine
    2] A program gets executed in 3 steps - call stack , node API's and the callback queue
*/

console.log("Hello line 1 this side");
setTimeout(() => {
  console.log("Hello line 2 this side");
}, 1000);
setTimeout(() => {
  console.log("Hello line 3 this side");
}, 0);
console.log("Hello line 4 this side");

/* Here the execution will be different as initially the main function will be loaded in the call stack 
   Then the 1st console will be printed
   Then the setTimeout is a node API based so it will go to the callback queue
   Similarly the 3rd console will go to the callback queue
   Then the 4th console will be printed
   Then the item in the callback queue which takes less time to execute will be in the call stack 1st and followed by the rest

   So the output will be like - 1st line , 4th line , 3rd line , 2nd line
*/