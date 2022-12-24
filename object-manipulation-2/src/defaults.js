/* exported defaults */

/* - Check if the given target object's length is eaqual to 0, if it is,
     set the target object equal to the source object
   - Use a for in loop, and at each iteration, check if the target object has
     the source object's property
   - If it does not, set the target object's property equal to the source object's
     property and set the value equal to the source object's property value */

function defaults(target, source) {
  if (Object.keys(target).length === 0) {
    Object.assign(target, source);
  }

  for (var prop in source) {
    if (Object.hasOwn(target, prop) === false) {
      target[prop] = source[prop];
    }
  }
}

// eslint-disable-next-line no-unused-vars
function defaults2(target, source) {
  var propArr = [];
  var keyArr = [];
  var tempVariable = '';
  var nullString = 'null';
  for (var prop in source) {
    tempVariable = prop;
    propArr.push(tempVariable);
    tempVariable = '';
    propArr.push(source[prop]);
  }

  for (var key in target) {
    tempVariable = key;
    keyArr.push(tempVariable);
    tempVariable = '';
    if (target[key] === null) {
      keyArr.push(nullString);
    } else {
      keyArr.push(target[key]);
    }
  }

  if (keyArr.length === 0) {
    Object.assign(target, source);
  }

  for (var i = 0; i < propArr.length; i += 2) {
    for (var j = 0; j < keyArr.length; j += 2) {
      if (keyArr[j] === 'null') {
        target[propArr[i]] = null;
      } else if (propArr[i] !== keyArr[j]) {
        target[propArr[i]] = propArr[i + 1];
      }
    }
  }
}
