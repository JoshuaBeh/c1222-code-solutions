/* exported postpone */

function postpone(queue) {
  const front = queue.peek();
  if (front === undefined) {
    return;
  }
  queue.dequeue();
  queue.enqueue(front);
}
