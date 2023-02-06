import React, { useState } from 'react';

export default function ToggleSwitch() {
  const switchClasses = {
    on: {
      text: 'ON',
      toggle: 'on',
      boxBackground: 'on-background'
    },
    off: {
      text: 'OFF',
      toggle: '',
      boxBackground: 'off-background'
    }
  };

  const [toggle, setToggle] = useState(false);
  function handleClick() {
    setToggle(!toggle);
  }

  const classes = switchClasses[toggle ? 'on' : 'off'];

  return (
    <div className='row'>
      <div className={`box margin-right-20 ${classes.boxBackground}`} onClick={handleClick}>
        <div className={`circle ${classes.toggle}`}></div>
      </div>
      <h3>{classes.text}</h3>
    </div>
  );
}
