import React, { useState } from 'react';

let intervalId;
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

  const [toggle, setToggle] = useState(false);
  let [time, setTime] = useState(0);
  function handlePlayClick() {
    clearInterval(intervalId);
    const currentToggle = !toggle;
    setToggle(currentToggle);
    if (currentToggle) {
      intervalId = setInterval(() => {
        setTime(time++);
      }, 1000);
    }
  }

  function handleButtonClick() {
    setTime(0);
    clearInterval(intervalId);
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
