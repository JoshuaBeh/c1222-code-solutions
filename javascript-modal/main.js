var $modalButton = document.querySelector('button.modal-button');
var $divPopUp = document.querySelector('div.pop-up');
var $noButton = document.querySelector('button.no-button');
var $container = document.querySelector('div.container');
function clickModalHandler(event) {
  $divPopUp.classList.remove('display-none');
  $modalButton.classList.add('z-index-neg');
  $container.classList.add('pop-up-background');
}
$modalButton.addEventListener('click', clickModalHandler);

function clickNoHandler(event) {
  $divPopUp.classList.add('display-none');
  $modalButton.classList.remove('z-index-neg');
  $container.classList.remove('pop-up-background');
}
$noButton.addEventListener('click', clickNoHandler);
