const express = require('express');
const path = require('path');
const app = express();
path.join(__dirname, 'public');

const options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html'],
  index: false,
  maxAge: '1d',
  redirect: false
};

app.use(express.static('public', options));

app.listen(3000, (err) => {
  if (err) {
    console.error('Something went wrong', err);
  } else {
    console.log('Listening on port 3000');
  }
});
