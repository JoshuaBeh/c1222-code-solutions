const express = require('express');
const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};
const app = express();

app.get('/api/grades', (req, res, next) => {
  const gradesArray = [];
  for (const prop in grades) {
    gradesArray.push(grades[prop]);
  }
  res.json(gradesArray);
});

app.listen(3000, (err) => {
  if (err) {
    // eslint-disable-next-line no-console
    console.log('something went wrong', err);
    return;
  }
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});
