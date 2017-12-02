import Store from 'electron-store';
import React from 'react';

const store = new Store();


export class InitialConfig extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pythonBinary: '',
      spotdlScript: '',
      submitDisabled: true,
      formProcessed: false
    };

    this.handleChangePython = this.handleChangePython.bind(this);
    this.handleChangeSpotdl = this.handleChangeSpotdl.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangePython(event) {
    let pythonBinary = event.target.value;
    let submitDisabled = !(pythonBinary && this.state.spotdlScript);
    this.setState({
      pythonBinary: pythonBinary,
      submitDisabled: submitDisabled
    });
  }

  handleChangeSpotdl(event) {
    let spotdlScript = event.target.value;
    let submitDisabled = !(spotdlScript && this.state.pythonBinary);
    this.setState({
      spotdlScript: spotdlScript,
      submitDisabled: submitDisabled
    });
  }

  handleSubmit(event) {
    this.setState({formProcessed: true});
    store.set('python_binary', this.state.pythonBinary);
    store.set('spotdl_script', this.state.spotdlScript);
    event.preventDefault();
  }

  render() {
    if (this.state.formProcessed || (store.get('python_binary') && store.get('spotdl_script'))) return null;
    return (
      <div id="initial-config">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.pythonBinary} onChange={this.handleChangePython} placeholder="Path to Python executable" className="mb-40 block full-width" />
          <input type="text" value={this.state.spotdlScript} onChange={this.handleChangeSpotdl} placeholder="Path top spotdl.py script" className="mb-40 block full-width" />
          <input type="submit" value="Save" disabled={this.state.submitDisabled} className="bg-green fg-light block centered" />
        </form>
      </div>
    );
  }
}
