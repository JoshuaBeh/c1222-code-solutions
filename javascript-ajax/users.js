function xmlTest() {
  var $users = document.querySelector('#user-list');
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    console.log(xhr.status);
    console.log(xhr.response);
    var response = xhr.response;
    for (var i = 0; i < response.length; i++) {
      var $newLi = document.createElement('li');
      $newLi.textContent = response[i].name;
      $users.appendChild($newLi);
    }
    return $users;
  });
  xhr.send();
}
xmlTest();
