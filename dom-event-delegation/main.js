var $taskList = document.querySelector('.task-list');

function clickHandler(event) {
  console.log('ev-target:', event.target);
  console.log('ev-tagName:', event.target.tagName);
  var $closestTaskItem = event.target.closest('.task-list-item');
  console.log('ev-target-closest:', $closestTaskItem);
  if (event.target && event.target.matches('button')) {
    $closestTaskItem.remove();
  }
}

$taskList.addEventListener('click', clickHandler);
