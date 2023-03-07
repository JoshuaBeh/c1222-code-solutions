/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  if (stack.peek() === undefined) {
    return;
  }
  const second = stack.pop();
  stack.push(value);
  stack.push(second);
}
