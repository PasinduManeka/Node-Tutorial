const {readFileSync, writeFileSync} = require('fs');
//read the content of the path
const first = readFileSync('./content/first.txt','utf-8');
const second =readFileSync('./content/subfolder/test.txt','utf-8');

console.log(first);
console.log();
console.log(second);
console.log(readFileSync('./content/first.txt','utf-8'),readFileSync('./content/subfolder/test.txt','utf-8'));

//overwrite or creat the file in relevant path and store tha values
writeFileSync(
    './content/result-sync.txt',
    `Here is the resuult :${first}, ${second}`,
    {flag:'a'}
);
