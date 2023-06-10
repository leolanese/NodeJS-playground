const { exec } = require('child_process');

exec('ps wwaxr -o pid,stat,%cpu,time,command | head -10', (err, stdout, stderr) => {
  if (err) {
    // There was an error!
    console.error(err);
  } else {
    // The command completed successfully, output to console
    console.log(stdout);
  }
});