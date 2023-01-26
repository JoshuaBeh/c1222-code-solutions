const data = require('./data.json');
const write = require('./write');
const args = process.argv;
const arg2 = args[2];
const arg3 = args[3];
const arg4 = args[4];

function read() {
  for (const prop in data.notes) {
    console.log(`${prop}: ${data.notes[prop]}`);
  }
}

function create() {
  const currentId = data.nextId;
  data.notes[currentId] = arg3;
  data.nextId++;
  write(data);
  console.log('Successfully created entry!');
}

function deleteNote() {
  delete data.notes[arg3];
  write(data);
}

function update() {
  data.notes[arg3] = arg4;
  write(data);
}

if (arg2 === 'read') {
  read();
} else if (arg2 === 'create') {
  create();
} else if (arg2 === 'delete') {
  deleteNote();
} else if (arg2 === 'update') {
  update();
}
