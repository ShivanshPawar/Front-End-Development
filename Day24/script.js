// js advance hofs , callbacks and closuers

// HOF + Callback
function delayedExecution(callback) {
    setTimeout(callback, 3000);
}
// delayedExecution(() => console.log("Executed after 3 seconds"));

delayedExecution(function () {
    console.log("Executed after 3 seconds")
})


// Custom .map() Function
function cmap(array, callback) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array));
    }
    return result;
}
console.log(cmap([1, 2, 3], num => num * 2));


// Counter Using Closure
function createCounter() {
    let count = 0;
    return function () {
        return ++count;
    };
}
const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());


// Limit Function Calls (Closure + HOF)
function limit(fn, limit) {
    let calledTimes = 0;
    return function () {
        if (calledTimes < limit) {
            calledTimes++;
            fn();
        }
        else {
            console.log("Limit Reached");
        }
    };
}

let fn = limit(() => console.log("hello"), 3);
fn();
fn();
fn();
fn();

