import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const buttonStyle = {
  color: 'blue'
};

function HotButton() {
  const [index, setIndex] = useState(1);
  function handleClick() {
    setIndex(index + 1);
    if (index < 3) {
      buttonStyle.color = 'blue';
    } else if (index < 6) {
      buttonStyle.color = 'purple';
    } else if (index < 9) {
      buttonStyle.color = 'light-purple';
    } else if (index < 12) {
      buttonStyle.color = 'peach';
    } else if (index < 15) {
      buttonStyle.color = 'orange';
    } else if (index < 18) {
      buttonStyle.color = 'yellow';
    } else if (index >= 18) {
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
