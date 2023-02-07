import React, { useState } from 'react';

export default function StopWatch() {
  const switchClasses = {
    play: {
      icon: 'fa-play'
    },
    pause: {
      icon: 'fa-pause'
    },
    count: 0
  };
  const [toggle, setToggle] = useState(false);
  const [time, setTime] = useState(0);
  function handlePlayClick() {
    const currentToggle = !toggle;
    setToggle(currentToggle);
    if (currentToggle) {
      setInterval(() => {
        setTime(time + 1);
      }, 1000);
    }
  }

  const classes = switchClasses[toggle ? 'pause' : 'play'];
  return (
    <div className='row'>
      <button>{time}</button>
      <div>
        <i onClick={handlePlayClick} className={`fa-solid ${classes.icon}`}></i>
      </div>
    </div>
  );
}
