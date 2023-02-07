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

  const [start, setStart] = useState();
  const [time, setTime] = useState(0);

  function tick() {
    setTime((prev) => prev + 1);
  }

  function handlePlayClick() {
    if (start) {
      clearInterval(start);
      setStart(undefined);
    } else {
      const newTimer = setInterval(tick, 1000);
      setStart(newTimer);
    }
  }

  function handleButtonClick() {
    setTime(0);
    clearInterval(start);
    setStart(undefined);
  }

  const classes = switchClasses[start ? 'pause' : 'play'];
  return (
    <div className='row'>
      <button onClick={handleButtonClick}>{time}</button>
      <div>
        <i onClick={handlePlayClick} className={`fa-solid ${classes.icon} ${classes.playColor}`}></i>
      </div>
    </div>
  );
}
