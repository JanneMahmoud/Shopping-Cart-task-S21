console.log("Start");
console.log("Middle");
console.log("End");

function second() {
    console.log("Inside second function");
}

function first() {
    console.log("Inside first function");
    second();
    console.log("Back to first function");
}

first();

let a = 10;
let b = 5;

let sum = a + b;
console.log("Sum =", sum);

let multiply = sum * 2;
console.log("Multiply =", multiply);

function square(num) {
    return num * num;
}

function printSquare(num) {
    let result = square(num);
    console.log("Square =", result);
}

printSquare(4);

console.log("Hello");

setTimeout(function () {
    console.log("World");
}, 2000);

for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, i * 1000);
}

console.log("Loading...");

setTimeout(function () {
    console.log("Done");
}, 3000);

function sendMessage() {
    console.log("Sending message...");

    setTimeout(function () {
        console.log("Message Sent!");
    }, 2000);
}

sendMessage();

console.log("First");

setTimeout(function () {
    console.log("Second");
}, 1000);

console.log("Third");

console.log("Start");

setTimeout(function () {
    console.log("Timeout");
}, 0);

console.log("End");

console.log("Line 1");

setTimeout(function () {
    console.log("Async Task");
}, 1000);

console.log("Line 2");
console.log("Line 3");

console.log("Program Started");

setTimeout(function () {
    console.log("Async Operation");
}, 0);

console.log("Processing...");
console.log("Program Finished");

function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}
function welcome() {
    console.log("Welcome!");
}
greet("Alice", welcome);
function add(x, y) {
    return x + y;
}
function subtract(x, y) {
    return x - y;
}

function multiplyNumbers(x, y) {
    return x * y;
}

function calculator(x, y, operation) {
    console.log(operation(x, y));
}

calculator(10, 5, add);
calculator(10, 5, subtract);
calculator(10, 5, multiplyNumbers);

function loadData(callback) {
    console.log("Loading Data...");

    setTimeout(function () {
        console.log("Data Loaded");
        callback();
    }, 2000);
}

function showData() {
    console.log("Showing Data");
}

loadData(showData);

function login(callback) {
    console.log("Logging in...");

    setTimeout(function () {
        console.log("Login Successful");
        callback();
    }, 2000);
}

function dashboard() {
    console.log("Welcome to Dashboard");
}

login(dashboard);