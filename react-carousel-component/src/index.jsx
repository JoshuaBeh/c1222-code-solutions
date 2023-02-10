import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel';

const images = [
  {
    id: 0,
    src: '../images/bulb.png'
  },
  {
    id: 1,
    src: '../images/char.png'
  },
  {
    id: 2,
    src: '../images/jiggly.png'
  },
  {
    id: 3,
    src: '../images/pika.png'
  },
  {
    id: 4,
    src: '../images/squirtle.png'
  }
];

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<Carousel images={images}/>);
