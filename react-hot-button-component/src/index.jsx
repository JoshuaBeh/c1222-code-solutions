import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const buttonStyle = {
  color: 'blue'
};

function HotButton() {
  const [index, setIndex] = useState(0);
  function handleClick() {
    const newIndex = index + 1;
    setIndex(newIndex);
    if (newIndex < 3) {
      buttonStyle.color = 'blue';
    } else if (newIndex < 6) {
      buttonStyle.color = 'purple';
    } else if (newIndex < 9) {
      buttonStyle.color = 'light-purple';
    } else if (newIndex < 12) {
      buttonStyle.color = 'peach';
    } else if (newIndex < 15) {
      buttonStyle.color = 'orange';
    } else if (newIndex < 18) {
      buttonStyle.color = 'yellow';
    } else if (newIndex >= 18) {
      buttonStyle.color = 'white';
    }
  }
  return (
    <div>
      <button onClick={handleClick} className={buttonStyle.color}>Hot Button</button>
    </div>
  );
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<HotButton />);
