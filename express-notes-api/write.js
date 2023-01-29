const fs = require('fs');

function write(path, data) {
  fs.writeFile(path, JSON.stringify(data, null, 2), (err) => {
    if (err) {
      console.error('Error when writing', err);
    }
  });
}
module.exports = write;
