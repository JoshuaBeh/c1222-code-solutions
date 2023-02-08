import React, { useState } from 'react';

export default function AppDrawer() {
  const [isHidden, setIsHidden] = useState(true);

  const games = {
    hidden: {
      popUpBackground: '',
      left: 'left'
    },
    shown: {
      popUpBackground: 'pop-up-background',
      left: ''
    }
  };

  function popUpMenu() {
    setIsHidden(!isHidden);
  }

  function selectGame(event) {
    const closestGame = event.target.closest('a');
    if (closestGame) {
      setIsHidden(!isHidden);
    }
  }

  const classes = games[!isHidden ? 'shown' : 'hidden'];
  return (
    <div className='container'>
      <div className={classes.popUpBackground}></div>
      <div className='relative' onClick={selectGame}>
        <div className='absolute'>
          <i className='fa-solid fa-bars' onClick={popUpMenu}></i>
        </div>
        <div className={`absolute menu row ${classes.left}`}>
          <h1>Choose a Game</h1>
          <a>Escape from Tarkov</a>
          <a>League of Legends</a>
          <a>Halo</a>
          <a>Terraria</a>
        </div>
      </div>
      <div className='pop-up'></div>
    </div>
  );
}
