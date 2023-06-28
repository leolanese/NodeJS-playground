const fs = require('fs');
const rl = require('readline');

async function countLines(filePath) {
  let lineCount = 0;

  const rdi = rl.createInterface({
    input: fs.createReadStream(filePath),
   // crlfDelay: Infinity
  });

  // for await...of
  // to Iterating over async iterables
  for await (const line of rdi) {
    console.log(line)
    lineCount++;
  }

  console.log(`Number of lines: ${lineCount}`);
}

const filePath = './test.txt';
countLines(filePath).catch(console.error);


// if we're dealing with very LARGE FILE. 
// `we might want to read the file in 'chunks' parts and count the lines as you go`