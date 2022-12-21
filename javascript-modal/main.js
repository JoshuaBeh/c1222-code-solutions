var $modalButton = document.querySelector('button.modal-button');
var $divPopUp = document.querySelector('div.pop-up');
var $noButton = document.querySelector('button.no-button');
function clickModalHandler(event) {
  $divPopUp.classList.remove('display-none');
}
$modalButton.addEventListener('click', clickModalHandler);

function clickNoHandler(event) {
  $divPopUp.classList.add('display-none');
}
$noButton.addEventListener('click', clickNoHandler);
