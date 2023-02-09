import React, { useState } from 'react';

export default function Accordian({ items }) {
  const [isOpen, setIsOpen] = useState('');

  return (
    <div className='row'>
      <ListItems items={items} isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

function randomColor() {
  const classes = {
    width: '25%',
    backgroundColor: 'rgb(' + Math.floor(Math.random() * 255) +
      ',' + Math.floor(Math.random() * 255) + ',' +
      Math.floor(Math.random() * 255) + ')'
  };
  return classes;
}

function ListItems({ items, isOpen, onClick, setIsOpen }) {
  return (
    <>
      {items.map((item) => (
        <div key={item.language} style={randomColor()}>
          <h1 onClick={() => isOpen === item.language ? setIsOpen('') : setIsOpen(item.language)}>{item.language}</h1>
          <p className={`${isOpen === item.language ? '' : 'hidden'} ${item.language.split(' ').join('-').toLowerCase()}`}>{item.description}</p>
        </div>
      ))}
    </>
  );
}
