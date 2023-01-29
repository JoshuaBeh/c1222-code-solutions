const express = require('express');
const app = express();
const fs = require('fs');
const data = require('./data.json');
const write = require('./write');
const path = './data1.json';

app.use(express.json());

app.get('/api/notes/:id', (req, res) => {
  // Is this fine to use as well? const id = req.url.split('/')[3];
  const id = req.params.id;
  const selectedNote = data.notes[id];
  if (Number(id) < 0 || isNaN(id)) {
    const negativeId = { error: 'id must be a positive integer' };
    res.status(400).json(negativeId);
    return;
  } else if (selectedNote === undefined) {
    const notFound = { error: `cannot find note with id ${id}` };
    res.status(404).json(notFound);
    return;
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
    return;
  }
  const id = data.nextId;
  data.notes[id] = req.body;
  data.notes[id].id = id;
  data.nextId++;
  write(path, data);
  if (fs.existsSync(path) === false) {
    const wrongFile = { error: 'An unexpected error occured.' };
    res.status(500).json(wrongFile);
    return;
  }
  res.status(201).json(body);

});

app.delete('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  const selectedNote = data.notes[id];
  delete data.notes[id];
  if (Number(id) < 0 || isNaN(id)) {
    const negativeId = { error: 'id must be a positive integer' };
    res.status(400).json(negativeId);
    return;
  } else if (selectedNote === undefined) {
    const notFound = { error: `cannot find note with id ${id}` };
    res.status(404).json(notFound);
    return;
  }
  write(path, data);
  if (fs.existsSync(path) === false) {
    const wrongFile = { error: 'An unexpected error occured.' };
    res.status(500).json(wrongFile);
    return;
  }
  res.sendStatus(204);
});

app.put('/api/notes/:id', (req, res) => {
  const id = req.params.id;

  if (Number(id) < 0 || isNaN(id)) {
    const negativeId = { error: 'id must be a positive integer' };
    res.status(400).json(negativeId);
    return;
  } else if (req.body.content === undefined) {
    const notFound = { error: 'content is a required field' };
    res.status(400).json(notFound);
    return;
  } else if (data.notes[id] === undefined) {
    const notFound = { error: `cannot find note with id ${id}` };
    res.status(404).json(notFound);
    return;
  }
  data.notes[id].content = req.body.content;
  const selectedNote = data.notes[id];
  write(path, data);
  if (fs.existsSync(path) === false) {
    const wrongFile = { error: 'An unexpected error occured.' };
    res.status(500).json(wrongFile);
    return;
  }
  res.status(200).json(selectedNote);
});

app.listen(3000, (err) => {
  if (err) {
    console.error('Something went wrong', err);
  }
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});
