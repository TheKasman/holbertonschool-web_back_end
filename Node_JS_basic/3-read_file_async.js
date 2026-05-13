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

      let output = `Number of students: ${students.length}\n`;

      const fields = {};

      for (const row of students) {
        const parts = row.split(',');
        const firstname = parts[0];
        const field = parts[3];

        if (!fields[field]) fields[field] = [];
        fields[field].push(firstname);
      }

      for (const field of Object.keys(fields)) {
        output += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
      }

      resolve(output);
    });
  });
}

module.exports = countStudents;

