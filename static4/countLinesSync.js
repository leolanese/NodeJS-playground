const fs = require('fs');
const path = './test.txt';

try {
  const data = fs.readFileSync(path, 'utf8');
  const lines = data.split('\n');
  console.log(`Number of lines: ${lines.length}`);
  console.log(lines); // Array containing lines
} catch (err) {
  console.log(err?.message);
}
