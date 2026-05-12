const fs = require('fs');
const path = require('path');

function countStudents(fileName) {
  const filePath = path.join(__dirname, fileName);

  try {
    const data = fs.readFileSync(filePath, 'utf8');
    const students = data.trim().split('\n').slice(1);

    const fields = {};

    for (const row of students) {
      const [, , , field] = row.split(',');

      if (!fields[field]) {
        fields[field] = [];
      }

      fields[field].push(row.split(',')[0]);
    }
    console.log(`Number of students: ${students.length}`);
    for (structure in fields) {
    console.log(`Number of students in ${structure}: ${fields[structure].length}. List: ${fields[structure].join(', ')}`);
    }

  } catch (err) {
    console.error('Cannot load the database');
  }
}

module.exports = countStudents;
