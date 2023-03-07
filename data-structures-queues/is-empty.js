/* exported isEmpty */

function isEmpty(queue) {
  // return Object.keys(queue.print()).length === 17;
  if (queue.peek() === undefined) {
    return true;
  }
  return false;
}
