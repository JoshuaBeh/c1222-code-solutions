/* exported defaults */

/*  */
function defaults(target, source) {
  if (Object.keys(target).length === 0) {
    target = source;
  }
  for (var prop in source) {
    for (var key in target) {
      if (prop !== key && source[prop] !== target[key]) {
        target[prop] = source[prop];
      }
    }
  }
}
