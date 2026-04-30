export default function getStudentsByLoc(list, city) {
  const result = list.filter(student => student.location === city);
  return result;
}
