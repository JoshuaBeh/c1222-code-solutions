var clicked = 0;
var $hotButton = document.querySelector('button.hot-button');
var $clickCount = document.querySelector('.click-count');

function handleClick(event) {
  clicked++;
  $clickCount.textContent = 'Clicks:' + ' ' + clicked;
  if (clicked < 4) {
    $hotButton.className = 'hot-button cold';
  } else if (clicked < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (clicked < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (clicked < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (clicked < 16) {
    $hotButton.className = 'hot-button hot';
  } else {
    $hotButton.className = 'hot-button nuclear';
  }
}

$hotButton.addEventListener('click', handleClick);
