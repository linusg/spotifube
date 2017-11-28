// Need both React and ReactDOM for the JSX transpiler.
import ReactDOM from 'react-dom';
import React from 'react';

import Main from './components/main';

import './scss/main.scss';

ReactDOM.render(
  <Main />,
  document.getElementById('app')
);
