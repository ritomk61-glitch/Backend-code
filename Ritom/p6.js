const EventEmitter = require("events");

const event = new EventEmitter();

event.on("connect", () => {
    console.log("Connecting to database/server...");
});

event.on("receive", () => {
    console.log("Receiving information from database/server...");
});

event.emit("connect");
event.emit("receive");

console.log("Both events have been fired successfully.");