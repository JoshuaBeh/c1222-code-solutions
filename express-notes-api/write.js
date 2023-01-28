const fs = require('fs');
function write(data) {
  fs.writeFile('./data.json', JSON.stringify(data, null, 2), (err) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.log('Error when writing', err);
    }
  });
}
module.exports = write;
