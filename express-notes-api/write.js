const fs = require('fs');

function write(path, data) {
  fs.readFile(path, 'utf-8', (err) => {
    if (err) {
      console.error(err);
      return;
    }
    fs.writeFile(path, JSON.stringify(data, null, 2), (err) => {
      if (err) {
        console.error('Error when writing', err);
      }
    });
  });
}
module.exports = write;
