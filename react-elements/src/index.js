import React from 'react';
import * as ReactDOM from 'react-dom';

const create = React.createElement(
  'h1',
  null,
  'Hello, React!'
);
console.log(create);

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(create);
