const user = require('./modules/user')


let myEmitter = new user();

myEmitter.on('userCreated',(id , name)=>{
    console.log(`A New User Created ${name} with id ${id} `);
});

myEmitter.on('userCreated',(id , name)=>{
    console.log(`A New User Created ${name} with id ${id}  added in database`);
});


myEmitter.emit('userCreated',1,'Jhon');