/* exported maxValue */

function maxValue(stack) {
  if (stack.peek() === undefined) {
    return -Infinity;
  }
  let biggest = stack.peek();
  for (let i = 0; i < Infinity; i++) {
    if (stack.peek() === undefined) {
      return biggest;
    }
    if (biggest <= stack.peek()) {
      biggest = stack.peek();
    }
    stack.pop();
  }
  return biggest;
}
