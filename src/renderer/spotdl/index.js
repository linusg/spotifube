const { spawn } = require('child_process');

export class SpotifyDownloader {
  constructor(python, script) {
    this.python = python;
    this.script = script;
    this.args = [];
  }

  addArgument(name, argument) {
    this.args.push(name);
    if (argument)
      this.args.push(argument);
  }

  clearArguments() {
    this.args = [];
  }

  execute(outputCallback, errorCallback, exitCallback) {
    var args = this.args.slice();
    args.unshift(this.script);

    const process = spawn(this.python, args);

    console.log(`${this.python} ${args.join(' ')}`);

    if (outputCallback)
      process.stdout.on('data', (data) => {
        outputCallback(`${data}`);
      });

    if (errorCallback)
      process.stderr.on('data', (data) => {
        errorCallback(`${data}`);
      });

    if (exitCallback)
      process.on('exit', (code, signal) => {
        exitCallback(code, signal);
      });
  }
}
