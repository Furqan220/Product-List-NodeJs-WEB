// const user = require('./modules/user')
const { isUtf8 } = require('buffer');
const fs = require('fs')


// let myEmitter = new user();

// myEmitter.on('userCreated',(id , name)=>{
//     console.log(`A New User Created ${name} with id ${id} `);
// });

// myEmitter.on('userCreated',(id , name)=>{
//     console.log(`A New User Created ${name} with id ${id}  added in database`);
// });


// myEmitter.emit('userCreated',1,'Jhon');


// Even loop practice
// node reads program line by line 
// first node runs all block level code and add async call back function to the thread pool and run in background when its completed it will store in eventloop
// event loop has multiple phases but 4 are main 
// 1- Timer callbacks 
// 2- IO and polling tasks (like reading or writing files) 
// 3- set imidiate callback 
// 4- Closed callbacks
// then event loop sents program to main thread according to phase order
// microtask and necktick queue callbacks are not dependent on any phase order event loops check these quese after every phase if there any program wait in this que event loop first excute this program to main thread before any next phase
// when all block level program are read then event loop started it work 

// first this block level code runs 
console.log("Program started");

// Will Stored in 2rd phase 
fs.readFile('input.txt',(date)=>{
    console.log("file readed successfully from second phase of event loop");
});


// second this block level code runs and add this functions into thread pool where this functions perform its work then add its callback in event pool's first phase (timer callbacks)  
// 1st phase in event loop
setTimeout(()=>{
    
process.nextTick(()=>{
    console.log("file readed successfully from event loop");
})

    console.log("Timer call back excuted from first phase of event loop");

},0)




// Will Stored in 3rd phase 
// setImmdiate(()=>{
//     console.log("Immediate call back excuted from third phase of event loop");
// });





// third this block level code runs 
console.log("Program Completed");

// forth when not any block level code remains event loop check after every phase micro task and next tick and run program from this ques if there any program waiting for their excution
// event loop check first phase run program in that phase que like this we declared earlier and sent to main thread where its execution will be done
// `console.log("Timer call back excuted");`
// and then checks phases ques 

// in terminal it will look like this 
// Program started
// Program Completed
// Timer call back excuted