const fs = require("fs");

const readableStream = fs.createReadStream("large-file.txt");

const writableStream = fs.createWriteStream("large-file-copy.txt");

let totalBytesProcessed = 0;
let chunkCount = 0;

readableStream.on("data", (chunk) => {
  chunkCount++;
  totalBytesProcessed += chunk.length;
  console.log(
    `Chunk #${chunkCount} aaya - Size: ${chunk.length} bytes - Total abhi tak: ${totalBytesProcessed} bytes`,
  );

  // Manually chunk ko writable stream mein likh rahe hain
  writableStream.write(chunk);
});


// Jab readable stream poori file padh leti hai
readableStream.on('end', () => {
    console.log('\n--- Reading complete ---');
    console.log(`Total chunks processed: ${chunkCount}`);
    console.log(`Total bytes processed: ${totalBytesProcessed}`);
    
    writableStream.end(); // writable stream ko bhi signal de do ki ab kuch nahi aayega
});

// Jab writable stream ka kaam poora ho jaaye
writableStream.on('finish', () => {
    console.log('File copy ho gayi: large-file-copy.txt');
});

// Error handling - dono streams ke liye
readableStream.on('error', (err) => {
    console.error('Read error:', err.message);
});

writableStream.on('error', (err) => {
    console.error('Write error:', err.message);
});