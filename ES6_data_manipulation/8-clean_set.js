export default function cleanSet(set, startString) {
  const list = [];

  for (const value of set) {
    if (value.startsWith(startString)) {
      list.push(value.slice(startString.length)); 
    }
  }
  return list.join("-");
}
