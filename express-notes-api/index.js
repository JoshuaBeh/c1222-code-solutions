const express = require('express');
const app = express();
const fs = require('fs');
const data = require('./data.json');
const { getList, getId } = require('./get.js');
const { write, writeForDelete } = require('./write');
const post = require('./post.js');
const put = require('./put.js');
const deleteEntry = require('./delete.js');
const path = './data.json';

app.use(express.json());

getId(app, data);

getList(app, data);

post(app, data, path, fs, write);

deleteEntry(app, data, path, fs, writeForDelete);

put(app, data, path, fs, write);

app.listen(3000, (err) => {
  if (err) {
    console.error('Something went wrong', err);
  }
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});
