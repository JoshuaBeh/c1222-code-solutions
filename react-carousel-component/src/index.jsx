import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel';

const images = [
  {
    id: 0,
    src: '../images/bulbasaur.png'
  },
  {
    id: 1,
    src: '../images/charmander.png'
  },
  {
    id: 2,
    src: '../images/jigglypuff.png'
  },
  {
    id: 3,
    src: '../images/pikachu.png'
  },
  {
    id: 4,
    src: '../images/squirtle.png'
  }
];

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<Carousel images={images}/>);
