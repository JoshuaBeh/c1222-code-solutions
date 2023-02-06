import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function HotButton() {
  const [index, setIndex] = useState(0);
  function handleClick() {
    const newIndex = index + 1;
    setIndex(newIndex);
  }

  let color = 'blue';
  function checkIndex() {
    if (index < 3) {
      color = 'blue';
    } else if (index < 6) {
      color = 'purple';
    } else if (index < 9) {
      color = 'light-purple';
    } else if (index < 12) {
      color = 'peach';
    } else if (index < 15) {
      color = 'orange';
    } else if (index < 18) {
      color = 'yellow';
    } else if (index >= 18) {
      color = 'white';
    }
  }
  checkIndex();

  return (
    <div>
      <button onClick={handleClick} className={color}>Hot Button</button>
    </div>
  );
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<HotButton />);
