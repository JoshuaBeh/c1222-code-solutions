import React, { useState } from 'react';

export default function AppDrawer() {
  const [isHidden, setIsHidden] = useState(true);
  const [curImg, setCurImg] = useState('');

  const games = {
    hidden: {
      popUpBackground: '',
      left: 'left'
    },
    shown: {
      popUpBackground: 'pop-up-background',
      left: 'right'
    }
  };

  function selectGame(input) {
    setCurImg(input);
    setIsHidden(!isHidden);
  }

  function popUpMenu() {
    setIsHidden(!isHidden);
  }

  function backgroundClose() {
    setIsHidden(!isHidden);
  }

  const { popUpBackground, left } = games[!isHidden ? 'shown' : 'hidden'];
  return (
    <div className={`container ${curImg}`}>
      <div className={popUpBackground} onClick={backgroundClose}></div>
      <div className='relative'>
        <div className='absolute'>
          <i className='fa-solid fa-bars' onClick={popUpMenu}></i>
        </div>
        <div className={`absolute menu row ${left}`}>
          <h1>Choose a Game</h1>
          <a onClick={() => selectGame('eft')}>Escape from Tarkov</a>
          <a onClick={() => selectGame('lol')}>League of Legends</a>
          <a onClick={() => selectGame('halo')}>Halo</a>
          <a onClick={() => selectGame('ter')}>Terraria</a>
        </div>
      </div>
      <div className='pop-up'></div>
    </div>
  );
}
