const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(req, res) {
    const dbFile = process.argv[2];

    readDatabase(dbFile)
      .then((data) => {
        const fields = Object.keys(data).sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));

        let response = 'This is the list of our students';

        for (const field of fields) {
          const list = data[field];
          response += `\nNumber of students in ${field}: ${list.length}. List: ${list.join(', ')}`;
        }

        res.status(200).send(response);
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    const dbFile = process.argv[2];
    const { major } = req.params;

    readDatabase(dbFile)
      .then((data) => {
        if (!data[major]) {
          res.status(500).send('Major parameter must be CS or SWE');
          return;
        }

        const list = data[major];
        const response = `List: ${list.join(', ')}`;
        res.status(200).send(response);
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }
}

module.exports = StudentsController;
