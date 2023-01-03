var $span = document.querySelectorAll('h1 > span');
var $accuracyLabel = document.querySelector('h2');
var $accuracy = document.querySelector('h2 > span');
var $how = document.querySelector('#how');
var u = 1;
var i = 0;
var counter = 0;
function keydownHandler(event) {
  counter++;
  if (i === $span.length - 1) {
    $accuracyLabel.classList.remove('hidden');
    var accuracy = Math.round((30 / counter) * 100);
    $accuracy.textContent = accuracy + '%';
    $span[i].classList.remove('border');
    $span[i].classList.remove('red');
    if (accuracy < 80 && accuracy > 40) {
      $accuracy.className = 'yellow';
    } else if (accuracy < 40 && accuracy > 11) {
      $accuracy.className = 'red-2';
    } else if (accuracy < 11) {
      $accuracy.className = 'how-color';
      $how.textContent = '\u2190 How did this happen?';
    }
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
