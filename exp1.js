const EventEmitter = require("events");

const myEmitter = new EventEmitter();

myEmitter.on("greet", () => {
    console.log("Hello! Welcome to Node.js");
});

myEmitter.on("exit", () => {
    console.log("Goodbye! Exiting...");
});

myEmitter.emit("greet");
myEmitter.emit("exit");