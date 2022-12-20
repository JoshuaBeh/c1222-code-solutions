var $form = document.querySelector('form');

function handleSubmit(event) {
  event.preventDefault();
  var newObj = {};
  newObj.name = document.querySelector('input#user-name').value;
  newObj.email = document.querySelector('input#user-email').value;
  newObj.message = document.querySelector('textarea#user-message').value;
  console.log(newObj);
  $form.reset();
}

$form.addEventListener('submit', handleSubmit);
