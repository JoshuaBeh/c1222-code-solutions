/* exported swapFront */

function swapFront(list) {
  if (!list.next) {
    return list;
  }
  const first = list.data;
  const second = list.next.data;
  list.data = second;
  list.next.data = first;
  return list;
}

// const first = list.data;
// console.log(first);
// const second = list.next;
// list = second;
// console.log(list);
// list.next = first;
// console.log(list);
// return list.data;
