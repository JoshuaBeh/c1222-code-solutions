var $span = document.querySelectorAll('h1 > span');
// eslint-disable-next-line no-unused-vars
var $accuracyLabel = document.querySelector('h2');
var $accuracy = document.querySelector('h2 > span');
var u = 1;
var i = 0;
var counter = 0;
function keydownHandler(event) {
  counter++;
  if (i === $span.length - 1) {
    // show accuracy header
    var accuracy = Math.round((30 / counter) * 100);
    $accuracy.textContent = accuracy + '%';
    // set class on span to appropriate for the score
    $span[i].classList.remove('border');
    $span[i].classList.remove('red');
  }
  if ($span[i].textContent === event.key) {
    $span[i].classList.add('green');
    $span[u].classList.add('border');
    $span[i].classList.remove('red');
    $span[i].classList.remove('border');
    i++;
    u++;
  } else {
    $span[i].classList.add('red');
  }
}
document.addEventListener('keydown', keydownHandler);
