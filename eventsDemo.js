import { EventEmitter } from "events";


const myEmitter = new EventEmitter();

function greetHandler(name) {
    console.log("Hello World " + name);
}
function goodbyeHandler(name) {
    console.log('Goodbye World ' + name);


}

myEmitter.on('greet', greetHandler);
myEmitter.on('goodbye', goodbyeHandler);

myEmitter.emit('greet', "Wisdom");
myEmitter.emit('goodbye', "Longkat");

//error handling
myEmitter.on('error', (err) => {
    console.log('An Error Occurred:', err)
})

//Simulate Error
myEmitter.emit('error', "Error is sure in life");
