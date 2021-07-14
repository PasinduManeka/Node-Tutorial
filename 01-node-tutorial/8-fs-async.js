const {readFile, writeFile} = require('fs');

console.log('Start');

readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return
    }
    const first = result;

    readFile('./content/subfolder/test.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err);
        }
        const second = result;

        writeFile(
            './content/result-async.txt',
            `Here is the redult: ${first}, ${second}`,
            (err, result)=>{
                if(err){
                    console.log(err);
                    return;
                }
                console.log(result);
            }
        )
    });
});

