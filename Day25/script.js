// Repeating a Function at Intervals (Using Callbacks)

// function repeatingFunction(callback, interval) {
//     setInterval(callback, interval * 1000);
// }

// repeatingFunction(function () {
//     console.log("Repeating...");
// }, 2)



// Creating a Function with a Preset Greeting (Using Closures)

function greetuser(greeting) {
    return function (name) {
        return `${greeting}, ${name}!`;
    };
}

const greetHello = greetuser("Hello");
console.log(greetHello("john"))
console.log(greetHello("harsh"))

const greetHola = greetuser("hola")
console.log(greetHola("shivay"))
console.log(greetHola("leo"))



// Executing a Function Only Once (Using HOF + Closure)
function Once(cb) {
    let executed = false;
    return function () {

        if (!executed) {
            executed = true;
            cb()
        }
        else{
            console.error("Already executed!");
        }
    };
}

let newFnc = Once(function(){
    console.log("ran")
});

newFnc();
newFnc();
newFnc();


// Throttling a Function (Using HOF + Closure)

function throt(fn, delay){
    let lastCall = 0;
    return function(){
        const current = new Date().getTime();
        if(current-lastCall>=delay){
            lastCall = current;
            fn();
        }
    };
}


newf = throt(function(){
    console.log("will run in 2 sec")
},2000)

newf();

