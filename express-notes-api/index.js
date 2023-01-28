const express = require('express');
const app = express();
const data = require('./data.json');
const write = require('./write');

app.use(express.json());

app.get('/api/notes/:id', (req, res) => {
  // const id = req.url.split('/')[3];
  const id = req.params.id;
  const selectedNote = data.notes[id];
  if (Number(id) < 0 || isNaN(id)) {
    const negativeId = { error: 'id must be a positive integer' };
    res.status(400).json(negativeId);
  } else if (selectedNote === undefined) {
    const notFound = { error: `cannot find note with id ${id}` };
    res.status(404).json(notFound);
  }
  res.status(200).json(selectedNote);
});

app.get('/api/notes', (req, res) => {
  const notesArr = [];
  for (const entry in data.notes) {
    notesArr.push(data.notes[entry]);
  }
  res.status(200).json(notesArr);
});

app.post('/api/notes', (req, res) => {
  const body = req.body;
  if (body.content === undefined) {
    const notFound = { error: 'content is a required field' };
    res.status(400).json(notFound);
  } else {
    const id = data.nextId;
    data.notes[id] = req.body;
    data.notes[id].id = id;
    data.nextId++;
    write(data);
    res.status(201).json(body);
  }
});

app.listen(3000, (err) => {
  if (err) {
    // eslint-disable-next-line no-console
    console.log('Something went wrong', err);
  }
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});
