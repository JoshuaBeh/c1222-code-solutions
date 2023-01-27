const express = require('express');
const app = express();
const middle = express.json();
let nextId = 1;
const grades = {};

app.get('/api/grades', (req, res, next) => {
  const gradesArr = [];
  for (const prop in grades) {
    gradesArr.push(grades[prop]);
  }
  res.json(gradesArr);
  next();
});

app.use(middle);

app.post('/api/grades', (req, res, next) => {
  const body = req.body;
  if (body.course === undefined || body.name === undefined || body.score === undefined) {
    res.sendStatus(404);
  } else {
    grades[nextId] = body;
    grades[nextId].id = nextId;
    nextId++;
    res.status(201).json(body);
  }
});

app.listen(3000, (err) => {
  if (err) {
    // eslint-disable-next-line no-console
    console.log('There was a problem', err);
    return;
  }
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});
