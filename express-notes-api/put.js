module.exports = function put(app, data, path, fs, write) {
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
    if (!fs.existsSync(path)) {
      const wrongFile = { error: 'An unexpected error occured.' };
      res.status(500).json(wrongFile);
      return;
    }
    res.status(200).json(selectedNote);
  });
};
