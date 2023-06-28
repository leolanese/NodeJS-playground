const fs = require('fs');
 // using readLine module, which handles files asynchronously and is designed to read line by line:
const readLine = require('readline');
const path = './test.txt';

let lineCount = 0;

// Create a readLineInterface object using the readLine.createInterface() method
const readLineInterface = readLine.createInterface({
  input: fs.createReadStream(path),
  // crlfDelay: We set it to Infinity to ensure that the readLineInterface doesn't 
  // treat any line-ending character (CR, LF, or CRLF) as an end-of-line marker. 
  // make it consistent across SO
  crlfDelay: Infinity
});

// Attach an event listener for the 'line'
readLineInterface.on('line', function(line) {
  lineCount++;
});

// Attach an event listener for the 'close'
readLineInterface.on('close', function() {
  console.log(`Number of lines: ${lineCount}`);
});

// The `callback function` will be executed when the file reading is complete