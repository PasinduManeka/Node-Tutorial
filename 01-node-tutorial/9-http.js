const http = require('http');

 const server = http.createServer((req,res)=>{
   //res.write('Welcome to our home page.');
   if(req.url === '/'){
       res.end('Welcome to our home page.');
   }
   if(req.url === '/about'){
        res.end('Here is about us');
   }
   res.end(`
   <h1>Oops!</h1>
   <a href="/">Back to home</a>
   `)
   
 });

 server.listen(8000)