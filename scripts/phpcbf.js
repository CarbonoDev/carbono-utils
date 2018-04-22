'use strict';

const spawn = require('cross-spawn');
let phpcs = spawn('./vendor/bin/phpcbf', ['./']);

phpcs.stdout.on('data', data => {
  console.log(`stdout: ${data}`);
});

phpcs.stderr.on('data', data => {
  console.log(`stderr: ${data}`);
});
phpcs.on('close', code => {
  process.exit(0);
});
phpcs.on('error', error => {
  console.log(error);
});
