const fs = require('fs');
const path = require('path');

function countStudents(fileName) {
  const filePath = path.join(__dirname, fileName);

  try {
    const data = fs.readFileSync(filePath, 'utf8');
    const validStudents = data
      .split('\n')
      .slice(1)
      .filter((line) => line.trim() !== '');

    const fields = {};

    for (const row of validStudents) {
      const [, , , field] = row.split(',');

      if (!fields[field]) {
        fields[field] = [];
      }

      fields[field].push(row.split(',')[0]);
    }
    console.log(`Number of students: ${validStudents.length}`);
    for (const structure of Object.keys(fields)) {
      console.log(`Number of students in ${structure}: ${fields[structure].length}. List: ${fields[structure].join(', ')}`);
    }
  } catch (err) {
    console.error('Cannot load the database');
  }
}

module.exports = countStudents;
