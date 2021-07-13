const http = require('http');
const {readFileSync} = require('fs');

//get all files
const homePage = readFileSync('./Navigationbar/index.html');
const homeStyles = readFileSync('./Navigationbar/styles.css');
const homeImage = readFileSync('./Navigationbar/logo.svg');
const homeLogic = readFileSync('./Navigationbar/browser-app.js');


const server = http.createServer((req,res)=>{
    const url = req.url;
    if(url==='/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(homePage) 
        res.end();
    }
    //about page
    else if(url==='/about'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>This is the about page...</h1>   ')
        res.end();
    }
    //styles
    else if(url==='/styles.css'){
        res.writeHead(200,{'content-type':'text/css'})
        res.write(homeStyles);
        res.end();
    }
    //Images
    else if(url==='/logo.svg'){
        res.writeHead(200,{'content-type':'image/svg+xml'})
        res.write(homeImage);
        res.end();
    }
    //Images
    else if(url==='/browser-app.js'){
        res.writeHead(200,{'content-type':'text/javascript'})
        res.write(homeLogic);
        res.end();
    }
    //404
    else{
        res.writeHead(404,{'content-type':'text/html'})
        res.write('<h1>This is the error page...</h1>   ')
        res.end();
    }
})

server.listen(5000);

