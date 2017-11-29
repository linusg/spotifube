// Need both React and ReactDOM for the JSX transpiler.
import ReactDOM from 'react-dom';
import React from 'react';

import { Main } from './components/main';
import { SpotifyDownloader } from './spotdl';

import './scss/main.scss';

window.spotifyDownloader = new SpotifyDownloader('/home/linus/.virtualenvs/spotdl/bin/python', '/home/linus/spotify-downloader/spotdl.py');

ReactDOM.render(
  <Main />,
  document.getElementById('app')
);
