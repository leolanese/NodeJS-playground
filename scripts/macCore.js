const { exec } = require('child_process');

exec('sysctl -n machdep.cpu.brand_string', (err, stdout, stderr) => {
    if (err) {
        // There was an error!
        console.error(err);
    } else {
        // The 'sw_vers' command completed successfully
        console.log(stdout);
    }
});
