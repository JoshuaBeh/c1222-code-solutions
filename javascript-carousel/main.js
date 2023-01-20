var images = [
  {
    id: 0,
    src: 'images/025.png'
  },
  {
    id: 1,
    src: 'images/004.png'
  },
  {
    id: 2,
    src: 'images/007.png'
  },
  {
    id: 3,
    src: 'images/001.png'
  },
  {
    id: 4,
    src: 'images/039.png'
  }
];

var currentId = 0;

var $buttonHolder = document.querySelector('#button-holder');
var buttonList = document.querySelectorAll('button');
var $img = document.querySelector('img');
var $rightArrow = document.querySelector('.fa-chevron-right');
var $leftArrow = document.querySelector('.fa-chevron-left');

function buttonClickHandler(event) {
  var $currentButton = event.target.closest('button');
  if (event.target && event.target.matches('button')) {
    for (var i = 0; i < images.length; i++) {
      if (images[i].id === Number($currentButton.id)) {
        $img.setAttribute('src', images[i].src);
        currentId = Number($currentButton.id);
        for (var j = 0; j < buttonList.length; j++) {
          if (buttonList[j].id !== $currentButton.id) {
            buttonList[j].classList.remove('black-background');
          } else {
            $currentButton.classList.add('black-background');
          }
        }
      }
    }
  }
  clearInterval(start);
  start = setInterval(interval, 3000);
  return currentId;
}
$buttonHolder.addEventListener('click', buttonClickHandler);

function rightArrowHandler(event) {
  currentId = currentId + 1;
  if (currentId === 5) {
    buttonList[4].classList.remove('black-background');
    buttonList[0].classList.add('black-background');
    $img.setAttribute('src', images[0].src);
    currentId = 0;
    return currentId;
  }
  for (var i = 0; i < images.length; i++) {
    if (images[i].id === currentId) {
      $img.setAttribute('src', images[i].src);
      for (var j = 0; j < buttonList.length; j++) {
        if (Number(buttonList[j].id) === currentId) {
          buttonList[j].classList.add('black-background');
        } else {
          buttonList[j].classList.remove('black-background');
        }
      }
    }
  }
  clearInterval(start);
  start = setInterval(interval, 3000);
  return currentId;
}
$rightArrow.addEventListener('click', rightArrowHandler);

function leftArrowHandler(event) {
  currentId = currentId - 1;
  if (currentId === -1) {
    buttonList[0].classList.remove('black-background');
    buttonList[4].classList.add('black-background');
    $img.setAttribute('src', images[4].src);
    currentId = 4;
    return currentId;
  }
  for (var i = 0; i < images.length; i++) {
    if (images[i].id === currentId) {
      $img.setAttribute('src', images[i].src);
      for (var j = 0; j < buttonList.length; j++) {
        if (Number(buttonList[j].id) === currentId) {
          buttonList[j].classList.add('black-background');
        } else {
          buttonList[j].classList.remove('black-background');
        }
      }
    }
  }
  clearInterval(start);
  start = setInterval(interval, 3000);
  return currentId;
}
$leftArrow.addEventListener('click', leftArrowHandler);

var start = setInterval(interval, 3000);
function interval() {
  if (currentId === -1) {
    buttonList[0].classList.remove('black-background');
    buttonList[4].classList.add('black-background');
    $img.setAttribute('src', images[4].src);
    currentId = 4;
  } else if (currentId === 5) {
    buttonList[4].classList.remove('black-background');
    buttonList[0].classList.add('black-background');
    $img.setAttribute('src', images[0].src);
    currentId = 0;
  }
  for (var i = 0; i < images.length; i++) {
    if (images[i].id === currentId) {
      $img.setAttribute('src', images[i].src);
      for (var j = 0; j < buttonList.length; j++) {
        if (Number(buttonList[j].id) === currentId) {
          buttonList[j].classList.add('black-background');
        } else {
          buttonList[j].classList.remove('black-background');
        }
      }
    }
  }
  currentId++;
  if (currentId === -1) {
    currentId = 4;
  } else if (currentId === 5) {
    currentId = 0;
  }
  return currentId;
}
