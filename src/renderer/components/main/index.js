import React from 'react';

import { InitialConfig } from '../initial-config';
import { PlaylistInput } from '../playlist-input';

export class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <InitialConfig />
        <PlaylistInput />
      </div>
    );
  }
}
