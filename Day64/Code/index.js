// Asynchronous js

// What is Synchronous JavaScript?
// Synchronous JavaScript is executed in a single thread, meaning that each operation must complete before the next one begins. Thiis can Lead to blocking, where long-running operations prevent other code from executing until they finish.

// What is Asynchronous JavaScript?
// Asynchronous JavaScript allows certain operations to run in the background, enabling the main thread to continue executing other code. This is particularly useful for tasks like network requests, file I/O, and timers.

// The Event Loop
// The event loop is a mechanism that allows JavaScript to perform non-blocking operations by managing the execution of asynchronous code. It continuously checks the call stack and the message queue, executing tasks as they become available.       

// Callbacks 
// Callbacks are functions that are passed as arguments to other functions and are executed after a certain operation completes. They are commonly used in asynchronous programming to handle the result of an operation once it finishes.

// Main Thread
// The main thread is the primary execution context in JavaScript, where code is executed sequentially. It handles the call stack and the event loop, processing tasks and managing asynchronous operations.

// Call Stack
// The call stack is a data structure that keeps track of function calls in JavaScript. When a function is called, it is added to the top of the stack, and when it returns, it is removed from the stack. The call stack ensures that functions are executed in the correct order.

// Message Queue
// The message queue is a queue that holds messages or events that are waiting to be processed by the event loop. When an asynchronous operation completes, it adds a message to the queue, which is then processed by the event loop when the call stack is empty.

// Promises
// Promises are objects that represent the eventual completion (or failure) of an asynchronous operation. They provide a way to handle asynchronous code more elegantly than callbacks, allowing for better error handling and chaining of operations.

// Async/Await
// Async/await is a syntax that allows developers to write asynchronous code in a more synchronous style. It uses the `async` keyword to define a function that returns a promise and the `await` keyword to pause execution until the promise resolves, making the code easier to read and maintain.   

