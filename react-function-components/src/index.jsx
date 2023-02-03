import React from 'react';
import ReactDOM from 'react-dom/client';
const buttonStyle = {
  text: 'Click Me!',
  div: {
    display: 'flex',
    justifyContent: 'center'
  },
  classes: {
    width: '6rem',
    height: '2.5rem',
    border: '1px solid green',
    borderRadius: '5px',
    color: 'black',
    fontWeight: 'bold',
    backgroundColor: 'green'
  }
};

function CustomButton() {
  return (
    <div style={buttonStyle.div}>
      <button style={buttonStyle.classes}>
        {buttonStyle.text}
      </button>
    </div>
  );
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(CustomButton());
