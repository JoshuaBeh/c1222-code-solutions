import React, { useState } from 'react';

export default function ToggleSwitch() {
  const switchClasses = {
    text: 'OFF',
    circle: 'circle',
    boxBackground: 'grey',
    off: ''
  };

  const [toggle, setToggle] = useState(false);
  function handleClick() {
    setToggle(!toggle);
  }

  function checkToggle() {
    if (toggle) {
      switchClasses.text = 'ON';
      switchClasses.toggle = 'on';
      switchClasses.boxBackground = 'on-background';
    } else {
      switchClasses.text = 'OFF';
      switchClasses.toggle = '';
      switchClasses.boxBackground = 'off-background';
    }
  }
  checkToggle();

  return (
    <div className='row'>
      <div className={`box margin-right-20 ${switchClasses.boxBackground}`} onClick={handleClick}>
        <div className={`${switchClasses.circle} ${switchClasses.toggle}`}></div>
      </div>
      <h3>{switchClasses.text}</h3>
    </div>
  );
}
