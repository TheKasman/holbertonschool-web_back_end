export default function guardrail(mathFunction) {
  const queue = [];
  try {
    queue.push(mathFunction()); //Do the function, and if it fails throw an error
  } catch (error) {
    queue.push(error.toString());
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
