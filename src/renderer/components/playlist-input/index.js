import React from 'react';

export class PlaylistInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlistUrl: '',
      submitDisabled: true,
      formProcessed: false
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
    this.setState({formProcessed: true});
    console.log('Should process playlist here: ' + this.state.playlistUrl);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} id="form-playlist-url" className={this.state.formProcessed ? 'm-40 slide-up' : 'm-40'}>
        <input type="text" value={this.state.playlistUrl} onChange={this.handleChange} placeholder="Enter Spotify playlist URL" className="mb-40 block full-width" />
        <input type="submit" value="Fetch this playlist" disabled={this.state.submitDisabled} className="bg-green fg-light block centered" />
      </form>
    );
  }
}
