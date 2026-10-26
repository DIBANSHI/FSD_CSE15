import { EventEmitter } from "node:events";

function createDomElement() {
    const myemitter = new EventEmitter();

    return {
        addEventListener(event, callback) {
            myemitter.on(event, callback);
        },

        removeEventListener(event, callback) {
            myemitter.off(event, callback);
        },

        dispatchEvent(event) {
            myemitter.emit(event.type, event);
        }
    };
}

function handleclick(event) {
    console.log("data saved");
}

// 1. Create button first
const button = createDomElement();

// 2. Register event listeners
button.addEventListener("save", handleclick);

button.addEventListener("click", (event) => {
    console.log("Button clicked");
});

// 3. Dispatch events
button.dispatchEvent({ type: "click" });
button.dispatchEvent({ type: "save" });