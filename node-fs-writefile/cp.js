const fs = require('fs');
const arg2 = process.argv[2];
const copyFile = 'copy-of-' + arg2;

fs.readFile(arg2, 'utf8', (err, data) => {
  if (err) throw err;
  fs.writeFile(copyFile, data, (err) => {
    if (err) throw err;
  });
});
