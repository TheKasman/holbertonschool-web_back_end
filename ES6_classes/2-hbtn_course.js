export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('name must be a name');
    }

    if (typeof length !== 'number') {
      throw new TypeError('length must be a number');
    }

    if (
      !Array.isArray(students)
      || !students.every((item) => typeof item === 'string')
    ) {
      throw new TypeError('studnets must be an array of strings');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(updatedName) {
    if (typeof updatedName !== 'string') {
      throw new TypeError('name must be a name');
    }

    this._name = updatedName;
  }

  get length() {
    return this._length;
  }

  set length(updatedLength) {
    if (typeof updatedLength !== 'number') {
      throw new TypeError('length must be a number');
    }
    this._length = updatedLength;
  }

  get students() {
    return this._students;
  }

  set students(updatedStudent) {
    if (
      !Array.isArray(updatedStudent)
    || !updatedStudent.every((item) => typeof item === 'string')
    ) {
      throw new TypeError('studnets must be an array of strings');
    }
    this._students = updatedStudent;
  }
}
