const fs = require('fs');

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      const studentsByField = {};
      const lines = data.trim().split('\n');
      const studentLines = lines.slice(1);
      studentLines.forEach((line) => {
        const parts = line.split(',');

        const [firstname, , , field] = parts;

        if (!studentsByField[field]) {
          studentsByField[field] = [];
        }
        studentsByField[field].push(firstname);
      });
      resolve(studentsByField);
    });
  });
}

module.exports = readDatabase;
