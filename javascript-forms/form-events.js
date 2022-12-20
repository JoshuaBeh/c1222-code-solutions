function handleFocus(event) {
  console.log('focus fired');
  console.log(event.target.name);
}

function handleBlur(event) {
  console.log('blur fired');
  console.log(event.target.name);
}

function handleInput(event) {
  console.log(event.target.name, event.target.value);
}

var $userName = document.querySelector('input#user-name');
var $userEmail = document.querySelector('input#user-email');
var $userMessage = document.querySelector('textarea#user-message');

$userName.addEventListener('focus', handleFocus);
$userEmail.addEventListener('blur', handleBlur);
$userMessage.addEventListener('input', handleInput);
