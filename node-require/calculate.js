const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');
const args = process.argv;

let result = 0;
const a = Number(args[2]);
const b = Number(args[4]);
if (args[3] === 'plus') {
  result = add(a, b);
} else if (args[3] === 'minus') {
  result = subtract(a, b);
} else if (args[3] === 'times') {
  result = multiply(a, b);
} else if (args[3] === 'over') {
  result = divide(a, b);
}

if (args.length === 3) {
  console.log('Result:', result);
} else {
  let x = result;
  if (args.length % 2 === 0) {
    args.pop();
  }
  for (let i = 5; i < args.length; i += 2) {
    const y = Number(args[i + 1]);
    if (args[i] === 'plus') {
      x = add(x, y);
    } else if (args[i] === 'minus') {
      x = subtract(x, y);
    } else if (args[i] === 'times') {
      x = multiply(x, y);
    } else if (args[i] === 'over') {
      x = divide(x, y);
    }
  }
  console.log('Result:', x);
}
