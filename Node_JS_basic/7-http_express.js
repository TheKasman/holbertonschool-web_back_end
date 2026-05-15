const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;
const dbFile = process.argv[2];

app.get('/', (req, res) => {
  res.type('text');
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(dbFile)
    .then((output) => {
      res.type('text');
      res.send(`This is the list of our students\n${output}`);
    })
    .catch(() => {
      res.type('text');
      res.send('This is the list of our students\nCannot load the database');
    });
});

app.listen(port, () => {
  console.log(`Server is now listening on ${port}`);
});

module.exports = app;
