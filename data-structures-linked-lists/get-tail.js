/* exported getTail */

function getTail(list) {
  let currentNode = list;
  while (currentNode) {
    if (!currentNode.next) {
      return currentNode.data;
    }
    currentNode = currentNode.next;
  }
}
