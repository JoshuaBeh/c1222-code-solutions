/* exported countValues */

function countValues(stack) {
  let i = 0;
  while (i < stack.print().length) {
    if (stack.peek() === undefined) {
      return i;
    }
    stack.pop();
    i++;
  }
  return i;
}
