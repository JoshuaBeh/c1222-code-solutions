const fs = require('fs');
const args = process.argv;

function readMe(arg) {
  fs.readFile(arg, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
}

for (var i = 2; i < args.length; i++) {
  readMe(args[i]);
}
