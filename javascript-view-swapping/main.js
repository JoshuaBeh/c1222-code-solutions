var $tabContainer = document.querySelector('.tab-container');
var $tabList = document.querySelectorAll('.tab');
var $viewList = document.querySelectorAll('.view');

function clickHandler(event) {
  if (event.target && event.target.matches('.tab')) {
    for (var i = 0; i < $tabList.length; i++) {
      if ($tabList[i] === event.target) {
        $tabList[i].classList.add('active');
      } else {
        $tabList[i].classList.remove('active');
      }
    }
    var dataViewAttributeValue = event.target.getAttribute('data-view');
    for (var j = 0; j < $viewList.length; j++) {
      if ($viewList[j].getAttribute('data-view') === dataViewAttributeValue) {
        $viewList[j].classList.remove('hidden');
      } else {
        $viewList[j].classList.add('hidden');
      }
    }
  }
}
$tabContainer.addEventListener('click', clickHandler);
