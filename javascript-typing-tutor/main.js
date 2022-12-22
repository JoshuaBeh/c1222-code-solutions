var $span = document.querySelectorAll('span');
var u = 1;
var i = 0;
function keydownHandler(event) {
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
