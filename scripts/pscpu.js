const { exec } = require('child_process');

exec('ps aux | sort -nr -k 3', (err, stdout, stderr) => {
  if (err) {
    // There was an error!
    console.error(err);
  } else {
    // The command completed successfully, output to console
    console.log(stdout);
  }
});