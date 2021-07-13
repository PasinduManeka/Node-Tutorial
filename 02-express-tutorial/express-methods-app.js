const express = require('express');
const app = express();
const path = require('path');

//setup static middlewareW
//File doesn't have to be changed by server
app.use(express.static('./public'))

/*app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./Navigationbar/index.html'));
});*/

app.all('*',(req,res)=>{
    res.status(404).send('Resource is not found...');
});



app.listen(5000,()=>{
    console.log('Server lisetnening on port 5000')
})