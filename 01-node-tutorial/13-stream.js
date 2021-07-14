//use tp read big files
const {createReadStream} = require('fs');

const stream = createReadStream('./content/big.txt',{highWaterMark:90000,
    encoding:'utf8'});

//contro the size highWaterMark:90000

stream.on('data', (result)=>{
console.log(result);
})