import React from 'react';

import { Loader } from '../loader';

export class PlaylistInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlistUrl: '',
      resultMessage: '',
      fetchError: null,
      submitDisabled: true,
      formProcessed: false,
      playlistFetched: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let playlistUrl = event.target.value;
    let submitDisabled = playlistUrl === '';
    this.setState({
      playlistUrl: playlistUrl,
      submitDisabled: submitDisabled
    });
  }

  handleSubmit(event) {
    this.setState({formProcessed: true, fetchError: null});
    window.spotifyDownloader.addArgument('-p', this.state.playlistUrl);
    window.spotifyDownloader.execute(
      data => {
        this.setState({resultMessage: data});
      },
      console.error,
      (code, signal) => {
        if (code !== 0) {
          var resultMessage;
          if (code === 10) resultMessage = 'Invalid playlist URL!';
          if (code === 11) resultMessage = 'Unable to find playlist, make sure the playlist is set to publicly visible!';
          else resultMessage = 'Unknown error!';

          this.setState({
            playlistUrl: '',
            fetchError: true,
            resultMessage: resultMessage,
            submitDisabled: true,
            formProcessed: false,
            playlistFetched: false
          });
        } else {
          this.setState({playlistFetched: true, fetchError: false});
        }
      }
    );
    window.spotifyDownloader.clearArguments();
    event.preventDefault();
  }

  render() {
    return (
      <div id="fetch-playlist">
        <form onSubmit={this.handleSubmit} className={this.state.formProcessed ? 'm-40 slide-up' : 'm-40'}>
          <input type="text" value={this.state.playlistUrl} onChange={this.handleChange} placeholder="Enter Spotify playlist URL" className="mb-40 block full-width" />
          <input type="submit" value="Fetch this playlist" disabled={this.state.submitDisabled} className="bg-green fg-light block centered" />
        </form>
        <Loader visible={this.state.formProcessed && !this.state.playlistFetched} />
        {this.state.resultMessage !== '' && this.state.fetchError !== null &&
          <div id="fetch-playlist-result" class={this.state.fetchError ? 'error' : 'success'}>{this.state.resultMessage}</div>
        }
      </div>
    );
  }
}
