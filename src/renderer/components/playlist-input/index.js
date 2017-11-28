import React from 'react';

export class PlaylistInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlistUrl: '',
      submitDisabled: true
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
    alert('Should process playlist here: ' + this.state.playlistUrl);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="m-40">
        <input type="text" value={this.state.playlistUrl} onChange={this.handleChange} placeholder="Enter Spotify playlist URL" className="mb-20 block full-width" />
        <input type="submit" value="Fetch" disabled={this.state.submitDisabled} className="bg-green fg-light block centered" />
      </form>
    );
  }
}
