const EventEmitter = require("events");

const button = new EventEmitter();

button.on("click", () => {
    console.log("Button was clicked!");
});

button.on("mouseover", () => {
    console.log("Mouse moved over the button!");
});

button.on("submit", () => {
    console.log("Form submitted successfully!");
});
button.emit("click");
button.emit("mouseover");
button.emit("submit");