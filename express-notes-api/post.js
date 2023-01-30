module.exports = function post(app, data, path, fs, write) {
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
    if (!fs.existsSync(path)) {
      const wrongFile = { error: 'An unexpected error occured.' };
      res.status(500).json(wrongFile);
      return;
    }
    res.status(201).json(body);

  });
};
