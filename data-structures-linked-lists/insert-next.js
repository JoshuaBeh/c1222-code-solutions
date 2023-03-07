/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  const second = list.next;
  const newList = new LinkedList(value);
  list.next = newList;
  list.next.next = second;
  return newList;
  // const first = list.data;
  // const last = list.next;
  // const newList = new LinkedList(first);
  // const temp = new LinkedList(value);
  // newList.next = temp;
  // newList.next.next = last;
  // return newList;
}
