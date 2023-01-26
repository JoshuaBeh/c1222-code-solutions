const fs = require('fs');
function write(data) {
  fs.writeFile('./data.json', JSON.stringify(data, null, 2), (err) => {
    if (err) {
      console.error(err);
    }
  });
}

module.exports = write;
