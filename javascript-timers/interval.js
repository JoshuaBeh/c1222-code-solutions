var $countdown = document.querySelector('.countdown-display');
function number(number) {
  $countdown.textContent = number;
  var start = setInterval(timer, 1000);
  function timer() {
    if (number === 0) {
      $countdown.textContent = '~Earth Beeelooowwww Us~';
      clearInterval(start);
    } else {
      $countdown.textContent = number;
      number--;
    }
  }
}
number(5);
