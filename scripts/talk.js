const { exec } = require('child_process');

exec('say Your status has been updated to Urgent Assistance', (err, stdout, stderr) => {
  if (err) {
    // There was an error!
    console.error(err);
  } else {
    // The 'say' command completed successfully
    console.log(stdout);
  }
});