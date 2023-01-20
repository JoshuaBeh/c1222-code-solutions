var $circle = document.querySelector('div.circle');
var $body = document.querySelector('body');
var counter = 0;
function clickHandler(event) {
  counter++;
  if (counter % 2 !== 0) {
    $circle.className = 'new-circle';
    $body.className = 'new-bc';
  } else {
    $circle.className = 'circle';
    $body.className = '';
  }
}
$circle.addEventListener('click', clickHandler);
