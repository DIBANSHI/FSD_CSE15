import { EventEmitter } from "node:events";
const myemitter = new EventEmitter();

//register listner
// myemitter.on("button", (course) => {
//     console.log(`Button clicked for course: ${course}`);
// });
myemitter.on("exit", (reason) => {
    console.log(`session ending.Reason: ${reason}`);
});
myemitter.on("start", (course) => {
    console.log(`Starting course: ${course}`);
});
//emit(trigger) event
myemitter.emit("greet", "student");
myemitter.emit("start", "fsd");
// myemitter.emit("exit", "session completed");
myemitter.emit("button", "fsd");