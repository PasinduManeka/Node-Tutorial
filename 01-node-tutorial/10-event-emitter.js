const EventEmitter = require('events');

 const customEmitter = new EventEmitter();

 customEmitter.on('response',(name, id)=>{
     console.log(`data recieved user ${name} ${id}`)
 })

 customEmitter.on('response',()=>{
    console.log(`data recieved`)
})

 /*need to match string which in the emit() method 
 with string which in on() method. Othewise code does not work .(event name)*/ 
 customEmitter.emit('response', 'Jogn', 34);