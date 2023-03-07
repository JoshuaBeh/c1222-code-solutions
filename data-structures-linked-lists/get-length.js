/* exported getLength */

function getLength(list) {
  let currentNode = list;
  let length = 0;
  while (currentNode) {
    length++;
    currentNode = currentNode.next;
  }
  return length;
}
