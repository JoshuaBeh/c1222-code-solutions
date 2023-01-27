const express = require('express');
const app = express();

app.use(function (req, res) {
  res.send('<h1>Hello There!</h1>');
});

app.listen(3000, (err) => {
  if (err) {
    // eslint-disable-next-line no-console
    console.log('Something went wrong', err);
    return;
  }
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000.');
});
