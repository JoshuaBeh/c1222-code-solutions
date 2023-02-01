const takeAChance = require('./take-a-chance');

const promiseObj = takeAChance('Joshua');

promiseObj.then((value) => {
  console.log(value);
},

(error) => {
  console.log(error.message);
});
