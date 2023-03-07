/* exported removeNext */

function removeNext(list) {
  if (!list.next) {
    return undefined;
  }
  const third = list.next.next;
  list.next = third;
}
