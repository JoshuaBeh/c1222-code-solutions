/* exported todos */

var todos = [];
var previousTodosJSON = window.localStorage.getItem('javascript-local-storage');

todos = JSON.parse(previousTodosJSON);

function beforeunloadHandler(event) {
  var todosJSON = JSON.stringify(todos);
  window.localStorage.setItem('javascript-local-storage', todosJSON);
}
window.addEventListener('beforeunload', beforeunloadHandler);
