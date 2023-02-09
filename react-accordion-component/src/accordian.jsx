import React, { useState } from 'react';

export default function Accordian({ items }) {

  return (
    <div className='row'>
      {items.map((item) => <ListItem key={item.language} item={item} />)}
    </div>
  );
}

function ListItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="item">
      <h1 onClick={() => setIsOpen(!isOpen)}>{item.language}</h1>
      <p className={isOpen ? '' : 'hidden'}>{item.description}</p>
    </div>
  );
}

// Below works as well.

// export default function Accordian({ items }) {
//   const [isOpen, setIsOpen] = useState('');

//   return (
//     <div className='row'>
//       <ListItems items={items} isOpen={isOpen} setIsOpen={setIsOpen} />
//     </div>
//   );
// }

// function randomColor() {
//   const classes = {
//     width: '25%',
//     backgroundColor: 'rgb(' + Math.floor(Math.random() * 255) +
//       ',' + Math.floor(Math.random() * 255) + ',' +
//       Math.floor(Math.random() * 255) + ')'
//   };
//   return classes;
// }

// function ListItems({ items, isOpen, onClick, setIsOpen }) {
//   return (
//     <>
//       {items.map((item) => (
//         <div key={item.language} style={randomColor()}>
//           <h1 onClick={() => isOpen === item.language ? setIsOpen('') : setIsOpen(item.language)}>{item.language}</h1>
//           <p className={`${isOpen === item.language ? '' : 'hidden'}`}>{item.description}</p>
//         </div>
//       ))}
//     </>
//   );
// }
