const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');
const arg = process.argv;
for (let i = 3; i < arg.length; i += 3) {
  const x = Number(arg[i - 1]);
  const y = Number(arg[i + 1]);
  if (arg[i] === 'plus') {
    console.log('Addition result: ', add(x, y));
  } else if (arg[i] === 'minus') {
    console.log('Subtraction result: ', subtract(x, y));
  } else if (arg[i] === 'times') {
    console.log('Multiplication result: ', multiply(x, y));
  } else if (arg[i] === 'over') {
    console.log('Division result: ', divide(x, y));
  }
}
