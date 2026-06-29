const fs = require('fs');

const writeStream = fs.createWriteStream('large-file.txt');

for(let i=1;i<= 10000; i++){
    writeStream.write(`Line Number ${i} - Vivek is learning Streams in Node.js\n `);
}
writeStream.end();
writeStream.on('finish',()=>{
    console.log('Test file create ho gayi: large-file.txt');
});