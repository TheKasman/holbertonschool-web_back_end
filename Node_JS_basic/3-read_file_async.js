const fs = require('fs');

function countStudents(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data
        .trim()
        .split('\n')
        .filter((line) => line.trim() !== '');

      const students = lines.slice(1);
      const fields = {};

      for (const row of students) {
        const parts = row.split(',');
        const firstname = parts[0];
        const field = parts[3];

        if (!fields[field]) fields[field] = [];
        fields[field].push(firstname);
      }

      const outputLines = [];
      outputLines.push(`Number of students: ${students.length}`);
      for (const field of Object.keys(fields)) {
        outputLines.push(
          `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`,
        );
      }

      resolve(outputLines.join('\n'));
    });
  });
}

module.exports = countStudents;
