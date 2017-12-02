// Need both React and ReactDOM for the JSX transpiler.
import Store from 'electron-store';
import ReactDOM from 'react-dom';
import React from 'react';

import { Main } from './components/main';
import { SpotifyDownloader } from '../main/spotdl.js';

import './scss/main.scss';

const store = new Store();

window.spotifyDownloader = new SpotifyDownloader(store.get('python_binary'), store.get('spotdl_script'));

ReactDOM.render(
  <Main />,
  document.getElementById('app')
);
