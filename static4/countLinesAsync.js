const fs = require('fs');
const path = './test.txt';

// fs.readFile function takes a `callback` that will be invoked once the file 
// has been fully read
fs.readFile(path, 'utf8', (err, data) => {
  // err can happen: like permission issues, etc
  if (err) {
    console.log(err?.message);
  } else {
    const lines = data.split('\n');
    console.log(`Number of lines: ${lines.length}`);
    console.log(lines); // Array containing lines
  }
});