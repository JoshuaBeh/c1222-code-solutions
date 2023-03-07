/* exported take2nd */

function take2nd(queue) {
  // if (queue.peek() === undefined) {
  //   return undefined;
  // }
  const front = queue.peek();
  if (front === undefined) {
    return;
  }
  queue.dequeue();
  queue.enqueue(front);
  return queue.peek();
}
