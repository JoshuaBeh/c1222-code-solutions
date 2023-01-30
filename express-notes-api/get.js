function getId(app, data) {
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
}

function getList(app, data) {
  app.get('/api/notes', (req, res) => {
    const notesArr = [];
    for (const entry in data.notes) {
      notesArr.push(data.notes[entry]);
    }
    res.status(200).json(notesArr);
  });
}

module.exports = { getList, getId };
