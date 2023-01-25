const fs = require('fs');
const arg = process.argv[2];

fs.readFile(arg, 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
