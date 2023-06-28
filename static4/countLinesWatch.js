const fs = require('fs');
const readline = require('readline');

let lineCount = 0;
let timer = null;
const path = './test.txt';

const countLines = (path) => {
  lineCount = 0; // reset line count

  const reader = readline.createInterface({
    input: fs.createReadStream(path),
    crlfDelay: Infinity
  });

  reader.on('line', (line) => {
    lineCount++;
  });

  reader.on('close', () => {
    console.log(`Number of lines: ${lineCount}`);
  });
}

// initial line count
countLines(path);

// Watch for changes
fs.watch(path, (event, filename) => {
  if (event === 'change') {
    if (timer) {
      clearTimeout(timer); // clear the timer if it's already set
    }
    timer = setTimeout(() => {
      console.log('File changed, recounting...');
      countLines(path);
    }, 1000); // delay of 1 second
  }
});
