var count = 3;
const timer = () => {
  if (count === 0) {
    console.log('Blast off!');
    clearInterval(intervalID);
  } else {
    console.log(count);
    count--;
  }
};
const intervalID = setInterval(timer, 1000);
