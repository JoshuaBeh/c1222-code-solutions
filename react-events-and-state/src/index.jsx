import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function CustomButton() {
  const [isClicked, setIsClicked] = useState(false);
  function handleClick() {
    setIsClicked(!isClicked);
  }
  if (!isClicked) {
    return (
      <button onClick={handleClick}>
        Change Me
      </button>
    );
  } else {
    return (
      <button onClick={handleClick}>
        Changed!
      </button>
    );
  }
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<CustomButton />);
