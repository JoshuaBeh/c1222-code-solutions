module.exports = function deleteEntry(app, data, path, fs, writeForDelete) {
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
    writeForDelete(path, data);
    if (!fs.existsSync(path)) {
      const wrongFile = { error: 'An unexpected error occured.' };
      res.status(500).json(wrongFile);
      return;
    }
    res.sendStatus(204);
  });
};
