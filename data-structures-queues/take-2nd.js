/* exported take2nd */

function take2nd(queue) {
  const front = queue.peek();
  if (front === undefined) {
    return;
  }
  queue.enqueue(front);
  queue.dequeue();
  return queue.dequeue();
}
