import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes'

console.log(`Initializing env: ${process.env.NODE_ENV}`)

ReactDOM.render(
  <Routes/>,
  document.getElementById('root')
);
