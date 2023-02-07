import React, { useState } from 'react';

export default function StopWatch() {
  const switchClasses = {
    play: {
      icon: 'fa-play',
      playColor: 'green'
    },
    pause: {
      icon: 'fa-pause',
      playColor: 'red'
    },
    count: 0
  };

  let [start, setStart] = useState(null);
  const [toggle, setToggle] = useState(false);
  let [time, setTime] = useState(0);
  function handlePlayClick() {
    clearInterval(start);
    const currentToggle = !toggle;
    setToggle(currentToggle);
    if (currentToggle) {
      start = setInterval(() => {
        setTime(time++);
      }, 1000);
    }
    setStart(start);
  }

  function handleButtonClick() {
    setTime(0);
    clearInterval(start);
    setToggle(false);
  }

  const classes = switchClasses[toggle ? 'pause' : 'play'];
  return (
    <div className='row'>
      <button onClick={handleButtonClick}>{time}</button>
      <div>
        <i onClick={handlePlayClick} className={`fa-solid ${classes.icon} ${classes.playColor}`}></i>
      </div>
    </div>
  );
}
