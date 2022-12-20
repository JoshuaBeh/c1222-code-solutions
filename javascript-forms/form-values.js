var $form = document.querySelector('form');

function handleSubmit(event) {
  event.preventDefault();
  var newObj = {};
  newObj.name = $form.input.value;
  newObj.email = $form.input.value;
  newObj.message = $form.textarea.value;
  console.log(newObj);
  $form.reset();
}

$form.addEventListener('submit', handleSubmit);
