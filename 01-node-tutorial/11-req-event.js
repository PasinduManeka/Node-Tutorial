const http = require('http');

const server = http.createServer();

server.on('request', (req,res)=>{
    res.end('Welcome to my second  world!!');
})

server.listen(5000,()=>{
    console.log('Server listen on port 5000');
});